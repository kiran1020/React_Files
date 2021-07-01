

import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Axios from 'axios'
import React, { Component } from 'react'
import { useState, useEffect } from 'react';



// const options = {
//     chart: {    
//       type: 'column'
//   },
//   title: {
//       text: 'iris data set'
//   },
// //   subtitle: {
// //       text: 'Source: WorldClimate.com'
// //   },
//   xAxis: {
//       categories: [
//           "aishu",
//           "kiran",
//           "samyu",
//           "sai",
//           "divyansh",
//           "gauri",
//           "varun"

//       ],
//       crosshair: true
//   },
//   yAxis: {
//       min: 0,
//       title: {
//           text: 'Rainfall (mm)'
//       }
//   },
//   tooltip: {
//       headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//       pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//           '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//       footerFormat: '</table>',
//       shared: true,
//       useHTML: true
//   },
//   plotOptions: {
//       column: {
//           pointPadding: 0.2,
//           borderWidth: 0
//       }
//   },
//   series:[{
//       data:rows
// 
// }

function Highreact() {
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);
    const[xname,setXname]=useState()
    const[yname,setYname]=useState()


    useEffect(() => {
        Axios.get('http://127.0.0.1:5000/api/chart').then(function (response) {
            console.log(response)
            setData(response.data)
            setRows(response.data.result)
            setCols(response.data.columns)
            setXname(response.data.columns[0].name)
            setYname(response.data.columns[1].name)
        })


        // console.log('xname', xname)
        // setRows(data.head)
        // console.log('reset', reset)
        // console.log('cols', data.columns)
        // console.log("drop",drop)
    },
        []);
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'iris data set'
        },

        xAxis: {
            // categories:rows.values[50],
            // categories:rows[0,100],
            // type:'category',
            title: {
                text: xname
            }
        },

        yAxis: {
            min: 0,
            title: {
                text: yname
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            // name:rows[0][0],

            data: rows,
            // zoneAxis: 'x',
            // zones: [{
            // value: 1,
            // color: '#ff4d40'}],
            // dataLabels: {
            //     enabled: true
            // },
            // dataSorting: {
            //     enabled: true,
            //     matchByName: true
            // },
            // responsive: {
            //     rules: [{
            //         condition: {
            //             maxWidth: 500
            //         },
            //         chartOptions: {
            //             legend: {
            //                 layout: 'horizontal',
            //                 align: 'center',
            //                 verticalAlign: 'bottom'
            //             }
            //         }
            //     }]
            // }
           

        }]

        //   data:[["aishu",3.5],["kiran",4.5],["k",7.5],["y",5.5],["s",9.5],["samyu",10.5],["dark",2.5]]

    }


    return (
        <div>
            <HighchartsReact
                containerProps={{ style: { height: "10%", innerWidth: "50%" } }}
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}
// const data=[[2,3.5],[4,3.5]]
// class Highreact extends React.Component {
//     render() {
//         return (
//             <div>
//                 <HighchartsReact
//                 containerProps={{ style: { height: "10%" ,innerWidth:"50%"} }}
//                 highcharts={Highcharts} 
//                 options={options}
//                 />
//             </div>

//         )

//     }         
// }

export default Highreact;

