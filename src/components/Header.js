import React from 'react'
import { GlobalContext } from "../context/GlobalState";
import { useContext } from 'react';
export const Header = () => {
  return (
    <h2 className='header' style={{ textAlign: 'center' }}>Expense tracker</h2>
  )
}
export default Header
export {}
