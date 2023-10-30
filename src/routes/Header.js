import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './../App.css';

export default function Header(props){

    const [scrollPosition, setScrollPosition] = useState(null);
    const [clickHamburger, setClickHamburger] = useState(null);
    const [clickMenu, setClickMenu] = useState(null);

    // 스크롤 위치 인식
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    // 무한 스크롤 방지하기 위해서 100ms마다 스크롤 위치 체크
    useEffect(()=>{
        const timer = setTimeout(window.addEventListener('scroll', updateScroll), 100)       
        return () => {
            clearTimeout(timer);
        };
    });

    // 햄버거 버튼 클릭시 메뉴 보이기
    const showList = () => {
        setClickHamburger(!clickHamburger);
    };

    // 모바일 내 메뉴 클릭시 서브 메뉴 보이기
    const showSubMenu = (e) => {
        setClickMenu(e);
    }



    return (
        <>
            <header className={`header  + ${clickHamburger ? "header-click" : "header-unclick"}`}>
                <div className='header__con'>

                    {/* 로고 */}
                    <ul className='header__logo-con'>
                        {/* <li className='header__logo'><a href='/'>H ROAD</a></li> */}
                        <li className='header__hamburger'><a><img src={clickHamburger ? `/img/btn_x.png` : `/img/btn_hamburger.png`} style={{width: '24px'}} onClick={showList}/></a></li>
                    </ul>
                    
                    {/* 메뉴 */}
                    <ul className='header__category-con'>
                        <li>
                            <a onClick={() => showSubMenu(1)}>COMPANY</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 1 ? "block" : "" }`}>
                                <li><a href='/company/introduction'>회사소개</a></li>
                                <li><a href='/company/ourservice'>서비스안내</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(2)}>SERVICE</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 2 ? "block" : "" }`}>
                                <li><a href='/service/weddingsong'>감동축가</a></li>
                                <li><a href='/service/weddingmc'>센스사회</a></li>
                                <li><a href='/service/weddingcamera'>촬영및편집</a></li>
                                <li><a href='/service/weddingdirecting'>컨셉디렉팅</a></li>
                                <li><a href='/service/weddingevent'>이벤트</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(3)}>PORTFOLIO</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 3 ? "block" : "" }`}>
                                <li><a href='/portfolio/portfolio'>포트폴리오</a></li>
                                <li><a href='https://www.youtube.com/channel/UC2Edi1ZsZ_ywd30Tu3vE2zQ'>유튜브</a></li>
                                <li><a href='https://www.instagram.com/sunpy.wedding'>인스타그램</a></li>
                                <li><a href='https://blog.naver.com/sunpys_lifedance'>블로그</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(4)}>REVIEW</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 4 ? "block" : "" }`}>
                                <li><a href='/review/reason'>감동의이유</a></li>
                                <li><a href='/review/review'>후기모음</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(5)}>CONTACT</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 5 ? "block" : "" }`}>
                                <li><a href='/contact/contact'>견적받기</a></li>
                                <li><a href='https://open.kakao.com/o/sEZYh5Hc'>카톡상담</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* sns채널 */}
                    <ul className='header__icon-con'>
                        <li><a href='https://www.youtube.com/channel/UC2Edi1ZsZ_ywd30Tu3vE2zQ'>YOUTUBE</a></li>
                        <li><a href='https://blog.naver.com/sunpys_lifedance'>BLOG</a></li>
                        <li><a href='https://www.instagram.com/sunpy.wedding'>INSTA</a></li>
                    </ul>

                </div>
            </header>
        </>
    )
}
