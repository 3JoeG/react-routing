import React from 'react';
import PropTypes from 'prop-types';

const Background = (props) => {
    return (
        <div>
        { isNaN(props.input)?
            <h1 className="text-center" style={{color: props.color , background: props.background }}> The word is {props.input}</h1>: 
            <h1 className="text-center" style={{color: props.color , background: props.background }}> The number is {props.input}</h1>
        }
    </div>
    );
};

Background.propTypes = {};

export default Background;