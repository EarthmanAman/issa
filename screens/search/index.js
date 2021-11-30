import React, {Component} from 'react';
import {Alert, Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { Input, Button, Center, NativeBaseProvider } from "native-base"
import {Agenda} from 'react-native-calendars';
import {connect} from "react-redux";

import {SearchBack, HomeBack} from "../../theme/background"
import {HomeText} from "../../theme/text"
import {
  CROP_DETAIL_ACTION,
} from "../../redux/redux_actions/actions"


class ScheduleScreen extends Component {

	constructor(props){
		super(props)
		this.state = {
			double: [],
			search_value: null,
			no_value: false,
		}
	}

	handleSearch = () => {
		let crops = this.props.crops
		this.setState({double:[], no_value:false})
		const updatedData = crops.filter((item) => {
	      const item_data = `${item.name.toUpperCase()})`;
	      const text_data = this.state.search_value.toUpperCase();
	      return item_data.indexOf(text_data) > -1;
	    });

	    if (updatedData.length > 0){
	    	
	    	this.createDouble(updatedData)
	    }else{
	    	this.setState({no_value:true})
	    }
	    
	}

	createDouble = (crops) => {
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
	      "double": newCrops,
	      "no_value":false
	    })
	}

	handleTextChange = (text) => {

		if (text.length < 1 && this.state.search_value != null){
			this.createDouble(this.props.crops)
		}else {
			this.setState({search_value:text})
		}
	}

	handleOtherCropsPressed = (crop) => {
	    this.props.CROP_DETAIL_ACTION(crop)
	    this.props.navigation.navigate("CropDetail")
	  }
  componentDidMount = () => {
  	 	let crops = this.props.crops
  	 	this.createDouble(crops)
	   
  }
  render() {
    
    return (
    	
      <View style={SearchBack.main}>

      	<View style={SearchBack.search}>
      		<TextInput
      			  style={SearchBack.input}
		          variant="filled"
		          placeholder="Search..."
		          
		          onChangeText={(text) => this.handleTextChange(text)}
		        />

		     <TouchableOpacity 
		     	style={SearchBack.button}
		     	onPress = {this.handleSearch}
		     >
		     	<Text>Search</Text>
		     </TouchableOpacity>
      	</View>
      	{this.state.no_value ? 
      	<View style={{justifyContent:"center", marginTop:50}}>
      		<Text style={{color:"brown"}}>No result Found</Text>
      	</View>: null}
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
          
          
        </ScrollView>

      </View>
     
    );
  }

  
}

const mapStateToProps = state => (

{
    main:state.listsReducer.main,
    crops: state.listsReducer.crops,
})

const actionToProps = {
  CROP_DETAIL_ACTION,
}


export default connect(mapStateToProps, actionToProps)(ScheduleScreen);