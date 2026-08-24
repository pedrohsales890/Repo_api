import { useEffect, useState } from 'react'

function App() {

  // Crie duas const para guardar e carregar tarefas...

  const [tarefas, setTarefas] = useState([])

  const [carregando, setCarregando] = useState(true)

  // useEffect com fetch (requisições assíncronas)

  useEffect(() => {

    fetch('http://jsonplaceholder.typicode.com/todos?_limit=20')

      .then((resposta) => resposta.json())

      .then((dados) => {
        setTarefas(dados) // Salva os dados vindos da API no estado
        setCarregando(false) // Desativa a mensagem carregando
      })

  }, []) // Array vazio para executar apenas UMA vez ao abrir a tela

  return (
    <>
    <div>
      <div>
        <h2>Tarefas vindas da API</h2>
        <p>Consumindo dados de uma JSONPlaceholder via fetch e useEffect</p>
        {carregando ? (
          <div>Carregando...</div>
        ) : (
          <ul>
            {tarefas.map((item) => (
              <li key={item.id}>{item.title}
                {item.completed ? ' Concluída' 
                : ' Pendente'}
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
    </>
  )
} 

export default App