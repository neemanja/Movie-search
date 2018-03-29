app.directive('movieInfoDir', function(){
    return {
        restrict: 'E',
        scope: {
            title: '@',
            text: '@'
        },
        templateUrl: 'html/directives/movieInfoDir.html'
    };
})