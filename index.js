function counter(){
    let count =0

    function increment(){
        count +=1
        console.log(count)
    }
    function decrement(){
        count -=1
        console.log(count)
    }
    return{
        increment :increment,
        decrement :decrement
    }
}
const countertab =counter()
countertab.increment()
countertab.decrement()