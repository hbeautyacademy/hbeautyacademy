import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Portfolio(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{background: 'url(/img/test09.jpg)'}}>
                    <div>PORTFOLIO</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'><a href='/'>
                            <span class="material-symbols-outlined">
                                    home
                            </span>
                        </a></li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>PORTFOLIO</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>포트폴리오&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/service/weddingsong'>포트폴리오</a></li>
                                <li><a href='https://www.youtube.com/channel/UC2Edi1ZsZ_ywd30Tu3vE2zQ'>유튜브</a></li>
                                <li><a href='https://www.instagram.com/sunpy.wedding'>인스타그램</a></li>
                                <li><a href='https://blog.naver.com/sunpys_lifedance'>블로그</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>포트폴리오</div>
                        <div className='detail-page__title-sub'>에이치로드의 기록을 살펴보세요</div>
                        <div className='txt-line'></div>
                    </div>

                        <div className='intro-portfolio__con' style={{padding:'0'}}>
                            {/* hw. 그리드 안에 vimeo 영상이 들어가게 */}
                            <ul className='intro-portfolio__grid-con'>
                                {
                                    ['01','02','03','04','05','06','07','08','09','10','11','12'].map((a, i) => {
                                        return <GridItem a={a} i={i} />
                                    })
                                }
                            </ul>
                            <div className='intro-portfolio__btn-wrap'>
                                <span><a href='https://www.youtube.com/channel/UC2Edi1ZsZ_ywd30Tu3vE2zQ'>MORE &nbsp;&#8250;</a></span>
                            </div>
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
                <div className='intro__img-box' style={{backgroundImage:'url(/img/test' + props.a + '.jpg)'}} ></div>
            </li>    
        </>
    )
}