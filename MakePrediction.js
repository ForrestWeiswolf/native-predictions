import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppRegistry, TextInput } from 'react-native';

const style = {
  height: 100,
  width: 200,
  fontSize: 60,
  borderColor: 'black',
  borderWidth: 2,
  borderStyle: 'dashed'
}
class MakePrediction extends Component{
  constructor(props){
    super(props)

    this.state = {}
  }

  render(){
    return <TextInput
      style={style}
      onChangeText={(text) => this.setState({text})}
    />
  }
}

MakePrediction.propTypes = {
}

export default MakePrediction
AppRegistry.registerComponent('native-predictions', () => MakePrediction);
