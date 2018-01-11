import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, FormBtn } from "../../components/Form";
import { Input } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
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
            <form>
              <p><strong>Category</strong></p>
              <Input
                value={this.state.menu.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (required)"
              />
              <p><strong>Item</strong></p>
              <Input
                value={this.state.menu.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="Item (required)"
              />
              <p><strong>Status</strong></p>
              <Input
                value={this.state.menu.status}
                onChange={this.handleInputChange}
                name="status"
                placeholder="Status (Optional)"
              />
              <Link to="/">
              <UpdateBtn  />
              </Link>
              <Link to="/">
              <DeleteBtn onClick={() => this.deleteMenu(this.state.menu._id)} />
              </Link>
            </form>
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

export default Detail;
