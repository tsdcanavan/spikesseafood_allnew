import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
          <Col size="md-6">
            <Jumbotron>
              <h1>Spike's Menu Update</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (required)"
              />
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="Item (required)"
              />
              <Input
                value={this.state.status}
                onChange={this.handleInputChange}
                name="status"
                placeholder="Status (Optional)"
              />
              <FormBtn
                disabled={!(this.state.category && this.state.item)}
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Menu List</h1>
            </Jumbotron>
            {this.state.menus.length ? (
              <List>
                {this.state.menus.map(menu => (
                  <ListItem key={menu._id}>
                    <Link to={"/menus/" + menu._id}>
                      <strong>
                        {menu.item} by {menu.category}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMenu(menu._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Menus;
