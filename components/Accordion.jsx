"use client";

import React, { useState } from 'react';

const Accordion = () => {
    const [open, setOpen] = useState(null);

    return (
        <div className="w-full p-6 space-y-2  text-2xl">
            <div className="border">
                <button
                    onClick={() => setOpen(open === 1 ? null : 1)}
                    className="w-full p-4 text-left flex justify-between items-center"
                >
                    so whats exactly are we eating?
                    <span>{open === 1 ? '✷' : '✷'}</span>
                </button>
                <div className={`transition-all duration-800 ease-in-out overflow-hidden ${open === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4">you can either pick from the menu, make your own pizzas or tina will make food for you. <br /><br />if you dont want pizza, let tina know so she can make you something else but either way, you're getting fed.</div>
                </div>
            </div>

            <div className="border">
                <button
                    onClick={() => setOpen(open === 2 ? null : 2)}
                    className="w-full p-4 text-left flex justify-between items-center"
                >
                    what if i don’t like the food?
                    <span>{open === 2 ? '✷' : '✷'}</span>
                </button>
                <div className={`transition-all duration-800 ease-in-out overflow-hidden ${open === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4">then this might be a deeply confusing experience for you.</div>
                </div>
            </div>

            <div className="border">
                <button
                    onClick={() => setOpen(open === 3 ? null : 3)}
                    className="w-full p-4 text-left flex justify-between items-center"
                >
                    what will happen if i start spilling tea?
                    <span>{open === 3 ? '✷' : '✷'}</span>
                </button>
                <div className={`transition-all duration-800 ease-in-out overflow-hidden ${open === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4">we provide paper towel. please use it.</div>
                </div>
            </div>

            <div className="border">
                <button
                    onClick={() => setOpen(open === 4 ? null : 4)}
                    className="w-full p-4 text-left flex justify-between items-center"
                >
                    what if i forget to eat?
                    <span>{open === 4 ? '✷' : '✷'}</span>
                </button>
                <div className={`transition-all duration-800 ease-in-out overflow-hidden ${open === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4">you might want to consider setting reminders for yourself.</div>
                </div>
            </div>

            <div className="border">
                <button
                    onClick={() => setOpen(open === 5 ? null : 5)}
                    className="w-full p-4 text-left flex justify-between items-center"
                >
                    what are some activities that are available?
                    <span>{open === 5 ? '✷' : '✷'}</span>
                </button>
                <div className={`transition-all duration-800 ease-in-out overflow-hidden ${open === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4">uhhhh theres a tv upstairs and a pool table... so fun. bring your friends and some games while you're at it.</div>
                </div>
            </div>

            <div className="border">
                <button
                    onClick={() => setOpen(open === 6 ? null : 6)}
                    className="w-full p-4 text-left flex justify-between items-center"
                >
                    how much does it cost?
                    <span>{open === 6 ? '✷' : '✷'}</span>
                </button>
                <div className={`transition-all duration-800 ease-in-out overflow-hidden ${open === 6 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4">whatever feels good. even vibes are accepted. but donations keep the magic going and tina mildly fed.</div>
                </div>
            </div>

            <div className="border">
                <button
                    onClick={() => setOpen(open === 7 ? null : 7)}
                    className="w-full p-4 text-left flex justify-between items-center"
                >
                    we are here! how do i get in?
                    <span>{open === 7 ? '✷' : '✷'}</span>
                </button>
                <div className={`transition-all duration-800 ease-in-out overflow-hidden ${open === 7 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4">text or call tina and she will get you in, i guess.</div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;