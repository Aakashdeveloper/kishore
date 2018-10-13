import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const REQ_URL = ' http://localhost:6780/artists';


class Artist extends Component{

    constructor(props){
        super(props) 

        this.state = {
            artist:''
        }
    }

    componentDidMount(){
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
        .then((response) => response.json())
        .then(json=> {
            console.log(json)
            this.setState({
                artist:json
            })
        })
    }

    render(){
        return(
            <header>
                <Link to="/">Music DB</Link>
            </header>
        )
    }
}

export default Artist;