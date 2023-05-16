import { useEffect, useState } from 'react';
import './../App.css';
import arrow from './../pic/arrow.jpg'



function Component1(){
    let [fade, setFade] = useState('');
    let [list, setList] = useState(['', '', '']);
    let [counter, setCounter] = useState(1);

    useEffect(() => {
        let timer1 = setTimeout(()=>{showing()}, 100);
        let timer2 = setTimeout(()=>{document.querySelector('.button-hamberger').addEventListener('click', showList)}, 100);
        // let timer3 = setTimeout(()=>{document.querySelectorAll('.p-navbar__item')[0].addEventListener('click', goContent2)}, 100);
        return () => {
            clearTimeout(timer1, timer2);
        };
        }, [])

    const showing = () => {
        let count = false;
        if (count == false) {
            setFade('up--end1');
            count = true;
    }
    };

    const showList = () => {
        if (counter % 2 == 1) {
            counter ++;
            let copy = [...list];
            copy[0] = 'bg-black';
            copy[1] = 'button-xline';
            copy[2] = 'bg-black max-h100vh';
            setList(copy);
        } else {
            counter ++;
            let copy = [...list];
            copy[0] = '';
            copy[1] = '';
            copy[2] = '';
            setList(copy);
        }       
    };

    const goContent2 = (e) => {
        // a 태그는 고유 이벤트가 링크 주소로 이동하는 것이기에 js스크립트 안의 내용을 실행하기 전에 고유 이벤트 실행을 하고 끝냄. 따라서 이를 막아주는 e.preventDefault()를 적어줘야 아래의 코드를 실행함.
        e.preventDefault();
        window.scrollTo(0, 800);
    }
    const goContent3 = (e) => {
        e.preventDefault();
        window.scrollTo(0, 3050);
    }
    const goContent4 = (e) => {
        e.preventDefault();
        window.scrollTo(0, 3650);
    }

    return (
        <>
            <nav className={'p-navbar p-navbar--dark ' + list[0]}>
                <div className='p-container p-container--default'>
                    <div className='p-container__inner p-navbar__inner-container'>
                        <div className='p-navbar__logo-container'>
                            <a className='c-white p-navbar__logo-icon' href='#'>USUHI</a>
                        </div>
                        <div className='p-navbar__mobile'>
                            <button className={'button-hamberger ' + list[1]}>
                            </button>
                        </div>
                        <div className={'p-navbar__content ' + list[2]}>
                            <ul></ul>
                            <ul className='p-navbar__menu'>
                                <li className='p-navbar__item' onClick={goContent2}>
                                    <a href='#'>회사소개</a>
                                </li>
                                <li className='p-navbar__item' onClick={goContent3}>
                                    <a href='#'>시술부위</a>
                                </li>
                                <li className='p-navbar__item' onClick={goContent4}>
                                    <a href='#'>문의하기</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <div className={'content2 content2--start ' + fade}> */}

            <div className='content1'>
                <div className={'content1__text up--start ' + fade}>
                    <span>남김없이,</span><br></br><span>우수히</span>
                </div>
                <div className='content1__arrow'>
                    <img src={arrow} width='50' height='50' alt='arrow'/>
                </div>
            </div>
        </>
    )
}

export default Component1;