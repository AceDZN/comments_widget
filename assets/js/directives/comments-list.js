angular.module('comments')
.directive('commentsList', function(){
  return {
    restrict: 'E',
    templateUrl: './assets/views/comments-list.html',
    controller: 'commentsListCtrl'
  };
});
