import React, { Component } from 'react';
import { Dimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import {Container, Header, Body, Content} from "native-base"
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

class custom extends Component {
	render(){
		return(
			 <Container>
			    <Header style={{backgroundColor:"lightblue", height:150}}>
			      <Body style={{margin:20, width:200, height:60, flexDirection: "row", alignItems:"center", justifyContent:"space-between"}}>
			        
			          <Image source={require("../assets/login.png")} style={{height:100, width:100, borderRadius:100}}/>
			          <TouchableOpacity style={{marginTop:5, width:90, height:30, alignItems:"center", justifyContent:"center", borderRadius:5, backgroundColor:"brown"}}>
			            <Text style={{color:"#FFFFFF"}}>Log out</Text>
			          </TouchableOpacity>
			      </Body>
			    </Header>
			    <Content>
			      <DrawerItems {...this.props} />
			    </Content>
			  </Container>
		)
	}
}

export default custom