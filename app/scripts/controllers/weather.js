'use strict';

app.controller('NeighborhoodController', function($scope, $firebase) {
	$scope.neighborhoods = [
	    {name: 'Artane', conditions: {foggy: 1,sunny: 0}},
	    {name: 'Beaumont', conditions: {foggy: 0,sunny: 0}},
	    {name: 'Stephen\'s Green', conditions: { foggy: 1, sunny: 4 }},
	    {name: 'Temple Bar', conditions: { foggy: 12, sunny: 4 }}
	  ];
});