import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/card" className="breadcrumb-link">Blog</Link>
        </li>
        {/* {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li
              key={name}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? (
                <span className="breadcrumb-text">{name}</span>
              ) : (
                <Link to={routeTo} className="breadcrumb-link">{name}</Link>
              )}
              {!isLast && <span className="breadcrumb-separator"> &gt; </span>}
            </li>
          );
        })} */}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
