import React, {Component} from 'react';
import Header from './header';
import SubmitSongs from './submitSongs';
import ListSongs from './listSongs';
import UpdateSongs from './updateSongs';
import DeleteSongs from './deleteSongs';

class App extends Component{
    render() {
        return<div>
            <Header/>
            <SubmitSongs/>
            <ListSongs/>
            <UpdateSongs/>
            <DeleteSongs/>
        </div>
    }
}

export default App;