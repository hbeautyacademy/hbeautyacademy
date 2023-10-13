import { useEffect, useState } from 'react';
import './../App.css';


export default function Intro(){

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

    
    
    return (
        <>
            <div className='intro-spot' style={{backgroundImage: 'url(/img/it02.jpg)'}}>
                <div className='intro-spot__con'>

                    <div className='intro-spot__bg-gray' style={{backgroundColor:'rgb(0,0,0,0.6)'}}></div>
                    
                    <div className='intro-spot__txt-con'>
                        <div className='intro-spot__txt-sub01'>
                            {
                                spotTextData[0].split("").map((a, i) => {
                                    return <SpotTextItem a={a} i={i} spotText={spotText} />
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