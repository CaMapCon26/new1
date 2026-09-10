how to run my code

1. cd new1/week6_BE
2. run interminal: uvicorn main:app --reload
3. open 127.0.0.1:8000/docs to read the instruction about api in my code
4. open http://127.0.0.1:8000/static/house_form.html to go to the UI of the house price project

/predict still work without location because i have fallback execution, the location will be None if it's not filled

/predict without area will return 422 - Unprocessable Entity because no default value provided and when it check url, area is missing and validation fails immediately at the framework layer.
