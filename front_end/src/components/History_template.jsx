import React from 'react'
import '../css/History_template.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function History_template({name,subject,_id,istutor,s_name,isaccepted}) {
  const reload=()=>
  {
    setTimeout(()=>{
    window.location.reload(true)},5000)
  }

  const difftoast = (err) => {                  //TOSTER FUNCTION 
    toast(err);
  }
  const removeReq=()=>{
    // console.log(_id)
    axios.post('/Purchase/remove',{
      'remove_id':_id   
    }).then(response=>{difftoast(response.data.message)
    }).catch(err=>console.log(err))
    reload();
  }
  const setAccept=()=>{

    axios.put('/Purchase/Accept',{
      tutor_id:_id
    }).then(response=>{difftoast(response.data.message)}).catch(err=>console.log(err))
    reload();

  }
  // console.log(s_name)
  return (
    
        <tr>
            <td>{istutor?s_name:name}</td>
            <td>{subject}</td>
            <td>
              {
                !istutor?(<Button className='btn-danger' onClick={removeReq}>cancel</Button>):
                (<>

                {!isaccepted&&<Button className='btn-success' onClick={setAccept}>Accept</Button>}

                <Button className='btn-danger' onClick={removeReq}>cancel</Button>                
                </>)}

            </td>
            <ToastContainer/>


        </tr>
  )
}

export default History_template