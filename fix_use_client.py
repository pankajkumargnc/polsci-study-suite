import os

files_to_fix = [
    r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\ar-masterclass\page.tsx",
    r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\chronology\page.tsx",
    r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\debate\page.tsx",
    r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\mock-test\page.tsx",
    r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\semester-1\page.tsx",
    r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\semester-2\page.tsx",
    r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\semester-3\page.tsx",
    r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\semester-4\page.tsx",
    r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\syllabus\page.tsx"
]

for filepath in files_to_fix:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    
    # Check if 'use client' is present
    has_use_client = any('use client' in line for line in lines)
    if not has_use_client:
        continue

    # Remove all existing 'use client' declarations
    new_lines = []
    for line in lines:
        if 'use client' not in line:
            new_lines.append(line)
            
    # Add it to the top
    new_lines.insert(0, '"use client";')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    print(f"Fixed {filepath}")
