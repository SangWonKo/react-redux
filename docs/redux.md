# Redux

## MVC
![mvc](https://velog.velcdn.com/images%2Falskt0419%2Fpost%2F35a7a12e-4f0d-416c-889c-92bdeca47dbb%2Fimage%20(1).png)

모델과 뷰 사이 간의 연결성 로직을 가짐 (two-way binding) 

하지만 데이터를 여러개의 ui와 연결했을 때,데이터 추적이 어려워지며 의존성 문제가 발생하게 됨.

## Flux
![flux](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-with-client-action-1300w.png)

flux: one-way 단방향 데이터 흐름

- action: 데이터 변경에 대해 dispatcher에 전달되는 객체
- dispatcher: 데이터 흐름을 관리하는 중앙 허브의 역할, 모든 액션은 디스패쳐를 통해 스토어로 전달되며 디스패쳐를 통해 데이터가 수정됨.
- store: 상태 저장소
- view: 스토어의 상태를 보여주는 역할 (컴포넌트)
