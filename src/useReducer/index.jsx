// 以往我们声明一个reducer
/* function countReducer (state,action){
    switch(action.type){
        case "add":
            return state+1;
        case "sub":
            return state-1;
        default:
            return state;
    }
} */

import React, { useReducer } from 'react';

function ReducerDemo(){
    const [ count , dispatch ] =useReducer((state,action)=>{
        switch(action.type){
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default:
                return state
        }
    },0)//这里的0表示初始值
    return (
       <div>
           <h2>现在的分数是{count}</h2>
           <button onClick={()=>dispatch({type:"add"})}>Increment</button>
           <button onClick={()=>dispatch({type:"sub"})}>Decrement</button>
       </div>
    )

}

export default ReducerDemo