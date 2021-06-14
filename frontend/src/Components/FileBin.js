import {useState} from 'react'
import axios from 'axios'
function FileBin(){
    const [file,setFile]=useState(null)
    const [choosed,setChoosed]=useState(false)
    const submitHandler1=(e)=>{
        if(choosed){
          e.preventDefault()
          const FILEDATA=new FormData ()
          FILEDATA.append('file',file)
          
      
          axios.post("http://localhost:8000/uploadfile",FILEDATA, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
          })
          .then(Res=>{ if(Res){
              console.log(Res.data);
              setChoosed(false)
          }})
          .catch(Err=>{console.log(Err)})
        }
          
      
        }
    return(<div><div> <input type='file' label={file}  onChange={(e)=>{setFile(e.target.files[0]);setChoosed(true)}} ></input></div>
     <button onClick={submitHandler1}>SUBMIT</button>
    </div>)
}
export default FileBin