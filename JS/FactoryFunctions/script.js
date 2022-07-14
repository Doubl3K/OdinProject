const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return { sayName };
}

const Nerd = (name) => {
    const { sayName } = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return { sayName, doSomethingNerdy };
}

const jeff = Nerd('jeff');
const torsten = Nerd('torsten');

jeff.sayName();
jeff.doSomethingNerdy();
torsten.sayName();
torsten.doSomethingNerdy();

const proto = {
    hello() {
        return `Hello, my name is ${ this.name }`;
    }
};

const greeter = (name) => Object.assign(Object.create(proto), {
    name
});

const george = greeter('george');

const msg = george.hello();

console.log(msg);