
import './App.css';
import NavBar from './components/NavBar/NavBar'

let styleCustom ={
  color : "green",

}

function App() {
  return (
    <div className="App" style={styleCustom} >
     <NavBar />
     <h1>
       Ecommerce Gaema
     </h1>
     

     
    </div>
  );
}

export default App;
