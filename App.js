import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', {id: "heading"}, 'Hello React!!');

// //JSX heading

// const jsxHeading = <h1 id="heading">Hello React!</h1>

// console.log(heading);
// console.log(jsxHeading);

// const parent = React.createElement('div', {id: "parent"}, 
//                React.createElement('div', {id: "child"}, 
//                [React.createElement('h1', {id: "heading"}, 'h1 tag'),
//                 React.createElement('h2', {id: "heading"}, 'h2 tag')]
//             ));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const header = ReactDOM.createRoot(document.getElementById('header'));

// header.render(heading);
// root.render(parent);

const title = (
    <h1>
        This is title Element
    </h1>
);


const TitleComponent = () => (
    <h1>
        This is title
    </h1>
);

const HeadingComponent = () => (
    <>
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {TitleComponent()}
        {title}
        <h1>
            This is heading
        </h1>
    </>    
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />)