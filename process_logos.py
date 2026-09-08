import sys
from PIL import Image

def process_logo(input_path, output_path, crop_box=None):
    try:
        img = Image.open(input_path).convert("RGBA")
        
        if crop_box:
            img = img.crop(crop_box)
            
        data = img.getdata()
        new_data = []
        for item in data:
            # item is (R, G, B, A)
            # If the pixel is very dark (close to black), make it transparent
            # Calculate luminance
            lum = 0.2126 * item[0] + 0.7152 * item[1] + 0.0722 * item[2]
            if lum < 30: # Threshold for black background
                # Make transparent, maybe with some alpha blending
                alpha = int((lum / 30.0) * 255)
                new_data.append((item[0], item[1], item[2], alpha))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "WEBP", lossless=False, quality=90)
        print(f"Processed {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process THW Logo
# Original is 1024x1024. The monogram is likely in the top center. Let's not guess crop too much, just remove background
# Wait, for THW, the user said "remove the background and just keep the exact logo on top and below that just keep THW INTERNATIONAL".
# Actually, the THW circle logo has "THW INTERNATIONAL" written around the circle. 
# It's better to crop out the bottom text "INTEGRATED LEATHER..." and maybe just use the circle.
# Let's crop it tightly to the circle. The circle is roughly centrally located.
# Let's try cropping 10% from bottom.
process_logo("/Users/pmmohammedwaaiz/.gemini/antigravity-ide/brain/c22e6cb0-310b-4e93-a6b3-90e9b9cb0f0d/.user_uploaded/media_1788845790738.jpg", "public/assets/logos/thw-logo-clean.webp", (0, 0, 1024, 850))

# Process AN NASSR Logo
# Original is 1024x1024. The "AN" monogram is on top, text is below.
# The monogram is roughly the top 60% of the image.
process_logo("/Users/pmmohammedwaaiz/.gemini/antigravity-ide/brain/c22e6cb0-310b-4e93-a6b3-90e9b9cb0f0d/.user_uploaded/media_1788846303187.jpg", "public/assets/logos/an-nassr-logo-clean.webp", (150, 150, 874, 600))

