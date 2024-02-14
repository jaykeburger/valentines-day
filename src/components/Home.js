import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import css from './Home.css'
import ReactDOM from "react-dom/client";
import image from '../assets/gif3.gif'
import JSConfetti from 'js-confetti'
import { Fireworks } from 'fireworks-js'


function Confetti() {
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti({
        emojis: ['💗', '❤️', '🥰', '💞', '😍', '🌸'],
     })
}

function Boom() {
    const container = document.querySelector('.container')
    const fireworks = new Fireworks(container, { /* options */ })
    fireworks.start()
}

function Home() {
    const [line1, setShow] = useState(false)
    useEffect(() => {
        setTimeout(() => setShow(true), 0);
      }, []);

    const [line2, setShow2] = useState(false)
    useEffect(() => {
        setTimeout(() => setShow2(true), 3700);
    }, []);

    const [line3, setShow3] = useState(false)
    useEffect(() => {
        setTimeout(() => setShow3(true), 5200);
    }, []);

    const [line4, setShow4] = useState(false)
    useEffect(() => {
        setTimeout(() => setShow4(true), 9000);
    }, []);

    const [image1, setShow5] = useState(false)
    useEffect(() => {
        setTimeout(() => setShow5(true), 12000);
    }, []);

    const [button1, setShow6] = useState(false)
    useEffect(() => {
        setTimeout(() => setShow6(true), 13000);
    }, []);

    const [button2, setShow7] = useState(false)
    useEffect(() => {
        setTimeout(() => setShow7(true), 13500);
    }, []);

    const options = {
        speed: 3
      }
    
      const style = {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#000'
      }

    return(
    <div>
        {line1 &&         
        <h1 className='line1'>
        <Typewriter
            options={{
                autoStart: true,
                loop: false,
                delay: 170,
                cursor: ' '
                }}
            onInit={(typewriter) => {
                typewriter
                .typeString('It would really')
                .start();
            }}
            />
        </h1>}
        {line2 &&         
            <div>
                <h1 className="line2"> brighten up</h1>
            </div>}
        {line3 &&         
        <h1 className='line3'>
        <Typewriter
            options={{
                autoStart: true,
                loop: false,
                delay: 160,
                cursor: ' '
                }}
            onInit={(typewriter) => {
                typewriter
                .typeString("my day if you would")
                .start();
            }}
            />
        </h1>}
        {line4 &&         
        <h1 className='line4'>
        <Typewriter
            options={{
                autoStart: true,
                loop: false,
                delay: 160,
                cursor: ' '
                }}
            onInit={(typewriter) => {
                typewriter
                .typeString("be my Valentine <3")
                .start();
            }}
            />
        </h1>}
        {
            image1 &&
            <div>
                <img width={250} height={200} src={image}/>
                <br></br>
                <p>Be mine?</p>
            </div>
        }
        {
            button1 && <button onClick={Confetti} className="button">yes</button>
        }
        {
            button2 && <button onClick={Confetti} className="button">yes</button>
        }
    </div>);
}

export default Home;