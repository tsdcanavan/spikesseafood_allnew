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
          <div className="col-md-10"> <img className="bannerImage col-md-10" src="../../img/2011-04-23_11-58-26_619.jpg" alt="Market Banner" />
          </div>
          <div className="col-md-2">
            <a href="https://www.facebook.com/Spikes-Fish-Mkt-Restaurant-115826045106813" target="_blank">
              <img src="img/facebook-wrap.png" alt="Facebook Logo" className="social-icon" />
            </a>
          </div>
        </div>
        <h1 className="styledFrescaLarge">Spike's Fish Market and Restaurant</h1>
        {/*
Main body information - Hours and addres
*/}
        <div id="wrapper" className="clearfix col-md-4">
          <section id="primary">
            <h4 className="styledFrescaReg">
              <strong>Winter Hours</strong>
            </h4>
            <p className="styledFrescaReg">
              Sunday - Thursday 11:30 am - 8:30 pm
              <br /> Friday - Saturday 11:30 am - 9:30 pm
              <br />
              <br /> Open 7 Days a Week - All Year Round!
              <br />
            </p>
            <p className="styledFrescaReg" style={{fontWeight: 'bold'}}>
              Market opens at 9:00 Daily
            </p>
          </section>
          <section id="secondary">
            <h4 className="styledFrescaReg">
            <strong><br />Location</strong>
             </h4>
            <p className="styledFrescaReg">
              415 Broadway
              <br /> Point Pleasant Beach, NJ
              <br /> 732-295-9400
              <br />
              <a href="mailto:contact@spikesseafood.com" className="styleMailto">contact@spikesseafood.com</a>
              <br />
            </p>
            <p />
          </section>
        </div>
        {/*
Google map insert - opening div /div is for alignment of the map. 
	There's probably a more efficient way to align it but this works for now.
*/}
<div className="col-md-12">
        <center>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.8506770816043!2d-74.04998358540665!3d40.101042082703714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c18613d52c97b5%3A0xecbf4e507f2403a2!2s415+Broadway%2C+Point+Pleasant+Beach%2C+NJ+08742!5e0!3m2!1sen!2sus!4v1499717231195" width={300} height={225} frameBorder={0} align="center" style={{border: 0}} allowFullScreen />
        </center>
        </div>
        {/*
Bottom border, allow to click for larger view in new tab/window. 
	plain titles to allow easy replacement of the images with a new upload 
	to ./img
*/}
        <div id="wrapper">
        <Row>
          <section>
            <ul id="gallery">
              <li>
                <a href="img/food1.jpg" target="_blank">
                  <img src="img/food1.jpg" alt="Spikes Dishes" />
                  <p>Spike's Dishes</p>
                </a>
              </li>
              <li>
                <a href="img/food2.jpg" target="_blank">
                  <img src="img/food2.jpg" alt="Spikes Storefront" />
                  <p>Spike's Restaurant</p>
                </a>
              </li>
              <li>
                <a href="img/food3.jpg" target="_blank">
                  <img src="img/food3.jpg" alt="Spikes Dishes" />
                  <p>Spike's Dishes</p>
                </a>
              </li>
            </ul>
          </section>
          </Row>
        </div>
        <footer>
          {/* <a href="https://www.facebook.com/Spikes-Fish-Mkt-Restaurant-115826045106813" target="_blank">
			<img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon">
		</a> */}
          {/* Script pulls the current client side year to show copyright year 
		If the client side date is wrong, this might not display accurate.
		I used it as a simple date display.*/}
          <p>©
            SiteSystems
          </p>
        </footer>
      {/* </div> */}
        </Container>
    );
  }
}

export default Home;