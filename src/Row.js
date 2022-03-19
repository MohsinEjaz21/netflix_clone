import movieTrailer from 'movie-trailer'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { instance as axios } from './axios'
import './Row.css'


const img_url = "https://image.tmdb.org/t/p/original/"

export const Row = ({ title, fetchUrl, isLargeRow }) => {

  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")


  useEffect(() => {
    (async () => {
      const requests = await axios.get(fetchUrl)
      setMovies(requests.data.results)
    })()

    return () => { }
  }, [fetchUrl])

  useEffect(() => {
    console.log('[ movies ] >', movies)
  }, [movies])

  const handleClick = (movie) => {
    console.log('movie', movie)
    console.log('trailerUrl', trailerUrl)

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'))
          // setTrailerUrl('2g811Eo7K8U')
        }).catch(err => {
          console.log('[ err ] >', err)
        })
    }
  }

  const opts = {
    height: "390",
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row_posters">
        {/* several row posters */}

        {movies.map(movie => (
          <img className={`row_poster ${isLargeRow} && row_posterLarge`} key={movie.id} src={`${img_url}${isLargeRow ?
            movie.poster_path : movie.backdrop_path}`} alt={movie.name} onClick={() => handleClick(movie)} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}
