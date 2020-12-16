function checkToeplitz(matrix, n, m) {

    const diagonalElements = {};
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            const key = i - j;

            if(diagonalElements[key]) {

                if(diagonalElements[key] !== matrix[i][j]) {
                    return false;
                }
            }else{
                diagonalElements[key] = matrix[i][j];
            }
        }
    }
    return true;
}

module.exports = checkToeplitz;