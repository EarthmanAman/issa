import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container} from 'native-base';

import {StartBack} from "../theme/background"
import {StartText} from "../theme/text"

export default class StartScreen extends Component {
  render() {
    return (
        <View style={StartBack.main}>
			<View style={StartBack.image_view}>
				<Image source={require("../assets/login.png")} style={StartBack.image}/>
			</View>

			<View style={StartBack.head}>
				<Text style={StartText.head}>Smart Farming Association</Text>
				<Text style={StartText.desc}>Learner Competency Measurement System is a platform which helps teachers all across the country to have a digital storage of their pupil performance</Text>
			</View>
			
			<View style={StartBack.buttons}>
				<TouchableOpacity 
					style={StartBack.register}
					onPress={() => this.props.navigation.navigate("Register")}
				>
					<Text style={StartText.register}>Register</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={StartBack.sign_in}
					onPress={() => this.props.navigation.navigate("Login")}
				>
					<Text style={StartText.sign_in}>Sign In</Text>
				</TouchableOpacity>
			</View>
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
