import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../Store/actions/index'

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
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(10)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (clickedId) => dispatch(actionCreators.deleteResult(clickedId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)