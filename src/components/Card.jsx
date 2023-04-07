import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
 
  return (
    <div id="style">
        <img src={props.poster} alt="Poster" />
        <h1>{props.movieTitle}</h1>
        {props.movieTitle==='No Title'?<></>
        : <button> 
        <Link to={props.path}>
        View Details
        </Link></button>}
       
    </div>
  )
}

export default Card