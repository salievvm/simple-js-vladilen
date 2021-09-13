// basic
function* strGenerator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator()

// cycle
function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const num = numberGen(7)

// iterator

const iterator = {
    [Symbol.iterator](n = 10) {
        let i = 0

        return {
            next() {
                if (i < n) {
                    return {
                        value: ++i,
                        done: false
                    }
                }
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

// for of - когда определили Symbol.iterator - смогли работать как с forof

for (const k of iter(6)) {
    console.log(k);
}

// create erray from gen function
console.log([...iter(5)]);
