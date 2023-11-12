export const performOperation = (num1: number, num2: number, operation: string): number | null => {
  switch (operation) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      return num1 / num2;

    default:
      return null;
  }
};

export const performPercentOperation = (num: number | null): number | null => {
  if (num === null) { return null; }
  return num / 100;
};

export const onButtonPressed = (text: string,
                                currentInput: string,
                                previousInput: string | null,
                                operation: string | null) => {
  switch (text) {
    // Basic operations
    case '+':
      if (operation && previousInput) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: '+', previousInput: String(result), currentInput: '' };
      }
      return { operation: '+', previousInput: currentInput, currentInput: '' };

    case '-':
      if (operation && previousInput) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: '-', previousInput: String(result), currentInput: '' };
      }
      return { operation: '-', previousInput: currentInput, currentInput: '' };

    case '*':
      if (operation && previousInput) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: '*', previousInput: String(result), currentInput: '' };
      }
      return { operation: '*', previousInput: currentInput, currentInput: '' };

    case '/':
      if (operation && previousInput) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: '/', previousInput: String(result), currentInput: '' };
      }
      return { operation: '/', previousInput: currentInput, currentInput: '' };

    case '=':
      if (operation && previousInput) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: null, previousInput: null, currentInput: String(result) };
      }
      return { operation, previousInput, currentInput };

    // Logic for '%'
    case '%':
      if (currentInput) {
        const result = performPercentOperation(Number(currentInput));
        return { operation, previousInput, currentInput: String(result) };
      }
      return { operation, previousInput, currentInput };

    default:
      return { operation, previousInput, currentInput: currentInput + text };
  }
};
