import React from 'react'
import ReactDOM from 'react-dom';

import Header from './components/header';

const App = () => {
    return (    
                <div>
                    <Header/>
                    <h1>Hello first page</h1>
                    
                </div>
            )
}

ReactDOM.render(<App/>,document.getElementById('root'))

