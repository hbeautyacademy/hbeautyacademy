import { useEffect, useState } from 'react';
import {useScroll} from '../components/useScroll/useScroll';
import './../App.css';


export default function Intro(){

    // [Effect] text effect in intro-spot
    const [spotText, setSpotText] = useState(null);
    const spotTextData = [
        'H beauty ',
        'academy'
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
    // [Effect] typing text effect in intro-brand
    const typingTextData = [
        'H beauty academy' + '  ',
        'H beauty academy' + '  '
    ]
    let [typingTxt, setTypingTxt] = useState('')
    let i = 0; // Number of repetitons
    let j = 0; // Arrangement order of typingTextData
    let txt = '';
    const typing = () => {
        if (i < typingTextData[j].length) { // Before assembling text
            const string = typingTextData[j][i++]
            setTypingTxt(txt);
            txt = txt + string;
        } else { // If text is already assembled
            setTypingTxt(txt);
            // txt = ''; // Obtion1. delete text 'in once'
            txt = txt.slice(0, -1); // Obtion2. delete one letter at a time
            if (txt.length == 0) { // If text is already deleted
                i = 0; 
                if (j == 0) {
                    j = 1; // Change arrangement order to next
                } else {
                    j = 0;
                }
            }
        }
    }
    useEffect(() => {
        const timer_typing = setInterval(typing, 150);
        return () => {
            clearInterval(timer_typing);
        };
    }, [])

    // --------------------------------------------------------
    // [Event] Mouse touching for PC
    const [startX, setStartX] = useState(null); // point of click
    const [lengthX, setLengthX] = useState(null); // length of drag in current time
    const [preLengthX, setPreLengthX] = useState(null) // length of drag in previous time
    const [onClick, setOnClick] = useState(false); // check click

    const mouseDown = (e) => {
        setOnClick(true);
        setStartX(e.clientX);
    }
    const mouseMove = (e) => { 
        let totalLengthX = preLengthX + e.clientX - startX // total length of drag
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

    // [Event] Mouse touching for Mobile
    const touchStart = (e) => {
        setOnClick(true);
        setStartX(e.changedTouches[0].clientX);
    }

    const touchMove = (e) => {
        let totalLengthX = preLengthX + e.changedTouches[0].clientX - startX // total length of drag
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
            <div className='intro-spot' style={{backgroundImage: `url('/img/메인02.jpg')`}}>
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
                        꿈을 실현 시키는 곳,&nbsp;&nbsp;<br/><span className='typing-txt' dangerouslySetInnerHTML={{__html: typingTxt}}></span><span className='display-in-block-pc'></span><span className='display-in-block-mo'></span>
                        </span>
                        <span className={`intro-brand__txt-sub up--start  + ${useScroll('.intro-brand__txt-sub', 0.90).isShow ? 'up--end1' : ''}`}>전문 교육 강사진으로 구성된 H BEAUTY에서<br/>당신의 꿈을 완성시키세요.<br/>모든시작을 응원하고<br/>H BEAUTY에서 함께하겠습니다.</span>
                    </div>

                </div>
                <div className='fixed-bg-wrap-wrap'>
                    <div className={`fixed-bg-wrap slide-in00  + ${useScroll('.fixed-bg-wrap', 0.85).isShow ? 'slide-in01' : ''}`}>
                            <div className={`fixed-bg`}
                            style={{backgroundImage: 'url(/img/브랜드.jpg)',
                            transform: `translateY(${(-100 + (useScroll('.fixed-bg-wrap', 0).stateY * 0.1)) + 'px'})` 
                            }}></div>
                    </div>
                </div>
            </div>
            <div className='intro-detail'>
                <div className='intro-detail__con'>
                    <div className='intro-detail__header-con'>
                        <div className={`intro-detail__header-txt up--start  + ${useScroll('.intro-detail__header-txt', 0.90).isShow ? 'up--end1' : ''}`}>
                            H beauty academy를<br/>선택한 수강생의 혜택
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
                                    <img src= '/img/서비스01.png' decoding="async"/>
                                </div>
                                <div className='intro-detail__content-txt-title '>
                                    학생을 위한 집중케어
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    대학교 수시 면접 교육 / 담당선생님관리 / 입시과정 컨설팅 / 미용대회 및 포트폴리오 까지 각 학교에 맞는 집중케어가 가능합니다.
                                </div>
                                <div className='arrow'></div>
                            </div>
                            <div className={`intro-detail__content-txt-item 
                            + ${useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.85).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='intro-detail__img-wrap-mo'>
                                    <img src= '/img/서비스02.png' decoding="async"/>
                                </div>
                                <div className='intro-detail__content-txt-title'>
                                    취업부터 창업까지 함께
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    취&#8901;창업과정에 전문적으로 인원이 배치돼어 취&#8901;창업까지 함께합니다. 창업하실때 필요한 샵 실무과정을 학원에서 경험하실 수 있습니다.
                                </div>
                            </div>
                            <div className={`intro-detail__content-txt-item 
                            + ${useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            // 모바일
                            + up--start-mo + ${useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.85).isShow ? 'up--end1-mo' : ''}`}
                            >
                                <div className='intro-detail__img-wrap-mo'>
                                    <img src= '/img/서비스03.png' decoding="async"/>
                                </div>
                                <div className='intro-detail__content-txt-title'>
                                    높은 합격률의 집중교육
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    (성인반) 소수정원과 집중교육으로<br/>단기 속성 국가자격증 합격이 가능합니다. <br/>- 네일 2개월 합격률 90%이상 <br/>- 피부 10회 합격률 92%이상 <br/>- 메이크업 3개월 합격률 89%이상 <br/>- 헤어 4개월 합격률 96%이상
                                </div>
                            </div>
                            <div className={`intro-detail__content-txt-item + ${useScroll('.intro-detail__content-txt-item:nth-child(4)', 0.65, 0.35).isShow ? 'opacity-1' : 'opacity-point3'}
                            + display-none-mo`}>
                                <div className='intro-detail__img-wrap-mo'>
                                    <img src= '/img/서비스04.png' decoding="async"/>
                                </div>
                                <div className='intro-detail__content-txt-title'>
                                    학생에게 맞는 맞춤교육
                                </div>
                                <div className='intro-detail__content-txt-sub'>
                                    다수로 연습방식의 수업이 아닌 소수정원 수업으로 구성합니다. 각 학생들에게 맞는 수업방식과 맞춤 케어가 가능한 곳 입니다.
                                </div>
                            </div>
                            <div className={`btn-more-static display-block-mo display-none up--start-mo + ${useScroll('.intro-detail .btn-more-static', 0.90).isShow ? 'up--end1-mo' : ''}`}>
                                <a href='/company/ourservice'>+ more</a>
                            </div>
                         </div>
                         <div className='intro-detail__content-img-con'>
                            <div className='intro-detail__triangle'></div>
                            <div className='intro-detail__content-img'>
                                <img src= '/img/서비스01.png' decoding="async"/>
                                <img src= {useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.65).isShow ? '/img/서비스02.png' : ''} decoding="async"
                                style={{opacity: useScroll('.intro-detail__content-txt-item:nth-child(2)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.65).isShow ? '/img/서비스03.png' : ''} decoding="async"
                                style={{opacity: useScroll('.intro-detail__content-txt-item:nth-child(3)', 0.65).isShow ? '1' : '0'}}
                                />
                                <img src= {useScroll('.intro-detail__content-txt-item:nth-child(4)', 0.65).isShow ? '/img/서비스04.png' : ''} decoding="async"
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
                        헤어 / 네일 / 메이크업 / 에스테틱<br/>취&#8901;창업실무 / 입시진학
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
                        <li className={`intro-pf__grid-item up--start + ${useScroll('.intro-pf__grid-item', 0.90).isShow ? 'up--end1' : ''}`}
                            style={{marginTop: (0 * 100) + 'px',
                            transitionDelay: (0 * 0.2) + 's',
                            transitionDuration: '2s'}}                
                        >
                            <img className='intro-pf__box-img' src= {`/img/포트폴리오01.png`} decoding="async"/><img />
                            {/* <div className='intro-pf__grid-title'>포트폴리오 홈페이지</div> */}
                            <div className='intro-pf__grid-sub'>헤어국가자격증<br/>이용사국가자격증<br/>헤어업스타일과정<br/>헤어컷트과정<br/>헤어염색과정<br/>두피스케일링과정</div>
                        </li>
                        <li className={`intro-pf__grid-item up--start + ${useScroll('.intro-pf__grid-item', 0.90).isShow ? 'up--end1' : ''}`}
                            style={{marginTop: (1 * 100) + 'px',
                            transitionDelay: (1 * 0.2) + 's',
                            transitionDuration: '2s'}}                
                        >
                            <img className='intro-pf__box-img' src= {`/img/포트폴리오02.png`} decoding="async"/><img />
                            {/* <div className='intro-pf__grid-title'>포트폴리오 홈페이지</div> */}
                            <div className='intro-pf__grid-sub'>네일국가자격증<br/>네일실무과정<br/>네일드릴 과정<br/>포크아크 과정</div>
                        </li>
                        <li className={`intro-pf__grid-item up--start + ${useScroll('.intro-pf__grid-item', 0.90).isShow ? 'up--end1' : ''}`}
                            style={{marginTop: (2 * 100) + 'px',
                            transitionDelay: (2 * 0.2) + 's',
                            transitionDuration: '2s'}}                
                        >
                            <img className='intro-pf__box-img' src= {`/img/포트폴리오03.png`} decoding="async"/><img />
                            {/* <div className='intro-pf__grid-title'>포트폴리오 홈페이지</div> */}
                            <div className='intro-pf__grid-sub'>메이크업국가자격증<br/>메이크업민간자격증<br/>웨딩 메이크업<br/>데일리 메이크업<br/>아트마스크<br/>속눈썹 연장/펌 실무과정</div>
                        </li>
                        <li className={`intro-pf__grid-item up--start + ${useScroll('.intro-pf__grid-item', 0.90).isShow ? 'up--end1' : ''}`}
                            style={{marginTop: (3 * 100) + 'px',
                            transitionDelay: (3 * 0.2) + 's',
                            transitionDuration: '2s'}}                
                        >
                            <img className='intro-pf__box-img' src= {`/img/포트폴리오04.png`} decoding="async"/><img />
                            {/* <div className='intro-pf__grid-title'>포트폴리오 홈페이지</div> */}
                            <div className='intro-pf__grid-sub'>피부국가자격증<br/>피부살롱실무과정<br/>왁싱실무과정</div>
                        </li>
                        <li className={`intro-pf__grid-item up--start + ${useScroll('.intro-pf__grid-item', 0.90).isShow ? 'up--end1' : ''}`}
                            style={{marginTop: (4 * 100) + 'px',
                            transitionDelay: (4 * 0.2) + 's',
                            transitionDuration: '2s'}}                
                        >
                            <img className='intro-pf__box-img' src= {`/img/포트폴리오05.png`} decoding="async"/><img />
                            {/* <div className='intro-pf__grid-title'>포트폴리오 홈페이지</div> */}
                            <div className='intro-pf__grid-sub'>4년제/2년제 대학교 정보<br/>4년제 실기과정<br/>2년제 대학교 준비과정</div>
                        </li>
                    </ul>
                    <div className={`btn-more-static display-block-mo display-none up--start-mo + ${useScroll('.intro-pf .btn-more-static', 0.90).isShow ? 'up--end1-mo' : ''}`}>
                        <a href='/company/introduction'>+ more</a>
                    </div>
                </div>
            </div>
            <div className='intro-review'>
                <div className='intro-review__con'>
                    <div className='intro-review__header-con'>
                        <div className={`intro-review__header-title up--start  + ${useScroll('.intro-review__header-title', 0.90).isShow ? 'up--end1' : ''}`}>
                            H beauty academy를<br/>선택해야하는 이유
                        </div>
                        <div className={`btn-more up--start display-none-mo + ${useScroll('.intro-review__header-title', 0.90).isShow ? 'up--end1' : ''}`}>
                            <a href='/company/introduction'>+ more</a>
                        </div>
                    </div>
                    <ul className='intro-review__txt-con'>
                        <li className={`intro-review__txt-item up--start + ${useScroll('.intro-review__txt-item:nth-child(1)', 0.90).isShow ? 'up--end1' : ''}`}>
                            <div className='intro-review__stars'>
                                <span>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                </span>
                            </div>
                            <div className='intro-review__txt-title'>"성인취/창업을 위한 단기 속성 국가자격증과정이 가능합니다."</div>
                            <div className='intro-review__txt-sub'>단기국가자격증취득을 위해 포인트레슨과 소수맞춤레슨으로 진행합니다.</div>
                        </li>
                        <li className={`intro-review__txt-item up--start + ${useScroll('.intro-review__txt-item:nth-child(2)', 0.90).isShow ? 'up--end1' : ''}`}>
                            <div className='intro-review__stars'>
                                <span>
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                </span>
                            </div>
                            <div className='intro-review__txt-title'>"1:1 맞춤 진도 레슨과 소수정원수업과 무제한 연습"</div>
                            <div className='intro-review__txt-sub'>성인반뿐만아니라 대학교진학을 위한 학생들의 수업에도 소수정원으로만 수업을 유지합니다.<br/>평일 10:00-21:00까지 연습이 가능합니다.</div>
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
                        전문적인 강사진 구성과<br/>
                        소수정원 한정수업으로<br/>
                        아티스트를 꿈꾸는 모두에게<br/>
                        꿈을 실현시키는 곳 입니다.<br/><br/>
                        <a href='https://open.kakao.com/o/sqTqVgDf'><span>+ contact</span></a>
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

// function GridItem(props){


//     return (
//         <>
//             <li className={`intro-pf__grid-item up--start + ${useScroll('.intro-pf__grid-item', 0.90).isShow ? 'up--end1' : ''}`}
//                 style={{marginTop: (props.i * 100) + 'px',
//                 transitionDelay: (props.i * 0.2) + 's',
//                 transitionDuration: '2s'}}                
//             >
//                 <img className='intro-pf__box-img' src= {`/img/bd0${props.i + 1}.jpg`} decoding="async"/><img />
//                 <div className='intro-pf__grid-title'>포트폴리오 홈페이지</div>
//                 <div className='intro-pf__grid-sub'>{props.a}</div>
//             </li>
//         </>
//     )
// }