angular.module('comments')
.directive('singleComment', function(){
  return {
    restrict: 'E',
    templateUrl: './assets/views/single-comment.html',
    controller: 'singleCommentCtrl'
  };
});
