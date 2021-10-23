import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'casual', label: 'Casual' },
  { value: 'sport', label: 'Sport' },
  { value: 'vintage', label: 'Vintage' }
];

const handleChange = e => {
};


const Menu = () => {
  return  (
    <div class="navbar">
      <a href="news">News</a> 
      <div class="dropdown">
        <button class="dropbtn">Home 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="header">
            <Select onChange={handleChange} options={options} defaultValue={{ value: 'casual', label: 'Casual' }}/>
          </div>   
          <div class="row">
            <div class="column">
              <h3  href="female">Female</h3>
              <a href="#">Jean</a>
              <a href="#">Sweater</a>
              <a href="#">Underground</a>
            </div>
            <div class="column">
              <h3  href="male">Male</h3>
              <a href="#">Jean</a>
              <a href="#">T-Shirt</a>
              <a href="#">Shoes</a>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Childs 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <h3  href="female">Littles boys and females</h3>
              <a href="#">Jean</a>
              <a href="#">Sweater</a>
              <a href="#">Underground</a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Menu;