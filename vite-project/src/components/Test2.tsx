import React, { useState } from 'react'

const Test2 = () => {
    const [title, setTitle] = useState('hogehoge');

    const changeTitle = () => {
        setTitle('藤崎龍也')
    }
  return (
    <div>
        <h1>{title}</h1>
      <button onClick={changeTitle}>登録</button>
    </div>
  )
}

export default Test2

