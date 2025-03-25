import os
import wave
from vosk import Model, KaldiRecognizer

# Load Vosk model (ensure the model is downloaded and the path is correct)
MODEL_PATH = "model"  # Replace with your actual model directory
if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError("Vosk model not found. Download and place it in the 'model' directory.")

model = Model(MODEL_PATH)

def transcribe_audio(file_path: str) -> str:
    wf = wave.open(file_path, "rb")
    if wf.getnchannels() != 1 or wf.getsampwidth() != 2 or wf.getcomptype() != "NONE":
        raise ValueError("Audio file must be WAV format mono PCM.")
    
    rec = KaldiRecognizer(model, wf.getframerate())
    result_text = ""
    while True:
        data = wf.readframes(4000)
        if len(data) == 0:
            break
        if rec.AcceptWaveform(data):
            result = rec.Result()
            # Extract text from result (in production, parse JSON properly)
            result_text += result + " "
    # Finalize and get last bits
    result_text += rec.FinalResult()
    return result_text

