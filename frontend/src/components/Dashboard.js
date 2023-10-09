import React from 'react';
import PasswordGenerator from './PasswordGenerator';
import PasswordList from './PasswordList';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <PasswordGenerator />
            <PasswordList />
            {/* Add other dashboard components or functionalities here */}
        </div>
    );
}

export default Dashboard;
