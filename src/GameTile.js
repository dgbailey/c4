import React, {useState} from 'react';
import styled from 'styled-components';



export const GameTile = (props) => {
    const {style:tileStyle} = props;
    console.log('tileStyle',props)
    

    return (
        <StyledGameTile>
            <div className={`circle ${tileStyle ? 'red':'black'}`}></div>
        </StyledGameTile>
    )



}


const StyledGameTile = styled.div `

    height:100px;
    width:100px;
    border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    .circle{
        border-radius:50%;
        border:1px solid black;
        height:80px;
        width:80px;
        &.red{
            background:red;
        }
        &.black{
            background:black;
        }
    }



`