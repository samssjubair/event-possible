import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Book from './Components/Booking/Book/Book'
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Review from './Components/Booking/Review/Review';
import BookingHistory from './Components/Booking/BookingHistory/BookingHistory';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import AddService from './Components/Dashboard/AddService/AddService';
import ManageService from './Components/Dashboard/ManageService/ManageService';
export const UserContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/book/service/:serviceName">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/book/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/book/history">
              <BookingHistory></BookingHistory>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/bookingList">
              <BookingList></BookingList>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/manageServices">
              <ManageService></ManageService>
            </PrivateRoute>
            
          </Switch>
        </Router>
      </UserContext.Provider>
    
  );
}

export default App;
