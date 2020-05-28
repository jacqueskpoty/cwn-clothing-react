import React from 'react';
import Spinner from '../Spinner/Spinner.component';

 const WithSpinner = (WrappedComponent) => 
    {   
       const spinner = ({isLoading, ...otherProps}) => {
               
        
                return isLoading? (
                    <Spinner/>
                
                ): <WrappedComponent {...otherProps} />
        }

        return spinner;
    }
export default WithSpinner;