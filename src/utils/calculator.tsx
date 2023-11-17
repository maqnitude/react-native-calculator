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

export const performPositiveOrNegativeOperation = (num: number | null): string | null => {
  if (num === null) { return null; }
  if (num < 0){
    return String(Math.abs(num));
  }
  else {
    return '-' + String(num);
  }
};

export const onButtonPressed = (text: string,
                                currentInput: string,
                                previousInput: string | null,
                                operation: string | null) => {
  switch (text) {
    // . operation
    case '.':
      if (currentInput.indexOf('.') === -1) {
        if (!currentInput)
        {
          return { operation, previousInput, currentInput: currentInput + '0.' }
        }
        return { operation, previousInput, currentInput: currentInput + '.' }
      }
      return { operation, previousInput, currentInput }


    // AC (all clear) operation
    case 'AC':
      if (currentInput || previousInput || operation) {
        return { operation: null, previousInput: null, currentInput: ''};
      }

      return { operation, previousInput, currentInput };

    // Positive/negative conversion operation
    case '+/-':
      if (currentInput !== '') {
        const result = performPositiveOrNegativeOperation(Number(currentInput));
        return { operation, previousInput, currentInput: String(result) }
      }

      return { operation, previousInput, currentInput };

    // Basic operations
    case '+':
      if (operation && currentInput && previousInput) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: '+', previousInput: String(result), currentInput: '' };
      }

      if (currentInput) {
        return { operation: '+', previousInput: currentInput, currentInput: '' };
      }

      return { operation, previousInput, currentInput };

    case '-':
      if (operation && currentInput && previousInput) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: '-', previousInput: String(result), currentInput: '' };
      }

      if (currentInput) {
        return { operation: '-', previousInput: currentInput, currentInput: '' };
      }

      return { operation, previousInput, currentInput };

    case '*':
      if (operation && currentInput && previousInput) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: '*', previousInput: String(result), currentInput: '' };
      }

      if (currentInput) {
        return { operation: '*', previousInput: currentInput, currentInput: '' };
      }

      return { operation, previousInput, currentInput };

    case '/':
      if (operation && currentInput && previousInput) {
        const result = performOperation(Number(previousInput), Number(currentInput), operation);
        return { operation: '/', previousInput: String(result), currentInput: '' };
      }

      if (currentInput) {
        return { operation: '/', previousInput: currentInput, currentInput: '' };
      }

      return { operation, previousInput, currentInput };
    
    // Equal "=" button
    case '=':
      if (operation && currentInput && previousInput) {
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
