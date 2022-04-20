
import { useMemo } from 'react';

function ChildComponent({name,children}){
    function changeXiaohong(name){
        console.log('她来了，她来了。小红向我们走来了')
        return name+',小红向我们走来了'
    }

    const actionXiaohong = useMemo(() => {
        return changeXiaohong(name)
    },[name]) //此时只有那么更新才会执行解决性能问题
    // const actionXiaohong = changeXiaohong(name)
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}
export default ChildComponent