import React from 'react'
import {GlobalContextUse} from '../context/global'
import { Link } from 'react-router-dom'

function Popular() {
    const {popularAnime, isSearch} = GlobalContextUse()

    const conditionalRender = () => {
        if(!isSearch) {
            return popularAnime.map((anime) => {
                console.log(anime)
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt=""/>
                </Link>
            })
        }
    }

    return (
        <div>
            <div className="popular-anime"></div>
                {conditionalRender()}
        </div>

    )
}

export default Popular