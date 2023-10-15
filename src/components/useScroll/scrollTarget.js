import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// 모듈. scrollTarget
// 페이지 내 요소의 클래스를 파라미터로 입력하면, 해당 요소의 절대 (수직)위치를 알려준다

const scrollTarget = (el) => {
    const ele = document.querySelector(el); // 해당 요소를 지정
    const eleY = ele.getBoundingClientRect().top;  // 뷰포트 기준 상대좌표
    const absoluteTop = window.pageYOffset + eleY // 컨텐츠 시작점 기준 절대좌표
    return absoluteTop;
}

export {scrollTarget};