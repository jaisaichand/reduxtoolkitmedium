
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css';
import ListUsers from './listOfUsers/listUsers';
import mainStoreReducer from "./store/UsersSlice";

function App() {
  let mainStore = configureStore({reducer:mainStoreReducer});
  return (
    <Provider store={mainStore} >
    <div className="App">
      <ListUsers />
    </div>
    </Provider>
  );
}

export default App;
