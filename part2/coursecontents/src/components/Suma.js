import React from 'react';

const Total = ({cursos}) => {
    console.log(cursos);
    let total = cursos.reduce((p,{exercises}) => p + exercises, 0)
    return (
        <p>Number of exercises: {total}</p>
    )
}

export default Total;