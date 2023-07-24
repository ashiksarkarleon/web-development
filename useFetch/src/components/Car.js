import React from 'react'
import {useState, useCallback} from 'react'
import useFetch from './useFetch'


function Component1() {

    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');


  return (
    <>
        {data && data.map((item) => {
            return <p key={item.id}>{item.id} {item.title}</p>
        })}
    </>
  )
}

const Calculation = (num) => {
    for(let i=0; i<1000; i++){
        num += 1;
    }

    return num;
}

export default Component1