function test1(x) {
    let some = test2(x)
    return some
}

function test2(x) {
    return x * 2
}

console.log(test1(2))
