import React, { useState, useEffect } from 'react';
import './style.css'

function Card({props}){
  
  function handleDelete(e){
    
    fetch(`http://localhost:8080/api/students/${e}`, {method: "DELETE",})
    .then((response) => response.json()).then( ()  => location.reload(true)).then(alert("Aluno excluído com sucesso!"));
  }
  
  function handleEdit(e){

    
    
    fetch(`http://localhost:8080/api/students/${e}`, {method:"PUT", 
    headers:{"Content-Type":"application/json"}, 
    body:JSON.stringify(student)  
  }). then(()=> {alert("aluno editado")})
  }

  const [students, setStudents] = useState([]);
  useEffect(()=> {fetch("http://localhost:8080/api/students", {method:"GET"})
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
  },[])
  
  
  
  return (
    <div className='cardReturn'>
      {students.map(student=>(
        <div className="card" key={student.id}>
        <div className='cardHeader'>
          <div className='buttonsBar'>
            <button type="button" onClick={()=>handleDelete(student.id)}>Excluir</button>
            <button type="button" onClick={()=>props(student.id)}>Editar</button>
          </div>
          <div className='cardMainInfo'>
            <img src='../../assets/user.jpg' alt="foto do aluno" />
            <div className='cardEmail'>
              <h1> {student.nome}</h1>
              <h2> {student.email}</h2>
            </div>         
          </div>
        </div>
      
      
        <div className='cardData'>
          <h2>Disciplina:<small> {student.disciplina}</small></h2>
          <h2>Nota 01:<small> {student.nota1}</small></h2>
          <h2>Nota 02:<small> {student.nota2}</small></h2>
          <h2>Nota 03:<small> {student.nota3}</small></h2>
          <h2>Média Final:<small> {student.media}</small></h2>
        </div>
        
      </div>
      ))}
      
    </div>
    
  )
}

export default Card