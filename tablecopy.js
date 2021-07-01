// https://pastelink.net/2x1iv

// pasw:WbS!),)jqa3Nv$s*!vk4Y,;f6n=~AYM(XFfNuQkkh}KXpuu$z

import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Paper, TableContainer } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Select from 'react-select'
import Axios from 'axios'

//import TripleToggleSwitch from 'react-triple-toggle-switch';


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

// const cols1 = [
// { label: "Sepal_Length" },
// { label: "Sepal_Width" },
// { label: "Petal_Length" },
// { label: "Petal_Width" },
// { label: "Species" }]
const cols1 = [
    { value:1,label: "Sepal_Length" },
    {value:2, label: "Sepal_Width" },
    { value:3,label: "Petal_Length" },
    { value:4,label: "Petal_Width" },
    { value:5,label: "Species" }];

// const rows = [
//     { "Petal_Length": 1.4, "Petal_Width": 0.2, "Sepal_Length": 5.1, "Sepal_Width": 3.5, "Species": "setosa" },
//     { "Petal_Length": 1.4, "Petal_Width": 0.2, "Sepal_Length": 4.9, "Sepal_Width": 3.0, "Species": "setosa" },
//     { "Petal_Length": 1.3, "Petal_Width": 0.2, "Sepal_Length": 4.7, "Sepal_Width": 3.2, "Species": "setosa" },
//     { "Petal_Length": 1.5, "Petal_Width": 0.2, "Sepal_Length": 4.6, "Sepal_Width": 3.1, "Species": "setosa" },
// ]



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

function SimpleTable1(props) {
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);
    // const [delcol,getvalue]=useState([]);
    var [Filcol,getvalue]=useState();
    const [drop, setDrop]=useState();
    const [checked, setChecked] = useState(true);
    const [q,setQ]=useState("")
    

    // const labels = {
    //     left: {
    //         title: 'left',
    //         value: 'left'
    //     },
    //     right: {
    //         title: 'right',
    //         value: 'right'
    //     },
    //     center: {
    //         title: 'center',
    //         value: 'center'
    //     },
    // }



    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/table')
            .then(resp => resp.json())
            .then(data => setData(data))
        // .then(data => setRows(data.result))
        // .then(data => setCols(data.columns))
        console.log('rows', data.result)
        console.log('cols', data.columns)
        console.log("drop",drop)
    },
        []);

        const handleChange = (event) => {
            setChecked(event.target.checked);
          };
        
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
    const delcol1=(e)=>{
        //setDelcol(Array.isArray(e)?e.map(x=>x.label):null)
        getvalue=(Array.isArray(e)?e.map(x=>x.label):[])
        console.log("delcol",getvalue)
        // console.log({Filcol})
    }

    // const onChange = (value) => {
    // console.log('value',value)}

    const save = (e) => {
        // <h1>Dropped columns </h1>
        setDrop(getvalue)
        console.log('Droppedcols', JSON.stringify(drop))
        // console.log('Droppedcols', {drop})
        // Axios.post('http://127.0.0.1:5000/api/drop',{drop})
        // fetch('/api/drop',{
        //     method:"post",
        //     body:JSON.stringify(drop)
        // })
        // console.log("file uploaded")

    }
    // function Search(rows){
    //     return rows.filter((row) =>row.Sepal_Length.toString().toLowerCase().index(q)>-1);
    // }

    return (
        <div>
            <button onClick={head}> Data Head</button>
            <button onClick={tail}> Data Tail</button>
            <button onClick={fulldata}> Actuall Data</button>
            {/* <div>
                <input type="text" value={q} onChange={(e)=>setQ(e.target.value)}/>
            </div> */}
            {/* <TripleToggleSwitch
                labels={labels}
                onChange={onChange}
            /> */}
            {/* <Select isMulti options={cols1} onChange={delcol1}></Select>
            <button onClick={save}> save</button> */}
            <Paper>
                <TableContainer>
                    <Table>
                        {/* <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /> */}
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

export default SimpleTable1