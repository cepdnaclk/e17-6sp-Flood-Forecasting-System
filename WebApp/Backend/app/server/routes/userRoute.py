from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
from app.server.database import database
from app.server.models.user import (UserScheama , ResponseModel)

user_collection = database.get_collection("users")

router = APIRouter()

@router.post("/",tags=["User"])
async def add_user_data(user: UserScheama = Body(...)):
    user = jsonable_encoder(user)
    new_user = await user_collection.insert_one(user)
    if new_user:
        return {"message":"user registration succeed"}
    return {"message":"user registration failed"}
    