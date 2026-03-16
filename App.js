import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About'; // Add your about page component

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Function for Offline Support
const fetchWithOfflineSupport = (url) => {
    return fetch(url).catch(() => {
        console.log('Fetching failed; serving offline fallback...');
        return caches.match(url);
    });
};
