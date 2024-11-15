const FUNCTIONS = [
  {
    nodeType: "function_declaration with a param and a return type",
    fileName: "functions.ts",
    language: "TypeScript",
    cursorPosition: { line: 3, character: 9 },
    definitionPositions: [
      { row: 2, column: 34 }, // Person
      { row: 2, column: 44 }, // Address
    ],
  },
  {
    nodeType: "function_declaration with array param",
    fileName: "functions.ts",
    language: "TypeScript",
    cursorPosition: { line: 7, character: 9 },
    definitionPositions: [
      { row: 6, column: 39 }, // Person
      { row: 6, column: 51 }, // Address
    ],
  },
  {
    nodeType: "function_declaration without return type",
    fileName: "functions.ts",
    language: "TypeScript",
    cursorPosition: { line: 11, character: 9 },
    definitionPositions: [
      { row: 10, column: 33 }, // Person
    ],
  },
  {
    nodeType: "function_declaration without params",
    fileName: "functions.ts",
    language: "TypeScript",
    cursorPosition: { line: 15, character: 9 },
    definitionPositions: [
      { row: 14, column: 39 }, // Person
    ],
  },
  {
    nodeType: "function_declaration with array params and array return type",
    fileName: "functions.ts",
    language: "TypeScript",
    cursorPosition: { line: 19, character: 9 },
    definitionPositions: [
      { row: 18, column: 36 }, // Person
      { row: 18, column: 48 }, // Address
    ],
  },
  {
    nodeType:
      "function_declaration with generic params and generic return type",
    fileName: "functions.ts",
    language: "TypeScript",
    cursorPosition: { line: 23, character: 9 },
    definitionPositions: [
      { row: 22, column: 44 }, // Person
      { row: 22, column: 52 }, // Address
      { row: 22, column: 62 }, // Person
      { row: 22, column: 70 }, // Address
    ],
  },
  {
    nodeType:
      "function_declaration with union type params and union return type",
    fileName: "functions.ts",
    language: "TypeScript",
    cursorPosition: { line: 27, character: 9 },
    definitionPositions: [
      { row: 26, column: 42 }, // Person
      { row: 26, column: 52 }, // Address
      { row: 26, column: 61 }, // Person
      { row: 26, column: 71 }, // Address
    ],
  },
];

const ARROW_FUNCTIONS = [
  {
    nodeType: "arrow_function with a param and a return type",
    fileName: "arrowFunctions.ts",
    language: "TypeScript",
    cursorPosition: { line: 3, character: 9 },
    definitionPositions: [
      { row: 2, column: 34 }, // Person
      { row: 2, column: 44 }, // Address
    ],
  },
  {
    nodeType: "arrow_function without return type",
    fileName: "arrowFunctions.ts",
    language: "TypeScript",
    cursorPosition: { line: 7, character: 9 },
    definitionPositions: [
      { row: 6, column: 33 }, // Person
    ],
  },
  {
    nodeType: "arrow_function without params",
    fileName: "arrowFunctions.ts",
    language: "TypeScript",
    cursorPosition: { line: 11, character: 9 },
    definitionPositions: [
      { row: 10, column: 39 }, // Person
    ],
  },
  {
    nodeType: "arrow_function with array params and array return type",
    fileName: "arrowFunctions.ts",
    language: "TypeScript",
    cursorPosition: { line: 15, character: 9 },
    definitionPositions: [
      { row: 14, column: 36 }, // Person
      { row: 14, column: 48 }, // Address
    ],
  },
  {
    nodeType: "arrow_function with generic params and generic return type",
    fileName: "arrowFunctions.ts",
    language: "TypeScript",
    cursorPosition: { line: 19, character: 9 },
    definitionPositions: [
      { row: 18, column: 43 }, // Person
      { row: 18, column: 51 }, // Address
      { row: 18, column: 61 }, // Person
      { row: 18, column: 69 }, // Address
    ],
  },
  {
    nodeType: "arrow_function with union type params and union return type",
    fileName: "arrowFunctions.ts",
    language: "TypeScript",
    cursorPosition: { line: 23, character: 9 },
    definitionPositions: [
      { row: 22, column: 42 }, // Person
      { row: 22, column: 52 }, // Address
      { row: 22, column: 61 }, // Person
      { row: 22, column: 71 }, // Address
    ],
  },
];

const CLASS_METHODS = [
  {
    nodeType: "method_declaration with a param and a return type",
    fileName: "classMethods.ts",
    language: "TypeScript",
    cursorPosition: { line: 4, character: 11 },
    definitionPositions: [
      { row: 3, column: 33 }, // Person
      { row: 3, column: 43 }, // Address
    ],
  },
  {
    nodeType: "method_declaration without arguments",
    fileName: "classMethods.ts",
    language: "TypeScript",
    cursorPosition: { line: 8, character: 11 },
    definitionPositions: [
      { row: 7, column: 32 }, // Address
    ],
  },
  {
    nodeType: "method_declaration without return type",
    fileName: "classMethods.ts",
    language: "TypeScript",
    cursorPosition: { line: 12, character: 11 },
    definitionPositions: [
      { row: 11, column: 26 }, // Person
    ],
  },
  {
    nodeType: "method_declaration with array type arguments",
    fileName: "classMethods.ts",
    language: "TypeScript",
    cursorPosition: { line: 16, character: 11 },
    definitionPositions: [
      { row: 15, column: 26 }, // Person
    ],
  },
  {
    nodeType:
      "method_declaration with array type arguments and array type return",
    fileName: "classMethods.ts",
    language: "TypeScript",
    cursorPosition: { line: 20, character: 11 },
    definitionPositions: [
      { row: 19, column: 29 }, // Person
      { row: 19, column: 41 }, // Address
    ],
  },
  {
    nodeType:
      "method_declaration with with generic params and generic return type",
    fileName: "classMethods.ts",
    language: "TypeScript",
    cursorPosition: { line: 24, character: 11 },
    definitionPositions: [
      { row: 23, column: 37 }, // Person
      { row: 23, column: 45 }, // Address
      { row: 23, column: 55 }, // Person
      { row: 23, column: 63 }, // Address
    ],
  },
  {
    nodeType: "method_declaration with union type params and union return type",
    fileName: "classMethods.ts",
    language: "TypeScript",
    cursorPosition: { line: 28, character: 11 },
    definitionPositions: [
      { row: 27, column: 35 }, // Person
      { row: 27, column: 45 }, // Address
      { row: 27, column: 54 }, // Person
      { row: 27, column: 64 }, // Address
    ],
  },
];

export const TYPESCRIPT_TEST_CASES = [
  ...FUNCTIONS,
  ...ARROW_FUNCTIONS,
  ...CLASS_METHODS,
];
