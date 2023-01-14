import React, { useContext } from 'react'

import { Header, MonthGrid } from '../containers'
import { YearContext } from '../contexts/YearContext'

const Home = () => {
  const { year, setYear } = useContext(YearContext)

  return (
    <>
      <Header year={year} setYear={setYear} />
      <MonthGrid year={year} />
    </>
  )
}

export default Home
