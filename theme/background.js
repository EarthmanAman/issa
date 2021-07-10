import React, { Component } from 'react';
import {Dimensions, StyleSheet, StatusBar } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

let {height, width} = Dimensions.get('window')
let statusPerc = (StatusBar.currentHeight / height) * 100 + 2

export const StartBack = StyleSheet.create({
	main: {
		top: hp(statusPerc),
		height:hp("100%"),
		width:wp("100%"),
		backgroundColor:"whitesmoke",
	
		alignItems: "center",
		position: "relative",
	},

	image_view: {
		top: hp("5%"),
		height:hp("40%"),
		width:wp("100%"),
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
	},

	image: {
		height: hp("40%"),
		width: wp("70")

	},

	head: {
		marginTop: hp("5%"),
		width: wp("75%"),
		alignItems: "center",
		justifyContent: "center"
	},

	buttons: {
		flexDirection: "row",
		position: "relative",
		width: wp("70%"),
		bottom: -70,
	},

	sign_in: {
		width: wp("40%"),
		backgroundColor: "lightgreen",
		alignItems: "flex-end",
		justifyContent: "center",
		height: hp("5%"),
		marginLeft:wp("32%"),
		borderRadius: 10,
	},

	register: {
		position: "absolute",
		backgroundColor: "#888459",
		elevation: 1,
		height: hp("5%"),
		width: wp("35%"),
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	}

})


export const LoginBack = StyleSheet.create({
	main: {
		top: hp(statusPerc),
		height:hp("100%"),
		width:wp("100%"),
		backgroundColor:"whitesmoke",
	
		alignItems: "center",
		position: "relative",
	},

	topIcon: {
		width: wp("75%"),
		marginTop: hp("3%"),
		alignItems: "flex-start"
	},

	welcome: {
		width: wp("75%"),
		alignItems: "flex-start",
		marginTop: hp("2%"),
	},

	input: {
		width: wp("75%"),
		marginTop:wp("8%")
	},

	bottom: {
		position: "absolute",
		bottom: hp("15%"),
		alignItems: "center"
	},

	bottom_register: {
		flexDirection: "row",
		marginBottom:15,
	},

	sign_in_button: {
		width: wp("75%"),
		height:hp("5%"),
		borderRadius:10,
		backgroundColor: "#888459",
		alignItems:"center",
		justifyContent: "center",
	}

})


export const RegisterBack = StyleSheet.create({
	main: {
		top: hp(statusPerc),
		height:hp("100%"),
		width:wp("100%"),
		backgroundColor:"whitesmoke",
	
		alignItems: "center",
		position: "relative",
	},

	topIcon: {
		width: wp("75%"),
		marginTop: hp("3%"),
		alignItems: "flex-start"
	},

	welcome: {
		width: wp("75%"),
		alignItems: "flex-start",
		marginTop: hp("2%"),
	},

	input_field: {
		marginBottom:5, 
		backgroundColor:"#d8d4a6",
		height: hp("6%"),
	},
	input: {
		width: wp("75%"),
		marginTop:wp("8%")
	},

	bottom: {
		position: "absolute",
		bottom: hp("15%"),
		alignItems: "center"
	},

	bottom_register: {
		flexDirection: "row",
		marginBottom:15,
	},

	sign_in_button: {
		width: wp("75%"),
		height:hp("5%"),
		borderRadius:10,
		backgroundColor: "#888459",
		alignItems:"center",
		justifyContent: "center",
	}

})


export const HomeBack = StyleSheet.create({
	main: {
		
		height:hp("100%"),
		width:wp("100%"),
	
		alignItems: "center",

	},

	schedule: {
		height: hp("20%"),
		width: wp("90%"),
		backgroundColor: "#effcec",
		flexDirection: "row",
		borderRadius: 20,
		elevation: 1
	},

	schedule_words: {
		flex: 1,
		paddingVertical: 20,
		paddingHorizontal: 15
	},

	schedule_crop: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#ffffff",
		width: wp("30%"),
		paddingHorizontal: 5,
		paddingVertical:5,
		justifyContent: "center",
		borderRadius: 5,
		elevation: 1,
	},
	schedule_image: {
		height: 25,
		width: 25,
		borderRadius: 30,
		marginRight:10,
	},

	date_view: {
		flex: 0.5,
		alignItems: "center",
		justifyContent: "center",
	},

	date: {
		alignItems: "center",
		justifyContent: "center",
		height: hp("11%"),
		backgroundColor: "#ffffff",
		paddingHorizontal: 15,
		borderRadius: 10,
		elevation:5,
	},

	
	my_crops: {
		alignItems: "flex-start",
		width: wp("90%")
	}
})
