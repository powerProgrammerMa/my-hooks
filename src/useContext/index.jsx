import React, { useState,createContext } from 'react';
import Child from "./Child"
//===关键代码
export const CountContext = createContext();//导出之后子组件引入接收参数
function useContext(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            {/*======关键代码 */}
            <CountContext.Provider value={count}>
                <Child />
            </CountContext.Provider>
        </div>
    )
}
export default useContext;