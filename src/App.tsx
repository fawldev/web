import './App.css'
import splashImg from "./fawllogoSplash.png"

function App() {

  return (
    <div className="App">
      <div className="container">
        <a href="https://id.fawl.app" target="_top"><img src={splashImg} style={{width: `200px`}} /></a>
        <br/><br/><br/>
        <span className=''><strong>npm install @fawldev/server</strong></span>
      </div>
    </div>
  )
}

export default App
