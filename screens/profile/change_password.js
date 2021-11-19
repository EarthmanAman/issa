import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {connect} from "react-redux";
import { Container, Header, Content, Form, Item, Input, Label, CheckBox, Picker, Icon} from 'native-base';
import Dialog from "react-native-dialog";

import Spinner from 'react-native-loading-spinner-overlay';

import {RegisterBack, ProfileBack} from "../../theme/background"
import {RegisterText} from "../../theme/text"
import {CHANGE_PASSWORD_ACTION} from "../../redux/redux_actions/actions"

class CHANGE_PASSWORD extends Component {
	constructor(props){
		super(props)
		this.state = {
			dialogVisible: props.dialogVisible,
			old_pass: null,
			new_pass:null,

			grade: null,

			old_pass_error:false,
			mismatch:false,
			new_pass_error:false,
			null_field: false,
			register:false,
			spinner:false,

		}
	}

	 handleSubmit = async() => {
	  	const new_pass = this.state.new_pass
	  	const old_pass = this.state.old_pass
	  	const confirm_new_pass = this.state.confirm_new_pass
	  	let error = false
	  	if(new_pass == null || old_pass == null || confirm_new_pass == null){
	  		this.setState({null_field:true})
	  		return
	  	}

	  	if(new_pass.length < 6){
	  		this.setState({
	  			new_pass_error:true
	  		})
	  		return
	  	}

	  	if (new_pass != confirm_new_pass) {
	  		this.setState({
	  			mismatch:true
	  		})
	  		return
	  	}


	  	this.setState({spinner:true})
	  	await this.props.CHANGE_PASSWORD_ACTION(this.props.user.id, old_pass, new_pass)
	
	  }

	  handleCancel = () => {
	    this.setState({
	      dialogVisible:false,
	    })
	    return this.props.handlePasswordPress()
	  }

	 UNSAFE_componentWillReceiveProps = async (nextProps) => {
    
	    if(nextProps.change_password){
	    	if(nextProps.change_password.code !== 200){
	    		this.setState({
	    			old_pass_error:true,
	    			spinner:false,
	    		})
	    		return
	    	}

	   
	      this.setState({
	        spinner: false,
	      })
	      
	       this.props.handlePasswordPress(true)
	    }
	    
	  }

	render() {
		
	    return (
	        <Container style={RegisterBack.main}>
	        	

					<Dialog.Container 
	                    visible={this.state.dialogVisible}
	                    contentStyle={{backgroundColor: "whitesmoke", borderRadius:10, elevation:5, borderWidth:1, borderColor:"grey"}}>
	                    <Dialog.Title style={{color:"#5766CE", fontWeight:"bold", textAlign:"center"}}>Change Password</Dialog.Title>
	                      
	       
	                   
	                   {this.state.null_field ? <Text style={{color:"brown"}}>All the fields must be filled</Text>:null}
	                   <View style={{marginBottom:10}}>
                           <Text style={{color:"#535461", fontWeight:"bold", marginBottom:10}}>Old Password</Text>
                           {this.state.old_pass_error ? <Text style={{color:"brown"}}>Wrong Password</Text>:null}
                           <TextInput 
		  		    			style={RegisterBack.input_field}
		  		    			placeholder={"Old Password"}
		  		    			placeholderTextColor={"white"}
		  		    		  	
		               			onChangeText = {(value)=> this.setState({old_pass:value, null_field:false})}
		  		    		/>
                        </View>
	                   <View style={{marginBottom:10}}>
                           <Text style={{color:"#535461", fontWeight:"bold", marginBottom:10}}>New Password</Text>
                           {this.state.new_pass_error ? <Text style={{color:"brown"}}>Password must be more than 6 characters</Text>:null}
                           <TextInput 
		  		    			style={RegisterBack.input_field}
		  		    			placeholder={"New Password"}
		  		    			placeholderTextColor={"white"}
		  		    		  	secureTextEntry={true}
		               			onChangeText = {(value)=> this.setState({new_pass:value, null_field:false, new_pass_error:false})}
		  		    		/>
                        </View>
                        <View style={{marginBottom:10}}>
                           <Text style={{color:"#535461", fontWeight:"bold", marginBottom:10}}>Confirm New Password</Text>
                           {this.state.mismatch ? <Text style={{color:"brown"}}>The password do not match</Text>:null}
                           <TextInput 
		  		    			style={RegisterBack.input_field}
		  		    			placeholder={"New Password"}
		  		    			placeholderTextColor={"white"}
		  		    		  	secureTextEntry={true}
		               			onChangeText = {(value)=> this.setState({confirm_new_pass:value, null_field:false, mismatch:false})}
		  		    		/>
                        </View>
	
	
	                      

	                     
	                    <Dialog.Button label="Cancel" onPress={this.handleCancel} style={{color:"black"}}/>
	                    <Dialog.Button label="Change" onPress={this.handleSubmit} style={{color:"blue"}}/>

	                    <Spinner
	                      visible={this.state.spinner}
	                      textContent={'Loading...'}
	                      textStyle={{color: '#FFF'}}
	                    />
	                  </Dialog.Container>

                

				
			</Container>
		        
	    );
    }
}



const mapStateToProps = state => (

{
    change_password:state.loginReducer.change_password,
    user:state.loginReducer.user,
})

const actionToProps = {
  CHANGE_PASSWORD_ACTION,
}


export default connect(mapStateToProps, actionToProps)(CHANGE_PASSWORD);