import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function HeroItem({ hero }) {
  return (
    <div className="gridItem">
        <Link to={`/hero/${hero.id}`}>
            <img src={hero.images.sm} alt={hero.name} />
        </Link>
        <h1>{hero.name}</h1>
        <p>{hero.biography.fullName || ' '}</p>
        <p>Work occupation: <small>{hero.work.occupation}</small></p>        
    </div>
  );
}
