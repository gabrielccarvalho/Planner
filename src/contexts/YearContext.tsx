/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'

type YearContextType = {
  year: number
  addYear: () => void
  subYear: () => void
}

export const YearContext = createContext<YearContextType>({
  year: 0,
  addYear: () => {},
  subYear: () => {},
})

const YearContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [year, setYear] = useState(2023)

  const addYear = () => setYear(year => year + 1)

  const subYear = () => setYear(year => year - 1)

  return (
    <YearContext.Provider value={{ year, addYear, subYear }}>
      {children}
    </YearContext.Provider>
  )
}

export default YearContextProvider
