import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppRegistry, TextInput, View } from 'react-native';

const style = {
  minHeight: 45,
  width: 250,
  fontSize: 40,
  borderColor: 'black',
  borderWidth: 2,
  borderStyle: 'dashed',
}
class MakePrediction extends Component{
  constructor(props){
    super(props)

    this.state = {}
  }

  render(){
    return <TextInput
      multiline = {true}
      style={style}
      onChangeText={(text) => this.setState({text})}
    />
  }
}

MakePrediction.propTypes = {
}

export default MakePrediction
AppRegistry.registerComponent('native-predictions', () => MakePrediction);
