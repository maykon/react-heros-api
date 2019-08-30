import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Header() {
  return (
    <header>
        <h1><Link to="/">SuperHeros</Link></h1>
    </header>
  )
}
