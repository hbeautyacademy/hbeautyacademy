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
                        <li className='detail-page__btn-home'><a href='/'>
                            <span class="material-symbols-outlined">
                                    home
                            </span>
                        </a></li>
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

                    <div className='reason__con'>
                        <img src="/img/test11.jpg" className='img-it' />
                        <ul className='reason__box-con'>
                            <li className='reason__box-item'>
                                <div className='reason__box-txt01'>1.</div>
                                <div className='reason__box-txt02'>진정성있게 준비해요</div>
                                <div className='reason__box-txt03'>저희는 결혼식의 소중한 의미를 알고 있어요. 신랑신부님의 기대감을 알기에, 고객님을 향한 진심을 담아서 정성스레 준비합니다.</div>
                            </li>
                            <li className='reason__box-item'>
                                <div className='reason__box-txt01'>2.</div>
                                <div className='reason__box-txt02'>실력이 남달라요</div>
                                <div className='reason__box-txt03'>지금까지 에이치로드는 수많은 축하를 드려왔어요. 저희는 풍부한 경험을 바탕으로 최고의 결과를 연출한답니다.</div>
                            </li>
                            <li className='reason__box-item'>
                                <div className='reason__box-txt01'>3.</div>
                                <div className='reason__box-txt02'>감동적인 후기가 있어요</div>
                                <div className='reason__box-txt03'>단순한 홍보글이 아니라 고객의 만족이 있는 업체를 선택하세요. 저희를 만난 신랑신부님들은 만족을 하시고 지인에게 소개하고 계세요.</div>
                            </li>
                        </ul>
                    </div>
                    
                    
                    
                </div>
            </div>
        </>
    )
}
