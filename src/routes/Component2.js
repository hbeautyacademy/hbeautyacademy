import { useEffect, useState } from 'react';
import {useScroll} from '../components/useScroll/useScroll';
import {scrollTarget} from '../components/useScroll/scrollTarget';
import './../App.css';


function Component2(){

    // [event] 브랜드 설명 부분에 브랜드를 타이핑
    const typingTextData = [
        '위더스' + '  ', // 마지막에 띄어쓰기 2번 이상하면 그만큼 완성단어를 오래 보여줌
        'WITHUS' + '  '
    ]
    let [typingTxt, setTypingTxt] = useState('')
    let i = 0; // 함수 반복횟수
    let j = 0; // textData 배열 순서
    let txt = ''; // HTML에 입력될 내용
    const typing = () => {
        if (i < typingTextData[j].length) { // 해당 문자가 조합되기 전
            const string = typingTextData[j][i++]
            setTypingTxt(txt);
            txt = txt + string;
        } else { // 해당 문자가 조합된 후
            setTypingTxt(txt);
            // txt = ''; // 제거 옵션1. 한번에 지워지게
            txt = txt.slice(0, -1); // 제거 옵션2. 한글자씩 지워지게
            if (txt.length == 0) { // 텍스트 내용이 모두 사라진 경우
                i = 0; 
                if (j == 0) {
                    j = 1; // 배열 순서 변경
                } else {
                    j = 0;
                }
            }
        }
    }


    // // 브랜드 설명 부분까지 스크롤하면 롤업하며 사라지는 효과
    // const [brandText, setBrandText] = useState(null);
    // let checkerBrandTxt = false; // 이벤트 중복을 막기위한 체커
    // const moveBrandTxt = () => { 
    //     const targetTop = document.querySelector('.intro-brand__box').offsetTop; // 이벤트 대상의 scrollTop 위치
    //     if (window.scrollY > targetTop + 800 && checkerBrandTxt == false) {
    //         setBrandText(true);
    //         checkerBrandTxt = true;
    //     } else if (window.scrollY < targetTop + 800 && checkerBrandTxt == true) {           
    //         setBrandText(null);
    //         checkerBrandTxt = false;
    //     }
    // };


    useEffect(() => {
        const timer_typing = setInterval(typing, 150);        
        // const timer_moveBrandTxt = setInterval(()=>{window.addEventListener('scroll', moveBrandTxt);}, 100);

        return () => {
            clearInterval(timer_typing);
        };
    }, [])



    return (
        <>  
            <div className= 'intro-brand'>
                <div className='intro-brand__con'>
                    <div className='intro-brand__txt-con' style={{
                    // opacity: brandText ? '0' : '1',
                    // height: brandText ? '0' : '350px'
                    }}>
                        <div className={`intro-brand__triangle up--start  + ${useScroll('.intro-brand__triangle').isShow ? 'up--end1' : ''}`}></div>
                        <span className={`intro-brand__txt-title up--start  + ${useScroll('.intro-brand__triangle').isShow ? 'up--end1' : ''}`}>
                            차별화된 개발팀, <span className='typing-txt' dangerouslySetInnerHTML={{__html: typingTxt}}></span>를 소개합니다
                        </span>
                        <span className={`intro-brand__txt-sub up--start  + ${useScroll('.intro-brand__txt-sub').isShow ? 'up--end1' : ''}`}>홈페이지는 단순히 명함의 역할을 넘어서 <span>매출을 상승시키는 광고효과</span>까지 있어야 합니다. 그렇기에 제대로된 제작사를 만나야 하죠. 저희는 마케팅 경험을 바탕으로 사업에 도움이 되는 홈페이지를 <span>직접 개발해서 제작</span>합니다.</span>
                    </div>

                </div>                
                <div className='intro-brand__img-wrap'>
                        <div className={`intro-brand__img fade-in00  + ${useScroll('.intro-brand__img-wrap').isShow ? 'fade-in01' : ''}`}
                         style={{backgroundImage: 'url(/img/it05.jpg)',
                         backgroundPositionY: (480 + useScroll('.intro-brand__img').stateY * 0.9) + 'px' 
                         }}></div>
                </div>
            </div>
        </>
    )
}

export default Component2