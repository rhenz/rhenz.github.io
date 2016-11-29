var app = angular.module('myApp', []);

app.controller('projectController', function ($scope) {
  $scope.projects = [{
    id: 1,
    position: '6u 12u$(xsmall) work-item',
    title: 'Pushpyns',
    description: 'Pushpyns lets you save locations from your phone and then add details like Name, Categories, Notes, Description, Photos, Data, Time',
    image_path: 'images/thumbs/pushpyns.png',
    link: 'https://pushpyns.com/home'
  },
  {
    id: 2,
    position: '6u 12u$(xsmall) work-item',
    title: 'VGTC Timesheets',
    description: 'The Victorian Group Training app replaces the paper based timesheet to create your weekly timesheet in one simple process. Complete the timesheet for the current week and submit, your host will approve the timesheet and submit to VGTC for payment. You also have the ability to lodge leave requests, check your pay history and contact your consultant.',
    image_path: 'images/thumbs/vgtc.png',
    link: 'https://itunes.apple.com/au/app/vgtc-timesheets/id1100580191?mt=8'
  },
  {
    id: 3,
    position: '6u 12u$(xsmall) work-item',
    title: 'iPDS',
    description: '\'Productivity Development Solutions\' innovative software offers the complete solution to the real-time management and reporting of assets and inspections. iPDS is the iOS version of the multi-platform, subscription-based software which consists of Asset Management, Inspections, Idler Management, Wear Management and Complex Mapping. *** Minimal development interaction here. Worked with multiple developers. ***',
    image_path: 'images/thumbs/ipds.png',
    link: 'https://itunes.apple.com/us/app/ipds-enterprise-in-field-inspection/id1088070458?mt=8'
  },
  {
    id: 4,
    position: '6u 12u$(xsmall) work-item',
    title: 'Booko Buddy',
    description: 'Booko Buddy is a companion app to the popular price comparison engine, Booko. It will find the cheapest price online (including delivery) for a book, DVD or Blu-Ray delivered to Australia, Canada, China, Finland, France, Germany, Ireland, Italy, Japan, New Zealand, Norway, Singapore, Spain, Sweden, Taiwan, the United Kingdom and the United States. *** I only created the iPad version for this app ***',
    image_path: 'images/thumbs/bookobuddy.png',
    link: 'https://itunes.apple.com/au/app/booko-buddy/id521096621?mt=8'
  },
  {
    id: 5,
    position: '6u 12u$(xsmall) work-item',
    title: 'Butterfly Kidz',
    description: 'An educational program that teaches your child to be self confident and to believe in their own ability. ',
    image_path: 'images/thumbs/butterflykidz.png',
    link: 'http://butterflykidz.com'
  },
  {
    id: 6,
    position: '6u 12u$(xsmall) work-item',
    title: 'Biom\' Up',
    description: 'Biom\' Up application allows the persons who are authorized to use the application to access Biom\' Up products information on their device.',
    image_path: 'images/thumbs/biomup.png',
    link: 'https://itunes.apple.com/us/app/biom-up/id1135365405?mt=8'
  },

];
});

app.controller('profileController', function ($scope) {
  $scope.jls = {
    username: 'rhenzsalvador',
    name: 'John Lawrence Salvador',
    email: 'salvador.rhenz@gmail.com',
    phone: '+639152688041',
    fbLink: 'https://www.facebook.com/jlcsalvador',
    linkedInLink: 'https://www.linkedin.com/in/',
    twitterLink: 'https://twitter.com/rhenzsalvador',
    stackLink: 'http://stackoverflow.com/users/4518934/rhenz'
  };
});
