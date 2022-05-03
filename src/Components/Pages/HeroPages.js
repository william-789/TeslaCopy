import React from 'react'
import HeroPattern from './HeroPattern'
import { Acessories, Model3, ModelS, ModelX, ModelY, SolarPanels, SolarRoofs } from './MainData'

function HeroPages() {
  return (
    <>
    <HeroPattern {...Model3}/>
    <HeroPattern {...ModelY}/>
    <HeroPattern {...ModelS}/>
    <HeroPattern {...ModelX}/>
    <HeroPattern {...SolarPanels}/>
    <HeroPattern {...SolarRoofs}/>
    <HeroPattern {...Acessories}/>
    </>
  )
}

export default HeroPages