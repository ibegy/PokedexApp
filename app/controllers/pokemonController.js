(function () {
    'use strict';

    var app = angular.module('pokedex');

    app.controller('PokemonController', function ($routeParams, $rootScope, $scope, PokemonService) {

        $scope.pokemon = {};
        $scope.loading = true;
        $scope.myPokemons = $rootScope.pokemons;

        PokemonService.getPokemonById($routeParams.id)
            .then(function (response) {
                $scope.pokemon = response.data;
                $scope.loading = false;
            })
	        .catch(function (error) {
	            alert(error.data);
	        });

        $scope.catch = function () {
            if ($rootScope.pokemons[$routeParams.id]) {
                $rootScope.pokemons[$routeParams.id]++;
            } else {
                $rootScope.pokemons[$routeParams.id] = 1;
            }
        };

        $scope.leave = function () {
            if ($rootScope.pokemons[$routeParams.id] && $rootScope.pokemons[$routeParams.id] > 0) {
                $rootScope.pokemons[$routeParams.id]--;
            }
        };

    });

})();
