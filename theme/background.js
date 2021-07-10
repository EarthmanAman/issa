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
		width: wp("90%"),
		marginVertical: hp("2%"),
	},

	my_crop: {
		backgroundColor: "#ffffff",
		width: wp("40%"),
		height: hp("20%"),
		alignItems: "center",
		borderRadius: 10,
		elevation: 2,
		marginRight: wp("3%"),
		position: "relative",
	},

	my_crop_image: {
		width: wp("40%"),
		height: hp("20%"),
		borderRadius: 10,
		opacity: 0.8,
	},

	other_crop_image: {
		width: wp("35%"),
		height: hp("14%"),
		marginVertical: hp("1%"),
		borderRadius: 10,
		opacity: 0.8,
	},

	other_crops_pair: {
		flexDirection: "row",
		marginBottom: 10,
	},

	
})


export const CropDetailBack = StyleSheet.create({
	main: {
		height:hp("100%"),
		width:wp("100%"),
	
		alignItems: "center",
		backgroundColor: "#ffffff"

	},

	crop_detail_image_view: {
		width: wp("100%"),
		height: hp("40%"),
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
	},

	crop_detail_image: {
		width: wp("100%"),
		height: hp("40%"),
		borderRadius: 20,
	},

	crop_detail_content: {
		width: wp("100%"),
		height: hp("60%"),
		elevation: 1,
		borderRadius: 20,
		backgroundColor: "#ffffff",
	},

	title: {
		marginVertical: hp("2%"),
		paddingHorizontal: wp("7%"),

	},

	guide: {
		marginVertical: hp("2%"),
		paddingHorizontal: wp("7%"),
		
	},

	guide_row: {
		flexDirection: "row",
		padding: 20,
		backgroundColor: "whitesmoke",
		borderRadius: 5,
		elevation: 0.5,
		marginVertical: hp("1%"),
	},

	guide_icon: {
		width: wp("10%"),
		alignItems: "center",
		justifyContent: "center",
	},

	add_view: {
		width: wp("100%"),
		alignItems: "center",
		position: "absolute",
		elevation: 5
	},

	add: {
		width: wp("30%"),
		height: hp("5%"),
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		elevation: 5
	},

	back: {
		width: wp("10%"),
		height: hp("4%"),
		backgroundColor: "#0e6416",
		padding: 10,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		left: wp("10%"),
		elevation:10,
		top: hp("8%"),
	},
	
})