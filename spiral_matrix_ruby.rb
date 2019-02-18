def spiral_matrix(matrix) 
    matrix == [] ? [] : matrix.shift + spiral_matrix(matrix.transpose.reverse)
end