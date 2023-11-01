import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// 커스텀 훅. useScroll
// 유저의 현재 스크롤 위치를 알려주는 훅
// el1: 요소의 .className
// el2: 이벤트 시작지점 (oneway)
// el3: 이벤트 종료지점 (round) * 만약 oneway를 원하면 공백으로 두기

const useScroll = (el1, el2, el3) => {
  const [stateY, setStateY] = useState(0);
  const [isShow, setIsShow] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', onCheckScroll);
    return () => {
      window.removeEventListener('scroll', onCheckScroll);
    };
  });

  const onCheckScroll = () => {
    const ele = document.querySelector(el1);
    const eleY = ele.getBoundingClientRect().y;
    const absoluteTop = window.pageYOffset + eleY // 컨텐츠 시작점 기준 절대좌표


    // oneway
    if (el3 == undefined) {
      if (window.scrollY + window.innerHeight*el2 > absoluteTop) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }

    // round 
    } else {
      if (window.scrollY + window.innerHeight*el2 > absoluteTop
        & absoluteTop > window.scrollY + window.innerHeight*el3) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    }

    

    const relativeTop = eleY - window.innerHeight // 뷰포트 기준 상대좌표
    setStateY(relativeTop);
  };
  return { isShow,
    stateY
  };
};




export {useScroll};