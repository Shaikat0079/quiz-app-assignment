import React from 'react';

const QuestionAndOption = ({ question }) => {
    // const { queston } = question
    return (
        <div>
            <div className=''><p>{question.question.replace(/<\/?[^>]+(>|$)/g, "")}</p></div>
            <div className=''>
                {/* <p>{question.options}</p> */}
                {
                    question.options.map(option => <p>{option}</p>)
                }
            </div>
        </div>
    );
};

export default QuestionAndOption;