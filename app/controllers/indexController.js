(function () { 'use strict';

	var app = angular.module('pokedex');

	app.controller('IndexController', function ($rootScope) {
	    $rootScope.pokemons = {};
	});

})();
