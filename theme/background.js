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
		marginTop: hp("2%"),
		alignItems: "flex-start"
	},

	welcome: {
		width: wp("75%"),
		alignItems: "flex-start",
		marginTop: hp("0.5%"),
	},

	input_field: {
		marginBottom:5, 
		backgroundColor:"#d8d4a6",
		height: hp("4%"),
	},
	input: {
		width: wp("75%"),
		marginTop:wp("3%")
	},

	bottom: {
		position: "absolute",
		bottom: hp("25%"),
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


export const MyCropBack = StyleSheet.create({
	main: {
		marginTop: statusPerc + hp("8%"),
		alignItems: "center"
	},

	pie: {
		marginBottom: hp("2%"),
		width: wp("90%"),
		backgroundColor: "#bcc4c9",
		paddingVertical: hp("2%"),
		borderRadius: 10

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
		left: wp("5%"),
		elevation:10,
		top: hp("1%"),
	},

	table: {
		marginBottom: hp("2%"),
		width: wp("90%"),

	},

	schedules: {
		width: wp("90%"),
		height: hp("40%"),
	}
})

export const PieBack = StyleSheet.create({
	legends: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",

	},

	legend: {
		flexDirection: "row",
		marginRight: wp("5%"),
		alignItems: "center",
	},

	completed_view: {
		width: wp("4%"),
		height: wp("4%"),
		backgroundColor: "green",
		marginRight: wp("2%"),
	},
	uncompleted_view: {
		width: wp("4%"),
		height: wp("4%"),
		backgroundColor: "red",
		marginRight: wp("2%"),
	}
})


export const IndvChemicalBack = StyleSheet.create({
	main:{
		alignItems: "center",
		top: statusPerc + hp("10%"),
	},

	video: {
		width: wp("90%"),
		height: hp("26%"),
	},

	instructions: {
		width: wp("80%"),
		
	},

	guide: {
		marginVertical: hp("1%"),
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
})



export const ChemicalBack = StyleSheet.create({
	main: {
		
		height:hp("100%"),
		width:wp("100%"),
		paddingHorizontal: wp("5%")

	},

	my_chem: {
		width: wp("35%"),
		position: "relative",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		paddingBottom: 20,
		marginRight: 10,
		marginBottom: 10
	},
	my_chem_image: {
		width: wp("25%"),
		height: hp("8%"),
		marginTop: 20,
		marginBottom: 10,
		borderRadius: 5,
	},

	others: {
		marginTop: hp("2%"),
	},

	other: {
		flexDirection: "row",
	},
	other_chem: {
		width: wp("42%"),
		position: "relative",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		paddingBottom: 20,
		marginRight: 10,
		marginBottom: 10
	},

	other_chem_image: {
		width: wp("35%"),
		height: hp("13%"),
		marginTop: 20,
		marginBottom: 10,
		borderRadius: 5,
	},
	
})


export const ProfileBack = StyleSheet.create({
	main: {
		
		height:hp("100%"),
		width:wp("100%"),
		paddingHorizontal: wp("5%"),
		position: "relative"

	},

	buttons: {
		width: wp("90%"),
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	
	edit_button: {
		paddingHorizontal: 30,
		paddingVertical:5,
		backgroundColor: "lightblue",
		marginHorizontal: 10,
		marginVertical: 15,
		borderRadius: 5,
	},

	password_button: {
		paddingHorizontal: 30,
		paddingVertical:5,
		backgroundColor: "skyblue",

		marginVertical: 15,
		borderRadius: 5,
	},
})

export const SearchBack = StyleSheet.create({
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
		width: wp("60%"),
		height:hp("5%"),
		marginRight: 8,
		backgroundColor: "grey",
		paddingHorizontal: 15,
		borderRadius: 5
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

	button: {
		width: wp("20%"),
		height:hp("5%"),
		borderRadius:10,
		backgroundColor: "#888459",
		alignItems:"center",
		justifyContent: "center",
	},

	search: {
		flexDirection: "row",
		marginBottom: 20
	}

})