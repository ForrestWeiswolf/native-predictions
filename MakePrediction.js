import React from 'react'
import PropTypes from 'prop-types'
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const MakePrediction = props => {
  return (
    <Text>
      placeholder
    </Text>
  )
}

MakePrediction.propTypes = {
}

export default MakePrediction
AppRegistry.registerComponent('native-predictions', () => MakePrediction);
