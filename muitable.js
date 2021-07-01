// import MUIDataTable from "mui-datatables";

// function Mtable() {
// const columns = [
//  {
//   name: "name",
//   label: "Name",
//   options: {
//    filter: true,
//    sort: true,
//   }
//  },
//  {
//   name: "company",
//   label: "Company",
//   options: {
//    filter: true,
//    sort: false,
//   }
//  },
//  {
//   name: "city",
//   label: "City",
//   options: {
//    filter: true,
//    sort: false,
//   }
//  },
//  {
//   name: "state",
//   label: "State",
//   options: {
//    filter: true,
//    sort: false,
//   }
//  },
// ];

// const data = [
//  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
//  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
//  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
//  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
// ];

// const options = {
//   filterType: 'checkbox',
// };
// return(
// <MUIDataTable
//   title={"Employee List"}
//   data={data}
//   columns={columns}
//   options={options}
// />
// )
// }
// export default Mtable;

import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";


function Mtable() {
    const [data, setData] = useState([]);
    // const [filt,setFilt]=useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/table')
            .then(resp => resp.json())
            .then(data => setData(data))
            .then(resp => console.log(resp))
            // console.log("data",{filt})

    },
        []);
    
    // useEffect(()=>{
    //     console.log("data",{filt})
    // },[filt])

    // console.log(filt)
    

    const columns = data.columns;
    console.log(columns)

    const data1 = data.result;
    console.log(data1)

    // const options = {
    //     filterType: 'dropdown',
    //     responsive: "simple",
    //     tableBodyHeight: '500px',
    //     exportButton: true,
    //     sort:false,
    //     download:false,
    //     viewColumns:false,
    //     serach:false
    // };
    return (
        <div>
            <MUIDataTable
                title={"IRIS DATA"}
                data={data1}
                columns={columns}
                options={{
                    search: true,
                    filter: true,
                    sort: true,
                    selectableRowsHideCheckboxes: true,
                    viewColumns: true,
                    download: true,
                    print: false,
                    rowsPerPage: 20,
                    rowsPerPageOptions:10,
                    onViewColumnsChange:(changedColumn,action)=>(console.log("cols:",changedColumn,"action",action)),
                }}
            />
        </div>
    )
}
export default Mtable;