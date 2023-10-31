import { useEffect, useState } from 'react';
import './../../../App.css';


export default function Introduction(){
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
                        <li className='detail-page__btn-home'>
                            <a href='/'>
                                <span class="material-symbols-outlined">
                                    home
                                </span>
                            </a>
                        </li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>COMPANY</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>회사소개&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/company/introduction'>회사소개</a></li>
                                <li><a href='/company/ourservice'>서비스안내</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='introduction__logo-wrap'>
                        <img src='/img/test_logo.png' />
                    </div>
                    <div className='introduction__txt'>
                        안녕하세요. 웨딩전문 이벤트회사 에이치로드 엔터입니다.<br/><br/>
                        저희는 신랑신부님들께 감동적인 결혼식을 만들어드리도록 다양한 분야에서 최선을 다하고 있습니다. 축가, 사회에서부터 전문촬영, 전체적인 웨딩 컨셉에 대한 컨설팅까지 진행하고 있는데요. 각 분야에 대한 풍부한 경험을 바탕으로 최고의 결혼식을 연출합니다.<br/><br/>
                        그럼 일반적인 웨딩이벤트 회사와 저희는 무엇이 다를까요? 에이치로드는 팀원 모두가 치어리딩 경력이 있다는 특별한 점이 있습니다. 실제로 국내외의 크고 작은 무대에서 관중과 소통하는 실력을 쌓아왔는데요. 이러한 경험이 있기에 어떤 이벤트라도 더욱 진정성 있고 전문적으로 고객님께 다가갈 수 있습니다. 그렇기에 특별한 결혼식을 원하는 분들이라면 편하게 저희에게 문의해주시길 바라겠습니다. 저희 에이치로드는 합리적인 금액과 최고의 실력으로 멋진 결과를 만들어내겠습니다.<br/><br/>
                        지금도 에이치로드를 만난 고객님들은 정성어린 후기를 남겨주고 계십니다. 수많은 리뷰 중에서도 가장 많이 차지하는 내용은 바로 진정성인데요. 저희는 하나의 웨딩을 위해서 혼신을 다해 준비하고 있습니다. 그 결과 신랑신부님들이 100% 만족하는 결과를 만들어 냅니다.<br/><br/>
                        인생에서 한 번 뿐인 소중하고 결혼식, 저희 에이치로드와 더욱 특별하게 연출해보세요. 저희는 신랑신부님께 잊지못할 행복한 시간을 전해드리겠습니다. 감사합니다.
                    </div>

                </div>
            </div>
        </>
    )
}