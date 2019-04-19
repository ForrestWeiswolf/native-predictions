import React from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'
import MakePrediction from './MakePrediction.js'
import styles from './styles'

export default class PredictionScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      predictions: [],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MakePrediction
          save={prediction =>
            this.setState(prevState => ({
              predictions: [...prevState.predictions, prediction],
            }))
          }
        />

        <Button
          title="Go to list"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    )
  }
}

PredictionScreen.propTypes = {
  navigation: PropTypes.object
}