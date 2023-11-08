import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Service03(){
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
                            <a>온라인 마케팅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
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
                        <div className='detail-page__title-main'>온라인 마케팅</div>
                        <div className='detail-page__title-sub'>사업 성장의 속도를 높이세요</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con fade-in-self'>
                        <img className='service__img-box' src='/img/img03.jpg' />
                        <div className='service__txt'>
                            저희의 마케팅 철학은 다음과 같습니다. '고객님이 마케팅이 필요없는 수준까지 마케팅을 해드리자' 이게 어떤 의미인지 궁금해하시는 분들이 계실텐데요. 바로, 인위적인 홍보 없이도 자연스럽게 사업이 잘 되도록 도와드리겠다는 뜻이죠.
                            <br/><br/>
                            코어스는 최고의 마케팅이란 소비자가 자신의 지인을 소개할만큼 브랜드를 신뢰하는 것이라고 생각합니다. 하지만 이렇게 되기까지는 초기의 고객을 확보해야겠죠. 아무리 좋은 상품을 개발해서 판매하더라도 브랜드의 존재를 아무도 모른다면 단골 고객을 확보할 수 없기 때문이니까요.
                            <br/><br/>
                            코어스는 사업 초기에 고객확보에 필요한 모든 부분들을 도와드립니다. 블로그, 인스타그램, 플레이스 등의 각종 SNS에서부터 실제 고객이 접근하게 하기위한 이벤트 기획까지. 브랜드를 알리기 위한 모든 방면의 일을 기획합니다.
                            <br/><br/>
                            특히나 소규모 회사라면 고객응대와 상품기획만으로도 벅찬 시간을 보내고 계시리라고 생각이 듭니다. 이럴 때 마케팅은 전문가에게 맡겨보시면 어떨까요? 여러분이 갖고 계신 홍보에 대한 고민을 가볍게 해드리겠습니다. 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}