// import React, {Component} from "react";
// import { render } from 'react-dom';
// import {AgGridColumn, AgGridReact} from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// class Table1 extends Component{

//     constructor(props){
//         super(props);
//         this.state={
//             result :[],

//         }  
//     }
//     componentDidMount(){
//         fetch('http://127.0.0.1:5000/users/register')
//         .then(resp => resp.json())
//         .then(json =>{
//             this.setState({
//                 result:json,
//             })
//         });
        
//     }
//     render(){
//         const {result}= this.state;
//         const columns =Object.keys(result[0]).map(key=>({field:key}))
//         return(
//             <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
//             <AgGridReact
//                 rowData={result}
//                 >
//                     {columns.map(col => <AgGridColumn key={col.field} headerName={col.field} field={col.field}/>)}
//             </AgGridReact>
//         </div>
//         )
//     }
// }

// export default Table1