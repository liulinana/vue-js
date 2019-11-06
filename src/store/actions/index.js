import axios from 'axios';
import qs from 'qs';

export function makeAction(store, data) {

    return new Promise((resolve, reject) => {
        let params = qs.stringify(data.params);

        axios({
            method: data.method,
            url: data.url,
            params,
            // headers: {...headers},
        }).then(
            res => {
                store.commit(data.mutationTypes,{data:res.data});
            }
        ).catch(
            err => {
                reject(err);
            })
    })
}
