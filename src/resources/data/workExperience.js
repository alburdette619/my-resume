const maSource = require('../images/market_america.jpeg');
const nbXpoSource = require('../images/new_breed_xpo.png');
const noregonSource = require('../images/noregon.png');
const tridentSource = require('../images/trident.jpeg');

const workExperience = [
  {
    company: 'Market America',
    dates: 'Jun 2015 - present',
    points: [
      'Led the development and adoption of React Native for a CRM mobile app.',
      'Assisted development of an ecommerce mobile app using Sencha and Cordova.',
      'Assisted development of a CRM mobile app using Android.',
    ],
    source: maSource,
  },
  {
    company: 'New Breed/XPO Logistics',
    dates: 'Feb 2013 - Jun 2015',
    points: [
      'Developed & maintained the PC side of a mobile device testing platform.',
      'Assisted in developing a security system to detect Disney magic bands.',
    ],
    source: nbXpoSource,
  },
  {
    company: 'Noregon Systems',
    dates: 'Mar 2012 - Feb 2013',
    points: [
      'Assisted development of a diagnostics app for heavy/medium duty vehicles.',
      'Used data to uncover bugs in a difficult to reproduce scenario.',
    ],
    source: noregonSource,
  },
  {
    company: 'Trident Micro Systems',
    dates: 'Aug 2010 - Mar 2012',
    points: [
      'Transitioned from software tester to developer by taking initiative.',
      'Assisted development of a dispatching desktop application in WCF',
    ],
    source: tridentSource,
  },
];

export default workExperience;
