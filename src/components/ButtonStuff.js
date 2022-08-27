import React, {useState, Component} from 'react'
import Button from '@mui/material/Button';


function CounterPlusMinus() {
    const initCtr = 0;
    const [counter, setCounter] = useState(0);
    return (
        // instead of a "<div> </div>", we use a fragment, since a div would just add to DOM's load. 
        <>
            <Button size="small" color="inherit" variant="contained" onClick={() => setCounter((prevCount) => prevCount + 1)}> 
                Add
            </Button>
            <h7> {counter} </h7>
            {/* The 'color' variable here is determine by ChangeColor button */}
            <Button size="small" color="primary" variant="contained" 
                onMouseOver={() => setCounter(
                    (prevCount) => prevCount - 1
                )}
                onClick={() => setCounter(
                    (prevCount) => prevCount = initCtr
                )}
            >
                Minus
            </Button>
        </>

    );
}

function ChangeColor() {
    const [color, setColor] = useState("secondary");
    return (
        <Button size="large" color={color} variant="contained"
            onClick={() => setColor(
                (prevColor) => prevColor === "secondary" ? "error" : "secondary"
            )}
        >
            Change Color
        </Button>
    );
}


export default {ChangeColor, CounterPlusMinus};