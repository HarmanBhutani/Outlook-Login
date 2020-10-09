import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import withAuthProvider, { AuthComponentProps } from './AuthProvider';

import Welcome from './Welcome';

import 'bootstrap/dist/css/bootstrap.css';



class App extends Component<AuthComponentProps> {
  render() {
    let error = null;
    if (this.props.error) {
        console.log(this.props.error.message)
   
    }
    return (
      <Router>
        <div>

          <Container>
            {error}
            <Route exact path="/"
              render={(props) =>
                <Welcome {...props}
                  isAuthenticated={this.props.isAuthenticated}
                  user={this.props.user}
                  authButtonMethod={this.props.login} />
              } />
    
          </Container>
        </div>
      </Router>
    );
    
    // </renderSnippet>
  }
}

export default withAuthProvider(App);
