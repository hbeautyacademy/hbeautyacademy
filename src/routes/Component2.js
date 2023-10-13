import { useEffect, useState } from 'react';
import './../App.css';

function Component2(){
    const [brandText, setBrandText] = useState(null);

    // 브랜드 설명 부분에 브랜드를 타이핑해주는 효과
    const typingTextData = [
        '위더스',
        'WITHUS'
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

    // 브랜드 설명 부분까지 스크롤하면 롤업하며 사라지는 효과
    let checkerBrandTxt = false; // 이벤트 중복을 막기위한 체커
    const moveBrandTxt = () => { 
        const targetTop = document.querySelector('.intro-brand__txt-con').offsetTop; // 이벤트 대상의 scrollTop 위치
        if (window.scrollY > targetTop + 800 && checkerBrandTxt == false) {
            setBrandText(true);
            checkerBrandTxt = true;
        } else if (window.scrollY < targetTop + 700 && checkerBrandTxt == true) {           
            setBrandText(null);
            checkerBrandTxt = false;
        }
    };





 



    let [fade, setFade] = useState('');
    let [back, setBack] = useState(0);
    let [card1_1, setCard1_1] = useState(1);
    let [card1_2, setCard1_2] = useState(1);
    let [card2_1, setCard2_1] = useState(1);
    let [card2_2, setCard2_2] = useState(1);
    let [card3_1, setCard3_1] = useState(1);
    let [card3_2, setCard3_2] = useState(1);

    // 카드 조절 시작점, 종료지점
    let [start1X, end1X] = [1450, 1650];
    let [start2X, end2X] = [2100, 2300];
    // let [start3X, end3X] = [2600, 2800];


    useEffect(() => {
        const timer_moveBrandTxt = setInterval(()=>{window.addEventListener('scroll', moveBrandTxt);}, 100)
        const timer_typing = setInterval(typing, 250)

        let timer1 = setInterval(()=>{window.addEventListener('scroll', handleScroll1);}, 100)
        // let timer2 = setInterval(()=>{window.addEventListener('scroll', handleScroll2);}, 100)
        let timer3_1 = setInterval(()=>{window.addEventListener('scroll', cardScroll1);}, 100)        
        let timer3_2 = setInterval(()=>{window.addEventListener('scroll', cardScroll2);}, 100)        
        let timer3_3 = setInterval(()=>{window.addEventListener('scroll', cardEnd);}, 100)        
        // let timer3_3 = setInterval(()=>{window.addEventListener('scroll', cardScroll3);}, 100)        
        return () => {
            clearInterval(timer_typing, timer1, timer3_1, timer3_2, timer3_3);
            window.removeEventListener('scroll', handleScroll1);
            // window.removeEventListener('scroll', handleScroll2);
            window.removeEventListener('scroll', cardScroll1);
            window.removeEventListener('scroll', cardScroll2);
            window.removeEventListener('scroll', cardEnd);
            // window.removeEventListener('scroll', cardScroll3);
        };
    }, [fade])

    // 멘트 팝업
    const handleScroll1 = () => {
        let count = false;
        if (window.scrollY > 350 && count == false) {
            setFade('up--end2');
            count = true;
            // console.log('scrolled');
    }
    };

    // // 배경 투명도 조절
    // const handleScroll2 = () => {
    //     let startX = 750;
    //     let endX = 950;
    //     let opacity = 0.04;
    //     let y = (opacity / (endX - startX)) * window.scrollY - ((startX * opacity) / (endX - startX))
    //     if (window.scrollY < endX) {
    //         setBack(y);
    //     }
    // };

    // 카드 투명도 & 크기 조절
    const cardScroll1 = () => {
        let a = start1X;
        let b = end1X;
        let y1 = (-1/(b - a)) * window.scrollY + (1 + (1 * a)/(b - a));
        let y2 = (-0.1/(b - a)) * window.scrollY + (1 + (0.1 * a)/(b-a));

        if (a < window.scrollY && window.scrollY < b){
            setCard1_1(y1);
            setCard1_2(y2);
        }
    };
    const cardScroll2 = () => {
        let a = start2X;
        let b = end2X;
        let y1 = (-1/(b - a)) * window.scrollY + (1 + (1 * a)/(b - a));
        let y2 = (-0.1/(b - a)) * window.scrollY + (1 + (0.1 * a)/(b-a));

        if (a < window.scrollY && window.scrollY < b){
            setCard2_1(y1);
            setCard2_2(y2);
        }
    };
    const cardEnd = () => {
        let b = end2X;
        if (window.scrollY > b + 50){
            setCard2_1(1);
            setCard2_2(1);
        }
    };

    // const cardScroll3 = () => {
    //     let a = start3X;
    //     let b = end3X;
    //     let y1 = (-1/(b - a)) * window.scrollY + (1 + (1 * a)/(b - a));
    //     let y2 = (-0.1/(b - a)) * window.scrollY + (1 + (0.1 * a)/(b-a));

    //     if (a < window.scrollY && window.scrollY < b){
    //         setCard3_1(y1);
    //         setCard3_2(y2);
    //     }
    // };





    return (
        <>  
            <div className={'intro-brand up--start ' + fade}>
                <div className='intro-brand__con'>
                    <div className='intro-brand__txt-con' style={{
                    // opacity: brandText ? '0' : '1',
                    // height: brandText ? '0' : '350px'
                    }}>
                            <span className='intro-brand__txt-title'>
                                차별화된 개발팀, <span className='typing-txt' dangerouslySetInnerHTML={{__html: typingTxt}}></span>를 소개합니다
                            </span>
                            <span className='intro-brand__txt-sub'>홈페이지를 알아보고 계신가요?&nbsp;&nbsp;이것은 단지 명함의 역할을 넘어서 <span>매출을 상승시키는 광고효과</span>까지 있어야 합니다. 그렇기에 제대로된 제작사를 만나야 하는데요. 저희는 마케팅 경험을 바탕으로 사업에 도움이 되는 홈페이지를 <span>직접 개발해서 제작</span>합니다.</span>

                    </div>
                    <div className='intro-brand__box sticky' style={{opacity: card1_1, transform: `scale(${card1_2})`}}>
                        {/* 사진에는 얼굴이 들어갈 것! (쏘카 참고) */}
                        <div></div>
                        <div>
                            <div className='intro-brand__pc-text'>
                                <span>맞춤형 시술</span><br></br><br></br>
                                <span>눈매를 돋보이게 하는<br></br><span>맞춤형 시술</span>을 진행해요.</span>
                            </div>
                            <div className='intro-brand__mobile-text'>
                                <span>맞춤형 시술</span><br></br><br></br><br></br>
                                <span>눈매를 돋보이는<br></br><span>맞춤형 시술</span>을 진행해요.</span>
                            </div>                            
                        </div>
                    </div>
                    <div className='intro-brand__box sticky' style={{opacity: card2_1, transform: `scale(${card2_2})`}}>
                        <div></div>
                        <div>
                            <div className='intro-brand__pc-text'>
                                <span>꼼꼼한 케어</span><br></br><br></br>
                                <span>충분한 영양 케어로<br></br><span>예쁜 속눈썹</span>을 연출해요.</span>
                            </div>
                            <div className='intro-brand__mobile-text'>
                                <span>꼼꼼한 케어</span><br></br><br></br><br></br>
                                <span>충분한 영양 케어로<br></br><span>예쁜 속눈썹</span>을 연출해요.</span>
                            </div>                            
                        </div>
                    </div>
                    <div className='intro-brand__box sticky'>
                        <div></div>
                        <div>
                            <div className='intro-brand__pc-text'>
                                <span>바쁜 일상, 나를 위해</span><br></br><br></br>
                                <span>담래쉬의 속눈썹펌으로<br></br><span>준비시간</span>을 단축해 보세요.</span>
                            </div>
                            <div className='intro-brand__mobile-text'>
                                <span>바쁜 일상, 나를 위해</span><br></br><br></br><br></br>
                                <span>담래쉬의 속눈썹펌으로<br></br><span>준비시간</span>을 단축해 보세요.</span>
                            </div>                    
                        </div>
                    </div>
                </div>                    
            </div>
        </>
    )
}

export default Component2