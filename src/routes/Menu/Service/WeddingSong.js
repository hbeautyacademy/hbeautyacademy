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
                            <a>감동축가&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
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
                        <div className='detail-page__title-main'>감동축가</div>
                        <div className='detail-page__title-sub'>특별한 그룹축가로 더욱 풍성하게</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con'>
                        <img src='/img/ourservice_wedding.jpg' />
                        <div className='service__txt'>
                            결혼식은 모든 순서마다 갖고있는 의미가 있죠. 그중에서도 축가의 중요성은 크다고 말할 수 있습니다. 그 이유는 웨딩의 클라이맥스의 시점에 가장 큰 감동을 주는 시간이기 때문입니다.<br/><br/>
                            에이치로드는 그룹축가로 풍성한 시간을 제공합니다. 기존에 사람들이 알고있는 축가는 지인 1명이 무대에 나와서 노래를 부르는 것을 상상하는데요. 하지만 저희는 최대 5명까지 다수가 함께 신랑신부를 축하하는 퍼포먼스를 보여드립니다.<br/><br/>
                            저희 만의 특별한 축가로 인해 웨딩홀 내에 감동을 더할 수 있습니다. 또한 에이치로드의 축가팀은 진정성있는 축가로 신랑신부님께 마음을 전달합니다.<br/><br/>
                            그리고 에이치로드는 치어리딩의 경력을 갖춘 팀 답게 하객들의 반응을 이끌어내는데요. 축가팀 뿐 만 아니라 홀에 있는 모든 사람이 신랑신부에게 축하하는 분위기를 만들어내도록 리딩합니다. 특별한 웨딩송을 원하시나요? 저희와 함께해보세요.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}