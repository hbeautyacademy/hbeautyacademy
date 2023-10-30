import { useEffect, useState } from 'react';
import './../../../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';


export default function OurService(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{background: 'url(/img/test05.jpg)'}}>
                    <div>COMPANY</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'><a href='/'>
                            {/* <FontAwesomeIcon icon={faHome} className='manage-sb__icon'/> */}
                            </a></li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>COMPANY</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>서비스안내&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/company/introduction'>회사소개</a></li>
                                <li><a href='/company/ourservice'>서비스안내</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>서비스안내</div>
                        <div className='detail-page__title-sub'>에이치로드는 전문적으로 연출합니다</div>
                        <div className='txt-line'></div>
                    </div>
                    
                    <ul className='ourservice__img-con'>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/ourservice_wedding.jpg)'}}>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/weddingsong'>감동축가</a>
                            </div>
                        </li>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/ourservice_mic.jpg)'}}>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/weddingmc'>센스사회</a>
                            </div>
                        </li>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/ourservice_camera.jpg)'}}>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/weddingcamera'>현장촬영</a>
                            </div>
                        </li>
                        <li className='ourservice__img-item' style={{backgroundImage:'url(/img/ourservice_concept.jpg)'}}>
                            <div className='ourservice__img-txt-con'>
                                <a href='/service/weddingdirecting'>컨셉 컨설팅</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}