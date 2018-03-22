import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
        <div>
        <Header/>
        </div>
        );
    }
}
class Header extends React.Component {
    render(){
        return (
        <div class="row">
        <div class="col-sm-3">
        <h2>Available pigeons</h2>
  <ul class="list-group">
    <li class="list-group-item">Pakistan <span class="badge">12</span></li>
    <li class="list-group-item">Indian <span class="badge">5</span></li>
    <li class="list-group-item">Tipler <span class="badge">3</span></li>
    <li class="list-group-item">Nprmal <span class="badge">12</span></li>
    <li class="list-group-item">Racing Homer <span class="badge">5</span></li>
    <li class="list-group-item">Beauty Homer <span class="badge">3</span></li>
    <li class="list-group-item">Owl <span class="badge">12</span></li>
    <li class="list-group-item">Budamust <span class="badge">5</span></li>
    <li class="list-group-item">Red Pakistan <span class="badge">3</span></li>
  </ul>
        </div>

      <div class="col-sm-6">
      <div class="media">
   <div class="media-left">
     <img src="https://images6.alphacoders.com/501/thumb-350-501366.jpg" />
   </div>
   <div class="media-body">
     <h4 class="media-heading">Left-aligned</h4>
     <div class="progress">
 <div class="progress-bar" role="progressbar" aria-valuenow="50"
 aria-valuemin="0" aria-valuemax="100" style="width:50%">
   50%
 </div>
</div>
   </div>
 </div>

      </div>

      <div class="col-sm-3">

      </div>
        </div>
        );
    }
}


export default Home
