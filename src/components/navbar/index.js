import {Nav, 
        NavBarContainer,
        NavLogo, 
        NavBarMenu,
        NavMobileIcon,
        NavMobileIconContainer,
        NavMenuItem,
        NavMenuLink,
        NavMenuBtn,
        NavMenuContainer } from './NavBarElements'


function NavBar(){

    return(
        <>
          <Nav>
              <NavBarContainer>
                  <NavLogo to="/">
                      Smart Farmer
                  </NavLogo>
                    <NavMobileIconContainer>
                        <NavMobileIcon></NavMobileIcon>
                    </NavMobileIconContainer>      
                  <NavBarMenu>
                      <NavMenuItem>
                          <NavMenuLink to="/about">About</NavMenuLink>
                      </NavMenuItem>
                      <NavMenuItem>
                          <NavMenuLink to="/services">Services</NavMenuLink>
                      </NavMenuItem>
                      
                      <NavMenuItem>
                          <NavMenuLink to="/support">Support</NavMenuLink>
                      </NavMenuItem>
                  </NavBarMenu>
                  <NavMenuContainer>
                     <NavMenuBtn to="/sign in">Sign in</NavMenuBtn>
                  </NavMenuContainer>
              </NavBarContainer>
          </Nav>
        </>
    )
}

export default NavBar