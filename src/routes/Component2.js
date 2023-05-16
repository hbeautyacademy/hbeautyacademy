import { useEffect, useState } from 'react';
import './../App.css';

function Component2(){
    let [fade, setFade] = useState('');
    let [back, setBack] = useState(0);
    let [card1_1, setCard1_1] = useState(1);
    let [card1_2, setCard1_2] = useState(1);
    let [card2_1, setCard2_1] = useState(1);
    let [card2_2, setCard2_2] = useState(1);
    let [card3_1, setCard3_1] = useState(1);
    let [card3_2, setCard3_2] = useState(1);

    // 카드 조절 시작점, 종료지점
    let [start1X, end1X] = [1500, 1700];
    let [start2X, end2X] = [2150, 2350];
    // let [start3X, end3X] = [2600, 2800];


    useEffect(() => {
        let timer1 = setInterval(()=>{window.addEventListener('scroll', handleScroll1);}, 100)
        // let timer2 = setInterval(()=>{window.addEventListener('scroll', handleScroll2);}, 100)
        let timer3_1 = setInterval(()=>{window.addEventListener('scroll', cardScroll1);}, 100)        
        let timer3_2 = setInterval(()=>{window.addEventListener('scroll', cardScroll2);}, 100)        
        // let timer3_3 = setInterval(()=>{window.addEventListener('scroll', cardScroll3);}, 100)        
        return () => {
            clearInterval(timer1, timer3_1, timer3_2);
            window.removeEventListener('scroll', handleScroll1);
            // window.removeEventListener('scroll', handleScroll2);
            window.removeEventListener('scroll', cardScroll1);
            window.removeEventListener('scroll', cardScroll2);
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

            {/* <div className={'back--start'} style={{opacity: back}}></div> */}
            <div className={'content2 up--start ' + fade}>
                <div className='content2__container'>
                    <div className='content2__text'>
                            <span>당신이 <span>우수히</span>를<br></br>만나야하는 이유</span>
                    </div>
                    <div className='content2__box sticky' style={{opacity: card1_1, transform: `scale(${card1_2})`}}>
                        {/* 사진에는 얼굴이 들어갈 것! (쏘카 참고) */}
                        <div></div>
                        <div>
                            <div className='content2__pc-text'>
                                <span>시술이 꼼꼼하니까.</span><br></br><br></br>
                                <span>노하우와 정성을 담아서<br></br><span>깔끔한 시술</span>을 진행합니다</span>
                            </div>
                            <div className='content2__mobile-text'>
                                <span>퀄리티.</span><br></br><br></br><br></br>
                                <span>노하우와 정성을 담아서<br></br><span>깔끔한 시술</span>을 진행해요</span>
                            </div>                            
                        </div>
                    </div>
                    <div className='content2__box sticky' style={{opacity: card2_1, transform: `scale(${card2_2})`}}>
                        <div></div>
                        <div>
                            <div className='content2__pc-text'>
                                <span>가격이 착하니까.</span><br></br><br></br>
                                <span>프리미엄급의 시술을<br></br><span>합리적인 금액</span>으로 받아보세요</span>
                            </div>
                            <div className='content2__mobile-text'>
                                <span>착한 가격.</span><br></br><br></br><br></br>
                                <span>프리미엄급의 왁싱을<br></br><span>가성비있게</span> 만나보세요</span>
                            </div>                            
                        </div>
                    </div>
                    <div className='content2__box sticky'>
                        <div></div>
                        <div>
                            <div className='content2__pc-text'>
                                <span>감동을 전달하니까.</span><br></br><br></br>
                                <span>우수히를 만난 분들은<br></br><span>감동적인 후기</span>를 남긴답니다</span>
                            </div>
                            <div className='content2__mobile-text'>
                                <span>고객 후기.</span><br></br><br></br><br></br>
                                <span>우수히를 만난 분들은<br></br><span>감동적인 후기</span>를 남겨요</span>
                            </div>                    
                        </div>
                    </div>
                </div>                    
            </div>
        </>
    )
}

export default Component2