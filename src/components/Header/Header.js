import React from 'react';
import './Header.scss'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'

class Header extends React.Component {
  state = {}
  handleYearChange(year) {
    this.props.changeYear(year)
  }
  yearOptions = ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006']
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="babyblue" sticky="top" className="justify-content-between">
        <Navbar.Brand>Trafalgar Shares</Navbar.Brand>

        <Dropdown className="justify-content-end" alignRight >
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {this.props.year}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {this.yearOptions.map(year => {
              return <Dropdown.Item key={year} href="#" onClick={e => this.handleYearChange(year, e)}>{year}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>



      </Navbar>
    );
  }
}

export default Header;