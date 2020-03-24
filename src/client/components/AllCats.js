import React from "react";
import { connect, Provider, bindActionCreates } from "react-redux";
import CatCard from "./CatCard";
import { Router, HashRoute } from "react-router-dom";
import fetchCats from "../components/AllCats";

// why are we exporting so much stuff you might ask?
// and I would say good question
// long story short, I need access to this stuff to test it
// so we export it
// by calling it disconnected (from the redux store), it's clear that
// this is not the correct import you want generally
// you want the default export
// don't worry about it too much

export class DisconnectedAllCats extends React.Component {
  render() {
    //console.log("from disco", this.props.cats);
    let cats = this.props.cats;
    console.log(cats);
    return (
      <div className="all-cats">
        <h1>Peter's Park</h1>
        <ul>
          {cats.map(cat => {
            console.log(cat.id);
            return (
              <li key={cat.id}>
                <CatCard key={cat.id} id={cat.id} name={cat.name} />
              </li>
            );
          })}
        </ul>
        }}
      </div>
    );
  }
}
//console.log("stror");
export const mapStateToProps = state => {
  console.log("fromstate/", state.cats);
  return {
    cats: state.cats
  };
};

export const mapDispatchToProps = dispatch => {
  return { goGetCats: () => dispatch({ type: "LOAD_CATS" }) };
};

// don't touch this line
// but this is the component you probably want in most cases
// so if you're using DisconnectedAllCats somewhere else in your program
// you're gonna have a bad time
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedAllCats);
