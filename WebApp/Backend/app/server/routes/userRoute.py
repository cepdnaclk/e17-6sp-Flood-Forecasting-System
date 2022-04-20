from fastapi import APIRouter, Body, Response
from fastapi.encoders import jsonable_encoder
from server.database import database
from server.models.user import (UserScheama , ResponseModel)

user_collection = database.get_collection("users")

router = APIRouter()

#this route finds a user by registered phone number
@router.get("/",tags=["User"])
async def retrive_user(phoneNumber:int, res : Response):
    user = await user_collection.find_one({"phoneNumber":phoneNumber})
    if(user):
        return ResponseModel(user,"User found")
    res.status_code = 404
    return {"message":"User not found"}

#this route is for register a user in the system
#need phone number and name
@router.post("/",tags=["User"], status_code = 201)
async def add_user_data(res: Response ,user: UserScheama = Body(...) ):
    user = jsonable_encoder(user)
    curr_user = await user_collection.find_one({"phoneNumber":user["phoneNumber"]})
    if(curr_user):
        res.status_code = 409
        return {"message":"The phone number is already registered"}
    else:
        new_user = await user_collection.insert_one(user)
        if new_user:
            return {"message":"user registration succeed"}
    res.stats_code = 400
    return {"message":"user registration failed"}
    