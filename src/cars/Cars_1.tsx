import React, {useState} from 'react';
import { NewComponent } from './Cars';



export function App1 () {

    let [cars, setCars] = useState([
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
      ]
    );
    

    
    return (
        <NewComponent cars={cars}/>
    );
}

