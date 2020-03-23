import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import RNTextDetector from 'react-native-text-detector';
import * as ImagePicker from 'expo-image-picker';

class TextDetectorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textDetected: '',
      filepath: ''
    };
  }

  detectText = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult.uri);
    try {
      const visionResp = await RNTextDetector.detectFromUri(pickerResult.uri);
      console.log('visionResp', visionResp);
      this.setState({ textDetected: visionResp });
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  render() {
    const { textDetected } = this.state;
    return (
      <View>
        {textDetected ? (
          <Text>{textDetected}</Text>
        ) : (
          <Button title='Detect Text' onPress={this.detectText} />
        )}
      </View>
    );
  }
}

export default TextDetectorScreen;
