function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'views/members/skills-member.html',
        controller: function($scope, $element, $attrs) {
            console.log('skillsMember');
        }
    };
}