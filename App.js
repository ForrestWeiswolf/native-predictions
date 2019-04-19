import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import PredictionScreen from './PredictionScreen.js'
import ListScreen from './ListScreen.js'

const AppNavigator = createBottomTabNavigator(
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
