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
        
        
        setCount([...newState]);
        dispatch({type:'move'});        
        // setState is asynchronous function and just like any asynchronous function is being passed on to the event loop, setState also is passed on to the event loop and any code after it will execute seemlessly.
       

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
        ${'' /* box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25); */}
        transition:.1s;
        background:lightgray;
       
    }


    display:flex;
    flex-direction:column;
    justify-content:flex-end;

    

`