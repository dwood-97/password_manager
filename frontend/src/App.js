import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <div className="App">
            {/* Here you can set up routing or conditional rendering for Login, Register, and Dashboard components */}
            <Login />
            <Register />
            <Dashboard />
        </div>
    );
}

export default App;
