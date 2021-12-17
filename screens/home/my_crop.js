import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/MaterialIcons';  
import {connect} from "react-redux";

import {MyCropBack, CropDetailBack} from "../../theme/background"
import {HomeText} from "../../theme/text"

const screenWidth = Dimensions.get("window").width;

import Pie from "./pie"
import Table from "./table"
import Schedules from "../schedule/schedule"

class MyCropScreen extends Component {
  render() {
  	
  	const statistics = this.props.my_crop_detail.statistics
    return (
        <View style={MyCropBack.main}>
        	<ScrollView>

	        	<View style={MyCropBack.pie}>
	        		<TouchableOpacity 
			            style={MyCropBack.back}
			            onPress={() => this.props.navigation.goBack()}
			          >
			            <Icon name={"arrow-back"} size={20} style={{color: "#d7dcdf"}}/>
			          </TouchableOpacity>
			          
	        		<Pie complete={statistics.completed} uncomplete={statistics.uncompleted}/>
	        	</View>

	        	<View style={MyCropBack.table}>
					<Table statistics={statistics}/>
				</View>

				<View style={MyCropBack.schedules}>
					<Schedules navigation={this.props.navigation} schedules={this.props.my_crop_detail.schedule_dis}/>
				</View>
			</ScrollView>
		</View>
	        
    );
  }
}


const mapStateToProps = state => (

{
    user:state.loginReducer.user,
    my_crop_detail: state.listsReducer.my_crop_detail,
})

const actionToProps = {
  
}


export default connect(mapStateToProps, actionToProps)(MyCropScreen);