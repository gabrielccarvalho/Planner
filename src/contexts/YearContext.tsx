/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

type YearContextType = {
  year: number
  setYear: React.Dispatch<React.SetStateAction<number>>
}

export const YearContext = createContext<YearContextType>({ year: 2023, setYear: () => {} })
