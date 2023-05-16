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
                        <span>이제, <span>우수히</span>를 만나세요</span>
                    </header>
                    <div className='content4__detail'>
                        <div className='map-box'>
                            <div className='map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.0584773622109!2d126.54851053971225!3d33.47706988394583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfcebfb215333%3A0xd25091532ab2683a!2z7KCc7KO87Yq567OE7J6Q7LmY64-EIOygnOyjvOyLnCDsnbjri6Qy6ri4IDgtMg!5e0!3m2!1sko!2skr!4v1683604022329!5m2!1sko!2skr" width="500" height="450" style={{border : "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className='map-box__text'>
                                <span>제주 제주시 인다2길 8-2 동연로하임 북측상가 1층</span>
                                <span>제주 제주시 인다2길 8-2 <br></br> 동연로하임 북측상가 1층</span>
                            </div>
                        </div>
                        <div className='call-box'>
                            <div>
                                <a href='https://pcmap.place.naver.com/nailshop/1700249679/stylist/4778709'>
                                    <img src={bannerNaver}></img>
                                </a>
                            </div>
                            <div>
                                <a href='https://pf.kakao.com/_xoaxltxj/chat'>
                                    <img src={bannerKakao}></img>
                                </a>
                            </div>
                            <div>
                                <a href='https://www.instagram.com/_usuhi.waxing/'>
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