import React, {useState} from 'react';
import styled from 'styled-components';
import {GameTile} from './GameTile';


export const GameColumn = (props) => {
    const{state,dispatch} = props;

    //can I have pre-existing game squares
    const [tileCount,setCount] = useState([]);
    
    
    
    console.log('props',props)
    const addTile = () => {
        let newState = [props.state.move,...tileCount]
        console.log(newState)
        
        setCount([...newState]);
        dispatch({type:'move'});        
       

    }

    return (
        <StyledGameColumn onClick={addTile}>
            {tileCount.map(t => <GameTile style={t}></GameTile>)}
        </StyledGameColumn>


    )






}


const StyledGameColumn = styled.div `

    width:100px;
    border:1px solid black;
    &:hover{
        cursor:pointer;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25);
        transition:.5s;
        background:lightgray;
       
    }


    display:flex;
    flex-direction:column;
    justify-content:flex-end;

    

`