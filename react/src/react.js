const hooks = [];
let currentComponent = 0;

export class Component {
  constructor(props) {
    this.props = props;
  }
}

export function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  node.children.map(createDOM).forEach(element.appendChild.bind(element));
  return element;
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

function useState(initValue) {
  let position = currentComponent - 1;
  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  const modifier = (nextValue) => {
    hooks[position] = nextValue;
  };

  return [hooks[position], modifier];
}

export function createElement(tag, props, ...children) {
  props = props || {}; //props가 null일 경우에 대한 방어 코드

  if (typeof tag === "function") {
    if (tag.prototype instanceof Component) {
      //클래스 컴포넌트일 경우
      const instance = new tag(makeProps(props, children));
      return instance.render();
    } else {
      hooks[currentComponent++] = null;
      if (children.length > 0) {
        //tag가 함수 컴포넌트일 경우엔 return값 가져옴
        return tag(makeProps(props, children));
      } else {
        return tag(props);
      }
    }
  } else {
    return { tag, props, children };
  }
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}

// export const render = function() {
//   let prevDom = null;
//   return function(vdom, container) {
//     if(prevDom === null) {
//       prevDom = vdom;
//     }

//     container.appendChild(createDOM(vdom))
//   }
// }
