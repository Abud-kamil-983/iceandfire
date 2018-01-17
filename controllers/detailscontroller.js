myApp.controller('DetailsController', ['$http','$q', '$routeParams' , function($http, $q, $routeParams){
	var main = this;
	this.getDetails = function(){
		var promise1 = $http({method: 'GET', url: 'https://www.anapioficeandfire.com/api/books', cache: 'true'});
		var promise2 = $http({method: 'GET', url: 'https://www.anapioficeandfire.com/api/characters', cache: 'true'});
		var promise3 = $http({method: 'GET', url: 'https://www.anapioficeandfire.com/api/houses', cache: 'true'});

		$q.all([promise1, promise2, promise3]).then(function(data){
			main.gotList = data[0].data.concat(data[1].data, data[2].data);

			main.index = $routeParams.counter;
			console.log(main.gotList[main.index]);
			if (main.gotList[main.index].characters != undefined) {
				var char = [];
				for(var i in main.gotList[main.index].characters){
					$http({method: 'GET', url: main.gotList[main.index].characters[i]}).then(function(res){
						char.push(res.data.name);
					});
				}
				main.chars = char;
			}
			if (main.gotList[main.index].books != undefined) {
				var buk = [];
				for(var i in main.gotList[main.index].books){
					$http({method: 'GET', url: main.gotList[main.index].books[i]}).then(function(res){
						buk.push(res.data.name);
					});
				}
				main.buks = buk;
			}
			if (main.gotList[main.index].swornMembers != undefined) {
				var mem = [];
				for(var i in main.gotList[main.index].swornMembers){
					$http({method: 'GET', url: main.gotList[main.index].swornMembers[i]}).then(function(res){
						mem.push(res.data.name);
					});
				}
				main.swornMembers = mem;
			}
			if (main.gotList[main.index].currentLord != undefined) {
				$http({method: 'GET', url: main.gotList[main.index].currentLord}).then(function(res){
					main.currentLord = res.data.name;
				});
			}
			if (main.gotList[main.index].heir != undefined) {
				$http({method: 'GET', url: main.gotList[main.index].heir}).then(function(res){
					main.heir = res.data.name;
				});
			}
			if (main.gotList[main.index].overlord != undefined) {
				$http({method: 'GET', url: main.gotList[main.index].overlord}).then(function(res){
					main.overlord = res.data.name;
				});
			}

		},
		function(error) {
			main.error = error.data;
		});
	};

}]);