import React from 'react';

const NewsList = (props) => {

    const items = props.news.map((item)=>{
        return(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    })
    console.log(props)
    return(
        <div>
            {items}
        </div>
    )
}

export default NewsList;