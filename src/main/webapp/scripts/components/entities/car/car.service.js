'use strict';

angular.module('jhipsterApp')
    .factory('Car', function ($resource) {
        return $resource('api/cars/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            }
        });
    });
