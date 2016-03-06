angular.module('comments')
.controller('commentsListCtrl', function ($scope) {
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
