import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {id: "heading"}, 'Hello React!!');

const parent = React.createElement('div', {id: "parent"}, 
               React.createElement('div', {id: "child"}, 
               [React.createElement('h1', {id: "heading"}, 'h1 tag'),
                React.createElement('h2', {id: "heading"}, 'h2 tag')]
            ));

const root = ReactDOM.createRoot(document.getElementById('root'));
const header = ReactDOM.createRoot(document.getElementById('header'));

header.render(heading);
root.render(parent);