app.controller('movieSearchCtrl', function($scope, $state, movieSearchService){
    $scope.movies = '';
    
    $scope.movieNameChange = function(){
        movieSearchService.searchByName($scope.movieName).then(function(response){
            $scope.movies = response.data.Search;
            console.log($scope.movies);
        })
    };

    $scope.movieDetailsClick = function(id){
        $state.go('movieDetails', {movieId: id})
    }


});