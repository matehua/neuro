#!/bin/bash

# Create optimized directory if it doesn't exist
mkdir -p public/images/gp-resources/optimized

# Optimize all JPG images in the gp-resources directory
for img in public/images/gp-resources/*.jpg; do
  filename=$(basename "$img")
  echo "Optimizing $filename..."
  
  # Use ImageMagick to resize and optimize the image
  # This will resize images to a maximum width of 1200px while maintaining aspect ratio
  # and set the quality to 80% which is a good balance between quality and file size
  convert "$img" -resize "1200x>" -quality 80 "public/images/gp-resources/optimized/$filename"
done

echo "Optimization complete!"
