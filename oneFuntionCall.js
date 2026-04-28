/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasRun = false;
    return function(...args){
        if(hasRun === true){
            return undefined;
        } 
        else{
            let res=fn(...args);
            hasRun=true;
            return res;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
