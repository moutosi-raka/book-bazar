import React from 'react';

const blogs = [
    {
        id : 1,
        question: 'What are the different ways to manage a state in a React application?',
        ans: 'There are four main types of state to properly manage in React apps :Local state, Global state,Server state, URL state'
    },
    {
        id : 2,
        question: 'How does prototypical inheritance work?',
        ans: 'Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.'
    },
    {
        id : 3,
        question: ' What is a unit test? Why should we write unit tests?',
        ans: 'A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or   property. Unit tests save time and money.'
    },
    {
        id : 4,
        question: 'React vs. Angular vs. Vue?',
        ans: 'Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.'
    }
]

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold my-5'>My Blog</h1>
        <div>
         {
            blogs.map((blog,i) => <div key={blog.id} className='border p-9 my-5 text-bold bg-slate-100'>
            <h1 className='text-xl'>{1+i}. {blog.question}</h1>
            <p className='mt-5'>{blog.ans}</p>
            </div>)
         }
        </div>
        </div>
    );
};

export default Blog;