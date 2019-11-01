import axios from 'axios';
import qs from 'qs';

function makeAction(store, data) {

    return new Promise((resolve, reject) => {
        let params = qs.stringify(data.params);
        // @ts-ignore
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

// @ts-ignore
export const sync = (store,data) => makeAction(store,data);
