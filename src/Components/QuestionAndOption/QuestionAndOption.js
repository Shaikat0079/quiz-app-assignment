import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuestionAndOption = ({ qus }) => {
    const { options, id, correctAnswer, question } = qus;
    const notify = () => toast(correctAnswer);
    // const [answer,showAnswer]=useState([]);
    // const { queston } = question
    // console.log(question.option)

    return (
        <div className='m-6 bg-green-400 p-6 flex justify-center'>
            <div>
                <div className='flex gap-6'>
                    <p>{question.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    <EyeIcon onClick={notify} className="h-6 w-6 text-black-500" />
                    <ToastContainer />
                </div>
                <div className=''>
                    {
                        options.map(option => <p className='m-2' key={option} >{option}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default QuestionAndOption;