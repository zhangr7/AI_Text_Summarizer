import React from 'react';
import {logo, tldr} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
            <img src={tldr} alt="tldr_logo" className='w-28 object-contain'/>
            <button onClick={() => window.open('https://github.com/zhangr7')} className='black_btn'>GitHub</button>
        </nav>

        <h1 className='head_text'>
          Too Lazy? <br/>
           Let <span className="purple_gradient">GPT-4</span> <br />
           Read For You!
        </h1>
        <h2 className='desc'>
            Save time and energy by using <strong>TL;DR</strong>, a text summarizer that gets the gist of articles, publications, and books via OpenAI's GPT-4 capabilities. Summarize content into a concise, easy-to-digest paragraph using below by simply entering a URL!
        </h2>
    </header>
  );
};

export default Hero