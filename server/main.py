from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from gpio import ring_bell
from gpio import open_door

# uvicorn main:app --reload
# to start the app

app = FastAPI()

origins = ["http://localhost:4200","http://localhost:4201"]

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
   open_door(1,5)
   return {"message":"Door opened succesfully"}

    
@app.post("/ringBell")
async def root():
    ring_bell(2,2)
    return {"message":"Bell ring"}