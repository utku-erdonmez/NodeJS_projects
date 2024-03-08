let x=0;
const test=(req,res)=>{
    console.log('test function')
    res.send(`test here and count:${x++}`)    
}

export default test;