import React, {useState} from 'react'
import sendAsync from './renderer'
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("SELECT * FROM repositories")
  //const [responses, setResponses] = useState([])
  const [responses, setResponses] = useState([]);

  function send(sql){
    //sendAsync(data).then((result)=> setResponses([...responses, result]));
    sendAsync(sql).then((result)=> setResponses(result));

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste com Electron, React e SQLite</h1>
      </header>
      <article>
        <p>Diga <i>ping</i> para o processo principal.</p>
        <input
          type="text"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <button type="button" onClick={() => send(message)}>
            Enviar
        </button>
        <br />
        <p>Processo principal respondeu:</p>
        <br />
        <pre>
            {(responses && JSON.stringify(responses, null, 2))/*responses.join('\n')) */||
                'o processo principal parece um pouco quieto!'}
        </pre>
      </article>
    </div>
  );
}

export default App;
