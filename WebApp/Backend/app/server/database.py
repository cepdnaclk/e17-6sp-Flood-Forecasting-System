from decouple import config
import motor.motor_asyncio

MONGO_URL = config("MONGO_URL")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)

database = client.FFSDB