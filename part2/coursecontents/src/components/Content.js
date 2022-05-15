import React from 'react'
import Parts from './Parts'

const Content = ({partes}) => {
    return (
        partes.map(part => {
            return <Parts name={part.name} exercises={part.exercises} key={part.id}/>
        })
    );
};

export default Content;