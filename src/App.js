import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Places from './Pages/Places/Places/Places';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddTrip from './Pages/AddTrip/AddTrip';
import BookingDetails from './Pages/BookingDetsiils/BookingDetails';
import Inventory from './Pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/places">
              <Places></Places>
            </Route>
            <PrivateRoute path="/booking/:placeId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/bookingDetails">
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path="/addTrip">
              <AddTrip></AddTrip>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
