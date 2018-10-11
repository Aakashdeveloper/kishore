import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Profile from './components/profile';
import Posts from './components/posts';
import Post_item from './components/post_items';
import Notfound from './components/notfound';

class App extends Component{
    render(){
        return(
            <div class="container">
                <h1>Hiiiii</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div class="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span> 
                    </button>
                    <a className="navbar-brand" href="#">React Router</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                       
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Posts</Link></li> 
                        <li> <Link to="/profile">Profile</Link>></li> 
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                    </div>
                </div>
                </nav>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/posts/:id" component={Post_item}></Route>
            
        </div>
    </BrowserRouter>, document.getElementById('root'))