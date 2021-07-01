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
import { Multiselect } from 'multiselect-react-dropdown';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import { TramRounded } from '@material-ui/icons';
import { CSVLink, CSVDownload } from "react-csv";
import CsvDownloader from 'react-csv-downloader';
import SortableTable from 'react-sortable-table';


//..........Sample data
// const cols1 = [
// { label: "Sepal_Length" },
// { label: "Sepal_Width" },
// { label: "Petal_Length" },
// { label: "Petal_Width" },
// { label: "Species" }]

//..........Sample data
// const cols1 = [{"name": 'Sepal_Length' , "id":1},
// {"name": "Sepal_Width", "id":2},
// {"name": "Petal_Length","id":3},
// {"name": "Petal_Width","id":4},
// {"name": "Species","id":5}]

//..........Sample data
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



function Toggledummy(props) {
    const [data, setData] = useState([]);
    const [output,setOutput]=useState([])
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);
    const [reset, setReset] = useState([])
    // const [delcol,getvalue]=useState([]);
    var [Filcol, getvalue] = useState();
    const [drop, setDrop] = useState();
    const [flag,setFlag]=useState(0)
    const [state, setState] = React.useState({
        head: false,
        tail: false,
        actuall: false,
        // flag:false
    });


    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/table')
            .then(resp => resp.json())
            .then(data =>[ (setData(data),setReset(data))])
           
        
        console.log('data', data)
        console.log('reset', reset)
        // console.log('cols', data.columns)
        // console.log("drop",drop)
    },
        []);

    
    /// Table Head
    const head = (e) => {
        if(flag==0){
            setRows(data.result.slice(0,10))
            setCols(data.columns)
            console.log("head_out",flag)

        }
        else {
            setRows(output.result.slice(0,10))
            setCols(output.columns)
            // console.log("output")
            console.log("head_out",flag)
            
        }
        if (flag==2){
            setRows(reset.result.slice(0,10))
            setCols(reset.columns)
        }
        //  setRows(data.result.slice(0,10))
        //  setCols(data.columns)
        // // console.log("head",data.result.slice(0,10))
        // console.log("head:", e.target.name, e.target.checked)
        // setState({ ...state, [e.target.name]: e.target.checked });
        // console.log('head', "Data Head is loading")
        // setState({ head: true })
        setState({ actuall: false ,head:true,tail:false})


    }

    // Table Tail
    const tail = (e) => {
        if(flag==0){
            setRows(data.result.slice(data.result.length-10,data.result.length))
            setCols(data.columns)
            console.log("tail_out",flag)
            

        }
        else{
            setRows(output.result.slice(data.result.length-10,data.result.length))
            setCols(output.columns)
            console.log("tail_out",flag)
            

        }
        if (flag==2){
            setRows(reset.result.slice(data.result.length-10,data.result.length))
            setCols(reset.columns)

        }
        
        // console.log('tail', data.result.slice(data.result.length-10,data.result.length))
        // console.log("Tail:", e.target.name, e.target.checked)
        // setState({ ...state, [e.target.name]: e.target.checked });
        // console.log('tail', "Data tail is loading")-
        // setState({ tail: true })
        setState({ actuall: false ,head:false,tail:true})


    }

    //Actuall Data
    const fulldata = (e) => {
        if(flag==0){
            setRows(data.result)
            setCols(data.columns)
            console.log("actual_out",flag)
            
        }
        else{
            setRows(output.result)
            setCols(output.columns)
            console.log("actual_out",flag)

        }
        if (flag==2){
            setRows(reset.result)
            setCols(reset.columns)

        }
        
        // console.log('head', rows)
        // console.log("actuall dta", e.target.name, e.target.checked)
        // setState({ ...state, [e.target.name]: e.target.checked });
        // console.log('Actuall Data', "Data  is loading")
        //setState({ actuall: true })
        setState({ actuall: true ,head:false,tail:false})

    }

    //Drop Columns
    const delcol1 = (e) => {
        //setDelcol(Array.isArray(e)?e.map(x=>x.label):null)
        // getvalue=(Array.isArray(e)?e.map(x=>x.label):[])
        getvalue = e.map(x => x.name)
        // getvalue=e
        console.log("delcol", getvalue)
        setDrop(getvalue)
        // console.log({Filcol})
    }


    
    // Sending Dropped columns to backend
    const save = (e) => {
        // <h1>Dropped columns </h1>
        alert("Are you sure you want to drop columns")
        console.log('Droppedcols', drop)
        Axios.post('http://127.0.0.1:5000/api/table', JSON.stringify(drop),data.result).then(function (response) {
            console.log(response);
            setOutput(response.data)
            const rows = setRows(response.data.result)
            const cols = setCols(response.data.columns)
            setState({ actuall: false ,head:false,tail:false})
            setFlag(1)
            
            

        })
        alert("Dropped Columns Successfully ")


    }
   
    //Reset
    const reset1=(e)=>{
        // window.location.reload("true")
         setRows(reset.result)
         setCols(reset.columns)
         setFlag(2)
        // // {resettable(data)}
        // fulldata(e)
        console.log("reset",reset)
    }

    return (

        <div>
            <Multiselect options={cols} placeholder="Select Columns To Drop" showCheckbox="true" displayValue="name" onSelect={delcol1} onRemove={delcol1} closeIcon="close" showArrow="true" avoidHighlightFirstOption="false"></Multiselect>

            <FormGroup row>
                <FormControlLabel control={<Switch checked={state.head} onChange={head} name="head" color="primary" />} label="Data Head" />
                <FormControlLabel control={<Switch checked={state.tail} onChange={tail} name="tail" />} label=" Data Tail" />
                <FormControlLabel control={<Switch checked={state.actuall} onChange={fulldata} name="actuall" color="secondary" />} label="Actuall Data" />
            </FormGroup>
            <button className="btn btn-primary btn-sm m-2" onClick={save}> Save</button>{''}
            <button className="btn btn-primary btn-sm m-2" onClick={reset1}> Reset</button>{''} 
            {/* <button className="btn btn-primary btn-sm m-2" onClick={download}> Download</button>{''} */}
            <CsvDownloader
                filename="myfile"
                extension=".csv"
                separator=","
                columns={data.cols}
                datas={data.result}
                text="DOWNLOAD" 
                />

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

export default Toggledummy

