import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerDetail from './components/CustomerDetail';
import Dashboard from './components/Dashboard';
import UserDetail from './components/UserDetail';
import AdminUsers from './components/AdminUsers';
import CreateForm from './components/CreateForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
      <Routes>
        
        <Route exact path='/' element={<App/>} /> 
        <Route exact path='/Dashboard' element={<Dashboard/>} />
        <Route exact path='/CustomerDetail' element={<CustomerDetail/>} />
        <Route exact path='/UserDetail' element={<UserDetail/>} />
        <Route exact path='/AdminUsers' element={<AdminUsers/>} />
        <Route exact path='/CreateForm' element={<CreateForm/>} />


        



      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);