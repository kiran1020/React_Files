// https://pastelink.net/2x1iv

// pasw:WbS!),)jqa3Nv$s*!vk4Y,;f6n=~AYM(XFfNuQkkh}KXpuu$z

import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Paper, TableContainer } from '@material-ui/core';

// function Tabledata() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('http://127.0.0.1:5000/api/table')
//             .then(resp => resp.json())
//             .then(data => setData(data))
//             .then(resp => console.log(resp))

//     },
//         []);


//     const cols = data.columns;
//     console.log("cols",cols)

//     const rows = data.result;
//     console.log("result",rows)
// }

const cols = [{ "name": "Sepal_Length" },
{ "name": "Sepal_Width" },
{ "name": "Petal_Length" },
{ "name": "Petal_Width" },
{ "name": "Species" }]

const rows = [
    { "Petal_Length": 1.4, "Petal_Width": 0.2, "Sepal_Length": 5.1, "Sepal_Width": 3.5, "Species": "setosa" },
    { "Petal_Length": 1.4, "Petal_Width": 0.2, "Sepal_Length": 4.9, "Sepal_Width": 3.0, "Species": "setosa" },
    { "Petal_Length": 1.3, "Petal_Width": 0.2, "Sepal_Length": 4.7, "Sepal_Width": 3.2, "Species": "setosa" },
    { "Petal_Length": 1.5, "Petal_Width": 0.2, "Sepal_Length": 4.6, "Sepal_Width": 3.1, "Species": "setosa" },
]



function getHeader(cols) {
    return (
        cols.map((col, index) => {
            return (
                <TableCell key={index}>{col.name}</TableCell>
            )
        })
    )
}

function getRowData(rows) {
    return (
        rows.map((row) => (
            <TableRow key={row.name}>
                {
                    Object.values(row).map((item) => {
                        return (
                            <TableCell>{item}</TableCell>
                        )
                    })
                }
            </TableRow>
        ))
    )
}

function SimpleTable(props) {
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);
    // const [data2, setData2] = useState([]);
    
    
    
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/table')
            .then(resp => resp.json())
            .then(data => setData(data))
            // .then(data => setRows(data.result))
            // .then(data => setCols(data.columns))
            console.log('rows',data.result)
            console.log('cols',data.columns)
        },
        []);
    
    // const options = {
    //     filterType: 'checkbox',
    // };
    const head = (e) => {
        const rows = setRows(data.head)
        const cols = setCols(data.columns)
        // console.log('head', rows)

    }

    const tail = (e) => {
        const rows = setRows(data.tail)
        const cols = setCols(data.columns)
        // console.log('head', rows)

    }
    
    const fulldata = (e) => {
        const rows = setRows(data.result)
        const cols = setCols(data.columns)
        // console.log('head', rows)

    }
    return (
        <div>
            <button onClick={head}> Data Head</button>
            <button onClick={tail}> Data Tail</button>
            <button onClick ={fulldata}> Actuall Data</button>
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {getHeader(cols)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {getRowData(rows)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div >
    )
}

export default SimpleTable