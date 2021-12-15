import pymongo
from os import getenv
import json
from bson import json_util

class Database():

    def __init__(self):
        self.client = pymongo.MongoClient(getenv("DB_URI"))
        self.db = self.client["Hackaton"]

    def getAll(self, colection, filters=None):
        data = []
        try:
            if filters is None:
                for post in self.db[colection].find():
                    data.append(post)

            else:
                for post in self.db[colection].find(filters):
                    data.append(post)

            return json.loads(json_util.dumps(data))

        except Exception as e:
            raise e

    def getOne(self, colection, filters=None):
        try:
            if filters is None:
                data = self.db[colection].find_one()

            else:
                data = self.db[colection].find_one(filters)

            return json.loads(json_util.dumps(data))

        except Exception as e:
            raise e

    def insert(self, colection, objects):
        post = self.db[colection].insert_many(objects)
        return json.loads(json_util.dumps(post.inserted_ids))

    def update(self, colection, query, data):
        self.db[colection].update_one(query, {"$set": data})

    def delete(self, colection, data):
        self.db[colection].delete_one(data)

    def createIndex(self, colection, new_index):
        self.db[colection].create_index([(new_index, pymongo.ASCENDING)], unique=True)
        return "Indices: " ,sorted(list(self.db[colection].index_information()))
