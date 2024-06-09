
function Button() {

  /*  let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count++;
            alert(`${name} You clicked me ${count} times`)
        }
        else {
            alert(`${name} stop clicking me!`)
        }
    }; */


    //const handleClick = () => alert("OUCH!");

    //const handleClick2 = (name) => alert(`${name} stop clicking me`);

    //<button onClick={handleClick}>Click Me</button>

    //<button onClick={handleClick2("Ryu")}>Click Me</button>

    // <button onClick={() => handleClick2("Ryu")}>Click Me</button>

    //<button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
    
    
    const handleClick = (e) => e.target.textContent = "OUCH!";


    return (
        <>
            <button onClick={(e) => handleClick(e)}>Click Me</button>
            
    
        </>
    );
};

export default Button;