migrate((db) => {
  const collection = new Collection({
    "id": "qgd1uh5eemf9khc",
    "created": "2023-05-08 02:44:24.947Z",
    "updated": "2023-05-08 02:44:24.947Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "atvokd5l",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 144,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4xdrgfza",
        "name": "profile",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "p4mfpz0m",
        "name": "post",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "yhprya4an4fma2o",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "profile = @request.auth.id",
    "updateRule": "profile = @request.auth.id",
    "deleteRule": "profile = @request.auth.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qgd1uh5eemf9khc");

  return dao.deleteCollection(collection);
})
