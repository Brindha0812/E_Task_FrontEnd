import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

import './card.css';
const card1 = 'Hari \n BM101 \n hari@genericeautomech.com \n 1234567890';
const card111 = '\n 24/05/03 . 17:54 . Admin';
const card2 = 'Sridhar \n BM102 \n srid@genericeautomech.com \n 1234567890 ';
const card222 = '\n 24/05/03 . 17:54 . Admin';
const card3 = 'Arun \n BM103 \n arun@gnericeautomech.com \n 1234567890';
const card333 = '\n 24/05/03 . 17:54 . Admin';
const card4 = 'Prabhu \n BM104 \n pra@genericeautomech.com \n 1234567890 n';
const card444 = '\n 24/05/03 . 17:54 . Admin';

function Card() {
  return (
    <div className="card-container">
      <h4 className="card-heading">Employees</h4>
      {/* <Breadcrumbs/> */}
      <div className='icons'>
        <img src='./assets/search.png' alt='search icon' className="search-icon"/>
        <Link to="/employee"> 
          <img src="./assets/add.png" alt="add icon" className="add-icon" />
        </Link>        
        <img src='./assets/ref.png' alt='refresh icon' className="ref-icon"/>
      </div>
      <div className="employee-card">
      {/* <Link to="/edit">Edit</Link> */}
        <div className="card-header">
          <img src='./assets/hari.png' alt="Emp Profile" className="card-icon" />
          <div className="card-content1">{card1}</div>
          <div className='card-content3'>{card111}</div>
        </div>
      </div>
      <div className="employee-card">
        <div className="card-header">
          <img src='./assets/Sridhar.png' alt="Emp Profile" className="card-icon" />
          <div className="card-content1">{card2}</div>
          <div className='card-content3'>{card222}</div>
        </div>
      </div>
      <div className="employee-card">
        <div className="card-header">
          <img src='./assets/arun.png' alt="Emp Profile" className="card-icon" />
          <div className="card-content1">{card3}</div>
          <div className='card-content3'>{card333}</div>
        </div>
      </div>
      <div className="employee-card">
        <div className="card-header">
          <img src='./assets/prabhu.png' alt="Emp Profile" className="card-icon" />
          <div className="card-content1">{card4}</div>
          <div className='card-content3'>{card444}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;