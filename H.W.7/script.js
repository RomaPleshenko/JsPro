
let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};
function salary (data) {
    if (Array.isArray(data)) {
        return data.reduce((sum, employee) => sum + employee.salary, 0);
    } else {
        return Object.values(data).reduce((sum, subDept) => sum + salary(subDept), 0);
    }
}
console.log(salary(company));
