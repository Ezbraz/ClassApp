/*import React, {useState} from "react"
import "./style.css"
import Card from "../../components/Card"

function Home() {

  const [nomeAluno, setNomeAluno] = useState('');
  const [alunos, setAlunos] = useState([]);

  function handleAddAluno() {
    const novoAluno = {
      name: setNomeAluno,
    }
    setAlunos([novoAluno]);
  } 

  return (
    <div className="container">
    <h1>Bem vindo ao ClassNote, {nomeAluno}</h1>
    <input type="text" placeholder="digite o nome do aluno" onChange={e => setNomeAluno(e.target.value)}/>
    <button type="button">Adicionar</button>
    
    {
      alunos.map(aluno => <Card name={aluno.name} nota01="7.5" nota02="8.5" nota03="9.0" media="8.3"/>)
      
    }
    
    
  
    </div>
  )
}

export default Home */
