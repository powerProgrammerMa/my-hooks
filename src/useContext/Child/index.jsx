import React, { useContext } from 'react';
import { CountContext } from '../index';

const ChildUseContext = ()=> {
	const count = useContext(CountContext); //一句话就可以得到count
	return <h2>child-----{count}</h2>;
}
export default ChildUseContext;
