import React, { Component } from 'react';
import { connect } from 'react-redux'
import {DelProduct,EditProduct} from '../actions/Products';
class Index extends Component {
    constructor(props) {
        super(props);
        this.bindProducts();
    }
    bindProducts = () => { 
        if (this.props.Products.length > 0) {
            return this.props.Products.map((value, index) => {
                return <tr key={index}>
                    <td>{value.Name}</td>
                    <td>{value.Description}</td>
                    <td>$ {value.Price}</td>
                    <td>{value.Category}</td>
                    <td><button className="btn btn-Success">Read One</button> <button className="btn btn-Primary" onClick = {() => {this.props.history.push(`./Products/Edit/${value.Id}`)}}>Edit</button> <button className="btn btn-Danger" onClick={() => {this.DelProduct(value.Id)}}>Delete</button></td>
                </tr>

            });
        }
        

      

    }

  
    DelProduct = (Id) => {
     this.props.dispatch(DelProduct(Id));
     alert("Product Has Been Delete Successfully");
    }

   

    ShowTable = () => {
        if (this.props.Products != null && this.props.Products.length > 0 ) {
            return <div className="table-responsive-sm">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.bindProducts()}
                    </tbody>
                </table>
            </div>
        }
        else {
            return <div >
                <h3>There are currently no Products available.</h3>
                <div class="col-sm-4 col-11 ml-2 mb-4 mx-auto">
                    <button type="button" className="btn w-100  btn-View btn-Accounts-View" style={{ "background-color": "#39beb9", "border-color": "#39beb9" }} onClick={() => { this.props.history.push(`./Products/Create`) }}>Create a new product</button>
                </div>
            </div >
        }

    }
    render() {
        return (
            <div className="container ">
                <div className="row" >
                    <div className="col-md-9 shadow-sm mt-3 bg-white rounded mx-auto">
                       
                        <div> <i className="fas fa-user"></i> Read Products</div>
                        <button type="button" className="btn btn-primary" onClick={() => { this.props.history.push(`./Products/Create`) }}><i className="fas fa-arrow-left"></i> Create Product</button>
                        {this.ShowTable()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        Products: store.ProductsReducer
    }
}



export default connect (mapStateToProps)(Index);