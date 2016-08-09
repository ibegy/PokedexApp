(function () {
    'use strict';

    var app = angular.module('pokedex');

    app.service('PokemonService', function ($http) {
        
        this.getPokemons = function (limit, offset) {
            return $http.get(`http://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
        };

        this.getPokemonById = function (id) {
            return $http.get(`http://pokeapi.co/api/v2/pokemon/${id}/`);
        };

    });

})();
