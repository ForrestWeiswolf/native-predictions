import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MakePrediction from './MakePrediction.js'

export default class App extends React.Component {
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
})
