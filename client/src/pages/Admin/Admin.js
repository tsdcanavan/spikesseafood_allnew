import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, FormBtn } from "../../components/Form";
import { Input } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Admin extends Component {
  state = {
    menu: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  componentDidMount() {
    API.getMenu(this.props.match.params.id)
    .then(menu => {
      this.setState({menu: menu.data});
    })
  }

  deleteMenu = id => {
    API.deleteMenu(id)
      // .then(res => this.loadMenus())
      .catch(err => console.log(err));
  };

  updateMenu = id => {
    API.updateMenu(id)
      .then(res => this.loadMenus())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.category && this.state.item) {
      API.saveMenu({
        category: this.state.category,
        item: this.state.item,
        status: this.state.status
      })
        .then(res => this.loadMenus())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Menu Editor
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
              <Link to="/Menus">
              <UpdateBtn />
              </Link>
              <Link to="/Specials">
              <UpdateBtn />
              </Link>
              <Link to="/">
              <UpdateBtn />
              </Link>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Category</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Admin;
