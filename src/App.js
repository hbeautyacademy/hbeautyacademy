import './App.css';
import Component1 from './routes/Component1.js';
import Component2 from './routes/Component2.js';
import Component3 from './routes/Component3.js';
import Component4 from './routes/Component4.js';
import Component5 from './routes/Component5.js';


function App() {
  return (
    <div className="App jejumyeongjo">
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
      {/* 개인정보 이용 등 법률내용 적는거 제대로 적용 */}
    </div>
  );
}



export default App;

// 참고
// 회사소개? 쏘카
// 포트폴리오? 리디

// -[후기 소개]							(background: black)
//   후기를 보고 선택하세요					(가로 swipe)
//        ( < )								(깜빡임 ~ 토스 회사소개)


// -연락처/지도							(background: white)
//  "카톡으로 상담하기"
//  "인스타 구경하기"
//  "위치보기"
// *** 회사정보/사업자번호/대표명/주소/전화번호