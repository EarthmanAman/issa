import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {connect} from "react-redux";
import Schedules from "./schedule"

class ScheduleScreen extends Component {
  
  render() {
    console.log(this.props.main.schedule_dis)
    return (
    	
      <Schedules navigation={this.props.navigation} schedules={this.props.main.schedule_dis}/>
     
    );
  }

  
}

const mapStateToProps = state => (

{
    main:state.listsReducer.main,
})

const actionToProps = {
  
}


export default connect(mapStateToProps, actionToProps)(ScheduleScreen);