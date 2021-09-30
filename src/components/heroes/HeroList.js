import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__zoomIn">
            {
                heroes.map(heroe => {
                    return <HeroCard key={heroe.id} {...heroe}></HeroCard>
                })
            }
        </div>
    )
}
