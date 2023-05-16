import { useEffect, useState } from 'react';
import './../App.css';

function Component5(){


    useEffect(() => {
        return () => {
        };
    }, [])

    return (
        <>
            <div className='content5'>
                <div className='content5__container'>
                    <div>
                        상호명 : 우수히뷰티 | USUHI BEAUTY <br></br><br></br>
                        대표자 : 최우경<br></br><br></br>
                        사업자등록번호 : 225-35-01143
                    </div>
                    <div>
                        소재지 : 제주도 제주시 인다2길 8-2, 101호<br></br><br></br>
                        전화번호 : 010.9187.0291<br></br><br></br>
                        © 2023 USUHIBEAUTY All rights reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component5