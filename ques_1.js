function abc() {
    console.log(a);

    // let & const will be hoisted as well, but they are going to the temporal dead zone
    const c = 30;
    let b = 20;

    // var will be hoisted completely
    var a = 10;
}

abc();