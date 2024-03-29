import React from "react";
import Link from "./Link";
import GoogleAuth from '../../apis/GoogleAuth';


const Header = () => {
    return (
      <div className="ui secondary pointing menu">
        <Link href='/' className='item'>
          Home
        </Link>
        <Link href='/search' className='item'>
          Search
        </Link>
        <Link href='/dropdown' className='item'>
          Dropdown
        </Link>
        <Link href='/translate' className='item'>
          Translate
        </Link>
        <Link href='/payment' className='item'>
          PayBill
        </Link>
        <div className="right menu">
          <GoogleAuth/> 
        </div>
       
      </div>

    );
};

export default Header;