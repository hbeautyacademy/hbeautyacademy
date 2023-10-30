import { useEffect } from 'react';
import './../App.css';

export default function Footer(){

    useEffect(() => {
        return () => {
        };
    }, [])

    return(
        <>
            <div className='footer'>
                <div className='footer__con'>
                    <div className='footer__logo'>WITHUS</div>
                    <div className='footer__txt-con'>
                        <div className='footer__txt01'>
                            상호 : 위더스 | 사업장소재지 : 서울시 강남구 선릉로127길 5-6, 2층 2018호 | 대표자명 : 김상우
                        <br/>
                            사업자등록번호 508-17-01457
                        <br/>
                            상담번호: 카톡링크 참조
                        <br/>
                        </div>
                    </div>
                    <div className='footer__txt02'>
                        <span>©</span> 위더스. All Rights Reserved.
                    </div>
                </div>
            </div>
        </>
    )
}