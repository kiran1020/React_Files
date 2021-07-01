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



// const cols1 = [
// { label: "Sepal_Length" },
// { label: "Sepal_Width" },
// { label: "Petal_Length" },
// { label: "Petal_Width" },
// { label: "Species" }]
// const cols1 = [{"name": 'Sepal_Length' , "id":1},
// {"name": "Sepal_Width", "id":2},
// {"name": "Petal_Length","id":3},
// {"name": "Petal_Width","id":4},
// {"name": "Species","id":5}]

// const rows = [
//     { "Petal_Length": 1.4, "Petal_Width": 0.2, "Sepal_Length": 5.1, "Sepal_Width": 3.5, "Species": "setosa" },
//     { "Petal_Length": 1.4, "Petal_Width": 0.2, "Sepal_Length": 4.9, "Sepal_Width": 3.0, "Species": "setosa" },
//     { "Petal_Length": 1.3, "Petal_Width": 0.2, "Sepal_Length": 4.7, "Sepal_Width": 3.2, "Species": "setosa" },
//     { "Petal_Length": 1.5, "Petal_Width": 0.2, "Sepal_Length": 4.6, "Sepal_Width": 3.1, "Species": "setosa" },
// ]

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
};

function getHeader(cols) {
    return (
        cols.map((col, index) => {
            return (

                <TableCell key={index}>{col.name}
                    <button
                        type="button"
                        onClick={() => requestSort(col.name)}
                        className={getClassNamesFor(col.name)}
                    ></button></TableCell>
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

function resettable(data) {
    return (
        <div>
            <h1>hello</h1>
        </div>

    )
}



function Toggle1(props) {
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);
    const [reset, setReset] = useState([])
    // const [delcol,getvalue]=useState([]);
    var [Filcol, getvalue] = useState();
    const [drop, setDrop] = useState();
    const [state, setState] = React.useState({
        head: false,
        tail: false,
        actuall: false,
    });


    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/table')
            .then(resp => resp.json())
            .then(data => setData(data))
            .then(reset => setReset(data))
        // .then(refresh=>setRefresh(refresh))
        // .then(data => setRows(data.result))
        // .then(data => setCols(data.columns))
        // console.log('rows', data.result)
        // console.log('cols', data.columns)
        // console.log("drop",drop)
    },
        []);

    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    //   };

    const head = (e) => {
        const rows = setRows(data.head)
        const cols = setCols(data.columns)
        setState({ ...state, [e.target.name]: e.target.checked });
        console.log('head', "Data Head is loading")
        setState({ head: true })

    }

    const tail = (e) => {
        const rows = setRows(data.tail)
        const cols = setCols(data.columns)
        // console.log('head', rows)
        setState({ ...state, [e.target.name]: e.target.checked });
        console.log('tail', "Data tail is loading")
        setState({ tail: true })

    }

    const fulldata = (e) => {
        const rows = setRows(data.result)
        const cols = setCols(data.columns)
        // console.log('head', rows)
        setState({ ...state, [e.target.name]: e.target.checked });
        console.log('Actuall Data', "Data  is loading")
        setState({ actuall: true })

    }
    const delcol1 = (e) => {
        //setDelcol(Array.isArray(e)?e.map(x=>x.label):null)
        // getvalue=(Array.isArray(e)?e.map(x=>x.label):[])
        getvalue = e.map(x => x.name)
        // getvalue=e
        console.log("delcol", getvalue)
        setDrop(getvalue)
        // console.log({Filcol})
    }


    // const onChange = (value) => {
    // console.log('value',value)}

    const save = (e) => {
        // <h1>Dropped columns </h1>
        alert("Are you sure you want to drop columns")
        console.log('Droppedcols', drop)
        Axios.post('http://127.0.0.1:5000/api/table', JSON.stringify(drop)).then(function (response) {
            console.log(response);
            setData(response.data)
            const rows = setRows(response.data.result)
            const cols = setCols(response.data.columns)
            setState({ tail: false })
            setState({ head: false })
            setState({ actuall: false })

        })
        alert("Dropped Columns Successfully ")


    }
    // const refresh1 = (e) => {
    //     console.log("refresh",refresh)
    //     // Axios.get('hhttp://127.0.0.1:5000/api/table').then(response=>
    //     //     console.log(response))
    //         // setRefresh(response.data)
    //     // const rows = setRows(refresh)
    //     // console.log("refresh col",rows)
    //     // const cols = setCols(refresh)
    // }

    // const reset1=(e)=>{
    //     window.location.reload("false")
    //     // const rows = setRows(data.result)
    //     // const cols = setCols(data.columns)
    //     // {resettable(data)}
    //     console.log(data)
    // }

    return (

        <div>
            <Multiselect options={cols} placeholder="Select Columns To Drop" showCheckbox="true" displayValue="name" onSelect={delcol1} onRemove={delcol1} closeIcon="close" showArrow="true" avoidHighlightFirstOption="false"></Multiselect>

            <FormGroup row>
                <FormControlLabel control={<Switch checked={state.head} onChange={head} name="head" color="primary" />} label="Data Head" />
                <FormControlLabel control={<Switch checked={state.tail} onChange={tail} name="tail" />} label=" Data Tail" />
                <FormControlLabel control={<Switch checked={state.actuall} onChange={fulldata} name="actuall" color="secondary" />} label="Actuall Data" />
            </FormGroup>
            <button className="btn btn-primary btn-sm m-2" onClick={save}> Save</button>{''}
            {/* <button className="btn btn-primary btn-sm m-2" onClick={reset1}> Reset</button>{''}  */}
            {/* <button className="btn btn-primary btn-sm m-2" onClick={download}> Download</button>{''} */}
            <CsvDownloader
                filename="myfile"
                extension=".csv"
                separator=","
                columns={data.cols}
                datas={data.result}
                text="DOWNLOAD"
                color="primary" />

            <Paper>
                <TableContainer>
                    <ProductTable>
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
                    </ProductTable>
                </TableContainer>
            </Paper>

        </div >
    )
}

export default Toggle1

