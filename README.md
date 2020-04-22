## Overview
![alt text](https://img.shields.io/badge/mongoose-5.9-blue)
![alt text](https://img.shields.io/badge/mongoDB-4.2-yellow)
![alt text](https://img.shields.io/badge/express-4.17-green)
![alt text](https://img.shields.io/badge/nodetelegrambotapi-0.1-red)
![alt text](https://img.shields.io/badge/momentjs-2.24-green)

This is beta version of 2 Factor Auth open API. 

* `Generate Token` 
* `Send Token to Telegram`
* `Verify token`


## Version

![alt text](https://img.shields.io/badge/ver-0.1-blue)

## API
### Generate & Send Token
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
    "message": "token active not found -400016164"
}
```
