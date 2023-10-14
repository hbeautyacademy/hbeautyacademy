import { useEffect, useState } from "react";


export default function ScrollOneway(props) {

    // const targetClass = props.targetClass;
    // const scrollMore = props.scrollMore;


    // console.log('module test')
    let [fade, setFade] = useState('');

    // 멘트 팝업
    let checker_OneWay = false;
    const handleScroll1 = () => {
        // if (window.scrollY > document.querySelector('.intro-brand__txt-title').offsetTop + 10 && checker_OneWay == false) {
        if (window.scrollY > 100 && checker_OneWay == false) {
            setFade('up--end2');
            checker_OneWay = true;
    }
    };




    useEffect(() => {
        let timer = setInterval(()=>{window.addEventListener('scroll', handleScroll1);}, 100)

        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll1);
        };
    }, [fade])

    return(
        <>
        </>        
    )
}