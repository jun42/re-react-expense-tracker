# 프로젝트 명

가계부 프로젝트

# 요구사항

1. create-react-app 으로 프로젝트를 세팅합니다.
2. 다음과 같은 항목들을 form input을 통해 입력을 받습니다.
   - 이름 : string
   - 가격 : number
   - 유형 : string
   - 구입 날짜 : date
   - 메모 : string
     - 체크박스로 체크가 된 경우만 메모 input을 보여주고 값을 받습니다.
   - 재구매 의사 : boolean
     - 라디오 버튼을 통해 구현
3. 입력받은 소비 항목들은 최신 순서대로 리스트로 보여집니다.
4. 유형별 필터를 통해 유형에 맞춰 필터링된 리스트를 볼 수 있습니다.
5. 정렬 기준을 다음과 같이 가지고 정렬해 줄 수 있습니다.
   1. 가격 높은 순
   2. 가격 낮은 순
   3. 최신 순
   4. 오래된 순
6. 기간을 정해서 해당 기간에 소비한 내역만 볼 수 있습니다.

## 진행상황

- [x] 기능 요구 사항 구현
- [ ] css
- [ ] 컴포넌트 쪼개기
- [ ] 리팩토링

## 후기

state, props, component, event 등 기본적인 사항만 배우고 구현한 프로젝트였다.

### React의 데이터 흐름을 배웠다.

흔히들 말하는 단방향 데이터 흐름이 무엇인지 느낄 수 있었다. 상위 컴포넌트에서 데이터를 받아서 아래로 보내는게 더 쉽고 자연스러웠다.

더 알아볼 것 : props drilling

### 아토믹 디자인

컴포넌트를 더 나눠봐야겠지만 컴포넌트끼리 비슷한 추상화 수준?을 유지해주면 된다고 느꼈다. 꼭 5단계로 갈 필요는 없지 않을까라는 생각이 들었다. 프로그램을 위한 디자인이지, 디자인을 위한 프로그램은 아니니까?

더 알아볼 것 : atomic design, abstraction

### 머리가 안되면 손으로, 손으로 안되면 머리로

둘 다 안되면 자거나 운동을 하는게 좋다.

### 처음부터 다시 만들어 보는 것도 좋다.

배우는 입장에서 다시 치다보면 흐름도 더 잘보이고 머리도 잘 돌아가는 듯.
