import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './scss/main.scss';
import Main from './components/Main.js';
import Collection from './components/Collection.js';
import WhatToPlay from './components/WhatToPlay.js';
import NotFound from './components/NotFound.js';




function App() {
    // const [user,setUser] = useState(null);

    return (
        <>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/collection/user/:userName" component={Collection}/>
                    <Route exact path="/random" component={WhatToPlay}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
            </>
    )
}
export default App;
