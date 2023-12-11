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
                <div className='detail-page__banner-con' style={{backgroundImage: 'url(/img/test05.jpg)'}}>
                    <div>COMPANY</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href='/'>
                                <img src= '/icons/home.svg' decoding="async"/>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>COMPANY</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>서비스안내&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/company/introduction'>회사소개</a></li>
                                <li><a href='/company/ourservice'>서비스안내</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>서비스안내</div>
                        <div className='detail-page__title-sub'>코어스는 고객님의 관점에서 제작합니다</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <ul className='ourservice__img-con fade-in-self'>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/it13.jpg)'}}>
                            <div className='bg-gray' style={{backgroundColor:'rgb(0,0,0,0.5)'}}></div>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/01'>홈페이지 제작</a>
                            </div>
                        </li>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/it10.jpg)'}}>
                            <div className='bg-gray' style={{backgroundColor:'rgb(0,0,0,0.5)'}}></div>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/02'>앱 개발</a>
                            </div>
                        </li>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/it17.jpg)'}}>
                            <div className='bg-gray' style={{backgroundColor:'rgb(0,0,0,0.5)'}}></div>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/03'>온라인 마케팅</a>
                            </div>
                        </li>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/it16.jpg)'}}>
                            <div className='bg-gray' style={{backgroundColor:'rgb(0,0,0,0.5)'}}></div>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/04'>사업 컨설팅</a>
                            </div>
                        </li>
                    </ul>
                    <div className='ourservice__header-con'>
                        <div className='ourservice__header-txt'>
                            왜 우리에게 홈페이지를<br/>맡겨야 할까요?
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
                                    <img src= '/img/it12.jpg' decoding="async"/>
                                </div>
                                <div className='ourservice__content-txt-title '>
                                    소비자의 마음을 움직이다
                                </div>
                                <div className='ourservice__content-txt-sub'>
                                    코어스는 소비자의 입장에서 홈페이지를 구상합니다. 나의 사업 매출에 직접적으로 도움이되는 결과물을 만들기 위해 노력합니다.
                                </div>
                                <div className='arrow'></div>
                            </div>
                            <div className={`ourservice__content-txt-item 
                            + ${useScroll('.ourservice__content-txt-item:nth-child(2)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.ourservice__content-txt-item:nth-child(2)', 0.90).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='ourservice__img-wrap-mo'>
                                    <img src= '/img/it14.jpg' decoding="async"/>
                                </div>
                                <div className='ourservice__content-txt-title'>
                                    빠른 제작, 완성도 높은 결과
                                </div>
                                <div className='ourservice__content-txt-sub'>
                                    전문 개발팀이 결과물을 빠르게 만들면서도 퀄리티 있게 제작합니다.
                                </div>
                            </div>
                            <div className={`ourservice__content-txt-item 
                            + ${useScroll('.ourservice__content-txt-item:nth-child(3)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.ourservice__content-txt-item:nth-child(3)', 0.90).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='ourservice__img-wrap-mo'>
                                    <img src= '/img/it08.jpg' decoding="async"/>
                                </div>
                                <div className='ourservice__content-txt-title'>
                                    꼼꼼한 유지보수 시스템
                                </div>
                                <div className='ourservice__content-txt-sub'>
                                    홈페이지는 만들어진 뒤가 중요합니다. 우리는 꼼꼼한 유지보수 시스템으로 사이트가 문제없이 운영되도록 노력합니다.
                                </div>
                            </div>
                            <div className={`ourservice__content-txt-item + ${useScroll('.ourservice__content-txt-item:nth-child(4)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.ourservice__content-txt-item:nth-child(4)', 0.90).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='ourservice__img-wrap-mo'>
                                    <img src= '/img/it07.jpg' decoding="async"/>
                                </div>
                                <div className='ourservice__content-txt-title'>
                                    업종에 최적화된 홈페이지
                                </div>
                                <div className='ourservice__content-txt-sub'>
                                    의뢰인의 업종을 이해하고 사업에 적합한 사이트를 구상합니다.
                                </div>
                            </div>
                        </div>
                        <div className='ourservice__content-img-con'>
                            <div className='ourservice__triangle'></div>
                            <div className='ourservice__content-img'>
                                <img src= '/img/it12.jpg' decoding="async"/>
                                <img src= {useScroll('.ourservice__content-txt-item:nth-child(2)', 0.65).isShow ? '/img/it14.jpg' : ''} decoding="async"
                                style={{opacity: useScroll('.ourservice__content-txt-item:nth-child(2)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.ourservice__content-txt-item:nth-child(3)', 0.65).isShow ? '/img/it08.jpg' : ''} decoding="async"
                                style={{opacity: useScroll('.ourservice__content-txt-item:nth-child(3)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.ourservice__content-txt-item:nth-child(4)', 0.65).isShow ? '/img/it07.jpg' : ''} decoding="async"
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