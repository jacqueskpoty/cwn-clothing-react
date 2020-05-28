import React,{Profiler} from 'react'
import Directory from '../../Components/Directory/Directory.Component';
import { HomePageContainer } from './HomePage.Style';


const HomePage = () => {
    
    return(
        <HomePageContainer>
            <Profiler id="Directory" onRender={(id,phase,actualDuration) =>{
                console.log(
                    id,
                    phase,
                    actualDuration
                );
            }}>
                <Directory/>
            </Profiler>
        </HomePageContainer>
    )
}

export default HomePage;