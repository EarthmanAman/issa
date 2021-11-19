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
				<Text style={StartText.head}>Smart Farm</Text>
				<Text style={StartText.desc}>Smart Farming application is an application which provide all your needs as a farmer in one place. From crop scheduling to what fertilizer to use.</Text>
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
