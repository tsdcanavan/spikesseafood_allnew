import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, FormBtn } from "../../components/Form";
import { Input } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Home extends Component {
  // state = {
  //     menu: {}
  // };
  // // Add code to get the book with an _id equal to the id in the route param
  // // e.g. http://localhost:3000/books/:id
  // componentDidMount() {
  //     API.getMenu(this.props.match.params.id)
  //         .then(menu => {
  //             this.setState({ menu: menu.data });
  //         })
  // }

  // deleteMenu = id => {
  //     API.deleteMenu(id)
  //         // .then(res => this.loadMenus())
  //         .catch(err => console.log(err));
  // };

  // updateMenu = id => {
  //     API.updateMenu(id)
  //         .then(res => this.loadMenus())
  //         .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({
  //         [name]: value
  //     });
  // };

  // handleFormSubmit = event => {
  //     event.preventDefault();
  //     if (this.state.category && this.state.item) {
  //         API.saveMenu({
  //             category: this.state.category,
  //             item: this.state.item,
  //             status: this.state.status
  //         })
  //             .then(res => this.loadMenus())
  //             .catch(err => console.log(err));
  //     }
  // };

  render() {
    return (
      <Container fluid>
        <div className="row">
          <section className="col-md-6">
            <img className="bannerImage " src="./img/2011-04-23_11-58-26_619.jpg" alt="Market Banner" />
          </section>
          <section className='col-md-4'>
            <h4 className="styledFrescaReg">
              <strong>Hours</strong>
            </h4>
            <p className="styledFrescaReg">
              Open 7 Days a Week - All Year Round!
              <br />Sunday - Thursday 11:30 am - 8:30 pm
              <br /> Friday - Saturday 11:30 am - 9:30 pm
            </p>
            <p className="styledFrescaReg" style={{ fontWeight: 'bold' }}>
              Market opens at 9:00 Daily
            </p>
          </section>
          <div className="col-md-2">
            <a href="https://www.facebook.com/Spikes-Fish-Mkt-Restaurant-115826045106813" target="_blank">
              <i class="fab fa-facebook-square fa-lg" ></i>
            </a>
            <a>
              <i class='fab fa-twitter-square fa-lg' ></i>
            </a>
            <a>
              <i class='fab fa-instagram fa-lg' ></i>
            </a>
          </div>
        </div>
        {/* <h1 className="styledFrescaLarge">Spike's Fish Market and Restaurant</h1> */}
        {/*
Main body information - Hours and addres
*/}
        <div id="wrapper" className="clearfix col-md-4">
          <hr />
          <section id="secondary">
            <h4 className="styledFrescaReg">
              <strong>Location</strong>
            </h4>
            <p className="styledFrescaReg">
              415 Broadway<br />
              Point Pleasant Beach, NJ<br />
              732-295-9400<br />
              <a href="mailto:contact@spikesseafood.com" className="styleMailto">=Click to Contact Us=</a>
              <br />
            </p>
            <p />
          </section>
          <hr />
          <section>
            <center>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.8506770816043!2d-74.04998358540665!3d40.101042082703714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c18613d52c97b5%3A0xecbf4e507f2403a2!2s415+Broadway%2C+Point+Pleasant+Beach%2C+NJ+08742!5e0!3m2!1sen!2sus!4v1499717231195" width={275} height={206} frameBorder={0} align="center" style={{ border: 0 }} allowFullScreen />
            </center>
          </section>
        </div>
        <div id="wrapper" className="clearfix col-md-8">
          <center>

            <h2> About Us </h2>
            <p>
              Lorem ipsum dolor amet beard umami narwhal fanny pack butcher scenester ramps typewriter irony post-ironic. Artisan retro 3 wolf moon schlitz yuccie occupy cornhole banjo post-ironic wolf meditation tumblr blue bottle irony. Church-key gentrify forage distillery readymade fashion axe asymmetrical 3 wolf moon 8-bit small batch vexillologist. Hoodie chia cray, poutine PBR&B photo booth shabby chic. Mixtape synth ugh, narwhal kitsch echo park affogato.
          </p>
            <p>
              Pop-up microdosing cronut synth bicycle rights. Occupy semiotics +1 photo booth, keffiyeh jean shorts vape marfa gochujang echo park. Helvetica poutine glossier franzen la croix, succulents kogi shabby chic banjo street art leggings everyday carry. Cloud bread neutra tumeric chia, la croix vexillologist vaporware. Man braid letterpress small batch keytar cloud bread flannel schlitz lyft.
              </p>
          </center>
        </div>
        {/*
Bottom border, allow to click for larger view in new tab/window. 
	plain titles to allow easy replacement of the images with a new upload 
	to ./img
*/}
        {/* <div id="wrapper">
          <Row>
            <section>
              <ul id="gallery">
                <li>
                  <a href="./img/food1.jpg" target="_blank">
                    <img src="./img/food1.jpg" alt="Spikes Dishes" />
                    <p>Spike's Dishes</p>
                  </a>
                </li>
                <li>
                  <a href="./img/food2.jpg" target="_blank">
                    <img src="./img/food2.jpg" alt="Spikes Storefront" />
                    <p>Spike's Restaurant</p>
                  </a>
                </li>
                <li>
                  <a href="./img/food3.jpg" target="_blank">
                    <img src="./img/food3.jpg" alt="Spikes Dishes" />
                    <p>Spike's Dishes</p>
                  </a>
                </li>
              </ul>
            </section>
          </Row>
        </div> */}
        <footer>
          {/* <a href="https://www.facebook.com/Spikes-Fish-Mkt-Restaurant-115826045106813" target="_blank">
			<img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon">
		</a> */}
          {/* Script pulls the current client side year to show copyright year 
		If the client side date is wrong, this might not display accurate.
		I used it as a simple date display.*/}
          <p>
            <Link to={'/login'}>
              ©SiteSystems
            </Link>
          </p>
        </footer>
        {/* </div> */}
      </Container>
    );
  }
}

export default Home;
