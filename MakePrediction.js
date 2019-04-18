import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppRegistry, TextInput, View, Button } from 'react-native';

const style = {
  minHeight: 45,
  width: 250,
  fontSize: 40,
  borderColor: 'black',
  borderWidth: 2,
  borderStyle: 'dashed',
}

function textToNumber(text){
  return text.replace(/[^\d.]+/g, '')
}
class MakePrediction extends Component{
  constructor(props){
    super(props)

    this.state = {
      text: '',
      number: null,
    }
  }

  render(){
    return <>
      <TextInput
        multiline = {true}
        style={{...style, marginBottom: 10}}
        placeholder='A thing will happen'
        value={this.state.text}
        onChangeText={(text) => this.setState({text})}
      />
      <TextInput
        multiline = {true}
        style={style}
        placeholder='.5'
        keyboardType = 'numeric'
        value={this.state.number && !isNaN(this.state.number) ? String(this.state.number) : ''}
        onChangeText={(text) => {
          if(text.length) this.setState({number: textToNumber(text)})
        }}
      />
      <Button
        title='Save'
        color='#B1D4B4'
        onPress={() => {}}
      />
    </>
  }
}

MakePrediction.propTypes = {
}

export default MakePrediction
AppRegistry.registerComponent('native-predictions', () => MakePrediction);
