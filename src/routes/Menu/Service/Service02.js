import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Service02(){
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
                            <a>메이크업&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
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
                        <div className='detail-page__title-main'>메이크업</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con fade-in-self'>
                        <img className='service__img-box' src='/img/메이크업.jpg' />
                        <div className='service__txt'>
                            메이크업은 특정한 상황과 목적에 맞게 얼굴·신체를 연출하고 표현하여 이미지, 캐릭터 창출을 목적으로 이미지분석, 디자인, 메이크업 및 분장에 관한 전문지식 또는 숙련 기능을 바탕으로 효과적인 표현을 수행 할 수 있는 전문기능인력을 양성하고자 합니다.
                            <br/><br/>
                            얼굴·신체를 아름답게 하거나 특정한 상황과 목적에 맞는 이미지분석, 디자인, 메이크업, 뷰티코디네이션, 후속관리 등을 실행하기 위해 적절한 관리법과 도구, 기기 및 제품을 사용하여 메이크업을 수행할 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}