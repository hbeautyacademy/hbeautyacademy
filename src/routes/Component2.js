import { useEffect, useState } from 'react';
import './../App.css';

function Component2(){
    const [brandText, setBrandText] = useState(null);


    let checkerBrandTxt = false; // 이벤트 중복을 막기위한 체커
    const moveBrandTxt = () => { 
        const targetTop = document.querySelector('.intro-brand__txt-con').offsetTop; // 이벤트 대상의 scrollTop 위치
        if (window.scrollY > targetTop + 800 && checkerBrandTxt == false) {
            setBrandText(true);
            checkerBrandTxt = true;
            console.log('1231231')
        } else if (window.scrollY < targetTop + 700 && checkerBrandTxt == true) {           
            setBrandText(null);
            checkerBrandTxt = false;
        }
    };

// 11



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
        let timer = setInterval(()=>{window.addEventListener('scroll', moveBrandTxt);}, 100)

        let timer1 = setInterval(()=>{window.addEventListener('scroll', handleScroll1);}, 100)
        // let timer2 = setInterval(()=>{window.addEventListener('scroll', handleScroll2);}, 100)
        let timer3_1 = setInterval(()=>{window.addEventListener('scroll', cardScroll1);}, 100)        
        let timer3_2 = setInterval(()=>{window.addEventListener('scroll', cardScroll2);}, 100)        
        let timer3_3 = setInterval(()=>{window.addEventListener('scroll', cardEnd);}, 100)        
        // let timer3_3 = setInterval(()=>{window.addEventListener('scroll', cardScroll3);}, 100)        
        return () => {
            clearInterval(timer1, timer3_1, timer3_2, timer3_3);
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
        if (window.scrollY > 280 && count == false) {
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
            {/* {window.addEventListener('scroll', function(){
                console.log(window.scrollY);
            })} */}

            <div className={'intro-brand up--start ' + fade}>
                <div className='intro-brand__con'>
                    <div className='intro-brand__txt-con' style={{
                    opacity: brandText ? '0' : '1',
                    height: brandText ? '0' : '350px'
                    }}>
                            <span className='intro-brand__txt-title'>차별화된 홈페이지, 위더스를 소개합니다</span>
                            <span className='intro-brand__txt-sub'>자신만의 홈페이지를 만들기 위해 알아보고 계신가요?&nbsp;&nbsp;원하는 성과를 내기 위해서는 제대로된 회사를 만나야합니다. 홈페이지는 단순히 업체를 소개하는 용도가 아니라 광고효과까지 있어야 하는데요. 저희는 오랜 마케팅 경험을 바탕으로 매출에 도움이 되는 홈페이지를 직접 개발해서 만듭니다. </span>

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