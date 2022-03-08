import { Link } from 'react-router-dom'


export const HeroCardSearch = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imagePath = `./assets/heroes/${id}.jpg`;

    return (

        <div className='container-fluid'>

            <div className='row'>
                <div className='col-12 my-2'>

                    <div className="card bg-dark ">
                        <img src={imagePath} className="card-img-top animate__animated animate__fadeIn " alt={superhero} />

                        <div className="card-body text-center animate__animated animate__fadeIn">

                            <h4 className="card-title"><u>{superhero}</u></h4>
                            <p className="card-text">{alter_ego}</p>

                            {
                                (alter_ego !== characters)
                                && <p className="text-muted">{characters}</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>


                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
