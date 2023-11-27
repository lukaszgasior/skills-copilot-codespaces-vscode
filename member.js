function skillsMember() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '='
    },
    controller: function($scope) {
      $scope.skillLevel = function(skill) {
        return skill.level;
      };
    }
  };
}