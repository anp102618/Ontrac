from PIL import Image
for p in ['src/assets/home/home.png','src/assets/home/home_bg.png','src/assets/logo/logo.png']:
    img = Image.open(p)
    print(p, img.size, img.mode)
