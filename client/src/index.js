import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
   <Auth0Provider
    domain= "dev-0x0j5vkr.us.auth0.com"
    clientId="EGDfULsRjQoT0K7yGeHNncOrla10fnsL"
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>,
  document.getElementById('root')
);
