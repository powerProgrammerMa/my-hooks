import React from 'react';
import ShowArea from './showArea';
import Buttons from './Buttons';
import {ColorReducer} from './ColorReducer';
function Demo1(){
    return (
        <div>
            <ColorReducer>
                <ShowArea></ShowArea>
                <Buttons></Buttons>
            </ColorReducer>
        </div>
    )
}
export default Demo1