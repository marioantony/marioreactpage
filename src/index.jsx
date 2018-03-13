import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

var data = [{
		id: 1,
		name: 'Silesian Wing Pigeon',
		year: 'Sri',
		model: 'Blue Barless',
		make: 'Silesian Wing Pigeon',
		media: 'http://pigeonfanciers.ca/random/lrg-pics/pigeon45.jpg',
		price: '10,000/='

	}, {
		id: 2,
		name: 'Taganrog Tumbler',
		year: 'Africa',
		model: 'Fancy Pigeon Breed',
		make: 'Taganrog Tumbler',
		media: 'https://i.ytimg.com/vi/pBvYIxFjrU4/maxresdefault.jpg',
		price: '6000/='

	}, {
	    id: 3,
	    name: 'Barking Pigeon',
	    year: 'America',
	    model: 'Barking breed',
	    make: 'Barking',
	    media: 'http://www.freakingnews.com/pictures/129500/Barking-Pigeon--129810.jpg',
	    price: '100000/='
	}, {
	    id: 4,
	    name: 'Pink Pigeon',
	    year: 'Qutor',
	    model: 'Ford breed',
	    make: 'Ford',
	    media: 'https://www.durrell.org/wildlife/wp-content/uploads/2014/12/Pink-pigeon-profile-bg1.jpg',
	    price: '1000000/='
	}, {
	    id: 5,
	    name: 'Sno-King Racing Pigeon',
	    year: 'Singapura',
	    model: 'Racing breed',
	    make: 'Dodge',
	    media: 'http://www.sno-kingracingcars.com/images/Pigeon%201a.jpg',
	    price: '12000/='
	}];

render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/cars" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/cars/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
