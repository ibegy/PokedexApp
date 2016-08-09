(function () { 'use strict';

    var app = angular.module('pokedex', ['ngRoute']);

	app.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/views/pokedex.html',
				controller: 'PokedexController'
			})
            .when('/pokemon/:id', {
                templateUrl: 'app/views/pokemon.html',
                controller: 'PokemonController'
            })
			.when('/my-pokemons', {
				templateUrl: 'app/views/myPokemons.html',
				controller: 'MyPokemonsController'
			})
			.when('/about', {
				templateUrl: 'app/views/about.html'
			})
			.when('/404', {
				templateUrl: 'app/views/404.html'
			})
			.otherwise({
				redirectTo: '/404'
			});
	});

})();
