import { useEffect, useState } from 'react';
import './../App.css';

function Component3(){
    let [fade, setFade] = useState('');
    let [slide, setSlide] = useState('');
    let [gray1, setGray1] = useState('');
    let [gray2, setGray2] = useState('btn-left2');
    let [count, setCount] = useState(false);
    let [count1, setCount1] = useState(false);
    let [count2, setCount2] = useState(0);


    useEffect(() => {
        let timer1 = setInterval(()=>{window.addEventListener('scroll', handleScroll1);}, 100)
        let timer2 = setTimeout(()=>{document.querySelector('.btn-right').addEventListener('click', handleSlide1)}, 100);
        let timer3 = setTimeout(()=>{document.querySelector('.btn-left').addEventListener('click', handleSlide2)}, 100);
        let timer4 = setTimeout(()=>{document.querySelector('.btn-right--tablet').addEventListener('click', handleSlide1__tablet)}, 100);
        let timer5 = setTimeout(()=>{document.querySelector('.btn-left--tablet').addEventListener('click', handleSlide2__tablet)}, 100);
        let timer6 = setTimeout(()=>{document.querySelector('.btn-right--mobile').addEventListener('click', handleSlide1__mobile)}, 100);
        let timer7 = setTimeout(()=>{document.querySelector('.btn-left--mobile').addEventListener('click', handleSlide2__mobile)}, 100);
        return () => {
            clearTimeout(timer1, timer2, timer3, timer4, timer5, timer6, timer7);
            window.removeEventListener('scroll', handleScroll1);
        };
    }, [])



    const handleScroll1 = () => {
        if (window.scrollY > 2450 && count == false) {
            setFade('left--end');
            count1 = true;
    }
    };

    
    const handleSlide1 = () => {
        count2 ++;
        if (count2 < 4) {
            if (count2 === 1) {
                setSlide('slide-right1');
                setGray2('btn-left');
            }
            else if (count2 === 2) {
                setSlide('slide-right2');
            }
            else if (count2 === 3) {
                setSlide('slide-right3');
                setGray1('btn-right2');
            }
        } else {
            count2 = 3;
        }
    };

    const handleSlide2 = () => {
        count2 --;
        if (count2 >= 0) {
            if (count2 === 2) {
                setSlide('slide-right2');
                setGray1('');
            }
            else if (count2 === 1) {
                setSlide('slide-right1');
                setGray1('');
            }
            else if (count2 === 0) {
                setSlide('slide-right');
                setGray2('btn-left2');
                setGray1('');
            }
        } else {
            count2 = 0;
        }
    };

    const handleSlide1__tablet = () => {
        count2 ++;
        if (count2 < 5) {
            if (count2 === 1) {
                setSlide('slide-right1');
                setGray2('btn-left');
            }
            else if (count2 === 2) {
                setSlide('slide-right2');
            }
            else if (count2 === 3) {
                setSlide('slide-right3');
            }
            else if (count2 === 4) {
                setSlide('slide-right4');
                setGray1('btn-right2');
            }
        } else {
            count2 = 4;
        }
    };

    const handleSlide2__tablet = () => {
        count2 --;
        if (count2 >= 0) {
            if (count2 === 3) {
                setSlide('slide-right3');
                setGray1('');
            }
            else if (count2 === 2) {
                setSlide('slide-right2');
                setGray1('');
            }
            else if (count2 === 1) {
                setSlide('slide-right1');
                setGray1('');
            }
            else if (count2 === 0) {
                setSlide('slide-right');
                setGray2('btn-left2');
                setGray1('');
            }
        } else {
            count2 = 0;
        }
    };

    const handleSlide1__mobile = () => {
        count2 ++;
        if (count2 < 6) {
            if (count2 === 1) {
                setSlide('slide-right1');
                setGray2('btn-left');
            }
            else if (count2 === 2) {
                setSlide('slide-right2');
            }
            else if (count2 === 3) {
                setSlide('slide-right3');
            }
            else if (count2 === 4) {
                setSlide('slide-right4');
            }
            else if (count2 === 5) {
                setSlide('slide-right5');
                setGray1('btn-right2');
            }
        } else {
            count2 = 5;
        }
    };

    const handleSlide2__mobile = () => {
        count2 --;
        if (count2 >= 0) {
            if (count2 === 4) {
                setSlide('slide-right4');
                setGray1('');
            }
            else if (count2 === 3) {
                setSlide('slide-right3');
                setGray1('');
            }
            else if (count2 === 2) {
                setSlide('slide-right2');
                setGray1('');
            }
            else if (count2 === 1) {
                setSlide('slide-right1');
                setGray1('');
            }
            else if (count2 === 0) {
                setSlide('slide-right');
                setGray2('btn-left2');
                setGray1('');
            }
        } else {
            count2 = 0;
        }
    };


    return (
        <>
            <div className='content3'>
                <div className={'content3__container left--start ' + fade}>                   
                    <button className={'btn-left ' + gray2}></button>
                    <button className={'btn-right '+ gray1}></button>
                    <button className={'btn-left btn-left--tablet ' + gray2}></button>
                    <button className={'btn-right btn-right--tablet '+ gray1}></button>
                    <button className={'btn-left btn-left--mobile ' + gray2}></button>
                    <button className={'btn-right btn-right--mobile '+ gray1}></button>
                    <header className='content3__header'>
                        <span>포트폴리오</span>
                    </header>

                    <ul className={'pf ' + slide}>
                        <li className='pf-box'>
                            <div></div>
                            <div><span>Face</span><br></br><span>헤어라인 왁싱</span></div>
                        </li>
                        <li className='pf-box'>
                            <div></div>
                            <div><span>Face</span><br></br><span>얼굴인중 왁싱</span></div>
                        </li>
                        <li className='pf-box'>
                            <div></div>
                            <div><span>Body</span><br></br><span>팔 왁싱</span></div>
                        </li>
                        <li className='pf-box'>
                            <div></div>
                            <div><span>Body</span><br></br><span>다리 왁싱</span></div>
                        </li>
                        <li className='pf-box'>
                            <div></div>
                            <div><span>Body</span><br></br><span>겨드랑이 왁싱</span></div>
                        </li>
                        <li className='pf-box'>
                            <div></div>
                            <div><span>Body</span><br></br><span>브라질리언 왁싱</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Component3