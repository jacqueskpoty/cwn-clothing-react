import React from 'react';
import MenuItem from '../MenuItem/MenuItem.Component';
import './Directory.Style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {directorySectionSelector} from '../../Redux/Directory/Directory.Selector';

const  Directory = ({sections}) =>
        (
            <div className='directory-menu'>
                {
                    sections.map(({id, ...otherProps})=>(
                        <MenuItem key={id} {...otherProps} />     
                    ))  
                }
            </div>    
        );
    

const mapStateToProps = createStructuredSelector({
    sections: directorySectionSelector
});

export default connect(mapStateToProps)(Directory);