
const user = {
    name: 'fefef',
    address: {
        personal: {
            city: 'abc',
            area: 'def'
        },
        office: {
            city: 'jjd',
            area: 'rere'
        },
    }
}



function magic (obj, name) {
    let res = {}
    const keys = Object.keys(obj)
    for (let i=0; i<keys.length; i++) {
        if (typeof obj[keys[i]] !== 'object') {
            res[name + '_' + keys[i]] = obj[keys[i]]
        } else {
            res = {...res,...magic(obj[keys[i]], name + '_' + keys[i])}
        }
    }
    return res;
}


const result = magic(user, 'user')
console.log(result)

