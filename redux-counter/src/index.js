import React from 'react';
import {render} from 'react-dom'
import Counter from './Counter'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count:0
}
function reducer(state=initialState, action){
  switch(action.type){
    case 'INCREMENT':
      return{
        count: state.count + 1
      }
    case 'DECREMENT':
      return{
        count: state.count - 1
      };
    case 'RESET':
      return initialState
    default:
      return state;
  }
}

const store = createStore(reducer)

const App = ()=>(
  <Provider store={store}>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
    <Counter/>
  </Provider>
);
render(<App/>, document.getElementById('root'))