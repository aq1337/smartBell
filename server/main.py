from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# uvicorn main:app --reload
# to start the app

app = FastAPI()

origins = ["http://localhost:4200"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message":"Hello World"}

@app.post("/openDoor")
async def root():
   return {"test":"123"}

    
@app.post("/ringBell")
async def root():
    return {"message":"Door opened"}