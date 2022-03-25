import pprint
from typing import Optional

from fastapi import FastAPI,Request

from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Profile(BaseModel):
    firstName: str
    lastName: str


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/token")
def read_token():
    return {"accessToken": "myveryveryfaketoken"}


@app.get("/api/items")
def read_root(request: Request):
    pp = pprint.PrettyPrinter(depth=6)
    pp.pprint(request["headers"])
    return [{"item_id": 1, "fruit": "apple"}, {"item_id": 2, "fruit": "pear"}, {"item_id": 3, "fruit": "banana"}, {"item_id": 4, "fruit": "pineapple"}]

@app.post("/api/form")
def create_form(request: Request, profile: Profile):
    pp = pprint.PrettyPrinter(depth=6)
    pp.pprint(request["headers"])
    
    print(profile)

    return {"message": "success"}
