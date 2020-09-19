import React from 'react';
import { Provider } from 'react-redux'
import { store } from "./redux/reducer"
import InboxScreen from './components/InboxScreen/InboxScreen';


function App() {

  return (
    <Provider store={store}>

    <InboxScreen></InboxScreen>
    
  
    </Provider>
  );
}

export default App;
