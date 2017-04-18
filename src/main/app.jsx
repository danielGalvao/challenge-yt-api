import React from 'react'
// Local imports
import Header from '../components/Header'

export default ({ children }) => (
  <main>
    <Header />
    { children }
  </main>
)
