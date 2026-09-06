#!/bin/bash
# Usage: ./scripts/new-post.sh "My Post Title"
# Creates a new blog post file with pre-filled frontmatter.

TITLE="${1:-New Post}"
DATE=$(date +"%b %d %Y")
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-\|-$//g')
FILENAME="src/content/blog/${SLUG}.mdx"

if [ -f "$FILENAME" ] || [ -f "src/content/blog/${SLUG}.md" ]; then
  echo "Error: $FILENAME already exists."
  exit 1
fi

cat > "$FILENAME" << EOF
---
title: "${TITLE}"
description: ""
pubDate: "${DATE}"
heroImage: ""
tags: []
---

Write your post content here.
EOF

echo "Created: $FILENAME"
echo "Open it and fill in the description, tags, and content."
