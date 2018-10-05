import React, {Component} from 'react';

// class based
class Header extends Component{
    render(){

        return (
            <header>
                <div className="logo">Logo</div>
                <input />
            </header>
            )
    }
}

export default Header;




/*
functional
const Header = () => {
    return (
            <div>
                <h1>This is header</h1>
                <h2>This is about react</h2>
            </div>
            )
}

 const styles = {
            heading1:{
                color:'green'
            },
            heading2:{
                color:'teal'
            }

        }
*/