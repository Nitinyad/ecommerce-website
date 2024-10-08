// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {Provider} from 'react-redux'
// import store from './redux/store'

// // ReactDOM.render(
// //   <Provider store={store}>
// //     <App />
// //   </Provider>,
// //   document.getElementById('root')
// // );


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
// )


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);