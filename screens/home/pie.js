import React from 'react'
import {View, Text} from "react-native"
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line } from 'react-native-svg'

import {PieBack} from "../../theme/background"
import {HomeText} from "../../theme/text"


class PieChartWithLabelExample extends React.PureComponent {

    render() {

        const data = [ this.props.complete, this.props.uncomplete]
        const colors = ["green", "red"]
        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: { fill: colors[index] },
                key: `pie-${index}`,
            }))

        const Labels = ({ slices }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <G key={ index }>
                        <Line
                            x1={ labelCentroid[ 0 ] }
                            y1={ labelCentroid[ 1 ] }
                            x2={ pieCentroid[ 0 ] }
                            y2={ pieCentroid[ 1 ] }
                            stroke={ data.svg.fill }
                        />
                        <Circle
                            cx={ labelCentroid[ 0 ] }
                            cy={ labelCentroid[ 1 ] }
                            r={ 15 }
                            fill={ data.svg.fill }
                        />
                    </G>
                )
            })
        }

        return (
            <View>
                
                <View>
                    <PieChart
                        style={ { height: 200 } }
                        data={ pieData }
                        innerRadius={ 30 }
                        outerRadius={ 65 }
                        labelRadius={ 100 }
                    >
                        <Labels/>
                    </PieChart>
                </View>
                <View style={PieBack.legends}>
                    <View style={PieBack.legend}>
                        <View style={PieBack.completed_view}></View>
                        <Text>Completed</Text>
                    </View>
                    <View style={PieBack.legend}>
                        <View style={PieBack.uncompleted_view}></View>
                        <Text>Not Completed</Text>
                    </View>
                </View>
            </View>
        )
    }

}

export default PieChartWithLabelExample