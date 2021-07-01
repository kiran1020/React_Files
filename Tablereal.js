import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { ListItemSecondaryAction } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Tabledata() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/table')
            .then(resp => resp.json())
            .then(data => setData(data))
            .then(resp => console.log("output",resp))

    },
        []);

    const columns = data.columns;

    const data1 = data.result;
    console.log("result", data1)

    //const columns = Object.keys(data1[0])
    console.log("cols", columns)

    const classes = useStyles();

    return (
        //<h1> hello</h1>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                   <TableRow rows={data.map(n => {n})}></TableRow>
                   <TableCell columns={columns}></TableCell>
                </TableBody>

            </Table>

        </TableContainer>

    )

}
export default Tabledata