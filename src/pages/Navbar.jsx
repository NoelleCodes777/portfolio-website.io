import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import my_navbar_data from './assets/NavData';
import nav_logo from '../Image/Profile_imgs/nav_logo.png';

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isbtnActive, setBtnActive] = useState(false);
  const [isBtnClick, setBtnClick] = useState(0);

  const handleClick = () => {
    setActive(!isActive);
    setBtnActive(!isbtnActive);
  };

  return (
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home_page" className="nav__logo">
            <img src={nav_logo} alt="logo" />
          </HashLink>
        </div>
        <div className={isActive ? 'active_links' : 'links'}>
          <div className="MenuItems">
            {my_navbar_data.map((data, index) => {
              return (
                  <React.Fragment key={index}>
                    {data.another_page ? (
                        <Link
                            className={isBtnClick === index ? 'active_navbtn' : 'navbtn'}
                            to={data.nav_link}
                            onClick={() => {
                              setBtnClick(index);
                            }}
                        >
                    <span
                        style={{
                          height: '39px',
                          alignItems: 'center',
                          paddingBottom: '1px',
                        }}
                    >
                      <data.nav__icon />
                    </span>
                          {data.navbar_name}
                        </Link>
                    ) : (
                        <HashLink
                            className={isBtnClick === index ? 'active_navbtn' : 'navbtn'}
                            to={data.nav_link}
                            onClick={() => {
                              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                              setBtnClick(index);
                            }}
                        >
                    <span
                        style={{
                          height: '39px',
                          alignItems: 'center',
                          paddingBottom: '1px',
                        }}
                    >
                      <data.nav__icon />
                    </span>
                          {data.navbar_name}
                        </HashLink>
                    )}
                  </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i
              className={isActive ? 'fas fa-times' : 'fas fa-bars-staggered'}
              style={{
                fontSize: '21px',
                fontWeight: '600',
                color: '#fff',
              }}
          ></i>
        </div>
      </div>
  );
};

export default Navbar;