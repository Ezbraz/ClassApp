import './style.css'
import React, { useEffect, useState } from 'react';

function SearchBar({props, setProps}) {
  
  const update = (id) => {
    
    const student = {id, nome, email, nota1, nota2, nota3, media, disciplina}
    console.log(student)
    fetch(`http://localhost:8080/api/students`, {method:"PUT", 
    headers:{"Content-Type":"application/json"}, 
    body:JSON.stringify(student) 
  }).then(setProps({})).then(location.reload(true)).then(alert("Aluno atualizado com sucesso!"))
  }

  function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
  const handleClick = (e) => {
    e.preventDefault()
    const student = {nome, email, nota1, nota2, nota3, media, disciplina}
    console.log(student)
    fetch("http://localhost:8080/api/students", {method:"POST", 
    headers:{"Content-Type":"application/json"}, 
    body:JSON.stringify(student) 
  }).then (location.reload(true))
  }

  const[id, setStudentId] = useState('');
  const[nome, setStudentName] = useState('');
  const[email, setStudentEmail] = useState('');
  const[nota1, setStudentNota1] = useState('');
  const[nota2, setStudentNota2] = useState('');
  const[nota3, setStudentNota3] = useState('');
  const[media, setStudentMedia] = useState('');
  const[disciplina, setStudentDisciplina] = useState('');

  useEffect(()=> {setStudentName(props.nome)
    setStudentId(props.id)
    setStudentEmail(props.email)
    setStudentNota1(props.nota1)
    setStudentNota2(props.nota2)
    setStudentNota3(props.nota3)
    setStudentMedia(props.media)
    setStudentDisciplina(props.disciplina)
    window.scrollTo(0,0)
  },[props])

  return(
    <div className='containerSearch'>
      <div className='imagem'>
        <h2 id='tituloCadastro'>Cadastre um novo aluno.</h2>
        <img src="../../assets/pessoa_lendo.svg" alt="" />
      </div>
      <div className='modalCadastro'>
        {isEmpty(props) ? (
        <form action="" >
          <div className='formField'>
            <label htmlFor="nome" >Nome</label>
            <input id="nome" type="text" onChange={e => setStudentName(e.target.value)} />
          </div>

          <div className='formField'>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="text" onChange={e => setStudentEmail(e.target.value)} />
          </div>

          <div className='formField'>
            <label htmlFor="disciplina">Disciplina</label>
            <input id="disciplina" type="text" onChange={e => setStudentDisciplina(e.target.value)} />
          </div>
        
          <div className='formField'>
            <label htmlFor="nota1">1ª Nota</label>
            <input id="nota1" type="text" onChange={e => setStudentNota1(e.target.value)} />
          </div>
          <div className='formField'>
            <label htmlFor="nota2">2ª Nota</label>
            <input id="nota2" type="text" onChange={e => setStudentNota2(e.target.value)}/>
          </div>
          <div className='formField'>
            <label htmlFor="nota3">3ª Nota</label>
            <input id="nota3" type="text" onChange={e => setStudentNota3(e.target.value)}/>
          </div>
          <div className='formField'>
            <label htmlFor="media">Média</label>
            <input id="media" type="text" onChange={e => setStudentMedia(e.target.value)}/>
          </div>
        


          <button type='button' id='cadastrar' onClick={handleClick}>Cadastrar
          </button>
        
        </form>
        ) : (
          <form action="" >
          <div className='formField'>
            <label htmlFor="nome" >Nome</label>
            <input id="nome" type="text" onChange={e => setStudentName(e.target.value)} value={nome} />
          </div>

          <div className='formField'>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="text" onChange={e => setStudentEmail(e.target.value)} 
            value={email}/>
          </div>

          <div className='formField'>
            <label htmlFor="disciplina">Disciplina</label>
            <input id="disciplina" type="text" onChange={e => setStudentDisciplina(e.target.value)}
            value={disciplina} />
          </div>
        
          <div className='formField'>
            <label htmlFor="nota1">1ª Nota</label>
            <input id="nota1" type="text" onChange={e => setStudentNota1(e.target.value)}
            value={nota1} />
          </div>
          <div className='formField'>
            <label htmlFor="nota2">2ª Nota</label>
            <input id="nota2" type="text" onChange={e => setStudentNota2(e.target.value)}
            value={nota2}/>
          </div>
          <div className='formField'>
            <label htmlFor="nota3">3ª Nota</label>
            <input id="nota3" type="text" onChange={e => setStudentNota3(e.target.value)}
            value={nota3}/>
          </div>
          <div className='formField'>
            <label htmlFor="media">Média</label>
            <input id="media" type="text" onChange={e => setStudentMedia(e.target.value)}
            value={media}/>
          </div>
        


          <button type='button' id='cadastrar' onClick={()=>update(props.id)}>Atualizar
          </button>
        
        </form>
        )}
      
      </div>
    </div>
  )
}

export default SearchBar