import React, { Component } from "react";
import { EditProduct } from '../../actions/Products';
import { connect } from "react-redux";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.FillFields();
  }


  FillFields = () => {
    debugger
    const Prod  = this.props.Product.find((val) => {
         return val.Id == this.props.match.params.id         
    });
    
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

  // Update Product
    UpdateProduct = () => {
      
    const Name = this.refs.Name.value;
    const Price = this.refs.Price.value;
    const Description = this.refs.Description.value;
    const Category = this.refs.Category.value;
    const random_number = this.props.match.params.id;
    const Product = this.CreateProduct(
      random_number,
      Name,
      Description,
      Price,
      Category
    );

    let validation_error = false;

    if(Name === "" )
    {
        alert("Please Enter The Name");
        validation_error = true;
    }
    if(Price === "" )
    {
        alert("Please Enter The Price");
        validation_error = true;
    }
    if(Description  === "" )
    {
        alert("Please Enter The Description");
        validation_error = true;
    }
    if(Category  === "" )
    {
        alert("Please Enter The Category");
        validation_error = true;
    } 

    if( validation_error === true){
        return;
    } 
    

    this.props.dispatch(EditProduct(Product));
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
                Update Product Data
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
                  <label class="col-sm-3 col-form-label ml-2">Price*</label>
                  <div class="col-sm-8 col-11 ml-2">
                    <input type="text" class="form-control w-100" ref="Price" />
                  </div>
                </div>
                <hr/>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ml-2">Category*</label>
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
                        this.UpdateProduct();
                      }}
                    >
                      Update Product
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
    Product: store.ProductsReducer,
  };
};

export default connect(mapStateToProps)(Edit);
