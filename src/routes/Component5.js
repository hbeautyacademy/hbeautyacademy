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
                        상호명 : 네일을담다 | NAIL DAMDA <br></br><br></br>
                        대표자 : 김태호<br></br><br></br>
                        사업자등록번호 : 777-22-01377
                    </div>
                    <div>
                        소재지 : 서울 강동구 올림픽로71길 18-16 1층 101호<br></br><br></br>
                        전화번호 : 010.8550.6957<br></br><br></br>
                        © 2023 NAIL DAMDA All rights reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component5