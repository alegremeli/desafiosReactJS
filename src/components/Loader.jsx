import React from 'react'
import { Pulsar } from '@uiball/loaders'


const Loader = () => {
    
      return (
        <div className='loader'>
        <Pulsar 
        size={100}
        speed={1.75} 
        color="orange" 
       />
        </div>
      )
    }

    export default Loader;