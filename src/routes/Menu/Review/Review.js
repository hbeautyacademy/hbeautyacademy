import { useEffect, useState } from 'react';
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
                        <li className='detail-page__btn-home'><a href='/'>
                            <span class="material-symbols-outlined">
                                home
                            </span>
                        </a></li>
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

                    <ul className='intro-review__img-con'>
                        <li className='intro-review__img-item' style={{backgroundImage:'url(/img/couple01.jpg)'}}>
                            <div className='intro-review__img-txt-con'>
                                <div className='intro-review__img-txt-title'>서울 박**님</div>
                                <div className='intro-review__img-txt-sub'>"정말 감동적이었어요. 지인에게도 소개하고 싶었습니다. 대표님 행복한 결혼식 만들어주셔서 감사합니다"</div>
                            </div>
                        </li>
                        <li className='intro-review__img-item' style={{backgroundImage:'url(/img/couple02.jpg)'}}>
                            <div className='intro-review__img-txt-con'>
                                <div className='intro-review__img-txt-title'>제주 박**님</div>
                                <div className='intro-review__img-txt-sub'>"그룹이 함께 무대에 나와서 축가를 해주니 즐거웠습니다. 덕분에 멀리서 와주신 하객분들도 행복했다고 하네요. 감사합니다!"</div>
                            </div>
                        </li>
                        <li className='intro-review__img-item' style={{backgroundImage:'url(/img/couple03.jpg)'}}>
                            <div className='intro-review__img-txt-con'>
                                <div className='intro-review__img-txt-title'>서울 박**님</div>
                                <div className='intro-review__img-txt-sub'>"정말 감동적이었어요. 지인에게도 소개하고 싶었습니다. 대표님 행복한 결혼식 만들어주셔서 감사합니다"</div>
                            </div>
                        </li>
                        <li className='intro-review__img-item' style={{backgroundImage:'url(/img/couple04.jpg)'}}>
                            <div className='intro-review__img-txt-con'>
                                <div className='intro-review__img-txt-title'>서울 박**님</div>
                                <div className='intro-review__img-txt-sub'>"정말 감동적이었어요. 지인에게도 소개하고 싶었습니다. 대표님 행복한 결혼식 만들어주셔서 감사합니다"</div>
                            </div>
                        </li>
                    </ul>
                    
                    
                    
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