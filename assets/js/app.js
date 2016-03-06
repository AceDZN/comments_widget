"use strict";
(function(){
  angular.module('comments', []).controller('commentWidgetCtrl', function ($scope) {
    $scope.comments = [
      {
        id: 1,
        author: "elik@bigpanda.io",
        content: "Hello there. How are you?"
      },
      {
        id: 2,
        author: "Shai@bigpanda.io",
        content: "Good!!!"
      },
      {
        id: 3,
        author: "noam@bigpanda.io",
        content: "Goodbye :)"
      }
    ];
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
