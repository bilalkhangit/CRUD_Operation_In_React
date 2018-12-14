import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <nav class="navbar navbar-expand-md bg-dark navbar-dark  ">
        {/* <div className="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar" >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" className="nav-link">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link to="/Accounts" className="nav-link">Accounts</Link>
              </li>
            </ul>
          </div>
        </div> */}
      </nav>
    )

  }

}

export default Header