import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartShopping, faPenToSquare, faMagnifyingGlass, faLightbulb, faLayerGroup, faCalendarWeek, faInbox, faBullhorn, faChartSimple, faWindowRestore, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const sidebarStyle = {
    width: '70px',
    height: '100vh',
    position: 'fixed',
    left: 0,
    bottom: 0,
    backgroundColor: '#f4f4f4',
    padding: '0px 0',
    boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1000,
  };

  const categoryStyle = {
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const linkStyle = {
    width: '40px',
    height: '40px',
    color: '#777',
    textDecoration: 'none',
    borderRadius: '50%',
    margin: '10px 0',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    transition: 'background-color 0.3s, transform 0.3s',
    position: 'relative',
  };

  const linkHoverStyle = {
    backgroundColor: 'white',
    transform: 'scale(1.1)',
  };

  const tooltipStyle = {
    position: 'absolute',
    top: '50%',
    left: '100%',
    transform: 'translateY(-50%)',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    opacity: 1,  // Adăugarea proprietății zIndex
  };
  

  const buttonText = [
    'Home',
    'Shopping',
    'Pen',
    'Search',
    'Lightbulb',
    'Layers',
    'Calendar',
    'Inbox',
    'Bullhorn',
    'Chart',
    'Restore',
    'Question',
    'User'
  ];

  const icons = [
    faHome,
    faCartShopping,
    faPenToSquare,
    faMagnifyingGlass,
    faLightbulb,
    faLayerGroup,
    faCalendarWeek,
    faInbox,
    faBullhorn,
    faChartSimple,
    faWindowRestore,
    faQuestion,
    faUser
  ];

  return (
    <div style={sidebarStyle}>
      <div style={categoryStyle}>
        <Link
          to="/"
          style={{ ...linkStyle, ...(hovered === 0 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faHome} />
          {hovered === 0 && <span style={tooltipStyle}>Home</span>}
        </Link>
        <Link
          to="/about"
          style={{ ...linkStyle, ...(hovered === 1 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          {hovered === 1 && <span style={tooltipStyle}>Shopping</span>}
        </Link>
        <Link
          to="/contact"
          style={{ ...linkStyle, ...(hovered === 2 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          {hovered === 2 && <span style={tooltipStyle}>Pen</span>}
        </Link>
        <Link
          to="/search"
          style={{ ...linkStyle, ...(hovered === 3 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          {hovered === 3 && <span style={tooltipStyle}>Search</span>}
        </Link>
      </div>

      <div style={categoryStyle}>
        <Link
          to="/ideas"
          style={{ ...linkStyle, ...(hovered === 4 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faLightbulb} />
          {hovered === 4 && <span style={tooltipStyle}>Lightbulb</span>}
        </Link>
        <Link
          to="/layers"
          style={{ ...linkStyle, ...(hovered === 5 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(5)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faLayerGroup} />
          {hovered === 5 && <span style={tooltipStyle}>Layers</span>}
        </Link>
        <Link
          to="/calendar"
          style={{ ...linkStyle, ...(hovered === 6 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(6)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faCalendarWeek} />
          {hovered === 6 && <span style={tooltipStyle}>Calendar</span>}
        </Link>
        <Link
          to="/inbox"
          style={{ ...linkStyle, ...(hovered === 7 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(7)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faInbox} />
          {hovered === 7 && <span style={tooltipStyle}>Inbox</span>}
        </Link>
        <Link
          to="/announcements"
          style={{ ...linkStyle, ...(hovered === 8 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(8)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faBullhorn} />
          {hovered === 8 && <span style={tooltipStyle}>Bullhorn</span>}
        </Link>
        <Link
          to="/charts"
          style={{ ...linkStyle, ...(hovered === 9 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(9)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faChartSimple} />
          {hovered === 9 && <span style={tooltipStyle}>Chart</span>}
        </Link>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link
          to="/restore"
          style={{ ...linkStyle, ...(hovered === 10 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(10)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faWindowRestore} />
          {hovered === 10 && <span style={tooltipStyle}>Restore</span>}
        </Link>
        <Link
          to="/faq"
          style={{ ...linkStyle, ...(hovered === 11 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(11)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faQuestion} />
          {hovered === 11 && <span style={tooltipStyle}>Question</span>}
        </Link>
        <Link
          to="/profile"
          style={{ ...linkStyle, ...(hovered === 12 && linkHoverStyle) }}
          onMouseEnter={() => handleHover(12)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faUser} />
          {hovered === 12 && <span style={tooltipStyle}>User</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
