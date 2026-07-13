import { ref } from 'vue'

function formatDisplay(value) {
  if (value === 'Error') return value
  const num = Number(value)
  if (Number.isNaN(num)) return '0'

  const str = String(num)
  if (str.length <= 12) return str

  return num.toExponential(6)
}

function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return b === 0 ? 'Error' : a / b
    default:
      return b
  }
}

export function useCalculator() {
  const display = ref('0')
  const previousValue = ref(null)
  const operator = ref(null)
  const waitingForOperand = ref(false)

  function reset() {
    display.value = '0'
    previousValue.value = null
    operator.value = null
    waitingForOperand.value = false
  }

  function inputDigit(digit) {
    if (display.value === 'Error') reset()

    if (waitingForOperand.value) {
      display.value = String(digit)
      waitingForOperand.value = false
      return
    }

    display.value = display.value === '0' ? String(digit) : display.value + digit
  }

  function inputDecimal() {
    if (display.value === 'Error') reset()

    if (waitingForOperand.value) {
      display.value = '0.'
      waitingForOperand.value = false
      return
    }

    if (!display.value.includes('.')) {
      display.value += '.'
    }
  }

  function backspace() {
    if (display.value === 'Error' || waitingForOperand.value) {
      reset()
      return
    }

    if (display.value.length <= 1 || (display.value.length === 2 && display.value.startsWith('-'))) {
      display.value = '0'
      return
    }

    display.value = display.value.slice(0, -1)
  }

  function setOperator(nextOperator) {
    if (display.value === 'Error') return

    const inputValue = Number(display.value)

    if (previousValue.value !== null && operator.value && !waitingForOperand.value) {
      const result = calculate(previousValue.value, inputValue, operator.value)
      if (result === 'Error') {
        display.value = 'Error'
        previousValue.value = null
        operator.value = null
        waitingForOperand.value = false
        return
      }
      display.value = formatDisplay(result)
      previousValue.value = result
    } else {
      previousValue.value = inputValue
    }

    waitingForOperand.value = true
    operator.value = nextOperator
  }

  function equals() {
    if (display.value === 'Error' || operator.value === null || previousValue.value === null) return

    const inputValue = Number(display.value)
    const result = calculate(previousValue.value, inputValue, operator.value)

    display.value = result === 'Error' ? 'Error' : formatDisplay(result)
    previousValue.value = null
    operator.value = null
    waitingForOperand.value = true
  }

  const buttons = [
    { label: 'C', action: 'clear', variant: 'utility' },
    { label: '⌫', action: 'backspace', variant: 'utility' },
    { label: '÷', action: 'operator', value: '/', variant: 'operator' },
    { label: '×', action: 'operator', value: '*', variant: 'operator' },
    { label: '7', action: 'digit', value: '7' },
    { label: '8', action: 'digit', value: '8' },
    { label: '9', action: 'digit', value: '9' },
    { label: '−', action: 'operator', value: '-', variant: 'operator' },
    { label: '4', action: 'digit', value: '4' },
    { label: '5', action: 'digit', value: '5' },
    { label: '6', action: 'digit', value: '6' },
    { label: '+', action: 'operator', value: '+', variant: 'operator' },
    { label: '1', action: 'digit', value: '1' },
    { label: '2', action: 'digit', value: '2' },
    { label: '3', action: 'digit', value: '3' },
    { label: '=', action: 'equals', variant: 'equals', span: 1 },
    { label: '0', action: 'digit', value: '0', span: 2 },
    { label: '.', action: 'decimal' },
  ]

  function handleButton(button) {
    switch (button.action) {
      case 'clear':
        reset()
        break
      case 'backspace':
        backspace()
        break
      case 'digit':
        inputDigit(button.value)
        break
      case 'decimal':
        inputDecimal()
        break
      case 'operator':
        setOperator(button.value)
        break
      case 'equals':
        equals()
        break
      default:
        break
    }
  }

  return {
    display,
    buttons,
    handleButton,
  }
}
