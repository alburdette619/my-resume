import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');

const styles = {
  slide: {
    width, flex: 1,
  },
  imageText: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    backgroundColor: 'rgba(169, 169, 169, 0.7)',
    width,
    bottom: 0,
    paddingLeft: 10,
  },
};

const chainReactSource = require('../resources/images/chain_react.jpg');
const crossfitSource = require('../resources/images/crossfit.jpg');
const familySource = require('../resources/images/family.jpg');
const fitnessSource = require('../resources/images/fitness.jpg');
const meSource = require('../resources/images/me.jpg');

const slides = [
  { title: 'Finn and I 🐶', source: meSource },
  { title: 'At Chain React 2017 ⚛️', source: chainReactSource },
  { title: 'Altius Army 🏋️‍🏋️‍♀️', source: crossfitSource },
  { title: 'My beautiful family 👨‍👩‍👧‍👧', source: familySource },
  { title: 'Fitness! 💪', source: fitnessSource },
];

const renderSwiperButtons = iconName => (
  <Icon name={iconName} size={32} color="white" type="simple-line-icon" />
);

const Header = () => (
  <Swiper
    showsButtons
    autoplay
    autoplayTimeout={5}
    showsPagination={false}
    nextButton={renderSwiperButtons('arrow-right')}
    prevButton={renderSwiperButtons('arrow-left')}
  >
    {
      slides.map(slide => (
        <View key={Date.now()} style={styles.slide}>
          <Image
            source={slide.source}
            resizeMode="stretch"
            style={styles.slide}
          />
          <Text style={styles.imageText}>{slide.title}</Text>
        </View>
      ))
    }
  </Swiper>
);

export default Header;
