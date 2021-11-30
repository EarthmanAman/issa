import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import { Input, Button, Center, NativeBaseProvider } from "native-base"
import {connect} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';
import DatePicker from 'react-native-datepicker'
import {CropDetailBack} from "../../theme/background"
import {CropDetailText} from "../../theme/text"

import {
  REGISTER_USER,
  REGISTER_ERROR_REMOV,
  MAIN_ACTION,
  CROP_ADD_ACTION
} from "../../redux/redux_actions/actions"

class CropDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:null,
      added_success: false,
      spinner: false
    }
  }

  UNSAFE_componentWillReceiveProps = async (nextProps) => {
    
    if(nextProps.crop_add){
      if(nextProps.crop_add.status == 201){

        await this.props.MAIN_ACTION(nextProps.user.id)
        console.log("success")
        this.setState({
          spinner:false,
          date: null,
          added_success: true,
        })
        return

      }
    }
    this.setState({
        spinner: false,
        added_success:false
      })
    return
  }

  handleSubmit = async () => {
    const {date} = this.state
    if(date!==null){
      await this.props.CROP_ADD_ACTION(this.props.user.id, this.props.crop_detail.id, date)
      this.setState({spinner:true})
    }
  }

  handleBack = () => {
    this.props.MAIN_ACTION(this.props.user.id)
    this.props.navigation.goBack()
  }

  render() {

    console.log(this.props.crop_add)
    return (
    <View style={CropDetailBack.main}>


      <ScrollView>
        <View style={CropDetailBack.crop_detail_image_view}>
          <Image source={{uri: this.props.crop_detail.image}} style={CropDetailBack.crop_detail_image}/>
           <View style={CropDetailBack.add_view}>
              <DatePicker
              style={{width: 300}}
              date={this.state.date}
              mode="date"
              placeholder="Select the start date"
              format="YYYY-MM-DD"
              minDate="2020-11-01"
              maxDate="2100-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 0,
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  backgroundColor: "white",
                  marginBottom: 10,

                },
                dateText: {
                  color: "#a8aaae",
                  position: "absolute",
                  left: 5,
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({date: date})}}
              
            />
            <TouchableOpacity onPress={this.handleSubmit} style={CropDetailBack.add}>
              <Text>ADD</Text>
            </TouchableOpacity>
          </View>

          {this.state.added_success ? <Text style={{position: "absolute", top:100, color:"green", fontWeight:"bold"}}>Added successful</Text>:null}
          <TouchableOpacity 
            style={CropDetailBack.back}
            onPress={this.handleBack}
          >
            <Icon name={"arrow-back"} size={20} style={{color: "#d7dcdf"}}/>
          </TouchableOpacity>
        </View>  	

        <ScrollView>
        <View style={CropDetailBack.crop_detail_content}>
          <View style={CropDetailBack.title}>
            <Text style={CropDetailText.title}>{this.props.crop_detail.name}</Text>
            <Text style={CropDetailText.desc}>{this.props.crop_detail.desc}</Text>
          </View>

          <View style={CropDetailBack.guide}>
            <Text style={CropDetailText.title}>Quick Guide</Text>
            <View>
              {this.props.crop_detail.quick_guides.map((quick_guide) =>

                <View style={CropDetailBack.guide_row}>
                  <View style={CropDetailBack.guide_icon}>
                     <Icon size={30} name={quick_guide.icon} style={{color:"orange", marginRight: 10}}/>
                  </View>
                  <View>
                    <Text style={CropDetailText.guide_title}>{quick_guide.name}</Text>
                    <Text style={CropDetailText.desc}>{quick_guide.desc}</Text>
                  </View>
                </View>
              )}


            </View>
          </View>

         
        </View>
        </ScrollView>
      </ScrollView>

      <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={{color: '#FFF'}}
          />
		</View>
	        
    );
  }
}

const mapStateToProps = state => (

{
    user:state.loginReducer.user,
    crop_detail:state.listsReducer.crop_detail,
    crop_add:state.listsReducer.crop_add,
})

const actionToProps = {
  REGISTER_USER, 
  REGISTER_ERROR_REMOV,
  MAIN_ACTION,
  CROP_ADD_ACTION,
}


export default connect(mapStateToProps, actionToProps)(CropDetail);