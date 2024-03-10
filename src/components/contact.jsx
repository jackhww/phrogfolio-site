import React, { useState, useEffect } from 'react';
import Title from './title';
import { Element } from 'react-scroll';
import '../styles/highlight.css';

function Contact({ isActive, setIsActive }) {
    useEffect(() => {
      if (isActive) {
        const timer = setTimeout(() => {
          setIsActive(false);
        }, 2000); // 2000ms = 2s, the duration of the animation
  
        return () => clearTimeout(timer);
      }
    }, [isActive, setIsActive]);

  return (
    <Element id="contact" className={isActive ? 'highlight flex flex-col mb-10 mx-auto' : 'flex flex-col mb-10 mx-auto'}>
      <div className='flex justify-center items-center'>
        <form
          action="https://getform.io/f/pagkkoja"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact me!</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
          >
          </textarea>
          <button
            type="submit"
            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 to-green-700 drop-shadow-md hover:stroke-white'
          >
            Send
          </button>
        </form>
      </div>   
    </Element>
  );
}

export default Contact;