import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <img alt="marvel" src="/assets/dc.jpg" className="img img-fluid rounded mx-auto d-block w-25 animate__animated animate__fadeIn"/>
            
            <div>
                <HeroList publisher={"DC Comics"} />
            </div>
        </div>
    )
}
