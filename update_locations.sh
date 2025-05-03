#!/bin/bash

# List of location files to update
locations=(
  "src/pages/locations/dandenong/index.tsx"
  "src/pages/locations/frankston/index.tsx"
  "src/pages/locations/heidelberg/index.tsx"
  "src/pages/locations/moonee-ponds/index.tsx"
  "src/pages/locations/mornington/index.tsx"
  "src/pages/locations/sunbury/index.tsx"
  "src/pages/locations/werribee/index.tsx"
)

# The text to find and replace
old_text="Personalised exercise programs to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation."
new_text="Personalised exercise programmes to improve posture, strength, flexibility, and mobility. These therapies can be crucial components of both non-surgical management and post-operative rehabilitation."

# Loop through each file and perform the replacement
for file in "${locations[@]}"; do
  if [ -f "$file" ]; then
    # Use sed to replace the text
    sed -i "s/$old_text/$new_text/g" "$file"
    echo "Updated $file"
  else
    echo "File not found: $file"
  fi
done

echo "All files updated successfully!"
