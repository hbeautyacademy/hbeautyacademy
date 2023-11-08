import { useEffect, useState } from 'react';
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
                        {/* <li className='header__hamburger'><a onClick={showList}>{clickHamburger ? "-" : "+"}</a></li> */}
                        <li className='header__hamburger'
                        style={{transform : clickHamburger ? "rotate(45deg)" : "rotate(0)"}}><a onClick={showList}>+</a></li>
                    </ul>
                    
                    {/* 메뉴 */}
                    <ul className='header__category-con'>
                        <li>
                            <a href={process.env.PUBLIC_URL + '/'}>HOME</a>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(1)}>COMPANY</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 1 ? "block" : "" }`}>
                                <li><a href={process.env.PUBLIC_URL + '/company/introduction'}>회사소개</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/company/ourservice'}>서비스안내</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(2)}>SERVICE</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 2 ? "block" : "" }`}>
                                <li><a href={process.env.PUBLIC_URL + '/service/01'}>홈페이지 제작</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/service/02'}>앱 개발</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/service/03'}>온라인 마케팅</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/service/04'}>사업 컨설팅</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(3)}>PORTFOLIO</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 3 ? "block" : "" }`}>
                                <li><a href={process.env.PUBLIC_URL + '/portfolio/portfolio'}>포트폴리오</a></li>
                                <li><a onClick={() => {alert('준비중 입니다')}}>유튜브</a></li>
                                <li><a onClick={() => {alert('준비중 입니다')}}>인스타그램</a></li>
                                <li><a onClick={() => {alert('준비중 입니다')}}>블로그</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(4)}>REVIEW</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 4 ? "block" : "" }`}>
                                <li><a href={process.env.PUBLIC_URL + '/review/reason'}>감동의이유</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/review/review'}>후기모음</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='https://open.kakao.com/o/srQs41Pf'>CONTACT</a>
                        </li>
                    </ul>

                    {/* sns채널 */}
                    <ul className='header__icon-con'>
                        <li><a onClick={() => {alert('준비중 입니다')}}>YOUTUBE</a></li>
                        <li><a onClick={() => {alert('준비중 입니다')}}>BLOG</a></li>
                        <li><a onClick={() => {alert('준비중 입니다')}}>INSTA</a></li>
                    </ul>

                </div>
            </header>
        </>
    )
}
