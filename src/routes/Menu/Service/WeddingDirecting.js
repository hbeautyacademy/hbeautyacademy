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
                            <a>컨셉디렉팅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
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
                        <div className='detail-page__title-main'>컨셉디렉팅</div>
                        <div className='detail-page__title-sub'>나만의 결혼식을 연출해보세요</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <div className='service__con'>
                        <img src='/img/ourservice_concept.jpg' />
                        <div className='service__txt'>
                            신랑신부님들 중에는 자신만의 결혼식을 만듦고 싶어하는 분들이 계십니다. 특히나 요즘에는 더욱 개성있는 웨딩을 연출하기 위해서 다양한 아이디어를 떠올리게 되죠. 이때 전문가와 함께한다면 더욱 풍성해집니다.<br/><br/>
                            정형화 되어있는 결혼식의 순서와 구성을 바꾸고 싶으시다고요? 그럼 에이치로드를 잘 찾아오셨습니다. 저희는 신랑신부님의 개성에 가장 알맞는 컨셉을 구상해드립니다. 맨처음 등장에서부터 마무리 퇴장까지 나만의 웨딩을 만들어보세요.<br/><br/>
                            어떻게 처음부터 기획해야할지 막막하다면 일단 편하게 연락해주세요. 저희는 일단 고객님이 원하시는 컨셉을 이해하고자 노력합니다. 자신에게 가장 알맞는 구성이야말로 최고의 결혼식이 되기 때문이죠.<br/><br/>
                            감각적이고 개성있는 컨셉을 에이치로드와 기획해보세요. 시간이 지나도 후회없는 결혼식이 되도록 함께하겠습니다. 전국 어디든 저희는 신랑신부님을 위해 달려가겠습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}