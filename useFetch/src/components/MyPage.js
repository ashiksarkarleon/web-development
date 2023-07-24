import React from 'react'
import moduleStyle from './css/MyPage.module.css';

const MyPage = () => {
    
    const myStyle = {
        color : 'green',
        fontSize: 50
    }
    
  return (
    <>
    <h1 style={{backgroundColor: 'red', marginLeft: '50px'}}>MyPage</h1>
    <h1 style={myStyle}>MyPage</h1>
    <h1 className={moduleStyle.myModule}>MyPage</h1>
    </>
  )
}

export default MyPage