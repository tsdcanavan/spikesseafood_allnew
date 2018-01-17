import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Menus extends Component {
  state = {
    menus: [],
    category: "",
    item: "",
    status: ""

  };

  componentDidMount() {
    this.loadMenus();
  }

  loadMenus = () => {
    API.getMenus()
      .then(res =>
        this.setState({ menus: res.data, category: "", item: "", status: "" })
      )
      .catch(err => console.log(err));
  };

  loadCats = category => {
    API.getCats(category)
      .then(res =>
        this.setState({ menus: res.data, category: "", item: "", status: "" })
      )
      .catch(err => console.log(err));
  };

  deleteMenu = id => {
    API.deleteMenu(id)
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
        <Col size="md-3">
        <Jumbotron>
        <img className="bannerPage " src="./img/2011-04-23_11-58-26_619.jpg" alt="Market Banner" />
          </Jumbotron>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h2>Spike's Maintenance Login</h2>
            </Jumbotron>
            <form>
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="User"
                placeholder="User Name (required)"
              />
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="Password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.category && this.state.item)}
                onClick={this.handleFormSubmit}
              >
               <Link to="/admin"> Log In </Link>
              </FormBtn>
            </form>
          </Col>
          <Col size="md-3">
          <Jumbotron>
        <img className="bannerPage " src="./img/2011-04-23_11-58-26_619.jpg" alt="Market Banner" />
          </Jumbotron>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Menus;
