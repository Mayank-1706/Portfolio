import './App.css';
import { Achiev,Contact,Education,Home,Namaste,Navbar,Resp,Skills,Projects } from './containers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Namaste/>
      <Education/>
      <Skills/>
      <Projects/>
      <Resp/>
      <Achiev/>
      <Contact/>
    </div>
  );
}

export default App;
