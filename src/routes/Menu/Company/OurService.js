import { useEffect, useState } from 'react';
import {useScroll} from '../../../components/useScroll/useScroll';
import './../../../App.css';


export default function OurService(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{backgroundImage: 'url(/img/배경01.png)'}}>
                    <div style={{color:"#111"}}>H뷰티소개</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href='/'>
                                <img src= '/icons/home.svg' decoding="async"/>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>H뷰티소개</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>교육과정&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/company/introduction'>학원소개</a></li>
                                <li><a href='/company/ourservice'>교육과정</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>교육과정</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <ul className='ourservice__img-con fade-in-self'>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/헤어.jpg)'}}>
                            <div className='bg-gray' style={{backgroundColor:'rgb(0,0,0,0.5)'}}></div>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/01'>헤어</a>
                            </div>
                        </li>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/메이크업.jpg)'}}>
                            <div className='bg-gray' style={{backgroundColor:'rgb(0,0,0,0.5)'}}></div>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/02'>메이크업</a>
                            </div>
                        </li>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/네일.jpg)'}}>
                            <div className='bg-gray' style={{backgroundColor:'rgb(0,0,0,0.5)'}}></div>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/03'>네일아트</a>
                            </div>
                        </li>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/피부.jpg)'}}>
                            <div className='bg-gray' style={{backgroundColor:'rgb(0,0,0,0.5)'}}></div>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/04'>피부</a>
                            </div>
                        </li>
                    </ul>
                    <div className='ourservice__header-con'>
                        <div className='ourservice__header-txt'>
                            H beauty academy를<br/>선택한 수강생의 혜택
                        </div>
                    </div>
                    <div className='ourservice__content-con'>
                        <div className='ourservice__content-txt'>
                            <div className={`ourservice__content-txt-item 
                            + ${useScroll('.ourservice__content-txt-item:nth-child(1)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.ourservice__content-txt-item:nth-child(1)', 0.90).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='ourservice__img-wrap-mo'>
                                    <img src= '/img/서비스01.png' decoding="async"/>
                                </div>
                                <div className='ourservice__content-txt-title '>
                                    학생을 위한 집중케어
                                </div>
                                <div className='ourservice__content-txt-sub'>
                                    대학교 수시 면접 교육 / 담당선생님관리 / 입시과정 컨설팅 / 미용대회 및 포트폴리오 까지 각 학교에 맞는 집중케어가 가능합니다.
                                </div>
                                <div className='arrow'></div>
                            </div>
                            <div className={`ourservice__content-txt-item 
                            + ${useScroll('.ourservice__content-txt-item:nth-child(2)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.ourservice__content-txt-item:nth-child(2)', 0.90).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='ourservice__img-wrap-mo'>
                                    <img src= '/img/서비스02.png' decoding="async"/>
                                </div>
                                <div className='ourservice__content-txt-title'>
                                    취업부터 창업까지 함께
                                </div>
                                <div className='ourservice__content-txt-sub'>
                                    취&#8901;창업과정에 전문적으로 인원이 배치돼어 취&#8901;창업까지 함께합니다. 창업하실때 필요한 샵 실무과정을 학원에서 경험하실 수 있습니다.
                                </div>
                            </div>
                            <div className={`ourservice__content-txt-item 
                            + ${useScroll('.ourservice__content-txt-item:nth-child(3)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.ourservice__content-txt-item:nth-child(3)', 0.90).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='ourservice__img-wrap-mo'>
                                    <img src= '/img/서비스03.png' decoding="async"/>
                                </div>
                                <div className='ourservice__content-txt-title'>
                                    높은 합격률의 집중교육
                                </div>
                                <div className='ourservice__content-txt-sub'>
                                    (성인반) 소수정원과 집중교육으로<br/>단기 속성 국가자격증 합격이 가능합니다. <br/>- 네일 2개월 합격률 90%이상 <br/>- 피부 10회 합격률 92%이상 <br/>- 메이크업 3개월 합격률 89%이상 <br/>- 헤어 4개월 합격률 96%이상
                                </div>
                            </div>
                            <div className={`ourservice__content-txt-item + ${useScroll('.ourservice__content-txt-item:nth-child(4)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.ourservice__content-txt-item:nth-child(4)', 0.90).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='ourservice__img-wrap-mo'>
                                    <img src= '/img/서비스04.png' decoding="async"/>
                                </div>
                                <div className='ourservice__content-txt-title'>
                                    학생에게 맞는 맞춤교육
                                </div>
                                <div className='ourservice__content-txt-sub'>
                                    다수로 연습방식의 수업이 아닌 소수정원 수업으로 구성합니다. 각 학생들에게 맞는 수업방식과 맞춤 케어가 가능한 곳 입니다.
                                </div>
                            </div>
                        </div>
                        <div className='ourservice__content-img-con'>
                            <div className='ourservice__triangle'></div>
                            <div className='ourservice__content-img'>
                                <img src= '/img/서비스01.png' decoding="async"/>
                                <img src= {useScroll('.ourservice__content-txt-item:nth-child(2)', 0.65).isShow ? '/img/서비스02.png' : ''} decoding="async"
                                style={{opacity: useScroll('.ourservice__content-txt-item:nth-child(2)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.ourservice__content-txt-item:nth-child(3)', 0.65).isShow ? '/img/서비스03.png' : ''} decoding="async"
                                style={{opacity: useScroll('.ourservice__content-txt-item:nth-child(3)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.ourservice__content-txt-item:nth-child(4)', 0.65).isShow ? '/img/서비스04.png' : ''} decoding="async"
                                style={{opacity: useScroll('.ourservice__content-txt-item:nth-child(4)', 0.65).isShow ? '1' : '0'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}