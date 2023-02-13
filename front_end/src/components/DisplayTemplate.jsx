import React,{useState,useEffect} from 'react'
import '../css/DisplayTemplate.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from './Modals';


function DisplayTemplate({ele}) {
// console.log(ele);
const[showker,setshow]=useState(false);

  return (
    <div className="Template-main">
        <div className="img-div">
            <div>
                {(ele.name.charAt(0))}
            </div>

        </div>
        <div className='details'>
            <div className="personal">
                <span className="heading">
                    Name:
                </span>
                <span className='values'>
                    {ele.name}
                </span>
            </div>
            <div className="personal">
                <span  className="heading">
                    Location
                </span>
                <span className='values'>
                    {   ele.location}
                </span>
            </div>
            <div>
                <span  className="heading">
                    Expertise in class
                </span>
                <span className='values'>
                    {
                        ele.class
                    }
                </span>
            </div>
            {/* <div>
                <span  className="heading">
                    Expertise in Subject
                </span>
                <span className='values'>
                    {
                        ele.subjects
                    }
                </span>
            </div> */}
            <div>
                <span  className="heading">
                    Hourly charges

                </span>
                <span className='values'>
                    {
                        ele.hourlyrate

                    }
                </span>
            </div>
           

        </div>
        <div className='Link-btn center'>
        <Button className='btn orange' onClick={()=>{
            setshow(true)
        }}>View Details</Button>
            </div>
        <Modals
        show={showker} onHide={() => setshow(false)} {...ele} />


    </div>
  )
}

export default DisplayTemplate