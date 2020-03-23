import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ProgressStep } from 'react-native-progress-steps';

class StepperProgressStep extends Component {
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
    return (
      <View>
        <ProgressStep
          label='Payment'
          onNext={this.onPaymentStepComplete}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Payment step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label='Shipping Address'
          onNext={this.onNextStep}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Shipping address step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label='Billing Address'
          onNext={this.onNextStep}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Billing address step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label='Confirm Order'
          onPrevious={this.onPrevStep}
          onSubmit={this.onSubmitSteps}
          scrollViewProps={this.defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Confirm order step content</Text>
          </View>
        </ProgressStep>
      </View>
    );
  }
}

export default StepperProgressStep;
