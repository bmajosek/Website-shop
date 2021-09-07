import React from 'react'
import './Menu.css'
import Wystawy from './Wystawy.js'
import Home from './Home.js'
import Aktualnosci from './Aktualnosci.js'
import Informacje from './Informacje.js'
import Paleontologia from './Paleontologia.js'
import Gatunki from './Gatunki.js'
import Astronomia from './Astronomia.js'
import Archeologia from './Archeologia.js'
import Sklep from './Sklep.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Menu() {
    
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Monda&family=Orbitron&display=swap');
            </style>
                <div className="wszystko">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Wystawy'>Wystawy</Link>
                    </li>
                    <li>
                        <Link to='/Aktualnosci'>Aktualności</Link>
                    </li>
                    <div className="pasek">
                        <button className="pasekprz">
                            Badania
                            <i className="cos"></i>
                        </button>
                        <div className="rozwijanie">
                            <li>
                                <Link to='/Archeologia'>Archeologia</Link>
                            </li>
                            <li>
                                <Link to='/Paleontologia'>Paleontologia</Link>
                            </li>
                            <li>
                                <Link to='/Gatunki'>Nowe Gatunki Zwierząt</Link>
                            </li>
                            <li>
                                <Link to='/Astronomia'>Astronomia</Link>
                            </li>
                        </div>
                    </div>
                    <li>
                        <Link to='/Sklep'>Sklep</Link>
                    </li>
                    <li>
                        <Link to='/Informacje'>Informacje</Link>
                    </li>
                </div>
               
        </div>
    )
}

export default Menu
