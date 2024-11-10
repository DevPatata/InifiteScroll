import React, { useState } from 'react'
import { ItemsContext } from './ItemsContext'

export function ItemsContextProvider({ children }) {
  const [items, setItems] = useState([])

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  )
}
