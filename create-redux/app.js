function createStore() {
  let state;

  function send() {
    state = worker(state);
  }

  function getState() {
    return state;
  }

  return { send, getState };
}

//상태를 변경하는 메소드
//state deep copy -> 항상 새로운 상태를 반환해야함 (참조 무결성이 깨짐)
// spread 연산자 사용 -> two depth 이상의 상태 디자인을 지양함
function worker(state = { count: 0 }) {
  return { ...state, count: state.count + 1 };
}

const store = createStore(worker);

store.send();

console.log(store.getState());
