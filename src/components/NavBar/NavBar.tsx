import React from 'react'
import styled from 'styled-components'

const NavBarContainer = styled.nav`
  height: 32px;
  padding: 1%;
  position: absolute;
  top: 0;
  width: 100vw;
`

const NavBarList = styled.ul``

const NavBarItem = styled.ul``

const NavBarLink = styled.a``

const NavBar = (): JSX.Element => {
  return (
    <NavBarContainer>
      <NavBarList>
        <NavBarItem>
          <NavBarLink>TOP</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink>INFO</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink>REGISTER</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink>GALLERY</NavBarLink>
        </NavBarItem>
      </NavBarList>
    </NavBarContainer>
  )
}

export default NavBar
