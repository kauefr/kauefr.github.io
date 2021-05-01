class MyObject {
    with(params) {
        let newObject = Object.create(Object.getPrototypeOf(this));
        return Object.assign(newObject, this, params);
    }
}

export { MyObject };