import * as Actions from "./action_type.js";

const InitializeState = {
  message: "app store",
  request: false,
};

//상태를 변경하는 메소드
//state deep copy -> 항상 새로운 상태를 반환해야함 (참조 무결성이 깨짐)
// spread 연산자 사용 -> two depth 이상의 상태 디자인을 지양함
export default function reducer(state = InitializeState, action) {
  switch (action.type) {
    case Actions.INCREASE_COUNTER:
      if (action.payload) {
        return {
          ...state,
          counter: state.counter + action.payload,
        };
      } else {
        return {
          ...state,
          counter: state.counter === undefined ? 1 : state.counter + 1,
        };
      }
    case Actions.DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter === undefined ? 0 : state.counter - 1,
      };
    case Actions.SET_COUNTER:
      return { ...state, counter: action.payload };
    case Actions.ASYNC_REQUEST:
      return { ...state, request: true };
    case Actions.ASYNC_RESPONSE:
      return { ...state, request: false };
    default:
      return { ...state };
  }
}

//reducer는 순수함수를 지향, 외부 의존성 x -> 비동기 처리는 reducer 외부에서
