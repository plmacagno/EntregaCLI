import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const NavBar = () => {
    return (
        
        <AppBar position="static">
            <Toolbar className="header">
                <div className="container-logo">
                <img src="./logogaema.png" /> 
                    <ul>
                         <li>
                            <button>Inicio</button> 
                        </li>
                         <li>
                            <button>Productos</button> 
                         </li>
                         <li>
                            <button>Boxes</button> 
                         </li>
                         <li>
                            <button>Nosotros</button> 
                         </li>
                         <li>
                            <button>Contacto</button> 
                         </li>

                     </ul>
                 </div>
             
            </Toolbar>
         </AppBar>
        
    )
}

export default NavBar