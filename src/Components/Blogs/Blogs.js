import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-6xl'>What is the purpose of React Router?</h1>
            <p className='text-2xl'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            <h1 className='text-6xl'>How does context Api works?</h1>
            <p className='text-2xl'>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h1 className='text-6xl'>Hook--useRef hook?</h1>

            <p className='text-2xl'>The useRef Hook allows you to persist values between renders.</p>
            <p className='text-2xl'>It can be used to store a mutable value that does not cause a re-render when updated.</p>
            <p className='text-2xl'>It can be used to access a DOM element directly.</p>
            <p className='text-2xl'> In general, we want to let React handle all DOM manipulation.

                But there are some instances where useRef can be used without causing issues.

                In React, we can add a ref attribute to an element to access it directly in the DOM. </p>
            <p className='text-2xl'>The useRef Hook can also be used to keep track of previous state values.

                This is because we are able to persist useRef values between renders.</p>
        </div>
    );
};

export default Blogs;