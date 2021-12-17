import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";

import {ChemicalBack} from "../../theme/background"
import {ChemicalText} from "../../theme/text"
import {
  CHEMICAL_DETAIL_ACTION,
} from "../../redux/redux_actions/actions"



class ChemicalScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            double: [],
        }
    }

    handlePressed = (chemical) => {
        this.props.CHEMICAL_DETAIL_ACTION(chemical)
        this.props.navigation.navigate("IndvChemical")
    }
    componentDidMount = () =>{
        let chemicals = this.props.chemicals

        let newChemicals = []
        for(let i=0; i < chemicals.length; i=i+2){
          let double = null;
         
            const nxt = i + 1
            double = {
              "first":chemicals[i],
              "second":chemicals[nxt],
            }

          newChemicals = newChemicals.concat(double)
        }

        this.setState({
          "double":this.state.double.concat(newChemicals)
        })
    }
  render() {
      
    return (
        <View style={ChemicalBack.main}>
        	<View>
        		<View>
					<Text style={ChemicalText.heading}>MY Chemicals</Text>
				</View>

        		<ScrollView horizontal={true}>
                    {this.props.main.my_chemicals.map((chemical) => 
                        <TouchableOpacity 
                            onPress={() => this.handlePressed(chemical)}
                            style={ChemicalBack.my_chem}>
                            <View>
                                <Image source={{uri: `https://sfarmproject.herokuapp.com${chemical.image}`}} style={ChemicalBack.my_chem_image}/>
                            </View>
                            <View>
                                <Text style={ChemicalText.my_chem_title}>{chemical.name}</Text>
                                <Text style={ChemicalText.my_chem_cat}>Category: Fertilizer</Text>
                            </View>
                        </TouchableOpacity>
                    )}
        			

        		</ScrollView>
        	</View>

        	<View style={ChemicalBack.others}>
        		<View>
					<Text style={ChemicalText.heading}>Other Chemicals</Text>
				</View>

				<ScrollView>
                    {this.state.double.map((chemical) => 
                        <View style={ChemicalBack.other}>
                       <TouchableOpacity 
                           
                           onPress={() => this.handlePressed(chemical.first)}
                        >
                        <View style={ChemicalBack.other_chem}>
                            <View>
                                <Image source={{uri:chemical.first.image}} style={ChemicalBack.other_chem_image}/>
                            </View>
                            <View>
                                <Text style={ChemicalText.my_chem_title}>{chemical.first.name}</Text>
                                <Text style={ChemicalText.my_chem_cat}>Category: Fertilizer</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        {chemical.second !== undefined ? 
                         <TouchableOpacity 
                           style={ChemicalBack.other}
                           onPress={() => this.handlePressed(chemical.second)}
                        >
                        <View style={ChemicalBack.other_chem}>
                            <View>
                                <Image source={{uri: chemical.second.image}} style={ChemicalBack.other_chem_image}/>
                            </View>
                            <View>
                                <Text style={ChemicalText.my_chem_title}>{chemical.second.name}</Text>
                                <Text style={ChemicalText.my_chem_cat}>Category: Fertilizer</Text>
                            </View>
                        </View></TouchableOpacity>: null}

                    
                    </View>
                    )}
					
                    <View style={{height:400, width:300}}>
                        
                    </View>
				</ScrollView>
        	</View>
		</View>
	        
    );
  }
}

const mapStateToProps = state => (

{
    user:state.loginReducer.user,
    main:state.listsReducer.main,
    chemicals: state.listsReducer.chemicals,
})

const actionToProps = {
    CHEMICAL_DETAIL_ACTION,
}


export default connect(mapStateToProps, actionToProps)(ChemicalScreen);
