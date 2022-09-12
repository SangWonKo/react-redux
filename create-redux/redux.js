export const actionCreator = (type) => (payload) => ({ type, payload });

export function createStore(reducer, middlewares = []) {
  let state;
  let handlers = []; //구독기

  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function getState() {
    return state;
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  const store = {
    getState,
    subscribe,
    dispatch,
  };
  
  middlewares = Array.from(middlewares).reverse();
  //미들웨어의 파이프라인에 따라 마지막 미들웨어의 결과값이 디스패치가 되어 호출되는 구조 (Monkey patching)
  let lastDispatch = dispatch;

  middlewares.forEach((middleware) => {
    lastDispatch = middleware(store)(lastDispatch);
  });

  store.dispatch = lastDispatch;
  return store;
}
