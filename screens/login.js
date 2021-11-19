import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import { Input, Button, Center, NativeBaseProvider } from "native-base"
import {connect} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';

import {LoginBack} from "../theme/background"
import {LoginText} from "../theme/text"

import {
  LOGIN_USER, 
  LOGIN_ERROR_REMOV,
  MAIN_ACTION,
} from "../redux/redux_actions/actions"


class LoginScreen extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		username: null,
  		password:null,
  		show: false,
  		spinner: false,

  		username_empty:false,
  		password_empty: false,
  	}
  }

  UNSAFE_componentWillReceiveProps = async (nextProps) => {
    
    if(nextProps.user){
      if(nextProps.user.token){

      	await this.props.MAIN_ACTION(nextProps.user.id)
      	console.log("success")
        this.setState({
        	spinner:false,
        	username: null,
        	password:null
        })

        this.props.navigation.navigate("Other")
        return

      }
    }
    this.setState({
        spinner: false,
        
      })
    return
  }

  handleSubmit = async () => {
  	let username = this.state.username
  	let password = this.state.password
  	let error = false
  	if(username == null || username==""){
  		this.setState({
  			username_empty: true,
  		})
  		error = true
  	}

  	if(password == null || password==""){
  		this.setState({
  			password_empty: true,
  		})
  		error = true
  	}

  	if(error == true){
  		return
  	}
  	this.setState({
      spinner: true,
    })
    
    await this.props.LOGIN_USER(username, password)
  }

  componentDidMount = async() => {
  	this.props.LOGIN_ERROR_REMOV()
  	
  }
  render() {

    return (
        <View style={LoginBack.main}>
			<View style={LoginBack.topIcon}>
				<Icon size={27} style={{color:"#0e6416"}} name={'favorite'}/>
			</View>
			<View style={LoginBack.welcome}> 
				<Text style={LoginText.welcome_top}>Let's sign you in.</Text>
				<Text style={LoginText.welcome_others}>Welcome back.</Text>
				<Text style={LoginText.welcome_others}>You've been missed!</Text>
			</View>

			<View style={LoginBack.input}>
				{this.props.errors ? <Text style={LoginText.error}>{this.props.errors}</Text>: null}

				{this.state.username_empty ? <Text style={LoginText.error}>Username cannot be empty</Text>: null}
				<Input
		          variant="filled"
		          placeholder="Phone number"
		          defaultValue={this.state.username}
		          style={{marginBottom:13, backgroundColor:"#d8d4a6"}}
		          onChangeText={(text) => this.setState({username:text, username_empty:false})}
		        />

		        {this.state.password_empty ? <Text style={LoginText.error}>Password cannot be empty</Text>: null}
				 <Input
				  variant="filled"
				  defaultValue={this.state.password}
			      type={this.state.show ? "text" : "password"}
			      InputRightElement={
			        <Button ml={1} roundedLeft={0} roundedRight="md" onPress={() => this.setState({show:!this.state.show})} style={{backgroundColor:"#d8d4a6"}}>
			          {this.state.show ? <Icon size={20} name="visibility-off"/> : <Icon size={20} name="visibility"/>}
			        </Button>
			      }
			      style={{backgroundColor:"#d8d4a6"}}
			      placeholder="Password"
			      onChangeText={(text) => this.setState({password:text, password_empty:false})}
			    />
			</View>

			<View style={LoginBack.bottom}>
				<View style={LoginBack.bottom_register}>
					<Text>Don't have an account? </Text>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate("Register")}
					>
						<Text style={LoginText.register}>Register</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity 
					style={LoginBack.sign_in_button}
					onPress = {this.handleSubmit}
				>
					<Text>Sign in</Text>
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
    main:state.listsReducer.main,
    errors:(state.loginReducer.loginError) ? state.loginReducer.loginError.main: null,
})

const actionToProps = {
  LOGIN_USER, 
  LOGIN_ERROR_REMOV,
  MAIN_ACTION,
}


export default connect(mapStateToProps, actionToProps)(LoginScreen);