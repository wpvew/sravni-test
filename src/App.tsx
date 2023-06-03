import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routing from './routing/Routing';
import '@styles/style.scss';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
