import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Service02(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{backgroundImage: 'url(/img/test04.jpg)'}}>
                    <div>SERVICE</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href='/'>
                                <img src= '/icons/home.svg' decoding="async"/>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>SERVICE</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>앱 개발&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/service/01'>홈페이지 제작</a></li>
                                <li><a href='/service/02'>앱 개발</a></li>
                                <li><a href='/service/03'>온라인 마케팅</a></li>
                                <li><a href='/service/04'>사업 컨설팅</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>앱 개발</div>
                        <div className='detail-page__title-sub'>소비자의 반응을 이끌어내는 앱</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con fade-in-self'>
                        <img className='service__img-box' src='/img/it13.jpg' />
                        <div className='service__txt'>
                            각종 검색포털의 유저들의 통계를 살펴보면 모바일의 사용률이 PC보다 높게 나오고 있습니다. 그만큼 사람들은 스마트폰 하나로 물건을 사고 팔며 서비스를 이용하는데요. 따라서 모바일을 통한 사업을 계획하고 있다면 앱이 필수적이죠.
                            <br/><br/>
                            하지만 단순히 어플리케이션은 홈페이지보다 단가도 높고 어렵게 느껴지는 것이 사실입니다. 하지만 코어스를 만난다면 그런 고민은 날려버리실 수 있습니다. 저희는 비개발자 분들의 입장에서 상세히 상담해드리며 앱에 필요한 부분들을 개발해서 제작합니다.
                            <br/><br/>
                            감각적인 디자인부터 소비자의 반응을 이끌어내느 기능까지. 이 모든 것을 담아낸 트렌디한 앱을 원하시나요? 저희와 함께 모바일 환경에서도 사업을 진행해보시면 좋겠습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}