import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Action } from '../../Store/Action'
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
        <hr/>
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
        <ul>
          {this.props.res.map(res => <li
            onClick={() => this.props.onDeleteResult(res.id)}
            key={res.id}>{res.value}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    res: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: Action.inc_counter}),
    onDecrementCounter: () => dispatch({type: Action.dcr_counter}),
    onAddCounter: () => dispatch({type: Action.add_counter, val: 10}),
    onSubtractCounter: () => dispatch({type: Action.sub_counter, val: 10}),
    onStoreResult: (result) => dispatch({type: Action.store_result, result: result}),
    onDeleteResult: (clickedId) => dispatch({type: Action.delete_result, id: clickedId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);