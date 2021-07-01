import React, {useEffect, useState} from "react";
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import axios from 'axios'
import { TurnedIn } from "@material-ui/icons";


function Agdata (){
    const [data,setData]=useState([{}]);
    

    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(data => setData(data))
        .then(resp => console.log("helllo",resp))
        
    },
    []);

    //const result=data.result
    const result=data
    console.log(result)
    const columns =Object.keys(result[0]).map(key=>({field:key}))
    console.log(columns)
    
    const defaultColDef={
        sortable:true, editable:true,filter:true,flex: 1,minWidth: 200,floatingFilter:true,checkBox:true, applyMiniFilterWhileTyping: true,

    };
    const rowStyle = { background: 'white' };
    // const countryFilterParams = {
    //     applyMiniFilterWhileTyping: true,
    // };

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <h1>hello</h1>
           <AgGridReact
               rowData={result}
               sideBar={true}
               defaultColDef= {defaultColDef}
               rowStyle={rowStyle}
               >
                   {columns.map(col => <AgGridColumn key={col.field} headerName={col.field} field={col.field} />)}
           </AgGridReact>
       </div>
   )
}
export default Agdata;

