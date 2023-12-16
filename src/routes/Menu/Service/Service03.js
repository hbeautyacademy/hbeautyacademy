import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Service03(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{backgroundImage: 'url(/img/test04.jpg)'}}>
                    <div>교육과정</div>
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
                            <a>네일아트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
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
                        <div className='detail-page__title-main'>네일아트</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con fade-in-self'>
                        <img className='service__img-box' src='/img/네일.jpg' />
                        <div className='service__txt'>
                            네일미용에 관한 숙련기능을 가지고 현장업무를 수행할 수 있는 능력을 가진 전문기능인력을 양성하고자합니다.
                            <br/><br/>
                            손톱·발톱을 건강하고 아름답게 하기 위하여 적절한 관리법과 기기 및 제품을 사용하여 네일 미용 업무 수행할 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}