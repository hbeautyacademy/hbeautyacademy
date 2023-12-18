import { useEffect, useState } from 'react';
import {useScroll} from '../../../components/useScroll/useScroll';
import './../../../App.css';

export default function Map(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    // useEffect(()=>{
    //     window.location.reload();
    // })

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{backgroundImage: `url('/img/배경01.png')`}}>
                    <div style={{color:"#111"}}>오시는길</div>
                </div>
                
                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href='/'>
                                <img src= '/icons/home.svg' decoding="async"/>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>오시는길</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con' style={{maxWidth:'900px'}}>
                    <div className='detail-page__title-con' style={{marginBottom:'20px'}}>
                        <div className='detail-page__title-main'>오시는길</div>
                        <div className='detail-page__title-sub'>약도를 누르면 지도로 연결됩니다</div>
                        <div className='txt-line'></div>
                    </div>
                    <div className='introduction__txt map__txt fade-in-self'>
                        <a href='https://naver.me/FJicvlMT'><img src= '/img/오시는길.jpg' decoding="async"/></a>
                        <ul>
                            <li>주소 : 경기도 오산시 오산동 882-2번지 2층</li>
                            <li>주차여부 : 지하 1층에 주차가능합니다</li>
                            <li>대중교통 : 오산역 1번출구 도보 200m</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}