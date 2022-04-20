基础脚手架：create-react-app

## useState是react自带的一个hook函数，它的作用是用来声明状态变量。
    声明方式：
        const [ count , setCount ] = useState(0);//这种方法是ES6语法中的数组解构
    1.useState这个函数接收的参数是状态的初始值(Initial state)，它返回一个数组，这个数组的第0位是当前的状态值，第1位是可以改变状态值的方法函数。 所以上面的代码的意思就是声明了一个状态变量为count，并把它的初始值设为0，同时提供了一个可以改变count的状态值的方法函数。
    2.我们读取是很简单的。只要使用{count}就可以，因为这时候的count就是JS里的一个变量，想在JSX中使用，值用加上{}就可以。
    3.改变State中的值,看下面的代码:
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        直接调用setCount函数，这个函数接收的参数是修改过的新状态值。
    4.注意事项：
        useState不能在if...else...这样的条件语句中进行调用，必须要按照相同的顺序进行渲染。
## useEffect代替声明周期函数：接收两个参数第一个是箭头函数（异步执行，不会阻断视图更新），第二个是一个数组，有点类似vue里面计算属性
    (1). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行，可以做接口请求；也可以不指定第二个参数相当componentDidMonut+componentDidUpdate
    (2). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 
    useEffect两个注意点：
        1.React首次渲染和之后的每次渲染都会调用一遍useEffect函数，而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMount)和更新导致的重新渲染(componentDidUpdate)。

        2.useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而componentDidMount和componentDidUpdate中的代码都是同步执行的。个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了

## useContext:让父子组件传参更简单
    1.它可以帮助我们跨越组件层级直接传递变量，实现共享；Context的作用就是对它所包含的组件树提供全局共享数据的一种技术
    2.使用方法：
        import React, { useState,createContext } from 'react';
        export const CountContext = createContext();//导出之后子组件引入接收参数
        <CountContext.Provider value={count}>
                <Child />---这样包裹的子组件就能够接收到我们传递的值，不管里面有多深都可以用
        </CountContext.Provider>

        接收：
            import { CountContext } from '../index';
            const count = useContext(CountContext); //一句话就可以得到count

## useReducer 和useContext很像，并且合作可以完成类似的Redux库的操作。
    在开发中使用useReducer可以让代码具有更好的 可读性和可维护性，并且会给测试提供方便。
    const [ count , dispatch ] =useReducer((state,action)=>{
        switch(action.type){
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default:
                return state
        }
    },initData)
    useReducer第一个参数其实就是一个reducer
    第二个参数就是我们的初始值
    dispatch是用于派发action的
    具备上述条件之后在结合useContext把数据和dispatch方法分发给所有子组件 那么就能够实现状态管理了
    这里要补充一个事情，为什么我不在集中管理actions而是写到组件里面去了 因为hooks就是希望一个业务场景的所有东西都在一块，而不希望东一个西一个的方法去调用

## useMemo主要用来解决使用React hooks产生的无用渲染的性能问题。使用function的形式来声明组件，失去了shouldComponentUpdate（在组件更新之前）这个生命周期，也就是说我们没有办法通过组件更新前条件来决定组件是否更新。而且在函数组件中，也不再区分mount和update两个状态，这意味着函数组件的每一次调用都会执行内部的所有逻辑，就带来了非常大的性能损耗。useMemo和useCallback都是解决上述性能问题的
    1.实例：
     const actionXiaohong = useMemo(() => {
        return changeXiaohong(name)
    },[name]) //此时只有那么更新才会执行解决性能问题
    记得要return出来，箭头函数可省略return
    2.它是用来缓存属性，而useCallback是用来缓存方法的

## useRef在工作中虽然用的不多，但是也不能缺少。它有两个主要的作用:

    1.用useRef获取React JSX中的DOM元素，获取后你就可以控制DOM的任何东西了。但是一般不建议这样来作，React界面的变化可以通过状态来控制。简化了以前的回调或者创建操作

    2.用useRef来保存变量，这个在工作中也很少能用到，我们有了useContext这样的保存其实意义不大

    3.使用：
        const inputEl = useRef(initialValue)

        <input ref={inputEl} type="text"/>
    4.useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。
    5.注意点 其实ref可以用于保存跨周期变量，就是不把创建的ref赋值给标签，他会始终把初始时传入的值保存起来

## 自定义Hooks函数和用Hooks创建组件很相似，跟我们平时用JavaScript写函数几乎一模一样，可能就是多了些React Hooks的特性，自定义Hooks函数偏向于功能，而组件偏向于界面和业务逻辑。由于差别不大，所以使用起来也是很随意的。如果是小型项目是可以的，但是如果项目足够复杂，这会让项目结构不够清晰。

    在实际开发中，为了界面更加美观。获取浏览器窗口的尺寸是一个经常使用的功能，这样经常使用的功能，就可以封装成一个自定义Hooks函数，记住一定要用use开头，这样才能区分出什么是组件，什么是自定义函数。