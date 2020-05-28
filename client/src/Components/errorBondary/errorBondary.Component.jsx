import React from 'react';
import {ErrorImageContainer,ErrorImageOverlay,ErrorImageText} from './errorBondary.style';


class ErrorBondary extends React.Component{
    constructor(){
        super();
        
        this.state={
            hasErrored:false
        }
    }

    static getDerivedStateFromError(error){
        return { hasErrored: true};
    }

    componentDidCatch(error){
        console.log(error);
    }
    
    render(){
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/DWO5Hzg.png'/>
                    <ErrorImageText>Sorry this page is broke</ErrorImageText>
                </ErrorImageOverlay>
            );
        }
        else 
        return this.props.children;
    }

}

export default ErrorBondary;