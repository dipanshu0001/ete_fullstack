import React from 'react'
import { useNavigate } from 'react-router-dom'
function Tutor_form({Tutordata,setTutorData,getTutorSubmit,iseditform}) {
  const navigate=useNavigate()
  return (
    <form onSubmit={(e) => (e.preventDefault())} className="form-user">
          <h3>Student Login</h3>
          <div className="mb-3">
            <label>Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={Tutordata.name}
              onChange={e => (setTutorData(prev => ({ ...prev, name: e.target.value })))}
            // onchange={e => (change(e, "loginemail"))}
            // onChaTutor)=>(setStudentData(prev=>({...prev,loginemail:e.target.value})))}
            />
          </div>
    
          <div className="mb-3">
            <label>Enter Email*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              value={Tutordata.email}
              onChange={e => (setTutorData(prev => ({ ...prev, email: e.target.value })))}
            />
          </div>
          <div className="mb-3">
            <label>Enter Phone Number*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone Number"
              value={Tutordata.phone}
              onChange={e => (setTutorData(prev => ({ ...prev, phone: e.target.value })))}
            />
          </div>

          <div className="mb-3">
            <label>Enter Subject*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Subject"
              value={Tutordata.subjects}
              onChange={e => (setTutorData(prev => ({ ...prev, subjects: e.target.value })))}
            />
          </div>
         { !iseditform&&<div className="mb-3">
            <label>Enter Password*  </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={Tutordata.password}
              onChange={e => (setTutorData(prev => ({ ...prev, password: e.target.value })))}
            />
          </div>}
         { !iseditform&&<div className="mb-3">
            <label>Renter Password*  </label>
            <input
              type="password"
              className="form-control"
              placeholder="Renter password"
              value={Tutordata.confirmpassword}
              onChange={e => (setTutorData(prev => ({ ...prev, confirmpassword: e.target.value })))}
            />
          </div>}
          <div className="mb-3">
            <label>Enter Location*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Location"
              value={Tutordata.location}
              onChange={e => (setTutorData(prev => ({ ...prev, location: e.target.value })))}
            />
          </div>
          <div className="mb-3">
            <label>Enter Per Hour Price*  </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter per rate"
              value={Tutordata.hourlyrate}
              onChange={e => (setTutorData(prev => ({ ...prev, hourlyrate: e.target.value })))}
            />
          </div>


        
          <div className="mb-3">
            <label>Enter City*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              value={Tutordata.city}
              onChange={e => (setTutorData(prev => ({ ...prev, city: e.target.value })))}
            />
          </div>
          <div className="mb-3">
            <label>Enter Pincode*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Pincode"
              value={Tutordata.pincode}
              onChange={e => (setTutorData(prev => ({ ...prev, pincode: e.target.value })))}
            />
          </div>
          <div className="mb-3">
            <label>Enter Addresss*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              value={Tutordata.address}
              onChange={e => (setTutorData(prev => ({ ...prev, address  : e.target.value })))}
            />
          </div>
          <div className="mb-3">
            <label>Enter class*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter class"
              value={Tutordata.classname}
              onChange={e => (setTutorData(prev => ({ ...prev, classname: e.target.value })))}
            />
          </div>
          {!iseditform&&<div className="mb-3">
            
            <input
              type="checkbox"
              // className="btn-check "
              // placeholder="Enter class"
              value=" is Admin"
              checked={Tutordata.isadmin}
              onChange={e => (setTutorData(prev => ({ ...prev, isadmin: !prev.isadmin })))}
            />
            <label> d Is Admin </label>
          </div>}


          {/* {
        successmssg!==""&&<div class="alert alert-success" role="alert">{successmssg}</div>
      } */}
          {/* <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div> */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={getTutorSubmit}>
              {!iseditform?"Register as Tutor":"Update "}
            </button>
          </div>
          <br/>
          <div className="d-grid">
            <button type="submit" className="btn btn-danger" onClick={()=>navigate(-1)}>
              Back
            </button>
          </div>  
        </form>
  )
}

export default Tutor_form