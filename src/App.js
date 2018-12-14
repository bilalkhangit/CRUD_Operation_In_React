import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AddNewProduct from './components/Products/Create'
import EditProduct from './components/Products/Edit'
import Main from './components/Main'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              {/* <Route path="/Account" component={Account} /> */}
              {/* <Route path="/Accounts/WithDraw/:id" component={WithDraw} /> */}
              <Route path="/Products/Create" component={AddNewProduct} />
              <Route path="/Products/Edit/:id" component={EditProduct} />
              <Route exact path="/" component={Main} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );

  }

}

export default App;
