import React from 'react';



const Input = (props) => {
    return (
        <div>
            { isNaN(props.input)?
                <h1 className="text-center"> The word is {props.input}</h1>: 
                <h1 className="text-center"> The number is {props.input}</h1>
            }
        </div>

    );
        }


export default Input;