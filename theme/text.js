import React, { Component } from 'react';
import {Dimensions, StyleSheet, StatusBar } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

let {height, width} = Dimensions.get('window')
let statusPerc = (StatusBar.currentHeight / height) * 100 + 2

export const StartText = StyleSheet.create({
	head: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		color: "#0e6416",
	},

	desc: {
		fontSize: 15,
		textAlign: "center",
		marginTop: 15,
		lineHeight: 20,
		color: "#5f5a4a",
	},

	sign_in: {
		marginRight: wp("12%"),
		fontWeight: "bold",
		color: "brown",
	},

	register: {
		fontWeight: "bold",
		color: "#09200d",
	},

	welcome_top: {
		fontWeight: "bold",
		fontSize: 22,
	}
})


export const LoginText = StyleSheet.create({

	welcome_top: {
		fontWeight: "bold",
		fontSize: 30,
		color: "#09200d",
	},

	welcome_others: {
		fontSize:20,
		marginTop:10,
	},

	register: {
		fontWeight: "bold",
		color: "#0e6416"
	},

	error: {
		color: "brown",
		marginBottom: 10,
	}
})

export const RegisterText = StyleSheet.create({

	welcome_top: {
		fontWeight: "bold",
		fontSize: 30,
		color: "#09200d",
	},

	welcome_others: {
		fontSize:20,
		marginTop:10,
	},

	register: {
		fontWeight: "bold",
		color: "#0e6416"
	},

	error: {
		color: "brown",
		marginBottom: 10,
	}
})


export const HomeText = StyleSheet.create({

	schedule_title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#09200d",
		marginTop:15
	},

	date: {
		fontWeight: "bold",
		color: "#bcc4c9"
	},

	month: {
		fontWeight: "bold",
		color: "#bcc4c9",
		borderBottomWidth: 2,
		marginBottom: 10,
		paddingBottom:3,
	},

	day: {
		fontWeight: "bold"
	},

	heading: {
		fontWeight: "bold",
		marginTop: 10,
		marginBottom: 20
	},

	other_crop_title: {
		fontWeight: "bold",
	},

	my_crop_title: {
		fontWeight: "bold",
		color: "#888459",
		position: "absolute",
		top: wp("5%"),
		fontSize: 20,
	}

})

export const CropDetailText = StyleSheet.create({

	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#09200d",
		marginBottom: hp("1%"),
	},

	desc: {
		fontSize: 13,
		color: "#bcc4c9",
		lineHeight: 25,
	},

	guide_title: {
		fontSize:15,
		fontWeight: "bold",
		marginBottom: 5
	}
})


