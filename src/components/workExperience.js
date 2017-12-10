import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import workExperience from '../resources/data/workExperience';

const avatarDim = 64;
const styles = StyleSheet.create({
  avatar: {
    height: avatarDim,
    width: avatarDim,
  },
  titleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
  },
  rightTitle: {
    fontSize: 12,
    marginRight: 5,
  },
});

const WorkExperienceView = () => (
  <ScrollView>
    <List >
      {
        workExperience.map(exp => (
          <ListItem
            key={exp.company}
            avatar={exp.source}
            avatarStyle={styles.avatar}
            avatarContainerStyle={styles.avatar}
            hideChevron
            title={
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{exp.company}</Text>
                <Text style={styles.rightTitle}>{exp.dates}</Text>
              </View>
              }
            subtitle={exp.points.map(point => `\u2023 ${point}`).join('\n')}
            subtitleNumberOfLines={6}
          />
        ))
      }
    </List>
  </ScrollView>
);

export default WorkExperienceView;
