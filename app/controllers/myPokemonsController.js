(function () { 'use strict';

	var app = angular.module('pokedex');

	app.controller('MyPokemonsController', function ($rootScope, $scope, PokemonService) {

	    $scope.pokemons = [];
	    $scope.loading = true;

	    $scope.getPokemons = function () {
	        var promises = [];

	        for (var id in $rootScope.pokemons) {
	            if ($rootScope.pokemons[id] > 0) {
	                promises.push(PokemonService.getPokemonById(id));
	            }
	        }

	        Promise.all(promises)
                .then(function (responseArray) {
                    responseArray.forEach(function (response) {
                        $scope.pokemons.push(response.data);
                    });

                    $scope.loading = false;
                    $scope.$apply();
                })
	        .catch(function (error) {
	            alert('Cannot get pokemons from server\n' + error.data);
	        });
	    };

	    $scope.getPokemons();

	});

})();
