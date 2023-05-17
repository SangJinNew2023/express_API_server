const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey')

const server = app.listen(3001, () => { //server start
    console.log('Start Server: localhost:3001');
    console.log(uuidAPIKey.create());
});
const key = {
    apiKey: 'XKH9WR3-ABP41Q5-K5CEW8V-FFEKD0Z',
    uuid: 'ece29e60-52ec-40dc-9958-ee237bdd3683'
}

// console.log(uuidAPIKey.create()); //create unique key
app.get('/api/users/:apikey/:type', async (req, res) => { //:type은 어떤 값이든 들어올 수 있음
    let {apikey, type} = req.params;
    console.log(apikey, type)

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey is not valid.')
    }else {
        if(type == 'seoul') {
            let data = [
                {name:"Hong", city:"seoul"},
                {name:"Kim", city:"seoul"},
            ];
            res.send(data);
        }else if(type =='jeju') {
            let data = [
                {name:"Lee", city:"jeju"},
                {name:"Wang", city:"jeju"},
            ];
            res.send(data);
        }else {
            res.send('Type is not correct.');
        }  
    }    
});


app.get('/api/sales/:apikey/:year', async(req, res) => { //:type은 어떤 값이든 들어올 수 있음
    let {apikey, year} = req.params;
    console.log(apikey, type)

    if(!uuidAPIKey.isAPIKey(apikey) || uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey is not valid.')
    }else {
        if(year =='2019') {
            let data = [
                {product:"computer", amount:20},
                {product:"laptop", amount:30},
            ];
            res.send(data);
        }else if(year == '2020') {
            let data = [
                {product:"computer", amount:40},
                {product:"laptop", amount:60},
            ];
            res.send(data);
        }else {
            res.send('Type is not correct.');
        }  
    }
});