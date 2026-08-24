import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados)
        setCarregando(false)
      })
      .catch((erro) => {
        console.error('Erro ao buscar tarefas:', erro)
        setCarregando(false)
      })
  }, [])

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">
            Tarefas
          </h1>

          <p className="text-muted fs-5">
            Tarefas vindas da API JSONPlaceholder
          </p>

          <span className="badge bg-dark">
            React + Fetch + useEffect + Bootstrap
          </span>
        </div>

        {/* Card principal */}
        <div className="card shadow border-0">
          <div className="card-header bg-primary text-white py-3">
            <h2 className="h5 mb-0">
              Lista de tarefas
            </h2>
          </div>

          <div className="card-body p-0">

            {carregando ? (
              <div className="text-center py-5">
                <div
                  className="spinner-border text-primary mb-3"
                  role="status"
                >
                  <span className="visually-hidden">
                    Carregando...
                  </span>
                </div>

                <p className="text-muted mb-0">
                  Carregando tarefas...
                </p>
              </div>
            ) : (
              <ul className="list-group list-group-flush">
                {tarefas.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center py-3"
                  >
                    <div>
                      <span className="fw-bold me-2">
                        #{item.id}
                      </span>

                      {item.title}
                    </div>

                    {item.completed ? (
                      <span className="badge bg-success">
                        ✓ Concluída
                      </span>
                    ) : (
                      <span className="badge bg-warning text-dark">
                        ⏳ Pendente
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}

          </div>

          {/* Rodapé */}
          {!carregando && (
            <div className="card-footer text-muted text-center">
              Total de tarefas: <strong>{tarefas.length}</strong>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default App
