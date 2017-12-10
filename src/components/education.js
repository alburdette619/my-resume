import React from 'react';
import { Dimensions, Image, StyleSheet, Text, ScrollView } from 'react-native';

const ncsuLogo = require('../resources/images/ncsu_logo.png');

const { width } = Dimensions.get('window');
const containerMargin = 10;
const imageWidthOffset = 2 * containerMargin;
const imageWidth = width - imageWidthOffset;

const styles = StyleSheet.create({
  container: {
    margin: containerMargin,
    flex: 1,
  },
  ncsu: {
    width: imageWidth,
    height: 0.62 * imageWidth,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

const edPoints =
[
  'Bachelor of Science in Engineering with a concentration in Mechatronics',
  'Attended 2003 - 2007',
  'Worked with a team to develop a solar water heater that tracked the sun.',
];

const EducationView = () => (
  <ScrollView style={styles.container}>
    <Image source={ncsuLogo} style={styles.ncsu} />
    {
      edPoints.map(point => <Text key={point} style={styles.text} >{`\u2023 ${point}`}</Text>)
    }

  </ScrollView>
);

export default EducationView;
