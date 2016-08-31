import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import NavbarAccountItem from './NavbarAccountItem'
import NavbarAccountDropdown from './NavbarAccountDropdown'

class Navbar extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: Meteor.user() ? Meteor.user().emails[0].address : null
    }
  }

  componentDidMount(){
    //dropdown menu's fade in on hover.
    $(".dropdown-button").dropdown({
      hover: true,
      beloworigin: true
    });
  }

  render(){
    return(
      <div id="navbar-wrapper" className="navbar-fixed">
        <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "black", opacity: "0.5", zIndex: "-10"}} />
        <nav>
          <link rel="icon" sizes="16x16 32x32" href="/favicon.ico?v=2" />

          <ul id="newbieDropdown" className="navDropdowns dropdown-content">
            <li><a href="#!">Travellers</a></li>
            <li><a href="#!">Businesses</a></li>
            <li><a href="#!">Neighbourhoods</a></li>
          </ul>
          <div className="nav-wrapper ">
            <a href={FlowRouter.path("home")} className="brand-logo" style={{marginLeft: "25px"}}>Pynook</a>

            <ul className="right hide-on-med-and-down" style={{marginRight: "25px"}}>
              <li><a href={FlowRouter.path("pyns")}>Pyns</a></li>
              <li><a className="dropdown-button" href="#!" data-constrainWidth="false" data-beloworigin="true" data-hover="true" data-activates="newbieDropdown">Newbie <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href={FlowRouter.path("pyn.a.place")}>Pyn A Place</a></li>
              <NavbarAccountItem instance={this}/>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user()
  }
}, Navbar);
