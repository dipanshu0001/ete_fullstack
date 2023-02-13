import React,{useEffect} from 'react';
import Footer from './Footer';
import How_it_work from './How_it_work';
import { LoginContext } from './LoginProvider';
import Navbar from './Navbar'
import Studentlinks from './Studentlinks';
import Subject from './Subject';
import TeacherOptions from './TeacherOptions';
import Testimonial from './Testimonial';


function Home(){
const{isLoggedIn,type,Set_student,login}=React.useContext(LoginContext)
console.log(isLoggedIn,type,"home hu bro")

useEffect(() => {
//  login();
//  Set_student();
 console.log(isLoggedIn,type)

}, [])

    return(
        <>
           <Navbar/>
            <TeacherOptions/>
            <Studentlinks/>
            <Testimonial/>
            <Subject/>
            <How_it_work/>
            <Footer/>

        
        </>
     
    )
}
export default Home

