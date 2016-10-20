angular
    .module('app')
    .controller('suggestionCtrl', suggestionCtrlFn);
function suggestionCtrlFn($scope, $http, limitToFilter) {
    $scope.GetCities = function (cityName) {
        return $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK&filter=US&template=<geobytes%20city>,%20<geobytes%20code>&q=" + cityName).then(function (response) {
            $scope.suggestionData = [];
            angular.forEach(response.data, function (value, key) {
                $scope.suggestionData.push(value);
            });
            return $scope.suggestionData;
        });
    };
    $scope.onClick = function (value) {
        $http.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + value + '")&format=json').then(function (response) {
          console.log(response.data.query.results);
            if(response.data.query.results === null){
              alert("Location not found: " + value + "!");
          }
          else{
              console.log(response.data.query.results.channel.item.title,response.data.query.results.channel.item.description);

          }
        })

    }
}