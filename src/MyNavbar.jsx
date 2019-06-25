import React, { Component } from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,InputGroup,FormControl, Button,Form, Jumbotron} from 'react-bootstrap'
import ReactMegaMenu from "react-mega-menu"
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

import './index.css'
import Logo from "./assets/images/Logo.png"
import News from "./assets/images/news.png"

class NavBar extends Component {

render(){
 const img = './assets/images/news.png'
    return (
<BrowserRouter>
      <Navbar bg="light" expand="lg" className="custom-header">
    <Navbar.Brand href="#home"><img src={Logo} className="logo-main"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Form inline>
        <FormControl type="text" placeholder="Search OSDB Players and News" className="search" />
      </Form>
      <Nav className="ml-auto">

      <NavDropdown title="NFL" id="basic-nav-dropdown" className="megamenu-li">
      <div className="megamenu my-mega" aria-labelledby="dropdown01">
        <div className="row">
          <div className="col-sm-2">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <h6 className="nav-tabs-head">NFL Home</h6>
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-controls="home">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Teams</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#messages" role="tab" aria-controls="messages">Schedules</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#settings" role="tab" aria-controls="settings">Standings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#home" role="tab" aria-controls="home">Stats</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Transactions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#messages" role="tab" aria-controls="messages">Compare</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#settings" role="tab" aria-controls="settings">Free Agents</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#settings" role="tab" aria-controls="settings">Retired Players</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-10">

            <div class="tab-content">
              <div class="tab-pane active" id="home" role="tabpanel">
                <div className="row">
                 <div className="col-sm-6 col-lg-3">
                  <h5>AFC East</h5>

                  <a className="dropdown-item" href="#">
                    <img src={News} />
                    Another action
                  </a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>AFC West</h5>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>AFC North</h5>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>AFC South</h5>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                 </div>
                </div>
                <div className="row">
                 <div className="col-sm-6 col-lg-3">
                  <h5>NFC East</h5>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>NFC West</h5>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>NFC North</h5>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>NFC South</h5>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                  <a className="dropdown-item" href="#"><img src={News} />Something else here</a>
                  <a className="dropdown-item" href="#"><img src={News} />Another action</a>
                 </div>
                </div>
              </div>
              <div class="tab-pane" id="profile" role="tabpanel">
                <div className="row">
                 <div className="col-sm-6 col-lg-3">
                  <h5>NFC East</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>NFC West</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>NFC North</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>NFC South</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                </div>
                <div className="row">
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                </div>
              </div>
              <div class="tab-pane" id="messages" role="tabpanel">
                <div className="row">
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                </div>
                <div className="row">
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#"> else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                </div>
              </div>
              <div class="tab-pane" id="settings" role="tabpanel">
                <div className="row">
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something </a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                </div>
                <div className="row">
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another </a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                 </div>
                 <div className="col-sm-6 col-lg-3">
                  <h5>More Links</h5>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a className="dropdown-item" href="#">Another action</a>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>




     </div>
      </NavDropdown>

        <NavDropdown title="NBA" id="basic-nav-dropdown" className="dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="NHL" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="+" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">SOCCER</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">MLB</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">GOLF</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">TENNIS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">BOXING</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">NASCAR</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="/" className="page">Page 1</Nav.Link>
        <Nav.Link href="/Page2" className="page">Page 2</Nav.Link>
        <NavDropdown title="ACCOUNT" id="basic-nav-dropdown">
          <NavDropdown.Item href="Login">LOGIN</NavDropdown.Item>
          <NavDropdown.Item href="SignUp">SIGN UP</NavDropdown.Item>

        </NavDropdown>

      </Nav>

    </Navbar.Collapse>
  </Navbar>
  <div className="content">
      <Route exact path="/" component={Page1} />
      <Route path="/Page2" component={Page2} />

  </div>
  </BrowserRouter>

    );

 };
}


export default NavBar;
