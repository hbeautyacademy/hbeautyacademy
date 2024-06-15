import { useEffect, useState } from 'react';
import {useScroll} from '../../../components/useScroll/useScroll';
import './../../../App.css';

export default function Introduction(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    // useEffect(()=>{
    //     window.location.reload();
    // })

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{backgroundImage: `url('/img/배경01.png')`}}>
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
                            <a>학원소개&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/company/introduction'>학원소개</a></li>
                                <li><a href='/company/ourservice'>교육과정</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='introduction__logo-wrap fade-in-self'>
                        H beauty academy
                    </div>
                    <div className='introduction__txt fade-in-self'>
                        전문적인 강사진으로 구성된 맞춤케어가 가능한 에이치뷰티아카데미입니다.<br/><br/>

                        에이치 뷰티아카데미에서는 강사들의 학생 전담케어 시스템으로 구성된 학원으로 학생들의 만족도를 높이는 학원입니다.<br/><br/>

                        에이치뷰티에서는 미용교육시스템에서 가장 필요한 서비스인 소수정원 수업과 학생들에게 맞는 개개인별 맞춤레슨으로 국가자격증 합격률을 높이며, 모든 학생들에게 일관된 교육 서비스를 받을 수 있도록 구성하였습니다.<br/><br/>

                        또한 입시와 취/창업 모두 차별화된 커리큘럼으로 함께 가겠습니다.<br/><br/>

                        전문 뷰티아티스트 배출을 위해 뷰티산업교육의 필요한 목표를 두고 노력하는 교육인으로 진심을 다해 수강생한분한분께 교육하는 현장으로 나아가겠습니다.
                        <div>강사진 소개</div>
                        <img src= '/img/강사진01.jpg' decoding="async"/>
                        <img src= '/img/강사진03.png' decoding="async"/>
                        <img src= '/img/강사진05.jpg' decoding="async"/>
                    </div>

                </div>
            </div>
        </>
    )
}