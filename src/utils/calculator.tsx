export const performOperation = (num1: number, num2: number, operation: string): number | null => {
  switch (operation) {
    case '+':
      return num1 + num2;
    // Add other operations below
    default:
      return null;
  }
};

export const onButtonPressed = (text: string, currentInput: string, previousInput: string | null, operation: string | null) => {
  switch (text) {
    case '+':
      return { operation: '+', previousInput: currentInput, currentInput: "" };
    case '=':
      if (operation && previousInput !== null) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: null, previousInput: null, currentInput: String(result) };
      }
      return { operation, previousInput, currentInput };
    default:
      return { operation, previousInput, currentInput: currentInput + text };
  }
};
