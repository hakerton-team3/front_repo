import React, { useState } from "react";
import CheckBox from "./Checkbox";
export default function App () {
  const checkList = [...Array(5).fill("체크").map((v, i) => v + i)]
  const checkItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkItems.add(id) 
      setCheckItems(checkItems)
      console.log(checkItems)
    } else if (!isChecked) {
      checkItems.delete(id)
      setCheckItems(checkItems)
    }
  }
  return (
    <>
      <header>
        <label>
          <input type="checkbox" onChange={(e) => allCheckedHandler(e)} />
          전체선택
        </label>
      </header>
      <div>
        {
           checkList.map((text, index) => (
            <CheckBox
              key={index}
              text={text}
              id={`id`+index}
              checkItemHandler={checkItemHandler} // props로 함수전달
              />
          ))
        }
      </div>
    </>
  )
}