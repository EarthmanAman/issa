import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';



export default class ScheduleScreen extends Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let year = today.getFullYear()
    let month = today.getMonth()+1
    let day = today.getDate();
    if (month < 10){
      month = "0" + month.toString()
    } 

    if (day < 10){
      day = "0" + day.toString
    }

    let date = year + "-" + month + "-" + day
    this.state = {
      date: "",
    };
  }

  

  handleChemPress = () => {
    this.props.navigation.navigate("IndvChemical")
  }
  render() {
    
    return (
      <Agenda
        items={this.props.schedules}
        
        selected={this.state.date}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
    );
  }

  renderItem = (item) => {
    return (
      <View>
      {item.is_chemical == true ?
      <TouchableOpacity

        style={[styles.item]}
        onPress={this.handleChemPress}
      >
        <Text style={{fontWeight:"bold", marginBottom:10, color:"green"}}>{item.crop}</Text>
        <Text style={{fontWeight: "bold", marginBottom:5}}>{item.name}</Text>
        <Text>{item.activity}</Text>
      </TouchableOpacity>:  

      <TouchableOpacity

        style={[styles.item]}
      >
        <Text style={{fontWeight:"bold", marginBottom:10, color:"green"}}>{item.crop}</Text>
        <Text style={{fontWeight: "bold", marginBottom:5}}>{item.name}</Text>
        <Text>{item.activity}</Text>
      </TouchableOpacity>}
      </View>
    );
  }

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  }

  
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    height: 150,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },

  crop_title:{
    color: "green",
    fontWeight: "bold"
  }
});