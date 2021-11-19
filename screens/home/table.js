import * as React from 'react';
import { DataTable } from 'react-native-paper';

class TableScreen extends React.Component{
  render(){
      return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Tasks</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
        <DataTable.Title numeric>%</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Completed</DataTable.Cell>
        <DataTable.Cell numeric>{this.props.statistics.completed}</DataTable.Cell>
        <DataTable.Cell numeric>{this.props.statistics.completed_perc}%</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Uncompleted</DataTable.Cell>
        <DataTable.Cell numeric>{this.props.statistics.uncompleted}</DataTable.Cell>
        <DataTable.Cell numeric>{this.props.statistics.uncompleted_perc}%</DataTable.Cell>
      </DataTable.Row>
    
    </DataTable>
  );
  }
}

  


export default TableScreen;