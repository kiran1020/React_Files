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


function Mtable1() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [columns1, setColumns1] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/table')
            .then(resp => resp.json())
            .then(data => setData(data))
            .then(resp => console.log(resp))

    }, []);

    const head = (e) => {
        const data2 = setData2(data.head)
        const columns1 = setColumns1(data.columns)
        console.log('head', data2)

    }
    const tail = (e) => {
        const data2 = setData2(data.tail)
        const columns1 = setColumns1(data.columns)
        console.log('head', data2)

    }
    const fulldata = (e) => {
        const data2 = setData2(data.result)
        const columns1 = setColumns1(data.columns)
        console.log('full', data)

    }

    // const columns = data.columns;
    // console.log(columns)

    // const data1 = data.result;
    // console.log(data1)

    const options = {
        filterType: 'dropdown',
        responsive: "simple",
        tableBodyHeight: '500px',
        exportButton: true,
    };
    return (
        <div>
            <button onClick={head}> Data Head</button>

            <button onClick={tail}> Data Tail</button>
            
            <button onClick ={fulldata}> Actuall Data</button>
            <MUIDataTable
                title={"IRIS DATA"}
                data={data2}
                columns={columns1}
                options={options}
            />
        
        </div>
    )
}
export default Mtable1;