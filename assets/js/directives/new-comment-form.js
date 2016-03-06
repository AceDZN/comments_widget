angular.module('comments')
.directive('newCommentForm', function(){
  return {
    restrict: 'E',
    templateUrl: './assets/views/new-comment-form.html',
    controller: 'newCommentCtrl'
  };
});
