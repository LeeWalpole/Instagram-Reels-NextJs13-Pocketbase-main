migrate((db) => {
  const collection = new Collection({
    "id": "yhprya4an4fma2o",
    "created": "2023-05-08 02:44:24.946Z",
    "updated": "2023-05-08 02:44:24.946Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "glreyfm4",
        "name": "profile",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "frks4nxf",
        "name": "fileUrl",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "video/mp4"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "hwc7zank",
        "name": "caption",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id = profile",
    "updateRule": "@request.auth.id = profile",
    "deleteRule": "@request.auth.id = profile",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yhprya4an4fma2o");

  return dao.deleteCollection(collection);
})
