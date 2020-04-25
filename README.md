## Overview
![alt text](https://img.shields.io/badge/mongoose-5.9-blue)
![alt text](https://img.shields.io/badge/mongoDB-4.2-yellow)
![alt text](https://img.shields.io/badge/express-4.17-green)
![alt text](https://img.shields.io/badge/nodetelegrambotapi-0.1-red)
![alt text](https://img.shields.io/badge/momentjs-2.24-green)

This is beta version of 2 Factor Auth open API using node js and telegram bot. 

* `Generate Token` 
* `Send Token to Telegram`
* `Verify token`


## Version

![alt text](https://img.shields.io/badge/ver-0.8-blue)

## Usage
1. To get token, you will need to interact with our telegram bot first, just type `/start` to our bot. 
2. Then get your `chat_id` by interacting with `get id` bot and type `/start`
3. Your `chat_id` will be used as input parameter in APIs

## API
### Generate & Send Token

Token will be expired in 10 minutes

> METHOD : POST
> Endpoint : http://host:port/token
#### Request
```json
{"user":"CHAT_ID"}
```
#### Response
##### 200 OK
```json
[
    {
        "expiredAt": "value",
        "_id": "id",
        "token": "YOUR_TOKEN",
        "user": "CHAT_ID",
        "status": "active",
        "createdAt": "DATE",
        "updatedAt": "DATE",
        "__v": 0
    }
]
```

### Verify Token
> METHOD : POST
> Endpoint : http://host:port/token/verify
#### Request
```json
{"user":"CHAT_ID","token":"TOKEN"}
```
#### Response
##### 200 OK
```json
[
    {
        "expiredAt": "value",
        "_id": "id",
        "token": "YOUR_TOKEN",
        "user": "CHAT_ID",
        "status": "active",
        "createdAt": "DATE",
        "updatedAt": "DATE",
        "__v": 0
    }
]
```
##### 401 Unauthorized
```json
{
    "message": "token active not found"
}
```
