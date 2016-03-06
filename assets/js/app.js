"use strict";
(function(){
  angular.module('comments', [])
  .controller('newCommentCtrl', function ($scope,Gravatar) {
    $scope.newComment = {};
    $scope.addNewComment = function () {
        $scope.newComment.id = $scope.comments.length + 1;
        $scope.newComment.content = $scope.newComment.content;
        $scope.comments.push($scope.newComment);
        $scope.commentForm.$setPristine();
        return $scope.newComment = {};
    };
  })
  .controller('commentsListCtrl', function ($scope,Gravatar) {
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
  })
  .controller('singleCommentCtrl', function ($scope,Gravatar) {
    $scope.getAvatar = function(email){
      return Gravatar(email);
    };
  })
  .directive('newCommentForm', function(){
    return {
      restrict: 'E',
      templateUrl: './assets/views/new-comment-form.html',
      controller: 'newCommentCtrl'
    };
  })
  .directive('commentsList', function(){
    return {
      restrict: 'E',
      templateUrl: './assets/views/comments-list.html',
      controller: 'commentsListCtrl'
    };
  })
  .directive('filterComments', function(){
    return {
      restrict: 'E',
      templateUrl: './assets/views/filter-comments.html'
    };
  })
  .directive('filterNoComments', function(){
    return {
      restrict: 'E',
      templateUrl: './assets/views/filter-no-comments.html'
    };
  })
  .directive('singleComment', function(){
    return {
      restrict: 'E',
      templateUrl: './assets/views/single-comment.html',
      controller: 'singleCommentCtrl'
    };
  })


  ;
}());
