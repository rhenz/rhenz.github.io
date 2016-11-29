var app = angular.module('myApp', []);

app.controller('projectController', function ($scope) {
  $scope.projects = [{
    id: 1,
    position: '6u 12u$(xsmall) work-item',
    title: 'SportsAce',
    description: 'Cape wants to make it easier and cheaper for passengers to travel by giving them the ability to book standby tickets for local and international flights, a privilege previously unavailable to the general public.',
    image_path: 'images/thumbs/cape_banner.png',
    link: 'http://www.mycape.io/'
  }
});

app.controller('rhenzController', function ($scope) {
  $scope.jls = {
    username: 'rhenzsalvador',
    name: 'John Lawrence Salvador',
    email: 'salvador.rhenz@gmail.com',
    phone: '+639152688041',
    fbLink: 'https://www.facebook.com/jlcsalvador',
    linkedInLink: 'https://www.linkedin.com/in/ceosilvajr',
    twitterLink: 'https://twitter.com/rhenzsalvador',
    stackLink: 'http://stackoverflow.com/users/4518934/rhenz'
  };
});
