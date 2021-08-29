import React, { Component } from 'react';


import Menu from './MenuComponent';
import './App.css';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS} from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishDetailComponent';
import Header from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';

import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './HomeComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      comments:COMMENTS
    };
  }
  
  onDishSelect(dish) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage=()=>{
      RETURN (
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/> }/> 
          <Route exact path="/contactus" component={contact}/>
          <Redirect to="/home"/>
          </Switch>
      <Footer />
      </div>

    );
  }
}

export default Main;
