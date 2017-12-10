import React, { Component } from 'react';
import { View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import AboutMeView from './aboutMe';
import EducationView from './education';
import WorkExperienceView from './workExperience';

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
      <View style={{ flex: 1 }}>
        <ButtonGroup
          buttons={['About Me', 'Work Experience', 'Education']}
          selectedIndex={this.state.selectedIndex}
          onPress={selectedIndex => this.setState({ selectedIndex })}
        />
        {content}
      </View>
    );
  }
}

export default MainContent;
