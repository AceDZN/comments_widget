"use strict";
(function(){
  angular.module('comments', []).controller('commentWidgetCtrl', function ($scope,Gravatar) {
    $scope.comments = [
      {
        id: 1,
        author: "design@acedzn.com",
        content: "Hola Amigoz, this is my Comment widget for the Big Panda Exercise"
      },
      {
        id: 2,
        author: "elik@bigpanda.io",
        content: "Hello there. How are you?"
      },
      {
        id: 3,
        author: "Shai@bigpanda.io",
        content: "Good!!!"
      },
      {
        id: 4,
        author: "noam@bigpanda.io",
        content: "Goodbye :)"
      }
    ];
    $scope.newComment = {};
    $scope.getAvatar = function(email){
      return Gravatar(email);
    };
    $scope.addNewComment = function () {
        $scope.newComment.id = $scope.comments.length + 1;
        $scope.newComment.content = $scope.newComment.content;
        $scope.comments.push($scope.newComment);
        $scope.commentForm.$setPristine();
        return $scope.newComment = {};
    };
  });
}());
