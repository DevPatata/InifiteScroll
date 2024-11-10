import React from 'react'
import './cardItem.css'

export function CardItems({ children }) {

  return (
    <div className="card">
      {children}
    </div>
  )
}
