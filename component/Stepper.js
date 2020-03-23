import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import StepperProgressStep from './StepperProgressStep';

const labels = ['Name', 'DOB', 'Address'];

class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelValue: ''
    };
  }
  static navigationOptions = {
    header: null
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPaymentStepComplete = () => {
    alert('Payment step completed!');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
  };
  render() {
    const steps = labels.map(label => {
      return (
        <ProgressStep
          label={label}
          onNext={this.onNextStep}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
        >
          <TextInput
            placeholder='Enter text'
            onChangeText={text => this.setState({ labelValue: text })}
            value={this.state.labelValue}
          />
        </ProgressStep>
      );
    });
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <ProgressSteps>{steps}</ProgressSteps>
      </View>
    );
  }
}

export default ExampleOne;
