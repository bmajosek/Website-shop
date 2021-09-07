import React from 'react'
import Cytryny from './zdjecia/cytryna.jpeg'
import Kabanosy from './zdjecia/kabanosy.jpg'
import Sushi from './zdjecia/sushi.jpg'
import Spaghetti from './zdjecia/spaghetti.jpg'
import Zoom from 'react-reveal/Zoom';
import './Wystawy.css'
function Wystawy() {
    
    return (
        <div className="zdjecia">
            <Zoom>
            <div className="zdjecie">
                <img
                    fontSize="large"
                    className="zdj"
                    src={Kabanosy}alt="kabanosy"
                    />
                <div className="wypelnienie">
                    <div className='text'>to jest kabanos</div>
                </div>
            </div>
            </Zoom>
            <Zoom>
            <div className="zdjecie">
                <img
                    fontSize="large"
                    className="zdj"
                    src={Sushi}alt="sushi"
                    />
                    <div className="wypelnienie">
                            <div className='text'>to jest sushi</div>
                     </div>
            </div>
            </Zoom>
            <Zoom>
            <div className="zdjecie">
                    <img 
                        fontSize="large"
                        className="zdj"
                        src={Cytryny}alt="cytryny"
                    />
                        <div className="wypelnienie">
                        <div className='text'>to jest cytryna</div>
                    </div>
        </div>
        </Zoom>
        <Zoom>
            <div className="zdjecie">
            <img
                fontSize="large"
                className="zdj"
                src={Spaghetti}alt="spaghetti"
                />
                <div className="wypelnienie">
                    <div className='text'>to jest spaghetti</div>
                </div>
            </div>
        </Zoom>
        </div>
    )
}

export default Wystawy
