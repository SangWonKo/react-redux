import * as ActionType from "./action_type.js";

const InitializeState = { count: 0 };
//상태를 변경하는 메소드
//state deep copy -> 항상 새로운 상태를 반환해야함 (참조 무결성이 깨짐)
// spread 연산자 사용 -> two depth 이상의 상태 디자인을 지양함
export function reducer(state = InitializeState, action) {
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 };
    case ActionType.RESET:
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}
