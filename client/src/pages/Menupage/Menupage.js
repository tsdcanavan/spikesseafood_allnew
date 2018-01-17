import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Menupage extends Component {
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
          <Col size='md-3'>
          <Jumbotron>
          <img className="bannerPage " src="./img/2011-04-23_11-58-26_619.jpg" alt="Market Banner" />
          </Jumbotron>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h2><center>Menu</center></h2>
            </Jumbotron>
            {this.state.menus.length ? (
              <List>
                {this.state.menus.map(menu => (
                  <ListItem key={menu._id}>
                    {/* <Link to={"/menus/" + menu._id}> */}
                      <strong>
                        {menu.category} - {menu.item}
                      </strong>
                    {/* </Link> */}
                    {/* <DeleteBtn onClick={() => this.deleteMenu(menu._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size='md-3'>
          <Jumbotron>
          <img className="bannerPage " src="./img/2011-04-23_11-58-26_619.jpg" alt="Market Banner" />
          </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Menupage;
