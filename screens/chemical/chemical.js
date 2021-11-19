import React, { useState, useCallback, useRef } from "react";
import { Button, View, Text, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import {connect} from "react-redux";

import {CropDetailBack, IndvChemicalBack} from "../../theme/background"
import {CropDetailText} from "../../theme/text"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playing:false,
      setPlaying:false
    }
  }

  render() {
    return (
      <View style={IndvChemicalBack.main}> 
        <View>
          <Text style={{"fontWeight":"bold", fontSize:18, marginBottom:10}}>Video Tutorial</Text>
        </View>
        <View style={IndvChemicalBack.video}>
            <YoutubePlayer
              height={300}
              play={this.state.playing}
              videoId={this.props.chemical_detail.link}
              
            />
        </View>
        <View style={IndvChemicalBack.guide}>
              
              <View>

                <View style={IndvChemicalBack.guide_row}>
                  
                  <View style={IndvChemicalBack.instructions}>
                    <Text style={CropDetailText.guide_title}>Instruction</Text>
                    <Text style={CropDetailText.desc}>{this.props.chemical_detail.instructions}</Text>
                  </View>
                </View>

              </View>
            </View>
        
      </View>
    );
  }
  
}

const mapStateToProps = state => (

{
    chemical_detail: state.listsReducer.chemical_detail,
})

const actionToProps = {
    
}


export default connect(mapStateToProps, actionToProps)(App);
