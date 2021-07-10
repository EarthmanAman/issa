import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
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
          <ScrollView>
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

				<ScrollView horizontal={true}>
					<View style={HomeBack.my_crop}>
						<Image source={require("../../assets/maize.jpg")} style={HomeBack.my_crop_image}/>
						<Text style={HomeText.my_crop_title}>Maize</Text>
					</View>

          <View style={HomeBack.my_crop}>
            <Image source={require("../../assets/bean.jpg")} style={HomeBack.my_crop_image}/>
            <Text style={HomeText.my_crop_title}>Maize</Text>
          </View>

				</ScrollView>
			</View>	


      <View style={HomeBack.my_crops}>
        <View>
          <Text style={HomeText.heading}>CROPS</Text>
        </View>

        <ScrollView>
          <View style={HomeBack.other_crops_pair}>
            <TouchableOpacity 
              style={HomeBack.my_crop}
              onPress={() => this.props.navigation.navigate("CropDetail")}
            >
              <Image source={require("../../assets/bean.jpg")} style={HomeBack.other_crop_image}/>
              <Text style={HomeText.other_crop_title}>Maize</Text>
            </TouchableOpacity>

            <TouchableOpacity style={HomeBack.my_crop}>
              <Image source={require("../../assets/maize.jpg")} style={HomeBack.other_crop_image}/>
              <Text style={HomeText.other_crop_title}>Maize</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </View>

      </ScrollView>
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