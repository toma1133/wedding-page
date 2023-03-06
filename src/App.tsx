import React from 'react'
import { GlobalStyle, ResetStyle } from './globalStyles'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import PartyInfo from './components/PartyInfo'
import RegistrationForm from './components/RegistrationForm'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <NavBar />
      <Banner />
      <PartyInfo />
      <RegistrationForm />
      <Gallery />
    </>
  )
}

export default App
