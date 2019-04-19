import React from 'react'
import { Text, View, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MakePrediction from './MakePrediction.js'
import styles from './styles'

class PredictionScreen extends React.Component {
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

class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List Placeholder</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Prediction: PredictionScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'Prediction',
  }
)

const AppContainer = createAppContainer(AppNavigator)
export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
