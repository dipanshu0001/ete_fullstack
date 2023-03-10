import React from 'react'
import { a } from 'react-router-dom'
import '../css/Aside.css'
import { LoginContext } from './LoginProvider';
function Aside() {
  const { isLoggedIn, Set_empty, Set_student, type, login, logout } = React.useContext(LoginContext)
  const [name, setname] = React.useState("");
  const [types, setType] = React.useState("");

  let Name;
  React.useEffect(() => {
    setname(JSON.parse(localStorage.getItem("user_data")).name);
    console.log(name);
    Name=JSON.parse(localStorage.getItem("type"));
    if(Name!=="")
    setType(Name)
  }, [])

  return (
    <div className="aside_main">
      <center><h2>Menu</h2></center>
      <nav className="nav-main">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href={types=="student"?`/Student_dashboard/${name.replace(' ', '-')}`:`/Tutor_dashboard/${name.replace(' ', '-')}`}>Profile</a></li>
          {/* <li><a href="/previous-classes">Previous Classes</a></li> */}
          <li><a href={types=="student"?`/Student_dashboard/edit`:`/Tutor_dashboard/edit`} >Edit Profile</a></li>
          <li><a href="/Student_dashboard/logout" onClick={() => {
            localStorage.removeItem('user_data');
            localStorage.removeItem('type');
          }}>Logout</a></li>

        </ul>
      </nav>


    </div>
  )
}

export default Aside