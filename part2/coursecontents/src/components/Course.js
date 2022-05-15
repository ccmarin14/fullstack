import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Suma';

const Course = ({course}) => {
    console.log(course);
    return (
        course.map(curso => {
            return (
                <div key = {curso.key}>
                    <Header title = {curso.name} />
                    <Content partes = {curso.parts} />
                    <Total cursos = {curso.parts} />
                </div>
            );
        })
    );
};

export default Course;