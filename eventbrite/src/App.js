import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom' 

import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardHome from './pages/DashboardHome';
import CreateEventPage from './pages/CreateEventPage';
import DashboardEvents from './pages/DashboardEvents';
import EventDetailPage from './pages/EventDetailPage';
import OrdersPage from './pages/OrdersPage';
import { AuthProvider } from './context/AuthContext';



function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>

        <Route component={HomePage} path="/"exact />
        <Route component={LogInPage} path="/login"exact />
        <Route component={SignUpPage} path="/signup"exact />
        <Route component={DashboardHome} path="/dashboard-home"exact />
        <Route component={CreateEventPage} path="/create-event"exact />
        <Route component={DashboardEvents} path="/events"exact />

        <Route component={EventDetailPage} path="/event/:id"exact />
        <Route component={OrdersPage} path="/orders"exact />


        </AuthProvider>


    </Router>
    </div>
  );
}

export default App;
