
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0)
        return [];
    
    let res = [];
    
    matrix.forEach((e, i) => {
        if (i % 2 === 0)
            res.push(...e);
        else
            res.push(...e.reverse());
    })
    
    return res;
}
