from fastapi import FastAPI

#import routes
from app.server.routes.userRoute import router as UserRouter

app = FastAPI()

#This tag is a identifier for route
#add same tag to different route to put them in a single group
@app.get("/",tags=["Root"])
async def read_root():
    return {"message":"Welcome to Flood Forecasting System"}

#add routes to app
app.include_router(UserRouter, tags=["User"], prefix="/user")