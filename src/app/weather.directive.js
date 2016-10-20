angular
    .module('app')
    .directive('weatherTextbox', weatherTextboxDir);
function weatherTextboxDir() {
    return {
        scope: {
            suggestionData: '@'
        },
        templateUrl: "src/app/weatherTextboxTemplate.html"

    }

}