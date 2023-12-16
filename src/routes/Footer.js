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
                    <div className='footer__logo'>H Beauty Academy</div>
                    <div className='footer__txt-con'>
                        <div className='footer__txt01'>
                            상호 : 에이치 뷰티 아카데미 | 사업장소재지 : 경기도 오산시 오산동 882-2번지 2층 | 대표자명 : 조혜련
                        <br/>
                            사업자등록번호 : 606-95-68634
                        <br/>
                            상담번호 : 031-378-7415
                        <br/>
                        </div>
                        <div className='footer__txt02'>
                            <span>©</span> H beauty academy. All Rights Reserved.
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