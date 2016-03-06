"use strict";
(function(){
  angular.module('comments', []).controller('commentWidgetCtrl', function ($scope) {
    $scope.comments = [];
    $scope.newComment = {};
    
    $scope.addNewComment = function () {
        $scope.newComment.id = $scope.comments.length + 1;
        $scope.newComment.content = $scope.newComment.content;
        $scope.comments.push($scope.newComment);
        $scope.commentForm.$setPristine();
        return $scope.newComment = {};
    };
  });
}());
