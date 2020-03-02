import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {PositionPage} from "./components/PositionPage";
import {EmployeePage} from "./components/EmployeePage";
import {Empty} from "./components/Empty";
import './App.css';


function App() {
    return (
        <HashRouter>
            <Route exact path="/employee/:employeeId" component={EmployeePage} />
            <Route exact path="/" component={PositionPage}/>
            <Route exact path="/example" component={Empty}/>
        </HashRouter>
    );
}

export default App;
