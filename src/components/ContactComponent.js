import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
  }
  handleInputChange(event){
 const target=event.target;
 const value=target.type==="checkbox"?target.checked:target.value;
 const name=target.name;
 this.setState({
     [name]:value
 });
  }
  handleSubmit(event){
console.log("Current State is:"+JSON.stringify(this.state));
alert("Current State is:"+JSON.stringify(this.state));
event.preventDefault();

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <BreadCrumb>
            <BreadCrumbItem>
              <Link to="/home">Home</Link>
            </BreadCrumbItem>
            <BreadCrumbItem active>Contact Us</BreadCrumbItem>
          </BreadCrumb>
          <div className="col-12">
            <h3>Contact us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send Us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <label htmlFor="firstname" md={2}>
                  First Names
                </label>
                <col md={10}>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                  />
                </col>
              </FormGroup>

              <FormGroup row>
                <label htmlFor="lastname" md={2}>
                  Last Names
                </label>
                <col md={10}>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                </col>
              </FormGroup>

              <FormGroup row>
                <label htmlFor="telnum" md={2}>
                  Contact Tel.
                </label>
                <col md={10}>
                  <input
                    type="tel"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    value={this.state.telnum}
                    onChange={this.handleInputChange}
                  />
                </col>
              </FormGroup>

              <FormGroup row>
                <label htmlFor="email" md={2}>
                  Email
                </label>
                <col md={10}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange} 
                  />
                </col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>May We Contact You?</strong>
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <Col md={{size:3,offset:1}}>
                  <input type="select" name="contactType" value={this.state.contactType}>
                  onChange={this.handleInputChange}
                  <option>Tel.</option>
                  <option>Email</option>    
                  </input>
              </Col>

              <FormGroup row>
                <label htmlFor="message" md={2}>
                 Your Feedback
                </label>
                <col md={10}>
                  <input
                    type="textarea"
                    id="message"
                    name="message"
                   rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </col>
              </FormGroup>


              <FormGroup row>
                  <Col md={{size:10,offset:2}}>
                      <Button type="submit" color="primary">
                          Send Feedback
                          </Button> 
                  </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;