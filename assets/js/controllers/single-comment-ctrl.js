angular.module('comments')
.controller('singleCommentCtrl', function ($scope,Gravatar) {
  $scope.getAvatar = function(email){
    return Gravatar(email);
  };
})
