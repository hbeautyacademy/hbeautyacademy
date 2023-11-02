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
                                <li><a href='/portfolio/portfolio'>포트폴리오</a></li>
                                <li><a onClick={() => {alert('준비중 입니다')}}>유튜브</a></li>
                                <li><a onClick={() => {alert('준비중 입니다')}}>인스타그램</a></li>
                                <li><a onClick={() => {alert('준비중 입니다')}}>블로그</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>포트폴리오</div>
                        <div className='detail-page__title-sub'>위더스의 기록을 살펴보세요</div>
                        <div className='txt-line'></div>
                    </div>

                        <div className='portfolio__con fade-in-self' style={{padding:'0'}}>
                            {/* hw. 그리드 안에 vimeo 영상이 들어가게 */}
                            <ul className='portfolio__grid-con'>
                                {
                                    ['01','02','03','04','05','06','07','08','09','10','11','12'].map((a, i) => {
                                        return <GridItem a={a} i={i} />
                                    })
                                }
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
            <li className='portfolio__grid-item'>
                <div className='portfolio__img-box' style={{backgroundImage:'url(/img/it' + props.a + '.jpg)'}} ></div>
            </li>    
        </>
    )
}