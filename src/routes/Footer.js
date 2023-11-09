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
                    <div className='footer__logo'>CORES</div>
                    <div className='footer__txt-con'>
                        <div className='footer__txt01'>
                            상호 : 포트폴리오01 입니다 | 사업장소재지 : ㅇㅇ시 | 대표자명 : 김ㅇㅇ
                        <br/>
                            사업자등록번호 : 000-00-00000
                        <br/>
                            상담번호 : 카톡링크 참조
                        <br/>
                        </div>
                        <div className='footer__txt02'>
                            <span>©</span> ㅇㅇㅇ. All Rights Reserved.
                        </div>
                    </div>
                    
                    <div className='footer__law-con'>
                        <a href={process.env.PUBLIC_URL + '/license'}>오픈소스 라이선스</a>
                    </div>
                </div>
            </div>
        </>
    )
}