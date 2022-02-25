import React, { useState } from 'react'
import Row from './Row'

export default function Board() {
  const [rowIdx, setRowIdx] = useState(0)
  const [boards, setBoards] = useState(['', '', '', '', '', '', ''])

  const setDoChecking = () => {
    setRowIdx(rowIdx + 1)
  }

  const addStr = (param) => {
    boards[rowIdx] += param
    setBoards([...boards])
  }

  const deleteStr = () => {
    boards[rowIdx] = boards[rowIdx].substring(0, boards[rowIdx].length - 1)
    setBoards([...boards])
  }

  const handleKeyDown = (e) => {
    // console.log(e.key)
    if (rowIdx >= 7) return
    const str = boards[rowIdx]
    if (str.length >= 5 && e.key === 'Enter') return setDoChecking()
    if (str.length <= 5 && e.key === 'Backspace') return deleteStr()
    e.key.length === 1 && str.length < 5 && addStr(e.key)
  }

  return (
    <div className="board" tabIndex="0" onKeyDown={handleKeyDown}>
      {boards.map((cur, idx) => (
        <Row key={idx} str={cur} doCheck={idx < rowIdx}></Row>
      ))}
    </div>
  )
}
