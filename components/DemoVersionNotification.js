import React, { useState } from 'react';
import styled from 'styled-components';
import {BodyCopy} from '../components/utils/Typography';
import SVG from './utils/SVG';



const StyledNotificationContainer = styled.div`
    width: 100%;
    padding: 8px;

    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: row;
    align-content: center;

    transform: translateY(${props => props.hide ? "100%" : "0%"});
    transition: transform 200ms ease-in;  

    background-color: #f44336;
`

const StyledText = styled(BodyCopy)`
    color: #fff;
    margin: auto;
    padding-left: 48px;
`

const StyledCloseSVG = styled(SVG)`
    height: 24px;
    padding: 8px;
    margin-right: 16px;
    cursor: pointer;

    opacity: 0.8;
    transition: opacity 150ms ease-in;

    &:hover{
        opacity: 1;
    }
`

const DemoVersionNotification = (props) => {
    const [hide, setHide] = useState(false);

    return <StyledNotificationContainer hide={hide}>
        <StyledText>
            This is a demo version. The full version has a Prolog backend that takes care of AI and player moves validation.
        </StyledText>
        <StyledCloseSVG src={'/static/icons/close.svg'} svgStyle={{height: '24px', width: '24px'}} onClick={() => setHide(true)}/>
    </StyledNotificationContainer> 
}

export default DemoVersionNotification;