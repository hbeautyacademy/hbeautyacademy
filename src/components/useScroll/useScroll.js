import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// 커스텀 훅. useScroll
// 유저의 현재 스크롤 위치를 알려주는 훅
const useScroll = (el) => {
  const [stateY, setStateY] = useState(0);
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

    const relativeTop = eleY - window.innerHeight // 뷰포트 기준 상대좌표
    setStateY(relativeTop);
  };
  return { isShow,
    stateY
  };
};




export {useScroll};