myApp.controller('ListController', ['$http','$q' , function($http, $q){
	var main = this;
	this.getAllList = function(){
		var promise1 = $http({method: 'GET', url: 'https://www.anapioficeandfire.com/api/books', cache: 'true'});
		var promise2 = $http({method: 'GET', url: 'https://www.anapioficeandfire.com/api/characters', cache: 'true'});
		var promise3 = $http({method: 'GET', url: 'https://www.anapioficeandfire.com/api/houses', cache: 'true'});

		$q.all([promise1, promise2, promise3]).then(function(data){
			main.gotList = data[0].data.concat(data[1].data, data[2].data);
			for (var i in data[0].data) {
				data[0].data[i].name = data[0].data[i].name+'(Book)';	
			}
			for (var i in data[1].data) {
				data[1].data[i].name = data[1].data[i].aliases[0]+'(character)';	
			}
			for (var i in data[2].data) {
				data[2].data[i].name = data[2].data[i].name+'(house)';	
			}
		},
		function(error) {
			main.error = error.data;
		});
	};

}]);