import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ScheduleScreen extends Component {
  render() {
    return (
        <View>
			<Text style={styles.text}>Schedule</Text>      	
		</View>
	        
    );
  }
}

const styles = StyleSheet.create({
	text: {

		fontFamily:'notoserif',
		fontSize:18,

	}
})
