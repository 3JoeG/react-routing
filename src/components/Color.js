import React from 'react';


const Color = (props) => {
    return (
        <div>
             
            { isNaN(props.input)?
                <h1 className="text-center" style={{color: props.color}}> The word is {props.input} </h1>: 
                <h1 className="text-center" style={{color: props.color}}> The number is {props.input}</h1>
            }
        
        </div>
    );
};



export default Color;