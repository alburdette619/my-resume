import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import AboutMeView from './aboutMe';
import EducationView from './education';
import WorkExperienceView from './workExperience';

const styles = {
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: Platform.OS === 'ios' ? 12 : 14,
  },
};

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  getContents() {
    const { selectedIndex } = this.state;
    let contents;

    switch (selectedIndex) {
      case 1:
        contents = <WorkExperienceView />;
        break;
      case 2:
        contents = <EducationView />;
        break;
      default:
        contents = <AboutMeView />;
    }

    return contents;
  }

  render() {
    const content = this.getContents();

    return (
      <View style={styles.container}>
        <ButtonGroup
          buttons={['About Me', 'Work Experience', 'Education']}
          selectedIndex={this.state.selectedIndex}
          onPress={selectedIndex => this.setState({ selectedIndex })}
          textStyle={styles.buttonText}
        />
        {content}
      </View>
    );
  }
}

export default MainContent;
