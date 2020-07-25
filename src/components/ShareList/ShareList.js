import React from 'react';
import './ShareList.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import playIcon from '../ShareList/play2.svg'

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

class ShareList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: this.props.year,
      items: [],
      active: 1,
      changedPage: false
    }
    this.state.speakers = this.props.speakersArray.filter(e => e.year === this.state.year)
    this.changePage = this.changePage.bind(this)
  }
  componentDidMount() {
    let newSpeakers = this.props.speakersArray.filter(e => e.year === this.props.year)
    let items = [];
    for (let number = 1; number <= Math.ceil(newSpeakers.length / 10); number++) {
      items.push(
        <Pagination.Item key={number} active={number === this.state.active} onClick={e => this.changePage(number, e)} >
          {number}
        </Pagination.Item>,
      );
    }
    this.setState({
      year: this.props.year,
      speakers: newSpeakers,
      items: items,
      changedPage: false
    })
  }
  componentDidUpdate(prevProps) {
    if ((prevProps.year !== this.props.year) || this.state.changedPage) {
      let newSpeakers = this.props.speakersArray.filter(e => e.year === this.props.year)
      let items = [];
      for (let number = 1; number <= Math.ceil(newSpeakers.length / 10); number++) {
        items.push(
          <Pagination.Item key={number} active={number === this.state.active} onClick={e => this.changePage(number, e)} >
            {number}
          </Pagination.Item>,
        );
      }
      this.setState({
        year: this.props.year,
        speakers: newSpeakers,
        items: items,
        changedPage: false
      })
    }
  }

  handleClick(href) {
    console.log(href)
    this.props.changeAudio(href)
  }
  changePage(number) {
    this.setState({
      active: number,
      changedPage: true
    })
  }
  render() {
    return (
      <Container>
        {this.state.speakers.slice((this.state.active - 1) * 10, (this.state.active - 1) * 10 + 10).map(a => {
          if (a.year === this.state.year) {
            return (
              <Row key={a.href} className="speaker-row">
                <Col xs={5} className="name">{a.name}</Col>
                <Col xs={5} className="date">{a.day} {a.month} {a.year}</Col>
                <Col xs={2}>
                  <img src={playIcon} alt="play" height="40px" onClick={e => this.handleClick(a.href, e)} />
                </Col>
              </Row>
            )
          } else {
            return null
          }
        })}


        <Row className="pagination-container">

          <Pagination>
            {this.state.items}
          </Pagination>
        </Row>


      </Container>
    );
  }
}

export default ShareList;