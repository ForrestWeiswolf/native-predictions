import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppRegistry, TextInput, Button } from 'react-native'
import styles from './styles'

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
        style={{...styles.input, marginBottom: 10}}
        placeholder='A thing will happen'
        value={this.state.text}
        onChangeText={(text) => this.setState({text})}
      />
      <TextInput
        multiline = {true}
        style={styles.input}
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
        onPress={() => {
          this.props.save({statement: this.state.text, confidence: this.state.number})
          this.setState({text: '', number: null})
        }}
      />
    </>
  }
}

MakePrediction.propTypes = {
  save: PropTypes.func
}

export default MakePrediction
AppRegistry.registerComponent('native-predictions', () => MakePrediction);
