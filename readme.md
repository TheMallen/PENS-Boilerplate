PENS Stack Boilerplate
======================

This repository gives you a simple boilerplate for rapidly developing an application using the PENS stack (nobody calls it that but me).

PENS:
------
- **P**olymer (client-side framework)
- **E**pilogue & Express (routing frameworks)
- **N**ode (server)
- **S**equelize (data access)

Installing
----------
This will be links later

- download node, git, npm and bower
- clone this repository
- run `npm install` and `bower install`
- start hacking!

Running
--------
- run `npm run start`

Creating a new Model and exposing Resource
-------------------------------------------
Sequelize and Epilogue team up to make creating routes super easy.

- Create a model in it's own file in `db/models` example:
```javascript
   //db/models/post.js 
   module.exports = function (sequelize, DataTypes) {
   var post = sequelize.define("post", {
     text: DataTypes.STRING,
     title: DataTypes.STRING
     }, {
      classMethods: {
        associate: function (models) {
        }
      }
    });
    return TodoItem;
  }
```
- Add your resource to `api/index.js`
```javascript
  var todoItems = rest.resource({
      model: db.models.post,
      endpoints: ['/posts', '/posts/:id'],
  });  
```
- Test your application
  - run `npm run start`
  - use a rest client (eg. POSTman) and interact with `/api/posts`
  - you should have basic CRUD routes now.


TODO
----
- consider a resources folder similar to models which is auto included
- create generator for model/resource
- create generator for polymer element
- tests