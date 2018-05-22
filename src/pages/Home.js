// import React from 'react'
import { Helmet } from 'react-helmet'
import TodoShowNum from '../components/TodoShowNum'

// const HomePage = () => {
//   const content = {
//     // title: 'Welcome to Racheli & Meirav project',
//     article: 'the number of task is:'
//   }

//   return [
//     <Helmet>
//       <meta name="description" content={content.article} />
//     </Helmet>,
//     <main className="p-home">
//       {/* <h3 className="p-home__title">{content.title}</h3> */}
//       <h3 className="p-home__article">{content.article}</h3>
//       <br />
//       <TodoShowNum />
//     </main>
//   ]
// }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLoad } from '../actions/todoActions';
import { onLoad2 } from '../actions/popupActions';
class HomePage extends Component {
  componentWillMount() {
    this.props.onLoad();
    this.props.onLoad2();
  }
  render() {
    // console.log(this)
    return (
      <div>
        <main className="p-home">
          {/* <h3 className="p-home__title">{content.title}</h3> */}
          <h3 className="p-home__article">the number of task is</h3>
          <br />
          <TodoShowNum />
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
    onLoad2: () => dispatch(onLoad2()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
