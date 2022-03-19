import React, { useEffect, useState } from 'react'
import { instance as axios } from './axios'
import './Banner.css'
import { requests } from './requests'

const img_url = "https://image.tmdb.org/t/p/original/"

export const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    (async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    })()
  }, [])

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  console.log('[ banner movie ] >', movie)
  return (
    // header has background image
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${img_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        {/* div > 2 btns */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* description */}
        <h1 className="banner_description">
          {truncate(movie?.overview || "", 150)}
        </h1>

      </div>

      <div className="banner_fadeBottom" />

    </header>
  )
}
