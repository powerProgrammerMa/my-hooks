/* import React, { Component } from 'react';

class UseEffect extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }


    componentDidMount(){
        console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
    }
    addCount(){
        this.setState({count:this.state.count+1})
    }
    render() { 
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>Chlick me</button>
            </div>
        );
    }
    
}

export default UseEffect; */
//上面是类组件写法，下面是hooks写法
import React, { useState , useEffect } from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom'
function Index() {
    const [ count , setCount ] = useState(0);
    
    useEffect(()=>{
        let time = setInterval(()=>{console.log(count);setCount(count+1)},1000)
        return ()=>{
            clearInterval(time)
        }
    },[count])
    useEffect(()=>{
        console.log("sssss")
    })
    useEffect(()=>{
        console.log("xxxxxx")
    },[])
    return (
        <div>
            <h2>首页 Page</h2>
            {count}
        </div>
    )
}

function List() {
    return <h2>List-Page</h2>;
}
function Example(){
    const [ count , setCount ] = useState(0);
    //---关键代码---------start-------
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })
    //---关键代码---------end-------
    useEffect(()=>{
        console.log(`count`)
    },[])
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <BrowserRouter>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </BrowserRouter>
        </div>
    )
}
export default Example;