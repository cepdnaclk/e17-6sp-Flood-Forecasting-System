from typing import Optional
from wsgiref.validate import validator
from pydantic import BaseModel,Field

class UserScheama(BaseModel):
    name: str = Field(...)
    phoneNumber : int = Field(...)

    # @validator("phoneNumber")
    # def validate_phone(cls, v):
    #     regex = r"^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
    #     if v and not re.search(regex, v, re.I):
    #         raise ValueError("Phone Number Invalid.")
    #     return v
    
    class Config:
        orm_mode = True
        use_enum_values = True
        


def ResponseModel(data, message):
    return {
        "name": data["name"],
        "phoneNumber":data["phoneNumber"],
        "message": message,
    }