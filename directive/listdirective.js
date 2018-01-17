myApp.directive('gameOfThrones', function(){
	return{

		restrict:'E',
		templateUrl:'views/gottemplate.html',
		replace:true,
		scope:{
			name:'@',
			counter:'@'
		},
		link:function(scope, element, attrs){
			var match = scope.name.match(/House|character|Book/g);

			if (match[0] === 'Book') {
				element.css({'color':'#D4AF37'});
			}if (match[0] === 'character') {
				element.css({'color':'#6666FF'});
			}if (match[0] === 'House') {
				element.css({'color':'#D13919'});
			}

		}
	}
});