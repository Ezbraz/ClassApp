import React, {useState, useEffect } from "react"
import "./style.css"
import Header from "../../components/Header"
import Card from "../../components/Card"
import SearchBar from "../../components/SearchBar"
import Footer from "../../components/Footer"


function Home() {
 
  const [editar, setEditar] = useState(-1);
  const [student, setStudent] = useState({})
  useEffect(()=> {fetch(`http://localhost:8080/api/students/${editar}`, {method:"GET"})
    .then(res=>res.json())
    .then((result)=>{
      setStudent(result);
    }
  )
  },[editar])

  return (
    <>
    <Header/> 
    <SearchBar props={student} setProps={setStudent}/>
    <Card props={setEditar}/> 
    <Footer/> 
    </>    
  )
}

export default Home
