import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Error from './Components/Error/Error';
import Question from './Components/Question/Question';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Topics></Topics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },

        {
          path: '/topics',
          element: <Topics></Topics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        }
        ,
        {
          path: 'blog',
          element: <Blogs></Blogs>
        },
        {
          path: 'quiz/:quizId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Question></Question>
        }
      ]
    },
    { path: '*', element: <Error></Error> }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
