const checkToeplitz = require("../src/toeplitz");

test("Should return true if matrix is toeplitz", () => {
  const n = 5;
  const m = 4;
  const matrixIsToeplitz = [
    [6, 7, 8, 9],
    [4, 6, 7, 8],
    [1, 4, 6, 7],
    [0, 1, 4, 6],
    [2, 0, 1, 4],
  ];

  const isToeplitz = checkToeplitz(matrixIsToeplitz, n, m);
  
  expect(isToeplitz).toBe(true);
});

test("Should return false if matrix is not toeplitz", () => {
    const n = 3;
    const m = 3;
    const matrixIsNotToeplitz = [
        [2, 7, 8],
        [4, 6, 7],
        [1, 4, 6],
    ];
  
    const isToeplitz = checkToeplitz(matrixIsNotToeplitz, n, m);
    
    expect(isToeplitz).toBe(false);
  });


