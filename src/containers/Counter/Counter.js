import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Action } from '../../Store/reducer'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr}/>
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
        <CounterControl label="Add 10" clicked={this.props.onAddCounter}/>
        <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: Action.inc_counter}),
    onDecrementCounter: () => dispatch({type: Action.dcr_counter}),
    onAddCounter: () => dispatch({type: Action.add_counter}),
    onSubtractCounter: () => dispatch({type: Action.sub_counter})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);