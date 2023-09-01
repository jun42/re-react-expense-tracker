import React, { useState } from "react";

export const PaymentForm = (props) => {
  const [stateObject, setStateObject] = useState({
    name: "",
    price: 0,
    type: "select",
    date: new Date(),
    isMemo: false,
    memo: "",
    isRepurchaseChecked: [false, false],
    repurchase: null,
  });
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(stateObject);
    props.addExpenseData(stateObject);
    setStateObject({
      name: "",
      price: 0,
      type: "select",
      date: new Date(),
      isMemo: false,
      memo: "",
      isRepurchaseChecked: [false, false],
      repurchase: null,
    });
  };

  const changeHandler = (event) => {
    setStateObject((prevState) => {
      prevState[event.target.id] = event.target.value;
      return { ...prevState };
    });
  };
  const changeRepurchaseHandler = (event) => {
    setStateObject((prevState) => {
      prevState[event.target.id] = event.target.value;
      console.log(typeof event.target.value);
      event.target.value === "true"
        ? (prevState["isRepurchaseChecked"][0] = true)
        : (prevState["isRepurchaseChecked"][1] = true);
      // console.log(event.target.id, event.target.value, event.target.checked);
      return { ...prevState };
    });
  };
  const changeDateHandler = (event) => {
    setStateObject((prevState) => {
      const date = new Date(event.target.value);
      prevState[event.target.id] = date.toISOString().toString().split("T")[0];
      // console.log(prevState);
      return { ...prevState };
    });
  };
  const changeIsMemoHandler = (event) => {
    setStateObject((prevState) => {
      // console.log(event.target.id, event.target.checked);
      prevState[event.target.id] = event.target.checked;
      return { ...prevState };
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="payment-form__input">
        <label name="name" id="name">
          이름
        </label>
        <input
          type="text"
          id="name"
          value={stateObject.name}
          onChange={changeHandler}
        />
      </div>
      <div className="payment-form__input">
        <label name="price" id="price">
          가격
        </label>
        <input
          type="number"
          id="price"
          value={stateObject.price}
          onChange={changeHandler}
        />
      </div>
      <div className="payment-form__input">
        {/* todo: value select 일때 처리 */}
        <label name="type" id="type" htmlFor="type">
          유형
        </label>
        <select
          name="type"
          id="type"
          onChange={changeHandler}
          value={stateObject.type}
        >
          <option value="select">선택</option>
          <option value="food">식비</option>
          <option value="education">교육비</option>
          <option value="transportaion">교통비</option>
          <option value="apparel">의류비</option>
          <option value="rent">월세</option>
          <option value="communication">통신비</option>
        </select>
      </div>

      <div className="payment-form__input">
        <label name="date" id="date">
          날짜
        </label>
        <input
          type="date"
          id="date"
          value={stateObject.date}
          //날짜 조절하면 이렇게 들어가는데, 초기 값의 경우 어떻게 처리하지.
          onChange={changeDateHandler}
        />
      </div>
      <div className="payment-form__input">
        <label name="memo" id="memo">
          메모
        </label>
        <input
          type="checkbox"
          id="isMemo"
          checked={stateObject.isMemo}
          onChange={changeIsMemoHandler}
        />

        {stateObject.isMemo && (
          <input type="text" id="memo" name="memo" onChange={changeHandler} />
        )}
      </div>
      <div className="payment-form__input">
        <label name="repurchase" id="repurchase">
          재구매여부
        </label>
        <input
          type="radio"
          name="repurchase"
          id="repurchase"
          value={true}
          onChange={changeRepurchaseHandler}
          checked={stateObject.isRepurchaseChecked[0]}
        />
        yes
        <input
          type="radio"
          name="repurchase"
          id="repurchase"
          value={false}
          onChange={changeRepurchaseHandler}
          checked={stateObject.isRepurchaseChecked[1]}
        />
        no
      </div>
      <input type="submit" value="기록" />
    </form>
  );
};
