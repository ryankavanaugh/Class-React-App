import React from 'react'

// const Person = (props) => {
//     return <p>I'm {props.name} and I am {props.age} years old!</p>
// };

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default Person;