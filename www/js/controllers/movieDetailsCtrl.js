app.controller('movieDetailsCtrl', function($scope, $stateParams, movieSearchService, $ionicHistory){

    var movieId = $stateParams.movieId;
    console.log($stateParams.movieId);

    if(movieId !== null){
         movieSearchService.searchById(movieId).then(function(response){
            console.log(response.data);
            $scope.movie = response.data;
        });
    }

    $scope.getStars = function(rating){
        var val = parseFloat(rating);
        var size = val/10*100;
        return size + '%';
    }  

    $scope.goBack = function (){
        $ionicHistory.goBack();
    };
    
})