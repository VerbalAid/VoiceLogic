import spacy
from transformers import pipeline

# Load spaCy model for basic NLP tasks
nlp = spacy.load("en_core_web_sm")

# Load a summarization model from Hugging Face
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def organize_text(text: str) -> str:
    # Use spaCy to break text into sentences
    doc = nlp(text)
    sentences = [sent.text for sent in doc.sents]
    
    # Optionally, join sentences and then run through a summarizer
    combined_text = " ".join(sentences)
    
    # Get a summary (adjust parameters as needed)
    summary = summarizer(combined_text, max_length=150, min_length=30, do_sample=False)
    organized_text = summary[0]['summary_text'] if summary else combined_text
    
    return organized_text

