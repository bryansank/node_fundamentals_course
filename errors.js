bug = ()=>{
    return 1 + z
}

try {
    console.log(bug())
} catch (error) {
    console.error("HUBO UN ERORR!: ", Object.getPrototypeOf(error));
    console.log(Object.getOwnPropertyNames(error))
}