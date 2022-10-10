import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionAndOption from '../QuestionAndOption/QuestionAndOption';

const Question = () => {
    const quiz = useLoaderData();
    const { questions, logo, name, id } = quiz.data;
    // console.log(questions[0].options);
    // {
    //     questions.map(question => console.log(question))
    // }
    return (
        <div>
            {/* {questions.length} */}
            <h1 className='text-6xl text-center'>Welcome to {name} Section!</h1>
            <img className='m-12 mx-auto' src={logo} alt="" />
            {
                questions.map(question => <div>{question.question}</div>)
            }
            {/* <p>{questions.map(q => q)}</p> */}
        </div>
    );
};

export default Question;