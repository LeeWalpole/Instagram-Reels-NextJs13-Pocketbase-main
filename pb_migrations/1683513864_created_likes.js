migrate((db) => {
  const collection = new Collection({
    "id": "md7u1557irbwfs2",
    "created": "2023-05-08 02:44:24.947Z",
    "updated": "2023-05-08 02:44:24.947Z",
    "name": "likes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vxcffn5f",
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
      },
      {
        "system": false,
        "id": "hk3az2ev",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != \"\"",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("md7u1557irbwfs2");

  return dao.deleteCollection(collection);
})
