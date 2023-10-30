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
                            <a>이벤트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
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
                        <div className='detail-page__title-main'>이벤트</div>
                        <div className='detail-page__title-sub'>상대를 위한 이벤트가 필요할 때</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con'>
                        <img src='/img/ourservice_event.jpg' />
                        <div className='service__txt'>
                            프로포즈에서부터 생일의 서프라이즈까지. 연인간에는 때마다 이벤트가 필요할 때가 있습니다. 하지만 이것을 두고 어떻게 할지 고민하는 데에는 많은 어려움이 따를 수밖에 없습니다.<br/><br/>
                            때로는 나의 이벤트를 함께 고민해줄 사람이 있다면 얼마나 좋을까 생각하게 되곤 하죠. 에이치로드 엔터에인먼트는 이벤트에 최적화된 회사입니다. 저희는 수많은 경험을 바탕으로 가장 감동적인 순간을 연출해드립니다.<br/><br/>
                            일단 여러분의 이야기를 들려주세요. 저희는 고객님께 경청하면서 최고의 스토리를 만들어드리겠습니다. 상대방이 가장 감동받을 수 있는 이벤트를 A to Z까지 기획해드립니다.<br/><br/>
                            또한 에이치로드에서는 다양한 퍼포먼스 팀까지 지원을 해드릴 수 있습니다. 댄스와 음악이 필요하다면 모두 가능하니 언제든 편하게 말씀해주세요. 이벤트의 규모는 반드시 클 필요는 없습니다. 작은 계획부터 큰 이벤트까지 모두 문의가능합니다.</div>
                    </div>
                </div>
            </div>
        </>
    )
}