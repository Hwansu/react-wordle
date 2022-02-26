import React, { useEffect, useState } from 'react'
import word from '../words'

const defaultYN = ['', '', '', '', '']

export default function Row({ str, doCheck }) {
  const [yn, setYN] = useState([...defaultYN])

  const checkWord = () => {
    doCheck
      ? setYN(
          str.split('').map((cur, idx) => {
            return cur === word[idx] ? 'y1' : word.includes(cur) ? 'y2' : 'n'
          })
        )
      : setYN([...defaultYN])
  }

  useEffect(() => {
    // console.log(word)
    checkWord()
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
