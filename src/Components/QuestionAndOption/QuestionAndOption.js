import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuestionAndOption = ({ qus }) => {
    const { options, id, correctAnswer, question } = qus;
    const clicked = (event) => { event.currentTarget.textContent === correctAnswer ? toast('You Got The Correct One') : toast('Try Again') }
    const notify = () => toast(correctAnswer);

    return (
        <div className='m-6 bg-green-400 p-6 flex justify-center'>
            <div>
                <div className='flex gap-6'>
                    <p>{question.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    <EyeIcon onClick={notify} className="h-6 w-6 text-black-500" />
                    <ToastContainer />
                </div>
                <ul className=''>
                    {
                        options.map(option => <div key={option} className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li onClick={clicked} className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{option}</label>
                                </div>
                            </li>
                        </div>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default QuestionAndOption;