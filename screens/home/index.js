import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import { Input, Button, Center, NativeBaseProvider } from "native-base"
import {connect} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';

import {HomeBack} from "../../theme/background"
import {HomeText} from "../../theme/text"

import {
  REGISTER_USER,
  REGISTER_ERROR_REMOV,
  MAIN_ACTION,
} from "../../redux/redux_actions/actions"

class HomeScreen extends Component {


  render() {
    return (
        <View style={HomeBack.main}>
        	<View style={HomeBack.schedule}>
        		<View style={HomeBack.schedule_words}>
        			<View style={HomeBack.schedule_crop}>
        				<Image source={require("../../assets/maize.jpg")} style={HomeBack.schedule_image}/>
        				<Text>Maize</Text>
        			</View>
        			<Text style={HomeText.schedule_title}>Help your plant survive when you are away</Text>
        		</View>
        		<View style={HomeBack.date_view}>
        			<View style={HomeBack.date}>
	        			<Text style={HomeText.date}>25</Text>
	        			<Text style={HomeText.month}>MAY</Text>
	        			<Text style={HomeText.day}>MON</Text>
        			</View>
        		</View>
        	</View>

			<View style={HomeBack.my_crops}>
				<View>
					<Text style={HomeText.heading}>MY CROPS</Text>
				</View>

				<View>
					<View>
						<Image source={require("../../assets/maize.jpg")} style={HomeBack.schedule_image}/>
						<Text>Maize</Text>
					</View>
				</View>
			</View>	
		</View>
	        
    );
  }
}

const mapStateToProps = state => (

{
    user:state.loginReducer.user,
})

const actionToProps = {
  REGISTER_USER, 
  REGISTER_ERROR_REMOV,
  MAIN_ACTION,
}


export default connect(mapStateToProps, actionToProps)(HomeScreen);