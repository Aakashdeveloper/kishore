import React, {Component} from 'react';

// class based
class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'Kishore'
        }
    }

    inputChange(event){
        this.setState({name:event.target.value})
        console.log(event.target.value)
        this.props.newsSearch(event.target.value)
    }
    render(){
        return (
            <header>
                <div className="logo"
                onClick={()=>{console.log("hii from logo")}}>Logo</div>
                <center>
                
                <input onChange={this.inputChange.bind(this)}/>
                <h2>Search on basis of :{this.state.name}</h2>
                </center>
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