angular.module('comments')
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
});
