from typing import Optional
from pydantic import BaseModel,Field

class UserScheama(BaseModel):
    name: str = Field(...)
    phoneNumber : int = Field(...)


def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }