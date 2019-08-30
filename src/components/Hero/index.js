import React, { useState, useEffect } from 'react'
import HeroAPI from '../../services/HeroApi'

import './styles.css';
import PowerStats from '../PowerStats';

export default function Hero({ match }) {
  const [heroId] = useState(match.params.heroId)
  const [hero, setHero] = useState(null)

  useEffect(() => {
    const getHero = async () => {
        const response = await HeroAPI.get(`/id/${heroId}.json`)
        setHero(response.data)
    };

    getHero()
  }, [heroId])

  return hero && (
    <div className="heroInfo">
      <>
        <div className="heroHeader">
          <img src={hero.images.sm} alt={hero.name} />
          <h1>{hero.name}</h1>
        </div>
        <p>{hero.biography.fullName}</p>
        <p>Work occupation: <small>{hero.work.occupation}</small></p>
        <PowerStats power={hero.powerstats} />
      </>      
    </div>
  )
}
