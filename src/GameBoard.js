import React, {useState,useReducer} from 'react';
import styled from 'styled-components';
import {GameColumn} from './GameColumn';

const initialState = {move:true}

function reducer(state,action){
    switch(action.type){
        case 'move':
        return {'move':!state.move}
        
        default:
            return state
    }

}

export const GameBoard = () => {

   const[state,dispatch] = useReducer(reducer,initialState);

    return (

        <StyledGameBoard>
            {Array.from(Array(10)).map(v => <GameColumn state={state} dispatch={dispatch}></GameColumn>)}

        </StyledGameBoard>
    )







}



const StyledGameBoard = styled.div `

        width:1000px;
        height:600px;
        
        margin :100px auto;
        display:flex;





`