module.exports = function reverse (n) {
        if (n < 0) {
        let nN = n * (-1);
        nN = nN + "";
        return nN.split("").reverse().join("");
        }
        if (n > 0) {
            n = n + "";
            return n.split("").reverse().join("");
        }
    }
