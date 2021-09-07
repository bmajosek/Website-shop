import React, { useState,useEffect } from 'react'
import Kabanosy from './zdjecia/kabanosy.jpg'
import './Home.css'
function Koszyk() {
    const [ilosck,setilosck] = useState(0)
    useEffect(() => {
        for(let i = 0 ;i<document.cookie.length;i++)
        {
            if(ilosck>0)
            {if(document.cookie[i]>='0' && document.cookie[i]<='9') setilosck( ilosck*10 + document.cookie[i])}
            else if(document.cookie[i]>='0' && document.cookie[i]<='9') setilosck( ilosck*10 + document.cookie[i])
            {
                setilosck(ilosck + document.cookie[i])
            }
        }
    }, [])
    
    return (
        
        <div>
            <h1 className="tytul">Witamy w koszyku</h1>
            <div style={{display: ilosck ? 'block' : 'none'}}>
                <p className='poboczny'>{ilosck}</p>
                <img src={Kabanosy} alt='kabanosy'></img>            
            </div>
            
        </div>
    )
}

export default Koszyk
