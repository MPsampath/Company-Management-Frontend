import React ,{ChangeEvent, useState }  from 'react';
import Auth from '../../services/api';
const EmployeeAttend = () =>{

    // const {http,setToken} = Auth();
    const [file,setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            
          setFile(e.target.files[0]);
        }
      }

    const onSubmit = () =>{       
        const formdata = new FormData();
        if (file) {
        formdata.append('file',file);
       Auth.post('/uploadfile',formdata,{
        headers: {
          "Content-Type": "multipart/form-data",
        }
    }).then((res)=>{
           
        })
    }

    }
    
    return (
        <div>
            <input type="file" name='exel' onChange={handleFileChange}/>
            <button onClick={()=>onSubmit()}>Submit</button>
        </div>
    );
}
export default EmployeeAttend;