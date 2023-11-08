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
                <div className='detail-page__banner-con' style={{background: 'url(/img/test05.jpg)'}}>
                    <div>COMPANY</div>
                </div>
                
                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href={process.env.PUBLIC_URL + '/'}>
                                <span class="material-symbols-outlined">
                                    home
                                </span>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>COMPANY</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>회사소개&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href={process.env.PUBLIC_URL + '/company/introduction'}>회사소개</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/company/ourservice'}>서비스안내</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='introduction__logo-wrap fade-in-self'>
                        CORES
                    </div>
                    <div className='introduction__txt fade-in-self'>
                        안녕하세요. 웹개발 전문회사 코어스입니다.<br/><br/>
                        저희는 고객님들께 제대로된 홈페이지를 만들어드리도록 최선을 다하고 있습니다. 반응형 홈페이지 제작, UX/UI 디자인, 마케팅 기획까지 진행하고 있는데요. 해당 분야에 대한 풍부한 경험을 바탕으로 매출에 실제 도움이 될 웹사이트를 제작합니다.<br/><br/>

                        그럼 일반적인 홈페이지 회사와 코어스는 무엇이 다를까요? 저희는 오랜 기간의 마케팅 경력이 있다는 특별한 점이 있습니다. 지금도 웹개발과 더불어 마케팅 실행사로서 소비자의 반응을 이끌어 오고 있는데요. 이러한 경험이 있다보니 고객님의 회사를 브랜딩하고 매출에 도움이될 홈페이지를 제작하고자 노력합니다. 따라서 제대로된 웹사이트를 원하는 분들이라면 편하게 저희에게 문의해주시길 바라겠습니다. 저희 코어스는 합리적인 금액과 최고의 실력으로 멋진 결과를 만들어내겠습니다.<br/><br/>

                        지금도 코어스를 만난 고객님들은 정성어린 후기를 남겨주고 계십니다. 수많은 리뷰 중에서도 가장 많이 차지하는 내용은 바로 진정성인데요. 저희는 하나의 홈페이지를 위해서 혼신을 다해 준비하고 있습니다. 그 결과 수많은 대표님들이 100% 만족하는 결과를 만들어 냅니다.<br/><br/>

                        나와 회사를 브랜딩해주는 홈페이지, 저희 코어스와 더욱 특별하게 제작해보세요. 저희를 믿고 맡겨주신 고객님께 최고의 결과를 보여드리겠습니다. 감사합니다.
                    </div>

                </div>
            </div>
        </>
    )
}