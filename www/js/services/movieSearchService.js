app.factory('movieSearchService', function($http){
    var movieSearchService = {
        
        searchByName: function(name){
            return $http.get('http://www.omdbapi.com/?s=' + name + '&apikey=f67da65b');
        },

        searchById: function(id){
            return $http.get('http://www.omdbapi.com/?i=' + id + '&apikey=f67da65b');
        }        

    };
    
    return movieSearchService;

})