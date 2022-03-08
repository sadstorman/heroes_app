import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCardSearch } from '../heroes/HeroCardSearch';
import queryString from 'query-string'
import { getHeroesByName } from '../../selectors/getHeroesByNames';

export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    console.log(q);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    })

    const { searchText } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
    }
    const heroesFilter = useMemo(() => getHeroesByName(q), [q])

    console.log(heroesFilter);
    return (
        <div>
            <h1> Search screen</h1>
            <br />

            <div className="row row-sm-2 ">
                <div className="col-md-6 col-sm-12">
                    <h4>Search form</h4>
                    <hr />
                    

                    <form onSubmit={handleSubmit}>
                        <input
                            value={searchText}
                            name="searchText"
                            type="text"
                            autoComplete="off"
                            placeholder="find your hero.."
                            className="form-control w-100"
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block mt-2 btn-outline-primary m-auto "
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-md-6 col-sm-12">
                    <h4>Results</h4>

                    {(q === '')
                        && <div className="alert alert-info">
                            Search a hero
                        </div>}

                    {(q !== '' && heroesFilter.length === 0)
                        && <div className="alert alert-danger">
                            There is not a hero with {q}
                        </div>}
                    <hr />
                    {
                        heroesFilter.map(hero => (
                            <HeroCardSearch
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
