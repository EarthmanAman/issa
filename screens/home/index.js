import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
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
  CROPS_ACTION,
  CROP_DETAIL_ACTION,
  MY_CROP_DETAIL_ACTION,
  CHEMICALS_ACTION,
} from "../../redux/redux_actions/actions"




class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      "double":[]
    }
  }

  handleMyCropsPressed = (crop) => {
    this.props.MY_CROP_DETAIL_ACTION(crop)
    this.props.navigation.navigate("MyCrop")
  }

  handleOtherCropsPressed = (crop) => {
    this.props.CROP_DETAIL_ACTION(crop)
    this.props.navigation.navigate("CropDetail")
  }
  componentDidMount = async () => {
    
    await this.props.MAIN_ACTION(this.props.user.id)
    await this.props.CROPS_ACTION()
    
    await this.props.CHEMICALS_ACTION()
    let crops = this.props.crops

    let newCrops = []
    for(let i=0; i < crops.length; i=i+2){
      let double = null;
     
        const nxt = i + 1
        double = {
          "first":crops[i],
          "second":crops[nxt],
        }

      newCrops = newCrops.concat(double)
    }

    this.setState({
      "double":this.state.double.concat(newCrops)
    })
  }

  render() {
   
   const first = this.props.main.main_schedule
   
    return (
        <View style={HomeBack.main}>
          <ScrollView>

          {first ?
            <View style={HomeBack.schedule}>
            <View style={HomeBack.schedule_words}>
              <View style={HomeBack.schedule_crop}>
                <Image source={`https://sfarmproject.herokuapp.com${first.schedule.crop.image}`} style={HomeBack.schedule_image}/>
                <Text>{first.schedule.crop.name}</Text>
              </View>
              <Text style={HomeText.schedule_title}>{first.schedule.name}</Text>
            </View>
            <View style={HomeBack.date_view}>
              <View style={HomeBack.date}>
                <Text style={HomeText.date}>{first.date.day}</Text>
                <Text style={HomeText.month}>{first.date.month}</Text>
                <Text style={HomeText.day}>{first.date.weekday}</Text>
              </View>
            </View>
          </View>: <Text style={{marginTop:20, fontSize:15, color:"brown", marginLeft: 40}}>No schedule to display</Text>
          }
        	

			<View style={HomeBack.my_crops}>
				<View>
					<Text style={HomeText.heading}>MY CROPS</Text>
				</View>

				<ScrollView horizontal={true}>

          {this.props.main.crops.length > 0 ?
          this.props.main.crops.map((crop) => 
            <TouchableOpacity 
              style={HomeBack.my_crop}
              onPress={() => this.handleMyCropsPressed(crop)}
            >
              <Image source={{uri: `https://sfarmproject.herokuapp.com${crop.crop.image}`}} style={HomeBack.my_crop_image}/>
              <Text style={HomeText.my_crop_title}>{crop.crop.name}</Text>
            </TouchableOpacity>

          ): <Text style={{marginTop:20, fontSize:15, color:"brown", marginLeft: 40}}>You have not selected any crop</Text>}
					
				</ScrollView>
			</View>	


      <View style={HomeBack.my_crops}>
        <View>
          <Text style={HomeText.heading}>CROPS</Text>
        </View>

        <ScrollView>

        {this.state.double.map((crop) => 
           <View style={HomeBack.other_crops_pair}>
           
            <TouchableOpacity 
              style={HomeBack.my_crop}
              onPress={() => this.handleOtherCropsPressed(crop.first)}
            >
              <Image source={{uri: crop.first.image}} style={HomeBack.other_crop_image}/>
              <Text style={HomeText.other_crop_title}>{crop.first.name}</Text>
            </TouchableOpacity>

            {crop.second !== undefined ? 
              <TouchableOpacity 
                style={HomeBack.my_crop}
                onPress={() => this.handleOtherCropsPressed(crop.second)}
              >
              <Image source={{uri: crop.second.image}} style={HomeBack.other_crop_image}/>
              <Text style={HomeText.other_crop_title}>{crop.second.name}</Text>
            </TouchableOpacity>: null
            }
            
          </View>
        )}
          
          <View style={{height:100, width:300}}>
                        
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
    main:state.listsReducer.main,
    crops: state.listsReducer.crops,
})

const actionToProps = {
  REGISTER_USER, 
  REGISTER_ERROR_REMOV,
  MAIN_ACTION,
  CROPS_ACTION,
  CROP_DETAIL_ACTION,
  MY_CROP_DETAIL_ACTION,
  CHEMICALS_ACTION,
}


export default connect(mapStateToProps, actionToProps)(HomeScreen);