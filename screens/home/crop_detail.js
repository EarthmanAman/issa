import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import { Input, Button, Center, NativeBaseProvider } from "native-base"
import {connect} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';

import {CropDetailBack} from "../../theme/background"
import {CropDetailText} from "../../theme/text"

import {
  REGISTER_USER,
  REGISTER_ERROR_REMOV,
  MAIN_ACTION,
} from "../../redux/redux_actions/actions"

class CropDetail extends Component {


  render() {
    return (
    <View style={CropDetailBack.main}>


      <ScrollView>
        <View style={CropDetailBack.crop_detail_image_view}>
          <Image source={require("../../assets/maize.jpg")} style={CropDetailBack.crop_detail_image}/>
           <View style={CropDetailBack.add_view}>
            <TouchableOpacity style={CropDetailBack.add}>
              <Text>ADD</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={CropDetailBack.back}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name={"arrow-back"} size={20} style={{color: "#d7dcdf"}}/>
          </TouchableOpacity>
        </View>  	

        <ScrollView>
        <View style={CropDetailBack.crop_detail_content}>
          <View style={CropDetailBack.title}>
            <Text style={CropDetailText.title}>Maize</Text>
            <Text style={CropDetailText.desc}>Is is a plant which grows in almost all the parts of the country. It is the most grown crop 
            in Kenya and Africa in general.</Text>
          </View>

          <View style={CropDetailBack.guide}>
            <Text style={CropDetailText.title}>Quick Guide</Text>
            <View>

              <View style={CropDetailBack.guide_row}>
                <View style={CropDetailBack.guide_icon}>
                   <Icon size={30} name="wb-sunny" style={{color:"orange", marginRight: 10}}/>
                </View>
                <View>
                  <Text style={CropDetailText.guide_title}>Lighting</Text>
                  <Text style={CropDetailText.desc}>Maize require a small dry season to dry it.</Text>
                </View>
              </View>

              <View style={CropDetailBack.guide_row}>
                <View style={CropDetailBack.guide_icon}>
                   <Icon size={30} name="opacity" style={{color:"lightblue", marginRight: 10}}/>
                </View>
                <View>
                  <Text style={CropDetailText.guide_title}>Watering</Text>
                  <Text style={CropDetailText.desc}>Maize require a small dry season to dry it.</Text>
                </View>
              </View>

              <View style={CropDetailBack.guide_row}>
                <View style={CropDetailBack.guide_icon}>
                   <Icon size={30} name="wb-sunny" style={{color:"orange", marginRight: 10}}/>
                </View>
                <View>
                  <Text style={CropDetailText.guide_title}>Lighting</Text>
                  <Text style={CropDetailText.desc}>Maize require a small dry season to dry it.</Text>
                </View>
              </View>

              <View style={CropDetailBack.guide_row}>
                <View style={CropDetailBack.guide_icon}>
                   <Icon size={30} name="opacity" style={{color:"lightblue", marginRight: 10}}/>
                </View>
                <View>
                  <Text style={CropDetailText.guide_title}>Watering</Text>
                  <Text style={CropDetailText.desc}>Maize require a small dry season to dry it.</Text>
                </View>
              </View>


            </View>
          </View>

         
        </View>
        </ScrollView>
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


export default connect(mapStateToProps, actionToProps)(CropDetail);