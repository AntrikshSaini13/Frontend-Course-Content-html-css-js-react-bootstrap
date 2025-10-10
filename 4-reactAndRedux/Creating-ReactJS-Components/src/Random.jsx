function Random(){
    let number = Math.random()*10;
    return <div>
        <h3 style={{"background-color":"yellow"}}>Random Number : {Math.round(number)}</h3>
    </div>
}

export default Random;