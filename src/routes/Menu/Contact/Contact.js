import { useEffect, useState } from 'react';
import './../../../App.css';

export default function Contact(){
    const [clickBtn, setClickBtn] = useState(false);
    const showList = () => {
        setClickBtn(!clickBtn);
    }


    // api 연동 (contact-us email 전송)

    // 약관동의내역
    const data = [
        {
          id: 0,
          title: '개인정보 수집 및 이용 동의'
        }
    ]

    // 약관 체크된 내용
    const [checkItems, setCheckItems] = useState([]);

    // 약관 개별 동의
    const selectChecked = (checked, id) => {
        if (checked) {
          setCheckItems(item => [...item, id]); // 기존 state 내용(item)에 새로운 내용(id)을 추가하는 방식
        } else {
          setCheckItems(checkItems.filter((el) => el !== id));
        }
    };



    return(
        <>
            <div className='detail-page'>
                <div className='detail-page__banner-con' style={{background: 'url(/img/test16.jpg)'}}>
                    <div>CONTACT</div>
                </div>

                <div className='detail-page__btn'>
                    <ul className='detail-page__btn-con'>
                        <li className='detail-page__btn-home'><a href='/'>
                            <span class="material-symbols-outlined">
                                home
                            </span>
                        </a></li>
                        {/* 현재 페이지 메인메뉴 */}
                        <li className='detail-page__btn-menu'><a>CONTACT</a></li>
                        <li className={`detail-page__btn-submenu + ${ clickBtn ? 'overflow-visible' : ''}`} onClick={showList}>
                            {/* 현재 페이지 서브메뉴 */}
                            <a>견적받기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8744;</span>
                            </a>
                            <ul>
                                <li><a href='/contact/contact'>견적받기</a></li>
                                <li><a href='https://open.kakao.com/o/sEZYh5Hc'>카톡상담</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='detail-page__con'>
                    <div className='detail-page__title-con'>
                        <div className='detail-page__title-main'>견적받기</div>
                        <div className='detail-page__title-sub'>10초 만에 상담신청하기</div>
                        <div className='txt-line'></div>
                    </div>

                        {/* <div className='txt-line'></div> */}
                        <div className='intro-contact__input-con'  style={{paddingTop: '0'}}>
                            <form name='contact' className='gform' method='POST' target="iframe1" data-email=""
                            
                            // hw. 광고주 계정, api주소로 변경
                            action=''>
                                <li className='intro-contact__input-box'>
                                    <label>
                                        <input
                                            type= 'text'
                                            className='intro-contact__input-item'
                                            placeholder='성함을 입력해주세요'
                                            name='name' // 스프레드시트 소제목과 동일하게
                                        />
                                    </label>
                                </li>
                                <li className='intro-contact__input-box'>
                                    <label>
                                        <input
                                            type= 'text'
                                            className='intro-contact__input-item'
                                            placeholder='전화번호를 입력해주세요'
                                            name='message' // 스프레드시트 소제목과 동일하게
                                        />
                                    </label>
                                </li>
                                <li className='intro-contact__chk-item'>
                                    <label>
                                        <input
                                            type='checkbox'
                                            name='select-checked'
                                            onChange={(e) => selectChecked(e.target.checked, data[0].id)}
                                            checked={checkItems.includes(data[0].id) ? true : false}
                                        />
                                        {/* hw. 이용약관 작성 후 대표 동의받기 */}
                                        <span>개인정보 수집 및 이용 동의&nbsp;&nbsp;&nbsp;&nbsp;(필수)</span>
                                    </label>
                                </li>
                                <li className='intro-contact__input-box intro-contact__txt'>
                                    1. 개인정보 수집 및 이용 목적: 상담 문의 이용 처리<br/>
                                    2. 수집하는 개인정보 항목: 성함, 연락처<br/>
                                    3. 개인정보의 보유 및 이용 기간: 서비스 문의 등록 후 3개월<br/><br/>
                                    ※ 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다.<br/>
                                    다만, 동의가 없을 경우 당사의 [상담 문의하기] 서비스 신청이 불가능할 수도 있음을 알려드립니다.
                                </li>

                                <div className={`intro-contact__btn-submit chk-prev + ${checkItems.includes(0)? 'none' : 'flex'}`}>
                                    상담 신청하기
                                </div>
                                {/* input 태그를 사용함 */}
                                <input type='submit' value='상담 신청하기' className={`intro-contact__btn-submit pointer chk-next + ${checkItems.includes(0)? 'flex' : 'none'}`}
                                onClick={() => {alert('상담 신청이 완료되었습니다. 곧 연락드리겠습니다!')}}
                                />
                            </form>
                            {/* form 전송 후에 json 결과페이지가 뜨는 것을 방지 */}
                            <iframe id="iframe1" name="iframe1" style={{display:'none'}}></iframe>
                        </div>
                </div>
            </div>
        </>
    )
}
