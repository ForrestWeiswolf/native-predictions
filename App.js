import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import PredictionScreen from './PredictionScreen.js'
import ListScreen from './ListScreen.js'

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
