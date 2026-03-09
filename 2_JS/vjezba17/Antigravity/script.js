document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const rowsInput = document.getElementById('rows');
    const colsInput = document.getElementById('cols');
    const matrixContainer = document.getElementById('matrixContainer');

    function createCyclicalMatrix(rows, cols) {
        // Initialize an empty matrix
        const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
        
        let num = 1;
        let maxNum = rows * cols;
        
        let top = 0;
        let bottom = rows - 1;
        let left = 0;
        let right = cols - 1;

        // Edunova-style cyclical matrix: bottom-right -> left -> up -> right -> down
        while (num <= maxNum) {
            // 1. Bottom row, moving Right to Left
            for (let j = right; j >= left && num <= maxNum; j--) {
                matrix[bottom][j] = num++;
            }
            bottom--;

            // 2. Left column, moving Bottom to Top
            for (let i = bottom; i >= top && num <= maxNum; i--) {
                matrix[i][left] = num++;
            }
            left++;

            // 3. Top row, moving Left to Right
            for (let j = left; j <= right && num <= maxNum; j++) {
                matrix[top][j] = num++;
            }
            top++;

            // 4. Right column, moving Top to Bottom
            for (let i = top; i <= bottom && num <= maxNum; i++) {
                matrix[i][right] = num++;
            }
            right--;
        }
        
        return matrix;
    }

    function renderMatrix(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        
        // Clear previous content
        matrixContainer.innerHTML = '';
        
        // Setup CSS Grid
        matrixContainer.style.gridTemplateColumns = `repeat(${cols}, auto)`;
        matrixContainer.style.gridTemplateRows = `repeat(${rows}, auto)`;
        
        const totalCells = rows * cols;
        const cellsData = [];

        // Create DOM elements and map them by their value for sequential animation
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const cellValue = matrix[i][j];
                const cellEl = document.createElement('div');
                cellEl.classList.add('matrix-cell');
                cellEl.textContent = cellValue;
                
                matrixContainer.appendChild(cellEl);
                
                // Keep track of cells to animate them in number order
                cellsData.push({
                    element: cellEl,
                    value: cellValue
                });
            }
        }
        
        // Sort cells by their matrix value (1 to max)
        cellsData.sort((a, b) => a.value - b.value);
        
        // Animate cells sequentially based on their values
        // We use a base delay that gets smaller if the grid is larger, to keep animations snappy
        const delayPerCell = Math.max(20, Math.min(100, 1000 / totalCells));
        
        cellsData.forEach((cellData, index) => {
            setTimeout(() => {
                cellData.element.classList.add('animate-in');
            }, index * delayPerCell);
        });
    }

    function handleGenerate() {
        const rows = parseInt(rowsInput.value) || 5;
        const cols = parseInt(colsInput.value) || 5;
        
        // Clamp values to prevent browser freezing
        const safeRows = Math.min(Math.max(rows, 1), 50);
        const safeCols = Math.min(Math.max(cols, 1), 50);
        
        // Update inputs if they were clamped
        if (rows !== safeRows) rowsInput.value = safeRows;
        if (cols !== safeCols) colsInput.value = safeCols;

        generateBtn.disabled = true;
        generateBtn.style.opacity = '0.7';
        
        const matrix = createCyclicalMatrix(safeRows, safeCols);
        renderMatrix(matrix);
        
        // Re-enable button after animation finishes
        const animationTime = (safeRows * safeCols * Math.max(20, Math.min(100, 1000 / (safeRows * safeCols)))) + 500;
        setTimeout(() => {
            generateBtn.disabled = false;
            generateBtn.style.opacity = '1';
        }, animationTime);
    }

    // Initial generation
    handleGenerate();

    // Event listener for button
    generateBtn.addEventListener('click', handleGenerate);
});
