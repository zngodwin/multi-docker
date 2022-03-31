import React from "react";
import Link from "./Link";
import GoogleAuth from '../../apis/GoogleAuth';


const Header = () => {
    return (
      <div className="ui secondar pointing menu">
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
      </div>

    );
};

export default Header;