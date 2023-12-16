import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Portfolio2(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{background: 'url(/img/test09.jpg)'}}>
                    <div>현장사진</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href='/'>
                                <img src= '/icons/home.svg' decoding="async"/>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>현장사진</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>교육현장&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/portfolio/portfolio'>학원내부</a></li>
                                <li><a href='/portfolio/portfolio2'>교육현장</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>교육현장</div>
                        <div className='txt-line'></div>
                    </div>

                        <div className='portfolio__con fade-in-self' style={{padding:'0'}}>
                            {/* hw. 그리드 안에 vimeo 영상이 들어가게 */}
                            <ul className='portfolio__grid-con'>
                                {
                                    ['01','02','03','04','05','06','07','08','09'].map((a, i) => {
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
                <div className='portfolio__img-box' style={{backgroundImage:'url(/img/현장' + props.a + '.jpg)'}} ></div>
            </li>    
        </>
    )
}