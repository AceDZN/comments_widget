angular.module('comments')
.controller('newCommentCtrl', function ($scope) {
  $scope.newComment = {};
  $scope.addNewComment = function () {
      $scope.newComment.id = $scope.comments.length + 1;
      $scope.newComment.content = $scope.newComment.content;
      $scope.comments.push($scope.newComment);
      $scope.commentForm.$setPristine();
      return $scope.newComment = {};
  };
})
