var app = angular.module('myApp', []);

app.controller('projectController', function ($scope) {
  $scope.projects = [
  {
    id: 1,
    position: '6u 12u$(xsmall) work-item',
    title: 'SXFI App',
    description: 'SXFI App mainly used to to head mapping using the device camera which captures ear and head features for a tailored audio profile. This app also supports playback of local music files stored in your device and manages several Creative devices thru bluetooth',
    image_path: 'images/thumbs/sxfi-app.png',
    link: 'https://apps.apple.com/us/app/sxfi-app/id1323992913'
  },
  {
    id: 2,
    position: '6u 12u$(xsmall) work-item',
    title: 'GMovies',
    description: 'GMovies is the Philippines\'s only movie ticketing app that aggregates over 100 cinemas nationwide. Book seats & buy movie tickets conveniently for Ayala Malls Cinemas, SM Cinema, Robinsons Movieworld, Theatre Mall & Promenade Greenhills Cinemas, and Cinema 76.',
    image_path: 'images/thumbs/gmovies.png',
    link: 'https://itunes.apple.com/ph/app/gmovies-tickets-schedule/id582901861?mt=8'
  },
  {
    id: 3,
    position: '6u 12u$(xsmall) work-item',
    title: 'Streamwatch',
    description: 'Streamwatch mobile app is a fully functional remote control that you can use to control Roku powered Streamwatch devices.',
    image_path: 'images/thumbs/streamwatch.png',
    link: 'https://itunes.apple.com/ph/app/globe-streamwatch/id1265052218?mt=8'
  },
  {
    id: 4,
    position: '6u 12u$(xsmall) work-item',
    title: 'Pushpyns',
    description: 'Pushpyns lets you save locations from your phone and then add details like Name, Categories, Notes, Description, Photos, Data, Time',
    image_path: 'images/thumbs/pushpyns.png',
    link: 'https://pushpyns.com/home'
  },
  {
    id: 5,
    position: '6u 12u$(xsmall) work-item',
    title: 'VGTC Timesheets',
    description: 'The Victorian Group Training app replaces the paper based timesheet to create your weekly timesheet in one simple process. Complete the timesheet for the current week and submit, your host will approve the timesheet and submit to VGTC for payment. You also have the ability to lodge leave requests, check your pay history and contact your consultant.',
    image_path: 'images/thumbs/vgtc.png',
    link: 'https://itunes.apple.com/au/app/vgtc-timesheets/id1100580191?mt=8'
  },
  {
    id: 6,
    position: '6u 12u$(xsmall) work-item',
    title: 'iPDS',
    description: '\'Productivity Development Solutions\' innovative software offers the complete solution to the real-time management and reporting of assets and inspections. iPDS is the iOS version of the multi-platform, subscription-based software which consists of Asset Management, Inspections, Idler Management, Wear Management and Complex Mapping. *** Minimal development interaction here. Worked with multiple developers. ***',
    image_path: 'images/thumbs/ipds.png',
    link: 'https://itunes.apple.com/us/app/ipds-enterprise-in-field-inspection/id1088070458?mt=8'
  },
  {
    id: 7,
    position: '6u 12u$(xsmall) work-item',
    title: 'Booko Buddy',
    description: 'Booko Buddy is a companion app to the popular price comparison engine, Booko. It will find the cheapest price online (including delivery) for a book, DVD or Blu-Ray delivered to Australia, Canada, China, Finland, France, Germany, Ireland, Italy, Japan, New Zealand, Norway, Singapore, Spain, Sweden, Taiwan, the United Kingdom and the United States. *** I only created the iPad version for this app ***',
    image_path: 'images/thumbs/bookobuddy.png',
    link: 'https://itunes.apple.com/au/app/booko-buddy/id521096621?mt=8'
  },
  {
    id: 8,
    position: '6u 12u$(xsmall) work-item',
    title: 'Butterfly Kidz',
    description: 'An educational program that teaches your child to be self confident and to believe in their own ability. ',
    image_path: 'images/thumbs/butterflykidz.png',
    link: 'http://butterflykidz.com'
  },
  {
    id: 9,
    position: '6u 12u$(xsmall) work-item',
    title: 'Biom\' Up',
    description: 'Biom\' Up application allows the persons who are authorized to use the application to access Biom\' Up products information on their device.',
    image_path: 'images/thumbs/biomup.png',
    link: 'https://itunes.apple.com/us/app/biom-up/id1135365405?mt=8'
  },
  {
    id: 10,
    position: '6u 12u$(xsmall) work-item',
    title: 'Bonafide Infotech',
    description: 'A basic app that tells you more info about the company of Bonafide Infotech. Apparently this app is not already on app store. Click image for more info.',
    image_path: 'images/thumbs/bonafide.png',
    link: 'https://sensortower.com/ios/tr/bonafide-infotech-inc/app/bonafide-infotech-inc/924799024/'
  },
  {
    id: 11,
    position: '6u 12u$(xsmall) work-item',
    title: 'WMS Patient Order App',
    description: 'Given the fast-paced and demanding environment of our referral community, this app allows for quick entry and “on-the-go” transmission of essential catheterization information. For insurance purposes WMS will electronically and privately receive the app-submitted data and assemble a pre-populated prescription form that will be faxed back to you/your office for official physician signature and date. This app is not already on app store. Click image for more info',
    image_path: 'images/thumbs/wms.png',
    link: 'https://sensortower.com/ios/us/wilmington-medical-supply-inc/app/wms-patient-order-app/930807108/'
  },
  {
    id: 12,
    position: '6u 12u$(xsmall) work-item',
    title: 'SportsAce',
    description: 'An app for coaches, parents and players which may be used for tracking and recording their scores in every rugby game. This app will allow them to share their activity as well and post a challenge also. It\'s like a social media app for rugby players and enthusiast.',
    image_path: 'images/thumbs/sportsace.png',
    link: 'images/thumbs/sportsaceapp.png'
  }
];
});

app.controller('profileController', function ($scope) {
  $scope.jls = {
    username: 'rhenzsalvador',
    name: 'John Salvador',
    email: 'lawrence.c.salvador@gmail.com',
    phone: '+639152688041 / +6588692191',
    linkedInLink: 'https://www.linkedin.com/in/jlcsalvador',
    twitterLink: 'https://twitter.com/rhenzsalvador',
    location: 'Philippines / Singapore',
  };
});
