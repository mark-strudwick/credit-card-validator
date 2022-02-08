const luhn = require('luhn-alg')

const formatCardNumberLength = (cardNumber: string) => {
  // Removes whitespace
  const formattedCardNumber = cardNumber.replace(/\s/g, '')
  if (formattedCardNumber.length != 16) {
    return null
  }

  return formattedCardNumber
}

const validateCardNumber = (cardNumber: string) => {
  const formattedCardNumber = formatCardNumberLength(cardNumber)
  if (!formattedCardNumber) {
    return false
  }
  return luhn(formattedCardNumber)
}

export { formatCardNumberLength, validateCardNumber }
