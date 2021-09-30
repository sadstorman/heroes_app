import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <img alt="marvel" src="assets/marvel.png" className="img img-fluid rounded mx-auto d-block animate__animated animate__fadeIn"/>
            <div>
                <HeroList publisher={"Marvel Comics"} />
            </div>
        </div>
    )
}
