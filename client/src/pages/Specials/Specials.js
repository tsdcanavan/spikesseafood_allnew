import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Specials extends Component {
  state = {
    menus: [],
    category: "",
    item: "",
    status: ""
  };

  componentDidMount() {
    this.loadSpecials();
  }

  loadSpecials = () => {
    API.getSpecials()
      .then(res =>
        this.setState({ menus: res.data, category: "", item: "", status: "" })
      )
      .catch(err => console.log(err));
  };

  deleteSpecial = id => {
    API.deleteSpecial(id)
      .then(res => this.loadSpecials())
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
      API.saveSpecial({
        category: this.state.category,
        item: this.state.item,
        status: this.state.status
      })
        .then(res => this.loadSpecials())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Spike's Specials Update</h2>
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
              <h2>Specials List</h2>
            </Jumbotron>
            {this.state.specials.length ? (
              <List>
                {this.state.specials.map(special => (
                  <ListItem key={special._id}>
                    <Link to={"/specials/" + special._id}>
                      <strong>
                        {special.item} as {special.category}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteSpecial(special._id)} />
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

export default Specials;
