import React, { useState } from "react";

export const Filters = (props) => {
  const changeHandler = (event) => {
    props.setFilterStateObject((prevState) => {
      prevState[event.target.id] = event.target.value;
      console.log(prevState);
      return { ...prevState };
    });
  };
  const changeDateHandler = (event) => {
    props.setFilterStateObject((prevState) => {
      const date = new Date(event.target.value);
      prevState[event.target.id] = date.toISOString().toString().split("T")[0];
      // console.log(prevState);
      return { ...prevState };
    });
  };
  return (
    <div>
      <label name="type" id="type" htmlFor="type">
        유형
      </label>
      <select
        name="type"
        id="type"
        onChange={changeHandler}
        value={props.filterStateObject.type}
      >
        <option value="select">선택</option>
        <option value="food">식비</option>
        <option value="education">교육비</option>
        <option value="transportaion">교통비</option>
        <option value="apparel">의류비</option>
        <option value="rent">월세</option>
        <option value="communication">통신비</option>
      </select>
      <label name="type" id="type" htmlFor="type">
        정렬
      </label>
      <select
        name="sort"
        id="sort"
        onChange={changeHandler}
        value={props.filterStateObject.sort}
      >
        <option value="date-desc">최신 순</option>
        <option value="date-asc">오래된 순</option>
        <option value="price-desc">가격 높은 순</option>
        <option value="price-asc">가격 낮은 순</option>
      </select>
      <label name="start-date" id="startDate">
        from
      </label>
      <input
        type="date"
        id="startDate"
        value={props.filterStateObject.startDate}
        onChange={changeDateHandler}
      />
      <label name="end-date" id="endDate">
        to
      </label>
      <input
        type="date"
        id="endDate"
        value={props.filterStateObject.endDate}
        onChange={changeDateHandler}
      />
    </div>
  );
};
