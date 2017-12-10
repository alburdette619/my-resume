import React from 'react';
import { Divider, SocialIcon } from 'react-native-elements';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import aboutMe from '../resources/data/aboutMe';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bio: {
    fontSize: 16,
    marginVertical: 10,
  },
});

const linkToSocial = (socialEndpoint) => {
  Linking.openURL(socialEndpoint.link);
};

const renderSocialIcon = endpoint => (<SocialIcon
  key={endpoint.type}
  type={endpoint.type}
  onPress={() => linkToSocial(endpoint)}
/>);

const AboutMeView = () => (
  <View style={styles.container}>
    <Text style={styles.name}>Adam Burdette</Text>
    <View style={styles.socialContainer}>
      {
      aboutMe.professionalLinks.map(endpoint => renderSocialIcon(endpoint))
      }
    </View>
    <View style={[styles.socialContainer, { width: '60%', alignSelf: 'center' }]}>
      {
      aboutMe.socialLinks.map(endpoint => renderSocialIcon(endpoint))
      }
    </View>
    <Divider style={{ backgroundColor: 'gray', marginVertical: 5 }} />
    <ScrollView>
      <Text style={styles.bio}>
        {aboutMe.bio.map(para => para.replace(/\s+/g, ' ').trim()).join('\n\n')}
      </Text>
    </ScrollView>
  </View>
);

export default AboutMeView;
