import React from 'react'
import { FilterStyled as Filter } from './style/Filter.style'
import { AppHeadStyled as AppHead } from './style/AppHead.style'
function Main({className}) {
  return (
    <main className={className}>
        <Filter />
        <AppHead />
    </main>
  )
}

export default Main