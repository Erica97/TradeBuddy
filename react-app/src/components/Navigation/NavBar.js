
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./Navigation.css"
import { useSelector, useDispatch } from 'react-redux';
import Search from '../Search';
import {HiOutlineLogout} from "react-icons/hi"
import {BsSun} from "react-icons/bs"
import svgfile from "./logo.svg";
import { setTheme } from '../../store/session';

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const theme = useSelector(state=>state.session.theme)

  if(theme === "dark" && !user)dispatch(setTheme())

  const changeTheme = () => {
    dispatch(setTheme())
  }

  return (
    <nav id = "navbar-outer-container">
        {!user && (
          <div className = "navbar-inner-container">
          <div className = "navbar-left">
            <NavLink id = "navbar-title"className = "navbar-navlink" to='/' exact={true} activeClassName='active' >
              Trade&nbsp;
              <img src={svgfile} width={25} height={25}/>
              Buddy
            </NavLink>
          </div>
          <div className = "navbar-right">
            <div>
              <NavLink id = "navbar-login-navlink" className = "navbar-navlink user-button" to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </div>
            <div id = "navbar-user-buttons-spacer"></div>
              <NavLink id = "navbar-signup-navlink" className = "navbar-navlink user-button" to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
          </div>
        </div>
        )}
        {user && (
          <div className = "navbar-inner-container">
            <NavLink to = "/"><svg id = "robinhood-logo" height="80" viewBox="-558.32321571 -776.08216153 1777.65741484 1821.20469754" width="80" xmlns="http://www.w3.org/2000/svg"><g fill="#00c805"><path d="m250.85 627.43-5.28 1.78c-34.2 11.36-84.77 28.85-130.17 49.71-2.43 1.14-4.03 4.32-4.03 4.32-.84 1.95-1.89 4.35-3.08 7.07l-.18.35c-5.08 11.57-12.1 28.98-15.1 36.07l-2.34 5.58c-.36.88-.15 1.9.56 2.57.42.4.93.63 1.55.65.32 0 .7-.07 1.03-.24l5.49-2.61c12.41-5.9 28.14-14.86 44.63-22.69l.57-.27c31.35-14.87 66.74-31.65 88.06-41.81 0-.01 3.42-1.84 5.15-5.26l15.95-31.99c.42-.83.29-1.85-.29-2.56-.65-.7-1.63-.96-2.52-.67zm-127.46-49.58c2.22-4.37 12.59-24.26 14.93-28.72l.42-.76c69.24-130.58 153.63-253.74 250.77-366.06l2.69-3.1c.82-.97.97-2.36.38-3.49-.64-1.13-1.92-1.75-3.15-1.58l-4.07.55c-63.76 8.78-128.26 20.94-191.82 36.12-6.3 1.76-10.37 5.87-11.26 6.83-47.56 56.94-92.61 116.89-133.93 178.31-2.07 3.1-2.29 10.52-2.29 10.52s10.41 79.98 25.57 138.92c-37.57 108.01-71.11 250.35-71.11 250.35-.27.92-.08 1.91.47 2.69.57.78 1.47 1.23 2.44 1.26h21.38a3.17 3.17 0 0 0 3.02-2.03l1.45-4c21.83-59.51 46.73-118.29 74.23-175.55 6.4-13.34 19.88-40.26 19.88-40.26z"/><path d="m420.88 205.66-.04-4.07c-.04-1.28-.84-2.43-2.02-2.86-1.2-.45-2.58-.11-3.4.87l-2.66 3.08c-113.27 130.96-208.47 276.32-282.97 432.03l-1.73 3.64c-.57 1.15-.33 2.54.52 3.46.59.61 1.37.95 2.22.95.37.02.83-.06 1.22-.22l3.73-1.55c63.62-26.35 128.6-49.18 193.15-67.83 3.86-1.12 7.13-3.81 8.96-7.39 28.29-55.13 93.99-161.86 93.99-161.86 1.69-2.41 1.26-5.98 1.26-5.98s-11.51-127.67-12.23-192.27z"/><path d="m567.34 21.53c-16.08-13.94-39.4-20.49-75.66-21.27-32.87-.7-71.97 6.37-116.24 20.97-6.64 2.33-11.91 6-16.64 10.65a2138.718 2138.718 0 0 0 -130.22 133.41l-3.19 3.53c-.88 1-1.01 2.45-.36 3.6a3.07 3.07 0 0 0 3.33 1.47l4.64-.98c66.73-14.26 134.11-25.16 200.19-32.39 4.35-.48 8.84.97 12.09 3.93 3.24 2.99 5.1 7.24 5.02 11.67-1.09 65.57 1.28 131.47 7.13 195.89l.37 4.2a3.099 3.099 0 0 0 2.32 2.7c.22.06.44.11.73.12.98.01 2-.46 2.6-1.32l2.42-3.46c37.24-53.11 77.77-104.74 120.38-153.57l-.02-.01c4.77-5.43 6.04-8.87 6.93-13.8 13.42-85.84-7.29-149.28-25.82-165.34z"/></g></svg></NavLink>
            <Search/>
            <div id = "navbar-right-container">
              <BsSun onClick = {()=>changeTheme()} style = {{cursor:"pointer",fontSize:"20px",marginRight:"25px"}}/>
              <LogoutButton />
            </div>

          </div>
        )}
    </nav>
  );
}

export default NavBar;
