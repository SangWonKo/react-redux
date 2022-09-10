# React의 탄생배경 

## DOM API
>html 문서를 브라우저가 렌더링하고 작동시키기 위해서 가동시켜놓은 트리구조의 객체

- 자바스크립트를 이용해서 웹앱의 UI를 핸들링할수 있는 유일한 방법 -> 모든 웹앱이 DOM API 사용

하지만 웹앱을 만드는데 최적화된 형태는 아님. 


## SPA (Single Page Application)

기존의 html 문서 간의 이동할 때의 리로딩으로 인해 웹앱의 사용성이 저하됨.

이를 해결하기 위해 html을 자바스크립트를 통해 동적으로 읽어들여서 화면에 페이지 전환없이 UI를 갱신하는 SPA를 사용함. React 또한 SPA를 만드는 방식 중 하나.

그치만 역시 DOM API를 사용함으로 인해 발생하는 문제가 존재함.

## DOM API의 문제
### Cross Browsing 이슈
DOM API가 제공하는 여러가지 기능들이 일관성을 가지지 않으며 브라우저마다의 지원 범위가 각각 다른 문제를 가지고 있음.

### 복잡도 문제
SPA는 하나의 어플리케이션이기 때문에 규모가 커질수록 복잡도가 늘어남.
웹페이지처럼 리로드되고 갱신되지 않고 모든 화면에 들어가는 다양한 데이터를 어플리케이션 단위에서 유지하고 관리해야 하는 어려움이 있음.

복잡도 문제를 해결하기 위한 프로그래밍 패턴이 시도됨.

## MVC & MVVM

### MVC (Model-View-Controller)
![mvc](https://images.velog.io/images/jeongopo/post/141a7081-9f59-47c0-a29a-e6a8e4e1302e/image.png)

모델과 뷰 사이 간의 연결성 로직들을 분리해서 복잡성을 낮춤 

하지만 클라이언트 어플리케이션의 뷰와 로직들이 늘어나면서 모델이 서버의 모델에 종속성을 가지게 되는 문제가 있음

### MVVM (Model-View-ViewModel)
![mvc](https://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png)

클라이언트쪽에서 상태를 독립적으로 유지할 수 있는 패턴
React와 같은 프레임워크에 큰 영향을 미친 패턴

하지만 DOM API 자체의 문제점을 해결해주지는 않음

