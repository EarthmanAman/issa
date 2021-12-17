import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from "react-native"
import { DataTable, List } from 'react-native-paper';
import {connect} from "react-redux";
import {ProfileBack} from "../../theme/background"
import {ProfileText} from "../../theme/text"
import CHANGE_PASSWORD from "./change_password"
import EDIT_INFO from "./edit_info"

class TableScreen extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			passwordDialog: false,
			editDialog: false,
			expanded: false,
			other_expanded: false,
		}
	}


  render(){
  	console.log(this.props.main)
    return (
    <ScrollView>
    	
    	<View>
    		<View>
				<Text style={ProfileText.heading}>REPORTS</Text>
			</View>
    		<View>
				<Text style={ProfileText.heading}>My Crops</Text>
			</View>
	    	 <DataTable>
		      <DataTable.Header>
		        <DataTable.Title><Text style={ProfileText.table_title}>Name</Text></DataTable.Title>
		        <DataTable.Title><Text style={ProfileText.table_title}>Start_date</Text></DataTable.Title>
		        <DataTable.Title><Text style={ProfileText.table_title}>Schedules</Text></DataTable.Title>
		        <DataTable.Title><Text style={ProfileText.table_title}>Chemicals</Text></DataTable.Title>
		        <DataTable.Title><Text style={ProfileText.table_title}>Harvested</Text></DataTable.Title>
		      </DataTable.Header>
		      {this.props.main.crops.map((crop) => 

		      	  <DataTable.Row>
			        <DataTable.Cell><Text style={ProfileText.table_cells}>{crop.crop.name}</Text></DataTable.Cell>
			        <DataTable.Cell numeric><Text style={ProfileText.table_cells}>{crop.date}</Text></DataTable.Cell>
			        <DataTable.Cell numeric><Text style={ProfileText.table_cells}>{crop.crop.schedules.schedules}</Text></DataTable.Cell>
			        <DataTable.Cell numeric><Text style={ProfileText.table_cells}>{crop.crop.chemicals.length}</Text></DataTable.Cell>
			        <DataTable.Cell numeric><Text style={ProfileText.table_cells}>No</Text></DataTable.Cell>
			      </DataTable.Row>
		      )}
		    
		    
		     </DataTable>

	    </View>
	    <View>
	    	<List.Section title="Chemicals Used">
	    	{this.props.main.crops.map((crop) => 
	    		<List.Accordion
		        title={crop.crop.name}
		        left={props => <List.Icon {...props} icon="folder" />}
		        expanded={this.state.expanded}
		        onPress={() => this.setState({expanded:!this.state.expanded})}>
		        {crop.crop.chemicals.map((chemical) => 
		        	<List.Item title={chemical.name} />
		        )}
		        
		        
		      </List.Accordion>
		    
	    	)}
		    </List.Section>
	    </View>

	     <View>
	     	<View>
				<Text style={ProfileText.heading}>Other Crops</Text>
			</View>

	    	<List.Section>
	    	{this.props.crops.map((crop) => 
	    		<List.Accordion
		        title={crop.name}
		        left={props => <List.Icon {...props} icon="folder" />}
		        expanded={this.state.other_expanded}
		        onPress={() => this.setState({other_expanded:!this.state.other_expanded})}>
		        	 <DataTable>
				      <DataTable.Header>
				        <DataTable.Title><Text style={ProfileText.table_title}>Name</Text></DataTable.Title>
				        <DataTable.Title numeric><Text style={ProfileText.table_title}>Days</Text></DataTable.Title>
				        <DataTable.Title numeric><Text style={ProfileText.table_title}>Schedules</Text></DataTable.Title>
				        <DataTable.Title numeric><Text style={ProfileText.table_title}>Chemicals</Text></DataTable.Title>
				      </DataTable.Header>

			      	  <DataTable.Row>
				        <DataTable.Cell><Text style={ProfileText.table_cells}>{crop.name}</Text></DataTable.Cell>
				        <DataTable.Cell numeric><Text style={ProfileText.table_cells}>{crop.schedules.days}</Text></DataTable.Cell>
				        <DataTable.Cell numeric><Text style={ProfileText.table_cells}>{crop.schedules.schedules}</Text></DataTable.Cell>
				        <DataTable.Cell numeric><Text style={ProfileText.table_cells}>{crop.chemicals.length}</Text></DataTable.Cell>
				      </DataTable.Row>
			      
				    
				    
				     </DataTable>
		        
		        
		      </List.Accordion>
		    
	    	)}
		    </List.Section>
	    </View>
	    <View style={{height:100}}></View>
    </ScrollView>
  );
  }
}

  


const mapStateToProps = state => (

{
    user:state.loginReducer.user,
    main:state.listsReducer.main,
    crops: state.listsReducer.crops,
})

const actionToProps = {
}


export default connect(mapStateToProps, actionToProps)(TableScreen);