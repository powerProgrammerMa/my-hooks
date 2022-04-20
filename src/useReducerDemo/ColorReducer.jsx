import React, { createContext,useReducer } from 'react';

export const ColorContext = createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR"

const reducer= (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}


export const ColorReducer = props=>{
    const [color,dispatch]=useReducer(reducer,'blue')

/*//这里就可以来实现reducer自己初始化数据   
  useEffect(() => {
        $.ajax({
          url: "http://suggest.taobao.com/sug?code=utf-8&q=袜子",
          dataType: "jsonp",
          jsonp: "callback",
          success: (data) => {
            dispatch({
              type: 'a',
              value: data.result
            });
          },
          error: data => dispatch({type: 'error', msg: data})
        });
      }, []); 
*/
    return (
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}