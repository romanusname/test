export default function access() {

    let roles = {
        guest:{
            paths:[],
            includes:false,
            pos:0
        },
        user:{
            paths:[],
            includes:false,
            pos:1
        },
        admin:{
            paths:['/control'],
            includes:'user',
            pos:2
        },
    }

    for (const key in roles) {
        if(roles[key].includes){
            let includes = roles[key].includes
            roles[key].paths = [...roles[key].paths,...roles[includes].paths]
        }
    }

    return roles
}