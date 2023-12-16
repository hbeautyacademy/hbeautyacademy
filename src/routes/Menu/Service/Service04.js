import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Service04(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{background: 'url(/img/test04.jpg)'}}>
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
                            <a>피부&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
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
                        <div className='detail-page__title-main'>피부</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con fade-in-self'>
                        <img className='service__img-box' src='/img/피부.jpg' />
                        <div className='service__txt'>
                            피부미용업무는 공중위생분야로서 국민의 건강과 직결되어 있는 중요한 분야로 향후 국가의 산업구조가 제조업에서 서비스업 중심으로 전환되는 차원에서 수요가 증대되고 있다.
                            <br/><br/>
                            머리, 피부미용, 화장 등 분야별로 세분화 및 전문화 되고 있는 미용의 세계적인 추세에 맞추어 피부미용을 자격제도화 함으로써 피부미용분야 전문인력을 양성하여 국민의 보건과 건강을 보호하기 위하여 전문인을 양성하는 과정입니다.
                            <br/><br/>
                            얼굴 및 신체의 피부를 아름답게 유지·보호·개선 관리하기 위하여 각 부위와 유형에 적절한 관리법과 기기 및 제품을 사용하여 피부미용을 수행할 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}