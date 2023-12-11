import { useEffect, useState } from 'react';
import {useScroll} from '../components/useScroll/useScroll';
import './../App.css';
import axios from 'axios';


export default function Intro(){


    const _id = '656eeb25e27c9004fa1ecf71';
    useEffect(() => {
        const axiosGetAd = () => {
            axios
            .get(`http://0.0.0.0:8000/items/${_id}`)
            .then(response => {
                console.log('success', response);
                // setData(response.data);
            })
            .catch(err => {
                console.log('fail', err);
            })
        }
        axiosGetAd();
    }, [])

    // 인트로 스포트라이트 부분 텍스트 효과
    const [spotText, setSpotText] = useState(null);
    const spotTextData = [
        'GO  FURTHER,',
        'CORES'
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
        '코어스' + '  ', // 마지막에 띄어쓰기 2번 이상하면 그만큼 완성단어를 오래 보여줌
        'CORES' + '  '
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

    // --------------------------------------------------------
    // [event] PC 마우스 스와이핑
    const [startX, setStartX] = useState(null); // 클릭한 시점
    const [lengthX, setLengthX] = useState(null); // 이번에 드래그길이
    const [preLengthX, setPreLengthX] = useState(null) // 지난번 드래그길이
    const [onClick, setOnClick] = useState(false); // 클릭여부

    const mouseDown = (e) => {
        setOnClick(true);
        setStartX(e.clientX);
    }
    const mouseMove = (e) => { 
        let totalLengthX = preLengthX + e.clientX - startX // 최종 드래그길이
        if (onClick == true) { // 이미지가 화면 밖 벗어남 방지
            if (totalLengthX >= 0) {
                totalLengthX = 0
                setPreLengthX(0)
                setLengthX((totalLengthX))    
            }
            else {
                setLengthX(totalLengthX) // 최종 길이가 (-) 이면 0으로 인식
            }
        }
    }
    const mouseUp = (e) => {
        setOnClick(false)
        setPreLengthX(lengthX) // 
    }

    // [event] 모바일 터치 스와이핑
    const touchStart = (e) => {
        setOnClick(true);
        setStartX(e.changedTouches[0].clientX);
    }

    const touchMove = (e) => {
        let totalLengthX = preLengthX + e.changedTouches[0].clientX - startX // 최종 드래그길이
        if (onClick == true) { // 이미지가 화면 밖 벗어남 방지
            if (totalLengthX >= 0) {
                totalLengthX = 0
                setPreLengthX(0)
                setLengthX((totalLengthX))    
            }
            else {
                setLengthX(totalLengthX) // 최종 길이가 (-) 이면 0으로 인식
            }
        }
    }
    const touchEnd = (e) => {
        setOnClick(false)
        setPreLengthX(lengthX) // 
    }

    // ----------------------------------------------------------------------- 
    
    return (
        <>
            <div className='intro-spot' style={{backgroundImage: `url('/img/it02.jpg')`}}>
                <div className='intro-spot__con'>

                    <div className='bg-gray' style={{backgroundColor:'rgb(0,0,0,0.6)'}}></div>
                    
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
                    
                    <div className="intro-spot__scroll" style={{
                    opacity: spotText ? '1' : '0',
                    transition: `all 1s ${(lengthTextSub03 * 0.03 + 0.3)}s cubic-bezier(0, 0, 0.17, 0.93)`
                    }}>
                        <div className='intro-spot__dot'></div>
                    </div>
                </div>
            </div>

            <div className= 'intro-brand'>
                <div className='intro-brand__con'>
                    <div className='intro-brand__txt-con' style={{
                    }}>
                        <div className={`intro-brand__triangle up--start  + ${useScroll('.intro-brand__triangle', 0.90).isShow ? 'up--end1' : ''}`}></div>
                        <span className={`intro-brand__txt-title up--start  + ${useScroll('.intro-brand__triangle', 0.90).isShow ? 'up--end1' : ''}`}>
                            웹 개발팀,&nbsp;&nbsp;<span className='typing-txt' dangerouslySetInnerHTML={{__html: typingTxt}}></span><span className='display-in-block-pc'>를 소개합니다.</span><span className='display-in-block-mo'>입니다.</span>
                        </span>
                        <span className={`intro-brand__txt-sub up--start  + ${useScroll('.intro-brand__txt-sub', 0.90).isShow ? 'up--end1' : ''}`}>지금 홈페이지를 알아보고 계신가요? 이것은 단순한 명함의 역할을 넘어서 매출을 상승시키는 광고효과 까지 있어야 합니다. <span className='display-block-mo'><br/></span>그렇기에 제대로된 제작사를 만나는 것은 정말로 중요하죠. 저희는 마케팅 경험을 바탕으로 사업에 도움이 되는 홈페이지를 개발해서 제작합니다.</span>
                    </div>

                </div>
                <div className='fixed-bg-wrap-wrap'>
                    <div className={`fixed-bg-wrap slide-in00  + ${useScroll('.fixed-bg-wrap', 0.85).isShow ? 'slide-in01' : ''}`}>
                            <div className={`fixed-bg`}
                            style={{backgroundImage: 'url(/img/it05.jpg)',
                            transform: `translateY(${(-100 + (useScroll('.fixed-bg-wrap', 0).stateY * 0.1)) + 'px'})` 
                            }}></div>
                    </div>
                </div>
            </div>
            <div className='intro-detail'>
                <div className='intro-detail__con'>
                    <div className='intro-detail__header-con'>
                        <div className={`intro-detail__header-txt up--start  + ${useScroll('.intro-detail__header-txt', 0.90).isShow ? 'up--end1' : ''}`}>
                            왜 우리에게 홈페이지를<br/>맡겨야 할까요?
                        </div>
                    </div>
                    <div className='intro-detail__content-con'>
                         <div className='intro-detail__content-txt'>
                            <div className={`intro-detail__content-txt-item 
                            + ${useScroll('.intro-detail__content-txt-item:nth-child(1)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.intro-detail__content-txt-item:nth-child(1)', 0.85).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='intro-detail__img-wrap-mo'>
                                    <img src= '/img/it12.jpg' decoding="async"/>
                                </div>
                                <div className='intro-detail__content-txt-title '>
                                    소비자의 마음을 움직이다
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    코어스는 소비자의 입장에서 홈페이지를 구상합니다. 나의 사업 매출에 직접적으로 도움이되는 결과물을 만들기 위해 노력합니다.
                                </div>
                                <div className='arrow'></div>
                            </div>
                            <div className={`intro-detail__content-txt-item 
                            + ${useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.85).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='intro-detail__img-wrap-mo'>
                                    <img src= '/img/it14.jpg' decoding="async"/>
                                </div>
                                <div className='intro-detail__content-txt-title'>
                                    빠른 제작, 완성도 높은 결과
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    전문 개발팀이 결과물을 빠르게 만들면서도 퀄리티 있게 제작합니다.
                                </div>
                            </div>
                            <div className={`intro-detail__content-txt-item 
                            + ${useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.85).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='intro-detail__img-wrap-mo'>
                                    <img src= '/img/it08.jpg' decoding="async"/>
                                </div>
                                <div className='intro-detail__content-txt-title'>
                                    꼼꼼한 유지보수 시스템
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    홈페이지는 만들어진 뒤가 중요합니다. 우리는 꼼꼼한 유지보수 시스템으로 사이트가 문제없이 운영되도록 노력합니다.
                                </div>
                            </div>
                            <div className={`intro-detail__content-txt-item + ${useScroll('.intro-detail__content-txt-item:nth-child(4)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            + display-none-mo`}>
                                <div className='intro-detail__img-wrap-mo'>
                                    <img src= '/img/it07.jpg' decoding="async"/>
                                </div>
                                <div className='intro-detail__content-txt-title'>
                                    업종에 최적화된 홈페이지
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    의뢰인의 업종을 이해하고 사업에 적합한 사이트를 구상합니다.
                                </div>
                            </div>
                            <div className={`btn-more-static display-block-mo display-none up--start-mo + ${useScroll('.intro-detail .btn-more-static', 0.90).isShow ? 'up--end1-mo' : ''}`}>
                                <a href='/company/ourservice'>+ more</a>
                            </div>
                         </div>
                         <div className='intro-detail__content-img-con'>
                            <div className='intro-detail__triangle'></div>
                            <div className='intro-detail__content-img'>
                                <img src= '/img/it12.jpg' decoding="async"/>
                                <img src= {useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.65).isShow ? '/img/it14.jpg' : ''} decoding="async"
                                style={{opacity: useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.65).isShow ? '/img/it08.jpg' : ''} decoding="async"
                                style={{opacity: useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.intro-detail__content-txt-item:nth-child(4)', 0.65).isShow ? '/img/it07.jpg' : ''} decoding="async"
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
                    <ul className='intro-pf__grid-con'
                    
                        onMouseDown={(e) => {mouseDown(e)}}
                        onMouseMove={(e) => {mouseMove(e)}}
                        onMouseUp={(e) => {mouseUp(e)}}

                        onTouchStart={(e) => {touchStart(e)}}
                        onTouchMove={(e) => {touchMove(e)}}
                        onTouchEnd={(e) => {touchEnd(e)}}

                        style={{transform: `translateX(${lengthX}px)`}}
                    > 
                        {
                            [1,2,3,4,5,6].map((a, i) => {
                                return <GridItem a={a} i={i} />
                            })
                        }
                    </ul>
                    <div className={`btn-more-static display-block-mo display-none up--start-mo + ${useScroll('.intro-pf .btn-more-static', 0.90).isShow ? 'up--end1-mo' : ''}`}>
                        <a href='/portfolio/portfolio'>+ more</a>
                    </div>
                </div>
            </div>
            <div className='intro-review'>
                <div className='intro-review__con'>
                    <div className='intro-review__header-con'>
                        <div className={`intro-review__header-title up--start  + ${useScroll('.intro-review__header-title', 0.90).isShow ? 'up--end1' : ''}`}>
                            저희를 만난 고객님들의<br/>
                            실제 후기입니다.
                        </div>
                        <div className={`btn-more up--start display-none-mo + ${useScroll('.intro-review__header-title', 0.90).isShow ? 'up--end1' : ''}`}>
                            <a href='/review/review'>+ more</a>
                        </div>
                    </div>
                    <ul className='intro-review__txt-con'>
                        <li className={`intro-review__txt-item up--start + ${useScroll('.intro-review__txt-item:nth-child(1)', 0.90).isShow ? 'up--end1' : ''}`}>
                            <div className='intro-review__stars'>
                                {/* test */}
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div className='intro-review__txt-title'>"가격, 속도, 완성도까지 생각한다면 정답은 여기 하나인 것 같네요"</div>
                            <div className='intro-review__txt-sub'>제조업 대표, 김**</div>
                        </li>
                        <li className={`intro-review__txt-item up--start + ${useScroll('.intro-review__txt-item:nth-child(2)', 0.90).isShow ? 'up--end1' : ''}`}>
                            <div className='intro-review__stars'>
                                {/* test */}
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div className='intro-review__txt-title'>"홈페이지 제작은 어려워 보여서 막막했는데 친절한 대표님을 만나서 편하게 상담받았어요. 덕분에 고객 연락이 더 늘었습니다!"</div>
                            <div className='intro-review__txt-sub'>제조업 대표, 김**</div>
                        </li>
                        <li className={`intro-review__txt-item up--start + ${useScroll('.intro-review__txt-item:nth-child(3)', 0.90).isShow ? 'up--end1' : ''}`}>
                            <div className='intro-review__stars'>
                                {/* test */}
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                                <span class="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div className='intro-review__txt-title'>"아는 사장님을 통해서 이곳을 소개를 받았습니다. 결과를 보니 여기서 하길 잘했네요. 디테일까지 완벽하게 해주셔서 감사합니다"</div>
                            <div className='intro-review__txt-sub'>미용업 대표, 박**</div>
                        </li>
                    </ul>
                    <div className={`btn-more-static display-block-mo display-none up--start-mo + ${useScroll('.intro-review .btn-more-static', 0.90).isShow ? 'up--end1-mo' : ''}`}>
                        <a href='/review/review'>+ more</a>
                    </div>
                </div>
            </div>
            <div className='intro-img-wrap'>
                <img className={`intro-img img-position-before + ${useScroll('.intro-img', 0.90).isShow ? 'img-position-after' : ''}`} src= {`/img/img10.jpg`} decoding="async" />
                <div className={`intro-img__txt fade-in00 + ${useScroll('.intro-img__txt', 0.90).isShow ? 'fade-in01' : ''}`}>
                        이제<br/>
                        당신도<br/>
                        코어스를<br/>
                        만날 시간입니다.<br/><br/>
                        <a href='https://open.kakao.com/o/srQs41Pf'><span>+ contact</span></a>
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
                style={{marginTop: (props.i * 100) + 'px',
                transitionDelay: (props.i * 0.2) + 's',
                transitionDuration: '2s'}}                
            >
                <img className='intro-pf__box-img' src= {`/img/bd0${props.i + 1}.jpg`} decoding="async"/><img />
                <div className='intro-pf__grid-title'>포트폴리오 홈페이지</div>
                <div className='intro-pf__grid-sub'>강렬한 색감에 동적인 기능을 추가하여 유저의 반응도를 높인 사례</div>
            </li>
        </>
    )
}