import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { SimpleLineIcons } from '@expo/vector-icons';

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

const { width } = Dimensions.get('window');

const Header = () => (
  <Swiper
    showsButtons
    autoplay
    autoplayTimeout={5}
    showsPagination={false}
    nextButton={<SimpleLineIcons name="arrow-right" size={32} color="white" />}
    prevButton={<SimpleLineIcons name="arrow-left" size={32} color="white" />}
  >
    {
      slides.map(slide => (
        <View key={Date.now()} style={{ width, flex: 1 }}>
          <Image
            source={slide.source}
            resizeMode="stretch"
            style={{ width, flex: 1 }}
          />
          <Text style={{
            position: 'absolute',
            color: 'white',
            fontSize: 20,
            backgroundColor: 'rgba(169, 169, 169, 0.7)',
            width,
            bottom: 0,
          }}
          >{slide.title}
          </Text>
        </View>
      ))
    }
  </Swiper>
);

export default Header;
