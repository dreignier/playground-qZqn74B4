Let's do some pratice. A last challenge and we are done !

You are a developper in a big company with multiple databases across the world. Your job is to assemble all the informations for a user personnal profile. But the informations are dispatched in the differents databases and services.

Your function takes a simple `id` (a number). And you have to return a promise with an object as data. The object must contains all this informations:

```
{
    id: A number,
    username: A string,
    country: A string,
    firstname: A string,
    lastname: A string,
    email: A string
}
```

To achieve your task, you must use the differents provided services:

* `central`: Because of the amount of users, we can't store them into the same database. So we have 3 databases. The `central` database contains in which database the users are stored. Use  it like this: `central(id).then(function(data) { ... })`. `data` is a string with 3 possibles values: `'db1'`, `'db2'` and `'db3'`. If the `central` database is in error, your function must returns a rejected promise with `'Error central'` in the data.
* `db1`, `db2` and `db3` contains the basic informations for the users. Use it like this: `db1(id).then(function(username, country) { ... })`. `username` and `country` are the username and the country of the user. If a database is in erreor, your function must returns a rejected promise with `'Error db1'` (or `'Error db2'` or `'Error db3'`) in the data.
* `vault`: Personal data are restricted by law. This particular data are often stored in a specific database. The vault can be used to obtains personal information about a user. Use it like this: `vault(id).then(function(firstname, lastname, email) {...})`. Like for the other databases, the 3 parameters are directly the personal data of the user. If the vault is in error, your function must returns a rejected promise with `'Error vault`' in the data.
* `mark`: Everytime someone read an user profile, we must mark it. The `mark` service will create this mark. Use it like this: `mark(id).then(function() { ... })`. Do not call the mark service if an other service is in error. And do not wait the end of the mark service. If the mark service is in error, don't do anything specific, just returns your promise with the informations.

Every services responds in 100ms, except `vault` (security for personal data is heavier, so it's slower. It will respond in 150ms). Your code must respond in 200ms. If multiple services are in error, returns the first error you found.

@[Change the code to return a promise]({"stubs":["code.js"], "command":"node referee.js", "layout": "aside", "project":"part16"})