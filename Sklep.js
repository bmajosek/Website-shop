import React, { useState } from 'react'
import './Wystawy.css'
import Kabanosy from './zdjecia/kabanosy.jpg'
import Zoom from 'react-reveal/Zoom';
import Home from './Home.js'
import { Link } from "react-router-dom";
function Sklep() {
    const [ile,setile] = useState(0)
    const [cena,setcena] = useState(0)
    return (
        <div>
            <h1 className='tytul'>Sprzedam swieza kielbaske</h1>
            <div className='kosz'>
            <p className='koszyk'>Cena za wszystko: {cena}</p>
            <Link to={'/Sklep/Koszyk'} className="koszyk">Koszyk</Link>
            </div>
            <Zoom>
            <div className="zdjecie">
                <img
                    fontSize="large"
                    className="zdj"
                    src={Kabanosy}alt="kabanosy"
                    />
                <div className="wypelnienie">
                    <div className='text'>to jest kabanosiiiik</div>
                </div>
            </div>
            </Zoom>
            <h1 className='tytul'>Cena: 5 ziko i bsmart</h1>
            <button onClick={()=> {
                setile(ile + 1)
                setcena(cena + 5)
                document.cookie = `k=${ile}`
            }} className='przycisk'>KUP</button>
        </div>
    )
}

export default Sklep
