import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Service01(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{background: 'url(/img/test04.jpg)'}}>
                    <div>SERVICE</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'><a href='/'>
                            <span class="material-symbols-outlined">
                                    home
                                </span>
                        </a></li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>SERVICE</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>홈페이지 제작&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/service/01'>홈페이지 제작</a></li>
                                <li><a href='/service/02'>앱 개발</a></li>
                                <li><a href='/service/03'>마케팅</a></li>
                                <li><a href='/service/04'>사업 컨설팅</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>홈페이지 제작</div>
                        <div className='detail-page__title-sub'>소비자에게 신뢰를 더하는 브랜딩</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con fade-in-self'>
                        <img className='service__img-box' src='/img/it01.jpg' />
                        <div className='service__txt'>
                            이제 사람들은 오프라인보다 온라인 활동에 더욱 친숙하게 되었습니다. 따라서 홈페이지는 회사를 나타내는 명함 이상의 가치를 가지고 있는데요. 소비자는 홈페이지를 통해 브랜드의 신뢰감과 호감을 가지기도 합니다.
                            <br/><br/>
                            위더스는 고객님이 소비자에게 더욱 다가갈 수 있도록 홈페이지를 제작합니다. 저희는 마케팅적인 사고를 기반으로 디자인을 구성하고 기능을 개발합니다. 따라서 실제 매출이 도움이 되는 사이트를 만들고자 노력하고 있습니다.
                            <br/><br/>
                            또한 감각적인 디자인과 UX/UI로 회사의 브랜드를 더욱 가치있게 보이도록 노력합니다. 만약 사업의 성장을 위해 홈페이지를 고려하고 계시다면 저희와 함께하시길 적극 권해드립니다.
                            <br/><br/>
                            감동적인 후기가 풍부하게 있는 위더스와 함께해보세요. 상담부터 제작과 이후 유지보수까지 꼼꼼하게 도와드리겠습니다. 저희는 고객님께 언제나 열려있습니다. 편하게 상담을 요청해주시길 바라겠습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}