from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from transcribe import transcribe_audio
from organize import organize_text

app = FastAPI(title="Voice-to-Thought Organizer")

@app.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    # Read the uploaded audio file (you might need to save it locally for Vosk)
    contents = await file.read()
    # Save to a temporary file (for example purposes)
    with open("temp_audio.wav", "wb") as f:
        f.write(contents)
    # Transcribe audio using Vosk
    transcription = transcribe_audio("temp_audio.wav")
    return JSONResponse(content={"transcription": transcription})

@app.post("/organize")
async def organize(transcription: dict):
    text = transcription.get("text", "")
    if not text:
        return JSONResponse(status_code=400, content={"error": "No text provided"})
    # Process text using NLP to organize thoughts
    organized = organize_text(text)
    return JSONResponse(content={"organized_text": organized})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

