import * as React from 'react';
import {View, Text, TouchableOpacity} from "react-native"
import { DataTable } from 'react-native-paper';
import {connect} from "react-redux";
import {ProfileBack} from "../../theme/background"
import {ProfileText} from "../../theme/text"
import CHANGE_PASSWORD from "./change_password"
import EDIT_INFO from "./edit_info"

class TableScreen extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			passwordDialog: false,
			editDialog: false,
		}
	}

	handlePasswordPress = (success=false) => {
		if(success){
			console.log("insuccess")
			this.setState({
				editDialog: !this.state.editDialog,
			})
			this.props.navigation.navigate("Home")
		}else{

		}

		this.setState({
			editDialog: !this.state.editDialog,
		})
	}

	handleEditPress = (success=false) => {
		if(success){

		}else{

		}

		this.setState({
			editDialog: !this.state.editDialog,
		})
	}

  render(){
  	const data = this.props.user.data

    return (
    <View style={ProfileBack.main}>
    	
    	{this.state.editDialog ? <EDIT_INFO navigation={this.props.navigation} handlePasswordPress={this.handlePasswordPress} dialogVisible={this.state.editDialog}/>: null}
    	<View>
    		<View>
				<Text style={ProfileText.heading}>Personal Info</Text>
			</View>
    	
	    	 <DataTable>
		      <DataTable.Header>
		        <DataTable.Title>Field</DataTable.Title>
		        <DataTable.Title>Value</DataTable.Title>
		      </DataTable.Header>

		      <DataTable.Row>
		        <DataTable.Cell>First Name</DataTable.Cell>
		        <DataTable.Cell>{data.first_name}</DataTable.Cell>
		      </DataTable.Row>

		      <DataTable.Row>
		        <DataTable.Cell>Last Name</DataTable.Cell>
		        <DataTable.Cell>{data.last_name}</DataTable.Cell>
		        
		      </DataTable.Row>

		      <DataTable.Row>
		        <DataTable.Cell>Email</DataTable.Cell>
		        <DataTable.Cell>{data.email}</DataTable.Cell>
		        
		      </DataTable.Row>
		    
		     </DataTable>

		     <View style={ProfileBack.buttons}>
		     	<TouchableOpacity 
		     		style={ProfileBack.edit_button}
		     		onPress={this.handleEditPress}
		     	>
		     		<Text>Change Password</Text>
		     	</TouchableOpacity>
		     	
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
}


export default connect(mapStateToProps, actionToProps)(TableScreen);