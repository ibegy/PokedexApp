(function () { 'use strict';

	var app = angular.module('pokedex');

	app.controller('PokedexController', function ($window, $scope, PokemonService) {

	    $scope.offset = 0;
	    $scope.pokemonsPerLoad = 21;
	    $scope.pokemons = [];

	    $scope.getPokemons = function () {
	        PokemonService.getPokemons($scope.pokemonsPerLoad, $scope.offset)
                .then(function (response) {
                    var pokemons = response.data.results;

                    pokemons.forEach(function (pokemon, index) {
                        var id = index + $scope.offset + 1;

                        $scope.pokemons.push({
                            id: id,
                            name: pokemon.name
                        });
                    });

                    $scope.offset += pokemons.length;
                })
	            .catch(function (error) {
	                alert(error.data); 
	            });
	    };

	    angular.element($window).bind("scroll", function () {
	        var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	        var body = document.body, html = document.documentElement;
	        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	        var windowBottom = windowHeight + window.pageYOffset;

	        if (windowBottom >= docHeight) {
	            $scope.getPokemons();
	        }
	    });

	    $scope.getPokemons();

	});

})();
