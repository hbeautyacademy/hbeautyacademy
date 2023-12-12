import { useEffect, useState } from 'react';
import {useScroll} from '../../../components/useScroll/useScroll';
import './../../../App.css';

export default function Review(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{background: 'url(/img/test02.jpg)'}}>
                    <div>REVIEW</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href='/'>
                                <img src= '/icons/home.svg' decoding="async"/>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>REVIEW</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>후기모음&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/review/reason'>감동의이유</a></li>
                                <li><a href='/review/review'>후기모음</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>REVIEW</div>
                        <div className='detail-page__title-sub'>고객님들의 진심을 담은 후기모음</div>
                        <div className='txt-line'></div>
                    </div>

                    <div className='review-page__con fade-in-self'>
                        <ul className='review-page__txt-con'>
                            <li className='review-page__txt-item'>
                                <div className='review-page__stars'>
                                    <span>
                                        &#9733;&#9733;&#9733;&#9733;&#9733;
                                    </span>
                                </div>
                                <div className='review-page__txt-title'>"가격, 속도, 완성도까지 생각한다면 정답은 여기 하나인 것 같네요"</div>
                                <div className='review-page__txt-sub'>제조업 대표, 김**</div>
                            </li>
                            <li className='review-page__txt-item'>
                                <div className='review-page__stars'>
                                    <span>
                                        &#9733;&#9733;&#9733;&#9733;&#9733;
                                    </span>
                                </div>
                                <div className='review-page__txt-title'>"홈페이지 제작은 어려워 보여서 막막했는데 친절한 대표님을 만나서 편하게 상담받았어요. 덕분에 고객 연락이 더 늘었습니다!"</div>
                                <div className='review-page__txt-sub'>제조업 대표, 김**</div>
                            </li>
                            <li className='review-page__txt-item'>
                                <div className='review-page__stars'>
                                    <span>
                                        &#9733;&#9733;&#9733;&#9733;&#9733;
                                    </span>
                                </div>
                                <div className='review-page__txt-title'>"아는 사장님을 통해서 이곳을 소개를 받았습니다. 결과를 보니 여기서 하길 잘했네요. 디테일까지 완벽하게 해주셔서 감사합니다"</div>
                                <div className='review-page__txt-sub'>미용업 대표, 박**</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function GridItem(props){    

    return (
        <>
            <li className='intro__grid-item'>
                <div className='intro__img-box' style={{backgroundImage:'url(/img/test0' + props.a + '.jpg)'}} ></div>
            </li>    
        </>
    )
}