function Random(){

    let number=Math.random()*100;

    return <p style={{'background-color':'red'}}>Random number is {Math.floor(number)}</p>
}
export default Random;