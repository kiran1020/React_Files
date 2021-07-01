import React,{useState,useEffect} from 'react'
import Axios from 'axios'

function Dataupload() {
    const [data,setData]=useState([]);
    const [fil,setFile]=useState("")
    useEffect(()=>{
        console.log("data",{fil})
    },[fil])


    const uploadfile=(e)=>{
        // console.log(e.target.files[0])
        let fil=e.target.files[0]
        setFile(fil)
    
    }

    const fileupload =(e)=>{
        // e.preventDefault();
        let formdata=new FormData()
        formdata.append("file",fil)
        formdata.append("name","kiran")
        Axios.post('http://127.0.0.1:5000/api/upload',formdata).then(function(response){
            console.log(response);})
        console.log("form data",formdata)
    }

    return (
        <div>
             <input type ='file' onChange={uploadfile} />
             <button onClick={fileupload}> Upload</button>
        </div>
    )
}
export default Dataupload