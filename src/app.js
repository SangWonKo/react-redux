/* @jsx createElement */
import { createElement, render } from "./react";

function Title(props) {
  return <h1>{props.children}</h1>
}

function Item(props) {
  return <li style={`color: ${props.color}`}>{props.children}</li>
}

//html 마크업 구조를 사용할수 있도록 babel을 사용하여 jsx createElement 호출 구문으로 변환
const vdom = <p>
  <Title>React 잘 만들기</Title>
  <ul>
    <Item color="red">첫 번째 아이템</Item>
    <Item color="blue">두 번째 아이템</Item>
    <Item color="green">세 번째 아이템</Item>
  </ul>
</p>

render(vdom, document.querySelector("#root"));
