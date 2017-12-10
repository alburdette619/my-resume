import React from 'react';
import { Divider, SocialIcon } from 'react-native-elements';
import { Linking, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import aboutMe from '../resources/data/aboutMe';

const socialIconSize = Platform.OS === 'ios' ? 32 : 36;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalMargin: {
    marginHorizontal: 10,
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  socialIcon: {
    width: socialIconSize,
    height: socialIconSize,
  },
  bio: {
    fontSize: 16,
    marginTop: 5,
  },
  divider: {
    backgroundColor: 'gray',
    marginVertical: 5,
  },
});

const linkToSocial = (socialEndpoint) => {
  Linking.openURL(socialEndpoint.link);
};

const renderSocialIcon = endpoint => (<SocialIcon
  key={endpoint.type}
  type={endpoint.type}
  onPress={() => linkToSocial(endpoint)}
  iconSize={socialIconSize / 2}
  style={styles.socialIcon}
/>);

const AboutMeView = () => (
  <View style={styles.container}>
    <Text style={styles.name}>Adam Burdette</Text>
    <View style={[styles.socialContainer, styles.horizontalMargin]}>
      {
      aboutMe.socialLinks.map(endpoint => renderSocialIcon(endpoint))
      }
    </View>
    <Divider style={[styles.divider, styles.horizontalMargin]} />
    <ScrollView>
      <Text style={[styles.bio, styles.horizontalMargin]}>
        {aboutMe.bio.map(para => para.replace(/\s+/g, ' ').trim()).join('\n\n')}
      </Text>
    </ScrollView>
  </View>
);

export default AboutMeView;
