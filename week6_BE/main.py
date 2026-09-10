from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
app = FastAPI()

app.mount("/static", StaticFiles(directory="frontend"), name="static")

@app.get("/predict")
def predict_price(
    area: float, bedrooms: int, location: str | None = None
) -> dict:
    base_price = 500_000_000
    if location == "hanoi":
        area_multiplier = 1.3
    elif location == "hcmc":
        area_multiplier = 1.25
    else:
        area_multiplier = 1.0

    adjusted_area = area * area_multiplier
    price = base_price + (adjusted_area * 15_000_000) + (bedrooms * 50_000_000)

    return {
        "predicted_price": int(price),
        "area": round(adjusted_area, 2),
        "bedrooms": bedrooms,
        "location": location,
    }

@app.post("/predict")
class HouseInput(BaseModel):
    area: float 
    bedrooms: int
    location: str | None = None