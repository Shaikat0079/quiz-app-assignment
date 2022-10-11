import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionAndOption from '../QuestionAndOption/QuestionAndOption';

const Question = () => {
    const quiz = useLoaderData();
    const { questions, logo, name } = quiz.data;
    return (
        <div>
            <h1 className='text-6xl text-center'>Welcome to {name} Section!</h1>
            <img className='m-12 mx-auto bg-red-500' src={logo} alt="" />

            <div className='text-center'>
                {
                    questions.map((question, index) => <QuestionAndOption key={question.question} index={index} qus={question}></QuestionAndOption>)
                }
            </div>

        </div>
    );
};

export default Question;