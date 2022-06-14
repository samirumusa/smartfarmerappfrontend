import styled from 'styled-components'
import {Link  as LinkReact} from 'react-router-dom'
import {Link  as LinkScroll} from 'react-scroll'
import {FaBars} from'react-icons/fa'

export const Nav = styled.nav`
 background: #1d2822;;
 height:80px;
 display:flex;
 justify-content:center;
 align-items:center;
 position:sticky;
 z-index:20;
 font-size:24px;


`

export const NavBarContainer = styled.div`
   display:flex;
   align-items: center;
   justify-content; space-between;
   height:y;
   width:100%;
   padding: 0 24;
   z-index:2;
   max-width:1100px;


`
export const NavBarMenu = styled.ul`
   display:flex;
   align-items:center;
   list-style:none;
   text-align:center;
   margin-right: -22px;
   padding-left: 100px;
   
   @media screen and (max-width:1100px){
      display:none;
   }
   
`
export const NavLogo = styled(LinkReact)`
  color:#fff;
  text-decoration:none;
  margin-left:24px;
  display:flex;
  justify-self: flex-start
  aling-items:center;
  cursor:pointer;
  font-weight:bold;
  font-size:32px;

`
export const  NavMobileIconContainer = styled.div`
   display:none;

        @media screen and (max-width:1100px){
         display:block;
         align-items:center;
         color:#fff;
         right:0;
         margin-right:25px;
         position:absolute;
         transform(-100%, 60%)
        }
    
`
export const NavMobileIcon = styled(FaBars)`
      

`
export const NavMenuItem = styled.li`

      height:80px;

`

export const NavMenuLink = styled(LinkScroll)`
       
       display:flex;
       align-items: center;
       justify-self: center;
       margin-left:20px;
       color:#fff;
       text-decoration:none;
       padding: 0 1rem;
       cursor:pointer;
       height:100%;


       &:hover{
          background-color:#116235;
       }
       &:active{
          border-bottom: 3px solid #116235
       }
`
export const NavMenuContainer = styled.div`
      background:#34ce7a;
      display:flex;
      align-items:center;
      height:34px;
      width:150px;
      border-radius:15px;

`
export const NavMenuBtn = styled(LinkReact)`
       color:#fff;
       border: none;
       display:flex;
       align-items:center;
       justify-content:center;
       text-decoration:none;
       font-weight:bold;
       cursor:pointer;
`