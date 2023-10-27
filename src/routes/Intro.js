import { useEffect, useState } from 'react';
import {useScroll} from '../components/useScroll/useScroll';
import './../App.css';


export default function Intro(){

    console.log(useScroll('.intro-detail__content-txt-item').stateY)

    // 인트로 스포트라이트 부분 텍스트 효과
    const [spotText, setSpotText] = useState(null);
    const spotTextData = [
        'GO  FURTHER,',
        'WITHUS',
        ''
    ]
    const lengthTextSub01 = spotTextData[0].split("").length; // 첫째줄까지 길이
    const lengthTextSub02 = lengthTextSub01 + spotTextData[1].split("").length; // 둘째줄 길이
    const lengthTextSub03 = lengthTextSub02 + spotTextData[1].split("").length; // 둘째줄 길이
    const moveSpotText = () => {
        setSpotText(!spotText);
    };
    useEffect(() => {
        let timer = setTimeout(()=>{moveSpotText()}, 1000);
        return () => {
            // 
            clearTimeout(timer);
        };
        }, [])

    
    // ------------------------------------------------------------------
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
    useEffect(() => {
        const timer_typing = setInterval(typing, 150);        
        // const timer_moveBrandTxt = setInterval(()=>{window.addEventListener('scroll', moveBrandTxt);}, 100);
        return () => {
            clearInterval(timer_typing);
        };
    }, [])


    // -----------------------------------------------------------------------

    
    
    return (
        <>
            <div className='intro-spot' style={{backgroundImage: 'url(/img/it02.jpg)'}}>
                <div className='intro-spot__con'>

                    <div className='intro-spot__bg-gray' style={{backgroundColor:'rgb(0,0,0,0.6)'}}></div>
                    
                    <div className='intro-spot__txt-con'>
                        <div className='intro-spot__txt-sub01'>
                            {
                                spotTextData[0].split("").map((a, i) => {
                                    return <SpotTextItem a={a} i={i}spotText={spotText} />
                                })
                            }
                        </div>
                        <div className='intro-spot__txt-sub02'>
                            {
                                spotTextData[1].split("").map((a, i) => {
                                    return <SpotTextItem a={a} i={i + lengthTextSub01} spotText={spotText} />
                                })
                            }
                        </div>
                        <div className='intro-spot__txt-title'>
                            <span style={{
                            transform : spotText ? 'translateY(0)' : 'translateY(1.2em',
                            transition: `all 1s ${(lengthTextSub02 * 0.03 + 0.8)}s cubic-bezier(0, 0, 0.17, 0.93)`}}>
                                {spotTextData[2]}</span>
                        </div>
                    </div>
                    
                    <div class="intro-spot__scroll" style={{
                    opacity: spotText ? '1' : '0',
                    transition: `all 1s ${(lengthTextSub03 * 0.03 + 0.3)}s cubic-bezier(0, 0, 0.17, 0.93)`
                    }}></div>

                    {/* <div className='intro-spot__arrow'>
                        <img src={arrow} width='50' height='50' alt='arrow'/>
                    </div> */}
                </div>
            </div>

            <div className= 'intro-brand'>
                <div className='intro-brand__con'>
                    <div className='intro-brand__txt-con' style={{
                    // opacity: brandText ? '0' : '1',
                    // height: brandText ? '0' : '350px'
                    }}>
                        <div className={`intro-brand__triangle up--start  + ${useScroll('.intro-brand__triangle', 0.90).isShow ? 'up--end1' : ''}`}></div>
                        <span className={`intro-brand__txt-title up--start  + ${useScroll('.intro-brand__triangle', 0.90).isShow ? 'up--end1' : ''}`}>
                            &nbsp;안녕하세요, <span className='typing-txt' dangerouslySetInnerHTML={{__html: typingTxt}}></span>를 소개합니다
                        </span>
                        <span className={`intro-brand__txt-sub up--start  + ${useScroll('.intro-brand__txt-sub', 0.90).isShow ? 'up--end1' : ''}`}>지금 홈페이지를 알아보고 계신가요? 이것은 단순한 명함의 역할을 넘어서 <span>매출을 상승시키는 광고효과</span>까지 있어야 합니다. 그렇기에 제대로된 제작사를 만나는 것은 정말로 중요하죠. 저희는 마케팅 경험을 바탕으로 사업에 도움이 되는 홈페이지를 <span> 개발해서 제작</span>합니다.</span>
                    </div>

                </div>
                <div className='intro-brand__img-wrap'>
                        <div className={`intro-brand__img fade-in00  + ${useScroll('.intro-brand__img-wrap', 0.85).isShow ? 'fade-in01' : ''}`}
                         style={{backgroundImage: 'url(/img/it05.jpg)',
                         backgroundPositionY: (500 + useScroll('.intro-brand__img', 0.90).stateY * 0.85) + 'px' 
                         }}></div>
                </div>
            </div>
            <div className='intro-detail'>
                <div className='intro-detail__con'>
                    <div className='intro-detail__header-con'>
                        <div className={`intro-detail__header-txt up--start  + ${useScroll('.intro-detail__header-txt', 0.90).isShow ? 'up--end1' : ''}`}>
                            왜 우리에게 웹사이트를<br/>맡겨야 할까요?
                        </div>
                    </div>
                    <div className='intro-detail__content-con'>
                         <div className='intro-detail__content-txt'>
                            <div className={`intro-detail__content-txt-item + ${useScroll('.intro-detail__content-txt-item:nth-child(1)', 0.65).isShow ? 'opacity-1' : ''} + ${useScroll('.intro-detail__content-txt-item:nth-child(1)', 0.3).isShow ? 'opacity-point3' : ''}`}
                            >
                                <div className='intro-detail__content-txt-title'>
                                    소비자의 마음을 움직이다
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    위더스는 소비자의 입장에서 홈페이지를 구상합니다. 나의 사업 매출에 직접적으로 도움이되는 결과물을 만들기 위해 노력합니다.
                                </div>
                                <div className='arrow'></div>
                            </div>
                            <div className={`intro-detail__content-txt-item + ${useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.65).isShow ? 'opacity-1' : ''} + ${useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.3).isShow ? 'opacity-point3' : ''}`}>
                                <div className='intro-detail__content-txt-title'>
                                    빠른 제작, 완성도 높은 결과
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    전문 개발팀이 결과물을 빠르게 만들면서도 퀄리티 있게 제작합니다.
                                </div>
                            </div>
                            <div className={`intro-detail__content-txt-item + ${useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.65).isShow ? 'opacity-1' : ''} + ${useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.3).isShow ? 'opacity-point3' : ''}`}>
                                <div className='intro-detail__content-txt-title'>
                                    꼼꼼한 유지보수 시스템
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    홈페이지는 만들어진 뒤가 중요합니다. 우리는 꼼꼼한 유지보수 시스템으로 사이트가 문제없이 운영되도록 노력합니다.
                                </div>
                            </div>
                            <div className={`intro-detail__content-txt-item + ${useScroll('.intro-detail__content-txt-item:nth-child(4)', 0.65).isShow ? 'opacity-1' : ''} + ${useScroll('.intro-detail__content-txt-item:nth-child(4)', 0.3).isShow ? 'opacity-point3' : ''}`}>
                                <div className='intro-detail__content-txt-title'>
                                    업종에 최적화된 홈페이지
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    의뢰인의 업종을 이해하고 사업에 적합한 사이트를 구상합니다.
                                </div>
                            </div>
                            {/* <div className='intro-detail__content-more'><a>+&nbsp;MORE</a></div> */}
                         </div>
                         <div className='intro-detail__content-img-con'>
                            <div className='intro-detail__triangle'></div>
                            <div className='intro-detail__content-img'>
                                <img src= './img/it12.jpg' decoding="async"/>
                                <img src= {useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.65).isShow ? './img/it14.jpg' : ''} decoding="async"
                                style={{opacity: useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.65).isShow ? './img/it08.jpg' : ''} decoding="async"
                                style={{opacity: useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.intro-detail__content-txt-item:nth-child(4)', 0.65).isShow ? './img/it07.jpg' : ''} decoding="async"
                                style={{opacity: useScroll('.intro-detail__content-txt-item:nth-child(4)', 0.65).isShow ? '1' : '0'}}
                                />
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div className='intro-pf'>
                <div className='intro-pf__con'>
                    <div className={`intro-pf__title + up--start  + ${useScroll('.intro-pf__title', 0.90).isShow ? 'up--end1' : ''}`}>
                        감각적인 디자인의<br/>
                        홈페이지를 만나세요.
                    </div>
                    <ul className='intro-pf__grid-con'>
                        {
                            [1,2,3,4,5,6].map((a, i) => {
                                return <GridItem a={a} i={i} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}


function SpotTextItem(props){    

    return (
        <>
            <span style={{
            transform: props.spotText ? 'translateY(0)' : 'translateY(1.2em)',
            transition: `all 0.8s ${(props.i * 0.03)}s cubic-bezier(0, 0, 0.17, 0.93)`}}>
                {props.a == ' ' ? <span>&nbsp;</span> : props.a}
            </span>
        </>
    )
}

function GridItem(props){
    return (
        <>
            <li className={`intro-pf__grid-item up--start + ${useScroll('.intro-pf__grid-item', 0.90).isShow ? 'up--end1' : ''}`}
                style={{marginTop: (props.i * 100) + 'px', transitionDelay: (props.i * 0.1) + 's'}}
                >
                <img className='intro-pf__box-img' src= {`./img/it0${props.i + 1}.jpg`} decoding="async"/><img />
                <div className='intro-pf__grid-title'>포트폴리오 홈페이지</div>
                <div className='intro-pf__grid-sub'>강렬한 색감에 동적인 기능을 추가하여 유저의 반응도를 높인 사례</div>
            </li>
        </>
    )
}