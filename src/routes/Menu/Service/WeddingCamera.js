import { useEffect, useState } from 'react';
import './../../../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';


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
                            {/* <FontAwesomeIcon icon={faHome} className='manage-sb__icon'/> */}
                            </a></li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>SERVICE</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>현장촬영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
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
                        <div className='detail-page__title-main'>현장촬영</div>
                        <div className='detail-page__title-sub'>가장 아름다운 순간을 담아내다</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con'>
                        <img src='/img/ourservice_camera.jpg' />
                        <div className='service__txt'>
                            기록은 웨딩의 감동을 이후에도 느끼게 해주죠. 훗날에 자신의 결혼식을 들여다보는 때는 수없이 많을 텐데요. 그 순간에도 현장의 감동을 느낄 수 있다면 얼마나 좋을까요?<br/><br/>
                            다행히도 에이치로드는 누구보다 현장을 잘 이해하고 감동의 포인트를 잘 이해하고 있습니다. 그렇기에 센스있는 촬영으로 웨딩을 가장 잘 담아낼 수 있는 것이죠. 여러분들이 결혼식의 촬영팀을 고려하고 있다면 에이치로드가 정답입니다.<br/><br/>
                            저희는 웨딩의 시작단계에서 마무리까지 놓치지 않고 촬영을 진행합니다. 그리고 신랑신부님들이 꼭 기억하고 싶은 순간을 잘 이해하고 기록합니다. 이후에도 영상을 보기만 해도 그 날의 감동이 느껴지도록 말이죠.<br/><br/>
                            인생에서 단 한 번 뿐인 웨딩의 순간, 놓치고 싶지 않으신가요? 저희 에이치로드에게 맡겨보시는 건 어떠실까요. 저희가 감동적인 포인트를 놓치지 않고 촬영하겠습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}