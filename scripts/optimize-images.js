import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create optimized directory if it doesn't exist
const optimizedDir = path.join(__dirname, '../public/lovable-uploads/optimized');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Logo in navbar
const navbarLogoPath = path.join(__dirname, '../public/lovable-uploads/fbc7796a-e983-486e-b8f9-fb81e753551d.png');
// Other logo
const otherLogoPath = path.join(__dirname, '../public/lovable-uploads/7f3f86e8-9c9f-43b0-b816-834fd576d490.png');

// Optimize navbar logo
sharp(navbarLogoPath)
  .resize({ height: 128 }) // Resize based on height (2 * 64px), maintain aspect ratio
  .webp({ quality: 80 }) // Good balance between quality and file size
  .toFile(path.join(optimizedDir, 'navbar-logo.webp'))
  .then(() => console.log('Navbar logo optimized successfully'))
  .catch(err => console.error('Error optimizing navbar logo:', err));

// Optimize other logo
sharp(otherLogoPath)
  .resize(240, 240) // 2x the display size for high-DPI screens (120px * 2)
  .webp({ quality: 80 }) // Good balance between quality and file size
  .toFile(path.join(optimizedDir, 'other-logo.webp'))
  .then(() => console.log('Other logo optimized successfully'))
  .catch(err => console.error('Error optimizing other logo:', err));
