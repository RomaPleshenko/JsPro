
let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};
function salary (department) {
    return Object.values(department).reduce((total, subDep) => total + (subDep.salary || salary(subDep)), 0);
}
console.log(salary(company));
