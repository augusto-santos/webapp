import axios from 'axios'

export function ConnGetById(url, id){
    axios.get(url,{
        params: {
            ID: id
        }
    })
    .then(function(res){
        return res
    })
}