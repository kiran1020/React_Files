// import React, {useEffect, useState} from "react";
// import { render } from 'react-dom';
// import {AgGridColumn, AgGridReact} from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


// function Table (){
//     const [data,setData]=useState([]);

//     useEffect(()=>{
//         fetch('http://127.0.0.1:5000/users/register')
//         .then(resp => resp.json())
//         .then(data => setData(data))
//         .then(resp => console.log("helllo",resp))
        
//     },
//     []);

//     // const result=[{'name':'kiran','age':20,'email':'kiran123'},
//     // {'name':'saikiran','age':24,'email':'saikiran1020'},
//     // {'name':'divyansh','age':25,'email':'divyansh456'}]
//     // console.log(result)
//     // const columns =Object.keys(result[0]).map(key=>({field:key}))
//     // console.log(columns)
//     const result=data.result
//     console.log(result)
//     // const col = data.columns
//     // console.log(result)
//     const columns =Object.keys(result[0]).map(key=>({field:key}))
//     console.log(columns)
    

//    return (
//        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
//            <h1>hello</h1>
//            <AgGridReact
//                rowData={result}
//                >
//                    {columns.map(col => <AgGridColumn key={col.field} headerName={col.field} field={col.field}/>)}
//            </AgGridReact>
//        </div>
//    )
// }
// export default Table;

// // function Table (){
// //     const [data,setData]=useState([{}]);

// //     useEffect(()=>{
// //         fetch('http://127.0.0.1:5000/users/register')
// //         .then(resp=> resp.json())
// //         .then(data=> console.log(data[0]))


// //     }
// //     )
// //     return(
// //         <h2>
// //             data loaded 
// //         </h2>
// //     )
// // }
// // export default Table;