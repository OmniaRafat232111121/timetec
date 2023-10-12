import Acheviment from '@/components/Acheviment'
import Clients from '@/components/Clients'
import Info from '@/components/Info'
import Team from '@/components/Team'
import React from 'react'

const page = () => {
  return (
    <div>
      <Info/>
      <Team/>
      <Clients/>
      <Acheviment/>
    </div>
  )
}

export default page
