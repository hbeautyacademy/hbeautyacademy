import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// 커스텀 훅. useScroll
// 유저의 현재 스크롤 위치를 알려주는 훅
const useScroll = (el) => {
    // const [state, setState] = useState({
    //   x: 0,
    //   y: 0
    // });
    // const onScroll = () => {
    //   setState({y:window.scrollY, x:window.scrollX});
    // };
    // useEffect(() => {
    //   window.addEventListener("scroll", onScroll);
    //   return () => window.removeEventListener("scroll", onScroll);
    // }, []);
    // return state;



  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onCheckScroll);
    return () => {
      window.removeEventListener('scroll', onCheckScroll);
    };
  });

  const onCheckScroll = () => {
    const ele = document.querySelector(el);
    const eleY = ele.getBoundingClientRect().y;
    const absoluteTop = window.pageYOffset + eleY // 컨텐츠 시작점 기준 절대좌표
    if (window.scrollY + window.innerHeight*0.97 > absoluteTop) {
      setIsShow(true);
    }
  };
  return { isShow };
};




export {useScroll};