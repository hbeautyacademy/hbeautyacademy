import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Service04(){
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
                        <li className='detail-page__btn-home'>
                            <a href={process.env.PUBLIC_URL + '/'}>
                                <span class="material-symbols-outlined">
                                    home
                                </span>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>SERVICE</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>사업 컨설팅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href={process.env.PUBLIC_URL + '/service/01'}>홈페이지 제작</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/service/02'}>앱 개발</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/service/03'}>온라인 마케팅</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/service/04'}>사업 컨설팅</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>사업 컨설팅</div>
                        <div className='detail-page__title-sub'>레드오션 속에서 매출을 올리다</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con fade-in-self'>
                        <img className='service__img-box' src='/img/img02.jpg' />
                        <div className='service__txt'>
                            코어스는 전문적인 사업 컨설팅을 제공합니다. 실제로 저희는 다양한 업종의 창업과 운영을 도와드렸는데요. 이러한 경험을 바탕으로 해당 업종에 가장 적절한 사업 계획을 기획해드리고 상담을 해드리고 있습니다.
                            <br/><br/>
                            저희는 컨설팅에 있어서 가장 중요한 것은 통계라고 생각합니다. 아무리 추측을 통해 다양한 계획을 세운다 하더라도 현실과는 거리가 있기 때문이죠. 코어스는 다양한 빅데이터를 기반으로 컨설팅을 도와드립니다.
                            <br/><br/>
                            코어스는 어떤 업종을 어느 지역에서 시작할 때 사업이 극대화될 수 있을지 자세하게 분석합니다. 실제로 저희의 컨설팅을 받아서 사업을 시작한 분들 중에는 어느새 지점을 늘려나가며 고공성장하고 계신 대표님들도 계시죠.
                            <br/><br/>
                            사업에 대한 고민, 저희와 함께 나눠보세요. 여러분의 든든한 비즈니스 동반자가 되어드리겠습니다. 대표님의 사업이 레드오션 속에서도 꽃을 피울 수 있도록 노력하겠습니다. 감사합니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}