import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayTemplate from './DisplayTemplate';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function TutorDisplay() {
  const [data, setData] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('/Tutor/display').then(response => {
      console.log(response.data)
      setData(response.data)
    }).catch(err => console.log(err));

  }, [])

  return (
    <div>
      {
        data.map((ele, index) =>
          <DisplayTemplate ele={ele} key={index} />
        )
      }


      <center>
        <Button className="btn-danger" onClick={()=>{
          navigate(-1)
        }}>
          Back
        </Button>
      </center>
    </div>


  )
}

export default TutorDisplay