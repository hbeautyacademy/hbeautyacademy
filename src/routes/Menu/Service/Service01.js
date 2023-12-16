import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Service01(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{backgroundImage: 'url(/img/배경02.png)'}}>
                    <div style={{color:'#111'}}>교육과정</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href='/'>
                                <img src= '/icons/home.svg' decoding="async"/>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>교육과정</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>헤어&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/service/01'>헤어</a></li>
                                <li><a href='/service/02'>메이크업</a></li>
                                <li><a href='/service/03'>네일아트</a></li>
                                <li><a href='/service/04'>피부</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>헤어</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con fade-in-self'>
                        <img className='service__img-box' src='/img/헤어.jpg' />
                        <div className='service__txt'>
                            미용업무는 공중위생분야로서 국민의 건강과 직결되어 있는 중요한 분야로 향후 국가의 산업구조가 제조업에서 서비스업 중심으로 전환되는 4차산업에 수요가 증대되고 있는 산업입니다.분야별로 세분화 및 전문화 되고 있는 세계적인 추세에 맞추어 미용의 업무 중 하나인 헤어미용을 전문인으로 양성하는 과정입니다.
                            <br/><br/>
                            미용에 관한 최상급 숙련기능을 가지고 있으며, 산업현장에서 작업관리, 소속기능인력의 지도 및 감독, 현장훈련, 현장관리업무를 수행할 수 있는 전문인력을 양성하고자합니다.
                            <br/><br/>
                            얼굴, 머리, 손·발톱을 아름답게 하기 위하여 헤어 및 두피, 메이크업에 적절한 관리법과 기기 및 제품을 사용하여 일반미용을 수행할 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}