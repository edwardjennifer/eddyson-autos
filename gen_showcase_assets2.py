import os
import numpy as np

try:
    import imageio.v2 as imageio
except ImportError:
    import imageio

from PIL import Image

width, height = 960, 640
fps = 24
duration_seconds = 4
frame_count = fps * duration_seconds

base = os.path.dirname(os.path.abspath(__file__))
video_dir = os.path.join(base, 'assets', 'videos')
os.makedirs(video_dir, exist_ok=True)


def make_frame(t, theme):
    img = np.zeros((height, width, 3), dtype=np.uint8)

    if theme == 'night-drive':
        img[:, :] = [16, 16, 22]
        for y in range(0, 260):
            shade = int(46 - (y / 260) * 30)
            img[y, :] = [shade + 10, shade + 10, shade + 22]
        # two sweeping headlight streaks, brighter and wider
        for offset, speed in ((0, 1.6), (0.5, 1.3)):
            sx = int(((t * speed + offset) * (width + 400)) % (width + 400)) - 200
            sw = 220
            x0, x1 = max(0, sx), min(width, sx + sw)
            if x1 > x0:
                grad = np.sin(np.linspace(0, np.pi, x1 - x0)) * 190
                img[260:440, x0:x1, 0] = np.clip(img[260:440, x0:x1, 0].astype(np.int16) + grad, 0, 255)
                img[260:440, x0:x1, 1] = np.clip(img[260:440, x0:x1, 1].astype(np.int16) + grad * 0.82, 0, 255)
                img[260:440, x0:x1, 2] = np.clip(img[260:440, x0:x1, 2].astype(np.int16) + grad * 0.55, 0, 255)
        img[460:height, :] = [26, 26, 30]

    elif theme == 'showroom':
        img[:, :] = [24, 20, 15]
        cx = int(width * (0.25 + 0.5 * (0.5 + 0.5 * np.sin(t * 2 * np.pi))))
        cy = int(height * 0.4)
        yy, xx = np.mgrid[0:height, 0:width]
        dist = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2)
        glow = np.clip(1 - dist / 420, 0, 1) ** 1.6
        img[:, :, 0] = np.clip(img[:, :, 0].astype(np.int16) + glow * 220, 0, 255)
        img[:, :, 1] = np.clip(img[:, :, 1].astype(np.int16) + glow * 175, 0, 255)
        img[:, :, 2] = np.clip(img[:, :, 2].astype(np.int16) + glow * 90, 0, 255)
        img[520:height, :] = np.clip(img[520:height, :].astype(np.int16) + [22, 18, 12], 0, 255).astype(np.uint8)

    else:  # precision
        img[:, :] = [18, 22, 28]
        sx = int((t * width * 1.3) % (width + 420)) - 210
        sw = 260
        x0, x1 = max(0, sx), min(width, sx + sw)
        if x1 > x0:
            grad = np.sin(np.linspace(0, np.pi, x1 - x0)) * 160
            for yb in range(0, height, 30):
                img[yb:yb + 16, x0:x1, 2] = np.clip(img[yb:yb + 16, x0:x1, 2].astype(np.int16) + grad, 0, 255)
                img[yb:yb + 16, x0:x1, 1] = np.clip(img[yb:yb + 16, x0:x1, 1].astype(np.int16) + grad * 0.75, 0, 255)
                img[yb:yb + 16, x0:x1, 0] = np.clip(img[yb:yb + 16, x0:x1, 0].astype(np.int16) + grad * 0.4, 0, 255)

    yy, xx = np.mgrid[0:height, 0:width]
    cx2, cy2 = width / 2, height / 2
    dist2 = np.sqrt(((xx - cx2) / width) ** 2 + ((yy - cy2) / height) ** 2)
    vignette = np.clip(1 - dist2 * 0.45, 0, 1)
    img = (img * vignette[:, :, np.newaxis]).astype(np.uint8)
    return img


themes = ['night-drive', 'showroom', 'precision']

for theme in themes:
    frames = [make_frame(i / frame_count, theme) for i in range(frame_count)]
    out_path = os.path.join(video_dir, f'{theme}.mp4')
    writer = imageio.get_writer(out_path, fps=fps, codec='libx264', macro_block_size=1, quality=7)
    for f in frames:
        writer.append_data(f)
    writer.close()

    poster = make_frame(0.2, theme)
    Image.fromarray(poster).save(os.path.join(base, 'assets', f'{theme}-poster.jpg'), quality=88)
    print('DONE', theme, os.path.exists(out_path), os.path.getsize(out_path))
