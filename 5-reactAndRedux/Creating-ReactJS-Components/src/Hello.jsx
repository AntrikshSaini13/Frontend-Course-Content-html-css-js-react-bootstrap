function Hello(){
    let myName = 'aa';
    let num = 451;
    function fullName() {
        return myName;
    }
    return <div>
        <h1>message number : {num} </h1>
        <h3>Hello this is future  speaking. I am your master {fullName()}</h3>
        <p>Thank You</p>
    </div>    
}
export default Hello