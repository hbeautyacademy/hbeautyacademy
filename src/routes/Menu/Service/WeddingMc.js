import { useEffect, useState } from 'react';
import './../../../App.css';

export default function WeddingSong(){
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
                            <a>센스사회&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/service/weddingsong'>감동축가</a></li>
                                <li><a href='/service/weddingmc'>센스사회</a></li>
                                <li><a href='/service/weddingcamera'>현장촬영</a></li>
                                <li><a href='/service/weddingdirecting'>컨셉디렉팅</a></li>
                                <li><a href='/service/weddingevent'>이벤트</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>센스사회</div>
                        <div className='detail-page__title-sub'>감각적인 사회로 주인공이 빛나게</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con'>
                        <img src='/img/ourservice_mic.jpg' />
                        <div className='service__txt'>
                            웨딩홀에는 수많은 사람들이 오게 됩니다. 이때 전체를 리드하는 사회자가 누구인지에 따라서 실내의 분위기가 크게 달라지게 되는데요. 그렇기에 MC는 현장의 상황을 잘 이해하고 돌발적인 상황에도 유연하게 대응할 수 있는 실력이 필요합니다.<br/><br/>
                            에이치로드는 이러한 점에 있어서 특화되어있다고 할 수 있습니다. 지금까지 수많은 웨딩홀과 현장에서 사람들과 소통해왔기 때문인데요. 더욱이 저희는 사회자가 돋보이는 진행이 아니라 신랑신부가 가장 빛나도록 모든 멘트과 구성을 준비합니다.<br/><br/>
                            또한 저희는 하객 분들의 반응을 이끌어내는 데에 자신있습니다. 서로 얼어있는 딱딱한 분위기도 자연스럽게 풀어내면서 모두가 신랑신부님께 집중하도록 만들죠.<br/><br/>
                            현장을 즐겁게 감동적으로 만들 사회자가 필요하다면 에이치로드를 찾아주세요. 어떠한 상황에도 감각적인 멘트로 최고의 웨딩이 되도록 노력하겠습니다. 고객님들이 만족하는 MC팀이 있는 에이치로드, 여러분과 함께 하겠습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}