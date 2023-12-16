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
                        <li className='header__hamburger'
                        style={{transform : clickHamburger ? "rotate(45deg)" : "rotate(0)"}}><a onClick={showList}>+</a></li>
                    </ul>
                    
                    {/* 메뉴 */}
                    <ul className='header__category-con'>
                        <li>
                            <a href='/'>홈</a>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(1)}>H뷰티소개</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 1 ? "block" : "" }`}>
                                <li><a href='/company/introduction'>학원소개</a></li>
                                <li><a href='/company/ourservice'>과정소개</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(2)}>교육과정</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 2 ? "block" : "" }`}>
                                <li><a href='/service/01'>헤어</a></li>
                                <li><a href='/service/02'>메이크업</a></li>
                                <li><a href='/service/03'>네일아트</a></li>
                                <li><a href='/service/04'>피부</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => showSubMenu(3)}>현장사진</a>
                            <ul className={`header__category-sub-con + ${clickMenu == 3 ? "block" : "" }`}>
                                <li><a href='/portfolio/portfolio'>학원내부</a></li>
                                <li><a href='/portfolio/portfolio2'>교육현장</a></li>
                                <li><a href='https://m.blog.naver.com/PostList.naver?blogId=osanhbeautyacademy&tab=1'>블로그</a></li>
                                <li><a href='https://www.instagram.com/h__beautyacademy'>인스타그램</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='https://open.kakao.com/o/srQs41Pf'>온라인문의</a>
                        </li>
                    </ul>

                    {/* sns채널 */}
                    <ul className='header__icon-con'>
                        <li><a href='https://m.blog.naver.com/PostList.naver?blogId=osanhbeautyacademy&tab=1'>BLOG</a></li>
                        <li><a href='https://www.instagram.com/h__beautyacademy'>INSTA</a></li>
                    </ul>

                </div>
            </header>
        </>
    )
}
