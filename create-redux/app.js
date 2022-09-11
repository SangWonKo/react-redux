function createStore() {
  let state;
  let handlers = []; //구독기

  function send(action) {
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  return { send, getState, subscribe };
}

//상태를 변경하는 메소드
//state deep copy -> 항상 새로운 상태를 반환해야함 (참조 무결성이 깨짐)
// spread 연산자 사용 -> two depth 이상의 상태 디자인을 지양함
function worker(state = { count: 0 }, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

const store = createStore(worker);

store.subscribe(function () {
  console.log(store.getState());
});

store.send({ type: "increase" });
store.send({ type: "increase" });
store.send({ type: "increase" });
