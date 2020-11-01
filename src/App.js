import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import AddDiesel from './components/Forms/AddDiesel';
import AddFastag from './components/Forms/AddFastag';
import AddLoad from './components/Forms/AddLoad';
import Home from './components/Home';
import Expense from './components/data/Expense';
import AddExpense from './components/Forms/AddExpense';
import Table from './components/data/Table';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Expense" exact component={Table} />
        <Route path="/Add Expense" exact component={AddExpense} />
        <Route path="/Add Fastag" exact component={AddFastag} />
        <Route path="/View Fastag" exact component={AddExpense} />
        <Route path="/View Diesel" exact component={AddExpense} />
        <Route path="/Add Diesel" exact component={AddDiesel} />
        <Route path="/View Load" exact component={AddExpense} />
        <Route path="/Add Load" exact component={AddLoad} />
        <Route path="/"  component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
