import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Spikes Seafood
        </a>
        <a href="/menupage" className='navbar-brand'>
          Menu
         </a>
         <a href="/specialpage" className='navbar-brand'>
          Specials
         </a>
         {/* <a href="/admin" className='navbar-brand'>
          Admin
         </a> */}
      </div>
    </div>
  </nav>;

export default Nav;
