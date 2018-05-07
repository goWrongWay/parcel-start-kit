import React from 'react';
import IndexContainer from './containers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <Router>
                    <Route path="/" component={IndexContainer} />
                </Router>
            </div>
        );
    }
}

export default App;
