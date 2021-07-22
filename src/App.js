import React from 'react';
/* import MsgList from './components/MsgList';
import InputMsg from './components/InputMsg'; */
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import BarNav from './components/BarNav';
import SApp from './SApp';
import ContactUs from './components/ContactUs';
import HomePage from './components/HomePage';
import DevisMain from './components/DevisMain';
import './reset.css';

function App() {
  return (
    <BrowserRouter>
      <SApp>
        <div className='App'>
          {/*    <MsgList />
      <InputMsg /> */}
          <BarNav />

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/devis' component={DevisMain} />
          </Switch>
        </div>
      </SApp>
    </BrowserRouter>
  );
}

export default App;
