import React, {useState, useEffect} from 'react'

const LoadingComponents = () => {
 
    const [loading, setLoading] = useState(true);
    useEffect( () =>{
        
        setTimeout( () =>{
            setLoading(false);
        }, 3000 );
    
    }, []);
      
        return ( <>
       { loading ? <h4>Cargando...</h4> : <h4>Cargado!</h4> }
       </>
      )

    }
    export default LoadingComponents





