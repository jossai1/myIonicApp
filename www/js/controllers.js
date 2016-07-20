angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Chats) {

// $scope.courseCode = "jane hi ";
// $scope.comments = "jsne";
// console.log($scope.courseCode);

$scope.todoAdd = function()
{
    var date  = new Date();
    var currentTime = date.getHours() + '.' + date.getMinutes();
    var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();
    $scope.chats = Chats.all();

    console.log(($scope.chats.length));
    console.log($scope.ds.courseName);


    $scope.chats.push({id: (Chats.all().length),
    coursecode:$scope.ds.courseCode ,
    courseName: $scope.ds.courseName,
    author: 'Jane Ossai',
    comments: $scope.ds.comments,
    rating: '3',
    time: currentTime,
    date: currentDate,
    face:'img/identicon.png'});

    // $scope.de.courseCode = "";
    // $scope.ds.comments = "";
    // $scope.ds.courseName= "";
  };


})
.controller('LoginCtrl', function($scope, Users) {

  $scope.doLogin = function()
  {

      console.log('hi');
      // $scope.users = Users.all();
      //
      // console.log(($scope.chats.length));
      // console.log($scope.ds.courseName);
      //
      //
      // $scope.chats.push({id: (Chats.all().length),
      // coursecode:$scope.ds.courseCode ,
      // courseName: $scope.ds.courseName,
      // author: 'Jane Ossai',
      // comments: $scope.ds.comments,
      // rating: '3',
      // time: currentTime,
      // date: currentDate,
      // face:'img/identicon.png'});

      // $scope.de.courseCode = "";
      // $scope.ds.comments = "";
      // $scope.ds.courseName= "";
    };


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
