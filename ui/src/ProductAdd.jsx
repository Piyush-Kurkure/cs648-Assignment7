import React from 'react';
// import PropTypes from 'prop-types';
import {
  Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { createProduct } = this.props;
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      category: form.category.value,
      price: form.price.value.slice(1),
      name: form.name.value,
      image: form.image.value,
    };
    createProduct(product);
  }

  render() {
    return (
      <section>
        <p>Add a new product to inventory</p>
        <hr />
        <Form inline name="productAdd" onSubmit={this.handleSubmit}>

          <div className="inputs">
            <FormGroup>
              <ControlLabel>category</ControlLabel>
              <FormControl componentClass="select" name="category" id="category">
                <option value="Accessories">Accessories</option>
                <option value="Shirts">Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Jackets">Jackets</option>
                <option value="Sweaters">Sweaters</option>
              </FormControl>
            </FormGroup>
          </div>

          <div className="inputs">
            <FormGroup>
              <ControlLabel> Price per unit</ControlLabel>
              <FormControl type="text" id="price" defaultValue="$" />
            </FormGroup>
          </div>

          <div className="inputs">
            <FormGroup>
              <ControlLabel>name</ControlLabel>
              <FormControl type="text" id="name" />
            </FormGroup>
          </div>

          <div className="inputs">
            <FormGroup>
              <ControlLabel>Image URL</ControlLabel>
              <FormControl type="text" id="image" />
            </FormGroup>
          </div>
          {' '}
          <Button bsStyle="primary" type="submit">Add Product</Button>
          {/* <button type="submit">Add Product</button> */}
        </Form>
      </section>

    );
  }
}
