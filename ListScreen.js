import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List Placeholder</Text>
      </View>
    )
  }
}

ListScreen.propTypes = {}
