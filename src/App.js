import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';
import store from './redux/store/store';

class App extends Component {
  render() {
    <Provider store={ store }>
      <App />
    </Provider>;
    return (
      <Switch>
        <Route exact path="/" component={ PersonalForm } />
        <Route path="/professionalform" component={ ProfessionalForm } />
        <Route path="/formdisplay" component={ FormDataDisplay } />
      </Switch>
    );
  }
}

export default App;
