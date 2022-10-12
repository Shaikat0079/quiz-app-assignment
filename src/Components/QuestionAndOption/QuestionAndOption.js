import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuestionAndOption = ({ qus, index }) => {
    const { options, id, correctAnswer, question } = qus;
    const clicked = (event) => { event.currentTarget.textContent === correctAnswer ? toast('You Got The Correct One') : toast('Try Again') }
    const notify = () => toast(correctAnswer);

    return (
        <div className='m-6 bg-rose-400 p-6 flex flex-col mx-auto justify-items-center'>

            <div>
                <div className='flex gap-6 m-6'>
                    <p className='text-3xl text-white'>{index + 1}.{question.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    <EyeIcon onClick={notify} className="h-40 md:h-12 text-gray-800" />
                    <ToastContainer />
                </div>
            </div>
            <ul className=''>
                {
                    options.map(option => <div key={option} className="m-6 w-64 text-sm font-medium text-gray-900 bg-white">
                        <li onClick={clicked} className="w-full border-b border-gray-200 ">
                            <div className="flex items-center pl-3">
                                <input id="list-radio-license" type="radio" value="" name={id} className="w-4 h-4 text-blue-600 bg-gray-100  focus:ring-blue-500 " />
                                <label htmlFor="list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 ">{option}</label>
                            </div>
                        </li>
                    </div>)
                }
            </ul>

        </div>
    );
};

export default QuestionAndOption;