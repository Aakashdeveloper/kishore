import React from 'react';
import { Link } from 'react-router-dom'

const Artistlist = (props) => {

    console.log(props)
    const list = ({allArtists}) => {
        if(allArtists){
            return allArtists.map((item) =>{

                const style={
                    background:`url('/images/covers/${item.cover}.jpg') no-repeat`
                }

                return(
                    <Link key={item.id} to={`/artist/${item.id}`}
                        className="artist_item" style={style}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <h3>Browse the artists</h3>
            {list(props)}
        </div>
    )
}


export default Artistlist;




/*


var a = 10
var b = "my name is" + a

var c = `my name is ${a}`

*/


