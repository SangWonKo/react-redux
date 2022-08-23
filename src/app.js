/* @jsx createElement */
import { createElement, render } from "./react";

//html 마크업 구조를 사용할수 있도록 babel의 jsx createElement 호출 구문으로 변환
const vdom = <p>
  <h1>React 만들기</h1>
  <ul>
    <li style="color: red">첫 번째 아이템</li>
    <li style="color: blue">두 번째 아이템</li>
    <li style="color: green">세 번째 아이템</li>
  </ul>
</p>

render(vdom, document.querySelector("#root"));
