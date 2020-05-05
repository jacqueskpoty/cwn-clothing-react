import React from 'react';
import './CustomButton.Style.scss';
import { CustomButtonContainer } from './CustomButton.Style';

const CustomButton = ({children, ...otherProps}) =>(
    <CustomButtonContainer  {...otherProps}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;