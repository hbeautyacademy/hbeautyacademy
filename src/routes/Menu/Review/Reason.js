import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Reason(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }

    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{background: 'url(/img/test02.jpg)'}}>
                    <div>REVIEW</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'>
                            <a href='/'>
                                <img src= '/icons/home.svg' decoding="async"/>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>REVIEW</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>감동의이유&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/review/reason'>감동의이유</a></li>
                                <li><a href='/review/review'>후기모음</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>감동의이유</div>
                        <div className='detail-page__title-sub'>진정성과 실력있는 퍼포먼스</div>
                        <div className='txt-line'></div>
                    </div>

                    <div className='reason__con fade-in-self'>
                        <img src="/img/img04.jpg" className='img-it' />
                        <ul className='reason__box-con'>
                            <li className='reason__box-item'>
                                <div className='reason__box-txt01'>1.</div>
                                <div className='reason__box-txt02'>진정성있게 제작해요</div>
                                <div className='reason__box-txt03'>저희는 하나의 홈페이지를 정성스럽게 제작해요. 디자인부터 기획 개발까지, 고객님이 만족할만큼 최고의 결과물을 만듭니다.</div>
                            </li>
                            <li className='reason__box-item'>
                                <div className='reason__box-txt01'>2.</div>
                                <div className='reason__box-txt02'>실력이 뛰어나요</div>
                                <div className='reason__box-txt03'>지금까지 코어스는 수많은 홈페이지를 제작했어요. 저희는 풍부한 노하우를 담아서 개발을 진행합니다.</div>
                            </li>
                            <li className='reason__box-item'>
                                <div className='reason__box-txt01'>3.</div>
                                <div className='reason__box-txt02'>감동적인 후기가 있어요</div>
                                <div className='reason__box-txt03'>단순한 홍보글이 아니라 고객의 만족이 있는 업체를 선택하세요. 저희를 만난 고객님들은 만족을 하시고 지인에게 소개하고 계세요.</div>
                            </li>
                        </ul>
                    </div>
                    
                    
                    
                </div>
            </div>
        </>
    )
}
