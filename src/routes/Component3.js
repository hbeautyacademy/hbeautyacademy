import { useEffect, useState } from 'react';
import './../App.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation} from "swiper";

function Component3(){
    let [fade, setFade] = useState('');
    let [count, setCount] = useState(false);
    let [count1, setCount1] = useState(false);

    useEffect(() => {
        let timer1 = setInterval(()=>{window.addEventListener('scroll', handleScroll1);}, 100)
        return () => {
            clearTimeout(timer1);
            window.removeEventListener('scroll', handleScroll1);
        };
    }, [])

    let handleScroll1 = () => {
        if (window.scrollY > 2450 && count == false) {
            setFade('left--end');
            count1 = true;
    }
    };

    return (
        <>
            <div className='content3'>
                {/* <div className={'content3__container left--start ' + fade}> */}
                <div className='content3__container'>
                    <header className='content3__header'>
                        <span className={'con3-header__text left--start ' + fade}>포트폴리오</span>
                    </header>


                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        // autoplay={{
                        //     delay: 3000,
                        // }}
                        navigation={true}
                        className={'detail__swiper-con left--start ' + fade}
                    >
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf01.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Face</span><br></br><span>헤어라인 왁싱</span></div> */}
                        </SwiperSlide>
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf02.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Face</span><br></br><span>얼굴인중 왁싱</span></div> */}
                        </SwiperSlide>
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf03.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Body</span><br></br><span>팔 왁싱</span></div> */}
                        </SwiperSlide>
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf04.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Body</span><br></br><span>다리 왁싱</span></div> */}
                        </SwiperSlide>
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf05.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Body</span><br></br><span>겨드랑이 왁싱</span></div> */}
                        </SwiperSlide>
                    </Swiper>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        // autoplay={{
                        //     delay: 3000,
                        // }}
                        navigation={true}
                        className={'detail__swiper-con swiper-con__mobile left--start ' + fade}
                    >
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf01.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Face</span><br></br><span>헤어라인 왁싱</span></div> */}
                        </SwiperSlide>
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf02.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Face</span><br></br><span>얼굴인중 왁싱</span></div> */}
                        </SwiperSlide>
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf03.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Body</span><br></br><span>팔 왁싱</span></div> */}
                        </SwiperSlide>
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf04.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Body</span><br></br><span>다리 왁싱</span></div> */}
                        </SwiperSlide>
                        <SwiperSlide className='swiper-box'>
                            <img src='./img/pf05.jpg' style={{width: '100%'}}/>
                            {/* <div><span>Body</span><br></br><span>겨드랑이 왁싱</span></div> */}
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Component3