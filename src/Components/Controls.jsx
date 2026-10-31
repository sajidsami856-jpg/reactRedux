import React from 'react'
import { useDispatch } from 'react-redux';
import {useRef} from "react";
function Controls() {
  const inputVal=useRef();
  const dispatch =useDispatch();

  const handleIncriment=()=>{
    dispatch({type:"INCRIMENT"});
  }

  const handleDecriment=()=>{
    dispatch({type:"DECRIMENT"});
  }

  const handleAdd=()=>{
    dispatch(
      {type:"ADD",
        payload:{
          num:inputVal.current.value,
        },
      }
    );inputVal.current.value="";
  }

  const handleSubtract=()=>{
    dispatch ({
      type:"SUBTRACT",
      payload:{
        num:inputVal.current.value,
      }
    });inputVal.current.value="";
  }


  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary " onClick={handleIncriment}>+1</button>
        <button type="button" className="btn btn-success " onClick={handleDecriment}>-1</button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input ref={inputVal} className='number-input btns-gap' type="text" placeholder='Enter your number '/>
        <button type="button" className="btn btn-info btns-gap" onClick={handleAdd}>Add</button>
        <button type="button" class="btn btn-danger btns-gap" onClick={handleSubtract}>Substract</button>
    </div>
    </>
  )
}

export default Controls;