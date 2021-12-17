import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import { Input, Button, Center, NativeBaseProvider } from "native-base"
import {connect} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';

import {RegisterBack} from "../theme/background"
import {RegisterText} from "../theme/text"

import {
  REGISTER_USER,
  REGISTER_ERROR_REMOV,
  MAIN_ACTION,
} from "../redux/redux_actions/actions"


class RegisterScreen extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		username: null,
      first_name: null,
      last_name:null,
      email:null,
  		password:null,
      confirm_password:null,
  		show: false,
  		spinner: false,

      empty: false,
  		phone_no_error:null,
      last_name_error:null,
      first_name_error:null,
      password_error:null,
  	}
  }

  UNSAFE_componentWillReceiveProps = async (nextProps) => {
    
    if(nextProps.user){
      if(nextProps.user.token){

      	await this.props.MAIN_ACTION(nextProps.user.id)
        this.setState({
        	spinner:false,
        	username: null,
        	password:null
        })
        this.props.navigation.navigate("Login")
      }
    }
    this.setState({
        spinner: false,
        
      })
  }

  handleSubmit = async () => {
  	let username = this.state.username
    let first_name = this.state.first_name
    let last_name = this.state.last_name
    let email = this.state.email
  	let password = this.state.password
    let confirm_password = this.state.confirm_password
    let error = false

  	if(username == null || username=="" || password == null || password=="" || first_name == null || first_name=="" || last_name == null || last_name=="" || email == null || email=="" || confirm_password == null || confirm_password==""){
  		this.setState({
  			empty: true,
  		})
  		return
  	}

    if(username.toString().length == 11){
      this.setState({
        phone_no_error:"Phone number cannot be less than 10 digits"
      })
      error = true
    }
    if(isNaN(username) == true ){
      this.setState({
        phone_no_error:"Must be a number"
      })
      error = true
    }

    if(isNaN(last_name) == false || isNaN(last_name[0]) == false){
      this.setState({
        last_name_error:"Cannot be a number or start with a number"
      })
      error = true
    }

    if(isNaN(first_name) == false || isNaN(first_name[0]) == false){
      this.setState({
        first_name_error:"Cannot be a number or start with a number"
      })
      error = true
    }

    if(password !== confirm_password){
      this.setState({
        password_error:"Passwords must match"
      })
      error = true
    }

    if(error == true){
      return
    }
  	this.setState({
      spinner: true,
    })
    
    await this.props.REGISTER_USER(username,first_name, last_name, email, password)
  }

  componentDidMount = async() => {
  	this.props.REGISTER_ERROR_REMOV()
  }
  render() {
    
    return (
        <View style={RegisterBack.main}>
			<View style={RegisterBack.topIcon}>
				<Icon size={27} style={{color:"#0e6416"}} name={'favorite'}/>
			</View>
			<View style={RegisterBack.welcome}> 
				<Text style={RegisterText.welcome_top}>Let's sign you up.</Text>
			</View>
      <ScrollView>
			<View style={RegisterBack.input}>
				{this.props.errors ? <Text style={RegisterText.error}></Text>: null}
        {this.state.empty ? <Text style={RegisterText.error}>All the fields must be filled correctly</Text>: null}

        <Text>First Name</Text>
        {this.state.first_name_error ? <Text style={RegisterText.error}>{this.state.first_name_error}</Text>: null}
        <Input
		          variant="filled"
		          
		          defaultValue={this.state.first_name}
		          style={RegisterBack.input_field}
		          onChangeText={(text) => this.setState({first_name:text, empty:false})}
		        />

          <Text>Last Name</Text>
        {this.state.last_name_error ? <Text style={RegisterText.error}>{this.state.last_name_error}</Text>: null}
          <Input
              variant="filled"
              
              defaultValue={this.state.last_name}
              style={RegisterBack.input_field}
              onChangeText={(text) => this.setState({last_name:text, empty:false})}
            />

            <Text>Phone number</Text>
            {this.state.phone_no_error ? <Text style={RegisterText.error}>{this.state.phone_no_error}</Text>: null}
            <Input
              variant="filled"
              
              defaultValue={this.state.username}
              style={RegisterBack.input_field}
              onChangeText={(text) => this.setState({username:text, username_empty:null, empty:false})}
            />

            <Text>Email</Text>
            <Input
              variant="filled"
              
              defaultValue={this.state.email}
              style={RegisterBack.input_field}
              onChangeText={(text) => this.setState({email:text, empty:false})}
            />

		        {this.state.password_empty ? <Text style={RegisterText.error}>Password cannot be empty</Text>: null}
          <Text>Password</Text>
            {this.state.password_error ? <Text style={RegisterText.error}>{this.state.password_error}</Text>: null}
				 <Input
				  variant="filled"
				  defaultValue={this.state.password}
			      type={this.state.show ? "text" : "password"}
			      InputRightElement={
			        <Button 
                ml={1} 
                roundedLeft={0} 
                roundedRight="md" 
                onPress={() => this.setState({show:!this.state.show})} 
                style={RegisterBack.input_field}>
			          {this.state.show ? <Icon size={20} name="visibility-off"/> : <Icon size={20} name="visibility"/>}
			        </Button>
			      }
			      style={RegisterBack.input_field}
			      
			      onChangeText={(text) => this.setState({password:text, password_empty:false, empty:false})}
			    />

          <Text>Confirm Password</Text>
          <Input
          variant="filled"
          defaultValue={this.state.confirm_password}
            type={this.state.show ? "text" : "password"}
            InputRightElement={
              <Button 
                ml={1} 
                 roundedLeft={0} 
                 roundedRight="md" 
                 onPress={() => this.setState({show:!this.state.show})} 
                 style={RegisterBack.input_field}>
                {this.state.show ? <Icon size={20} name="visibility-off"/> : <Icon size={20} name="visibility"/>}
              </Button>
            }
            style={RegisterBack.input_field}
            
            onChangeText={(text) => this.setState({confirm_password:text, password_empty:false, empty:false})}
          />
			</View>
      </ScrollView>

			<View style={RegisterBack.bottom}>
				<View style={RegisterBack.bottom_register}>
					<Text>Already have an account? </Text>
					<TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
						<Text style={RegisterText.register}>Login</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity 
					style={RegisterBack.sign_in_button}
					onPress = {this.handleSubmit}
				>
					<Text>Sign up</Text>
				</TouchableOpacity>
			</View>

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
    errors:(state.loginReducer.registerError) ? state.loginReducer.registerError.main: null,
})

const actionToProps = {
  REGISTER_USER, 
  REGISTER_ERROR_REMOV,
  MAIN_ACTION,
}


export default connect(mapStateToProps, actionToProps)(RegisterScreen);