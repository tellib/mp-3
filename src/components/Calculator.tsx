import { useState } from 'react'

export default function Calculator() {
  const [first, setFirst] = useState<string>('')
  const [second, setSecond] = useState<string>('')
  const [result, setResult] = useState<string>('')

  function addition() {
    if (first && second) {
      const _: number = parseFloat(first) + parseFloat(second)
      setResult(_ + '')
    }
  }

  function subtraction() {
    if (first && second) {
      const _: number = parseFloat(first) - parseFloat(second)
      setResult(_ + '')
    }
  }

  function multiplication() {
    if (first && second) {
      const _: number = parseFloat(first) * parseFloat(second)
      setResult(_ + '')
    }
  }

  function division() {
    if (first && second) {
      const _: number = parseFloat(first) / parseFloat(second)
      setResult(_ + '')
    }
  }

  function power() {
    if (first && second) {
      const firstNum: number = parseFloat(first)
      const secondNum: number = parseFloat(second)
      let _: number = firstNum
      for (let i = 1; i < secondNum; i++) {
        _ = _ * firstNum
      }
      setResult(_ + '')
    }
  }

  function clearInputs() {
    setFirst('')
    setSecond('')
    setResult('')
  }

  function Button({
    children,
    onClick,
  }: {
    children: React.ReactNode
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  }) {
    return (
      <button
        className="bg-blue-300 ring-1 py-2 text-xl w-full rounded-2xl hover:translate-y-0.5 transition hover:cursor-pointer font-extrabold"
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  function isNegative(): boolean {
    if (result) {
      return parseFloat(result) < 0
    }
    return false
  }

  return (
    <div className="max-w-96 from-gray-600 to-gray-500 bg-gradient-to-t ring rounded-xl p-4 shadow-md flex flex-col gap-2">
      <div className="flex gap-2">
        <div>
          <label className="font-bold text-white" htmlFor="first">
            First Number
          </label>
          <input
            id="first"
            className="bg-white rounded w-full px-3 py-1"
            value={first}
            onChange={(e) => {
              setFirst(e.currentTarget.value)
            }}
          />
        </div>
        <div>
          <label className="font-bold text-white" htmlFor="second">
            Second Number
          </label>
          <input
            id="second"
            className="bg-white rounded w-full px-3 py-1"
            value={second}
            onChange={(e) => {
              setSecond(e.currentTarget.value)
            }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={addition}>+</Button>
        <Button onClick={subtraction}>-</Button>
        <Button onClick={multiplication}>x</Button>
        <Button onClick={division}>/</Button>
        <Button onClick={power}>**</Button>
      </div>
      <Button onClick={clearInputs}>Clear</Button>
      <div>
        <label className="font-bold text-white" htmlFor="result">
          Result
        </label>
        <input
          id="id"
          className={`bg-white w-full rounded font-bold px-3 py-1 ${
            isNegative() && 'text-red-500'
          }`}
          value={result}
          disabled
        />
      </div>
    </div>
  )
}
