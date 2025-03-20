import os
import sys
from PIL import Image

def convert_images_to_webp(directory):
    if not os.path.isdir(directory):
        print("Invalid directory path.")
        return
    
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        
        if os.path.isfile(filepath):
            try:
                with Image.open(filepath) as img:
                    webp_path = os.path.splitext(filepath)[0] + ".webp"
                    img.save(webp_path, "WEBP")
                    print(f"Converted: {filename} -> {webp_path}")
            except Exception as e:
                print(f"Skipping {filename}: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python convert_to_webp.py <directory_path>")
    else:
        convert_images_to_webp(sys.argv[1])
