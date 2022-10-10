import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionAndOption from '../QuestionAndOption/QuestionAndOption';

const Question = () => {
    const quiz = useLoaderData();
    const { questions, logo, name } = quiz.data;
    console.log(quiz.data)

    return (
        <div>
            <h1 className='text-6xl text-center'>Welcome to {name} Section!</h1>
            <img className='m-12 mx-auto' src={logo} alt="" />

            <div className='text-center'>
                {
                    questions.map(question => <QuestionAndOption key={question.question} question={question}></QuestionAndOption>)
                }
            </div>

        </div>
    );
};

export default Question;