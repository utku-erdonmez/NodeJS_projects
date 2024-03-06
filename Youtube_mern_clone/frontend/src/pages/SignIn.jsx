import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export const SignIn = ({setHideMenuNavbar}) => {
  useEffect(() => {
    setHideMenuNavbar(true);
    return () => {
      setHideMenuNavbar(false);
    };
  });
  return (
    <div>
    <Link to='/'>
    <button onClick={()=>setHideMenuNavbar(false)}>BB</button>
    </Link>
    </div>
  )
}
