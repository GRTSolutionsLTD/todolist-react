import { Helmet } from 'react-helmet'
import TodoShowNum from '../components/TodoShowNum'
import Carouselc from '../containers/CarouselC'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLoad } from '../actions/todoActions';
import { onLoad2 } from '../actions/popupActions';
import {Showcarousel} from '../actions/CarouselActions'
import {Button } from 'reactstrap';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.Open = this.Open.bind(this);
  }
  componentWillMount() {
    this.props.onLoad();
    this.props.onLoad2();
  }
  Open() {
    this.props.Showcarousel(true);
  }
  render() {
    // console.log(this)
    return (
      <div className="background-Image">
        <main className="p-home">
          {/* <h3 className="p-home__title">{content.title}</h3> */}
          <h3 className="p-home__article">the number of task is</h3>
          <br />
          <TodoShowNum />
          <br/>
          <center><Button outline onClick={this.Open}>לחץ</Button></center>
        <Carouselc/>
        </main>
      </div>
    );
  }
}
function mapStateToProps(store, ownProps) {
  return {
    data: store.data,
    // FilterList: store.FilterList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(onLoad()),
    // onPut: () => dispatch(onPut()),
    onLoad2: () => dispatch(onLoad2()),
    Showcarousel:()=>dispatch(Showcarousel())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
