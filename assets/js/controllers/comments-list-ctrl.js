angular.module('comments')
.controller('commentsListCtrl', function ($scope) {
  $scope.comments = [
    {id: 1,author: "design@acedzn.com",content: "Hola Amigoz, this is my AngularJS Comment widget"},
    {id: 2,author: "alex@acedzn.com",content: "Hello there. How are you?"},
    {id: 3,author: "another@brother.io",content: "Good!!!"},
    {id: 4,author: "design@acedzn.com",content: "Goodbye :)"}
  ];
})
