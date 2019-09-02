import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Main from './components/Main'
import Loader from './components/Loader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { loadData } from './utils/load/loadData'


// BUILD FONT AWESOME LIB
library.add(faSchool)

// RENDERAPP
// Function below checks to see whether we have already rendered the page
// if we have, it ensures we don't render it again.
let hasRendered = false;
const renderApp = (data) => {
    if (!hasRendered) {
        ReactDOM.render(<Main data={data} />, document.getElementById('app'))
        hasRendered = true;
    }
};

// LOADING PAGE
ReactDOM.render(<Loader />, document.getElementById('app'))

// RENDER APP AFTER LOADING DATA
loadData().then( data => renderApp(data))
