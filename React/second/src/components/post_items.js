import React, {Component} from 'react';

class Post_item extends Component{
    constructor(props){
        super(props);
    }
    render(){

        console.log(this.props)
        return(
                <div>
                    <h1>Loading item for id: {this.props.match.params.id}</h1>
                </div>
            )
    }
}

export default Post_item