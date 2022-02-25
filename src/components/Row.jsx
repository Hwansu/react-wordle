import React, { useEffect, useState } from 'react'
import { word } from './Board'

export default function Row({ str, doCheck }) {
  const [yn, setYN] = useState(['', '', '', '', ''])

  const checkWord = (param) => {
    setYN(
      param.split('').map((cur, idx) => {
        return cur === word[idx] ? 'y' : 'n'
      })
    )
  }

  useEffect(() => {
    // if (idx !== row) return
    console.log(str, doCheck)
    doCheck && checkWord(str)
  }, [str, doCheck])

  return (
    <div className="row">
      {yn.map((cur, idx) => (
        <div className={'cell ' + cur} key={idx}>
          {str[idx]}
        </div>
      ))}
    </div>
  )
}
