import { useEffect, useState } from 'react';
import './../App.css';
import bannerNaver from './../pic/banner-naver.png'
import bannerKakao from './../pic/banner-kakao.png'
import bannerInsta from './../pic/banner-insta.png'

function Component4(){
    let [fade, setFade] = useState('');
    let [count, setCount] = useState(false);


    useEffect(() => {
        let timer1 = setInterval(()=>{window.addEventListener('scroll', handleScroll1);}, 100)

        return () => {
            clearTimeout(timer1);
            window.removeEventListener('scroll', handleScroll1);
        };
    }, [fade])

    const handleScroll1 = () => {
        if (window.scrollY > 3050 && count == false) {
            setFade('left--end');
            count = true;
    }
    };

    return (
        <>
            <div className='content4'>
                <div className={'content4__container left--start ' + fade}>
                    <header className='content4__header'>
                        <span>이제, <span>담래쉬</span>를 만나세요</span>
                    </header>
                    <div className='content4__detail'>
                        <div className='map-box'>
                            <div className='map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.057464240352!2d127.12243872677193!3d37.540589415657955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca554d7f22df9%3A0xdab08907385ae0ab!2z64Sk7J287J2E64u064uk!5e0!3m2!1sko!2skr!4v1687998967300!5m2!1sko!2skr" width="500" height="450" style={{border : "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className='map-box__text'>
                                <span>서울 강동구 올림픽로71길 18-16, 1층 101호</span>
                                <span>서울 강동구 올림픽로71길 <br/>18-16, 1층 101호</span>
                            </div>
                        </div>
                        <div className='call-box'>
                            <div>
                                <a href='https://pcmap.place.naver.com/nailshop/1182933543/stylist/5118547'>
                                    <img src={bannerNaver}></img>
                                </a>
                            </div>
                            <div>
                                <a href='http://pf.kakao.com/_Jxlxaxoxj/chat'>
                                    <img src={bannerKakao}></img>
                                </a>
                            </div>
                            <div>
                                <a href='https://instagram.com/dam_lash__'>
                                    <img src={bannerInsta}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component4