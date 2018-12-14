import React, { Component } from "react";
import { AddProduct } from "../../actions/Products";
import { connect } from "react-redux";

class Create extends Component {
  constructor(props) {
    super(props);
    EditProduct;
  }


  EditProduct = () => {
      
    // this.props.dispatch(EditProduct(Id));
    alert("Product Has Been Updated Successfully" + this.props.match.params.Id);
  };

  CreateProduct = (Id, Name, Description, Price, Category) => {
    const Product = {
      Id: Id,
      Name: Name,
      Description: Description,
      Price: Price,
      Category: Category
    };
    return Product;
  };

  // Save Product
  SaveProduct = () => {
    const Name = this.refs.Name.value;
    const Price = this.refs.Price.value;
    const Description = this.refs.Description.value;
    const Category = this.refs.Category.value;
    const random_number = Math.floor(Math.random() * 10000000000000);
    const Product = this.CreateProduct(
      random_number,
      Name,
      Description,
      Price,
      Category
    );
    this.props.dispatch(AddProduct(Product));
    alert(`Product ${Product.Name} has been created`);
    // this.props.history.push(`./Display/${random_number}`)
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10  mx-auto">
            <div class="shadow-sm mt-3 bg-white rounded">
              <h4 className="text-center FormHeader p-4">
                Enter account details below
              </h4>
              <form>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ml-2">Name*</label>
                  <div class="col-sm-8 col-11 ml-2">
                    <input
                      type="text"
                      class="form-control"
                      ref="Name"
                      placeholder="Enter Full Name Here"
                    />
                  </div>
                </div>
                <hr />
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ml-2 ">
                    Description*
                  </label>
                  <div class="col-sm-8 col-11 ml-2">
                    <input
                      type="text"
                      class="form-control w-100"
                      ref="Description"
                    />
                  </div>
                </div>
                <hr />
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ml-2">Price </label>
                  <div class="col-sm-8 col-11 ml-2">
                    <input type="text" class="form-control w-100" ref="Price" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ml-2">Category </label>
                  <div class="col-sm-8 col-11 ml-2">
                    <input
                      type="text"
                      class="form-control w-100"
                      ref="Category"
                    />
                  </div>
                </div>
                <hr />
                <div class="form-group row">
                  <div class="col-sm-4 col-11  ml-2 mb-4">
                    <button
                      type="button"
                      className="btn w-100 btn-Create"
                      onClick={() => {
                        this.SaveProduct();
                      }}
                    >
                      Create New Product
                    </button>
                  </div>
                  <div class="col-sm-4 col-11 ml-2 mb-4">
                    <button
                      type="button"
                      className="btn w-100  btn-View"
                      onClick={() => {
                        this.props.history.push(`/`);
                      }}
                    >
                      View All Products
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    Accounts: store.accountsReducer,
    dashboard: store.dashboardReducer
  };
};

export default connect(mapStateToProps)(Create);
