//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    return (...args) => {
        const hash = md5(args);
        let found = cache.find(item => item.hash === hash);
        if (found) {
            let result = found['result'];
            console.log(`Из кеша: ${result}`);
            return `Из кеша: ${result}`;
        }
        if (cache.length >= 5) {
            cache.shift();
        }
        const result = func(...args);
        console.log(`Вычисляем: ${result}`);
        cache.push({hash, result});
        return `Вычисляем: ${result}`;
    }
}

//const addAndMultiply = (a, b, c) => (a + b) * c;
//const upgraded = cachingDecoratorNew(addAndMultiply);

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.allCount = 0;
    wrapper.count = 0;
    function wrapper(...args) {
        wrapper.allCount++;
        if (!timeoutId) {
            func(...args);
            wrapper.count++;
        }
        else {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);
    }
    return wrapper;
}