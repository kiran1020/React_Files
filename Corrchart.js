import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Axios from 'axios'
import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { HeatMapChart } from 'highcharts';
import heatmap from 'highcharts/modules/heatmap'


heatmap(Highcharts)
// import  App from'./App.css'

function Corre() {
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);
    // const [checked, setChecked] = useState([])
    // const [xname, setXname] = useState()
    // const [yname, setYname] = useState()
    // // const history =useHistory();



    useEffect(() => {
        Axios.get('http://127.0.0.1:5000/api/heat').then(function (response) {
            console.log(response)
            setData(response.data)
            setRows(response.data.result)
            setCols(response.data.columns)
           
        })


        //     console.log('xname', xname)
        //     setRows(data.head)
        //     console.log('reset', reset)
        //     console.log('cols', data.columns)
        //     console.log("drop",drop)
    },
        []);
    function getPointCategoryName(point, dimension) {
        var series = point.series,
            isY = dimension === 'y',
            axis = series[isY ? 'yAxis' : 'xAxis'];
        return axis.categories[point[isY ? 'y' : 'x']];
    }

    const options = {
        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },


        title: {
            text: 'Sales per employee per weekday'
        },

        xAxis: {
            categories:cols
           // categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
        },

        yAxis: {
            categories:cols,
            //categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            title: null,
            reversed: true
        },

        accessibility: {
            point: {
                descriptionFormatter: function (point) {
                    var ix = point.index + 1,
                        xName = getPointCategoryName(point, 'x'),
                        yName = getPointCategoryName(point, 'y'),
                        val = point.value;
                    return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                }
            }
        },

        colorAxis: {
            min: 0,
            minColor: 'Red',
            maxColor: Highcharts.getOptions().colors[1]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function () {
                return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                    this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
            }
        },

        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            //data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96]],
            data:rows,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }]
    }
    


    return(
        
        <div className = "APP" style = {{ display: 'flex', maxWidth: 900 }} >
        <HighchartsReact
            containerProps={{ style: { height: "10%", innerWidth: "50%" } }}
            highcharts={Highcharts}
            options={options}
        />

        </div >


    )
}

export default Corre