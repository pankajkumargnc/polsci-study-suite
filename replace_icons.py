import os
import re

icon_map = {
    "fa-home": "Home",
    "fa-list-check": "ListChecks",
    "fa-book-open": "BookOpen",
    "fa-book-reader": "BookOpenCheck",
    "fa-layer-group": "Layers",
    "fa-globe": "Globe",
    "fa-bolt": "Zap",
    "fa-project-diagram": "Network",
    "fa-graduation-cap": "GraduationCap",
    "fa-history": "History",
    "fa-file-signature": "FileSignature",
    "fa-brain": "Brain",
    "fa-clone": "Copy",
    "fa-link": "Link",
    "fa-mobile-alt": "Smartphone",
    "fa-hourglass-half": "Hourglass",
    "fa-headphones": "Headphones",
    "fa-landmark": "Landmark",
    "fa-balance-scale": "Scale",
    "fa-comments": "MessageSquare",
    "fa-network-wired": "Network",
    "fa-compass": "Compass",
    "fa-vr-cardboard": "MonitorPlay",
    "fa-robot": "Bot",
    "fa-calendar-day": "Calendar",
    "fa-search": "Search",
    "fa-bars": "Menu",
    "fa-moon": "Moon",
    "fa-sun": "Sun",
    "fa-print": "Printer",
    "fa-times": "X",
    "fa-heart": "Heart",
    "fa-pause": "Pause",
    "fa-play": "Play",
    "fa-redo": "RotateCcw",
    "fa-tasks": "ListTodo",
    "fa-trophy": "Trophy",
    "fa-flag": "Flag",
    "fa-pen-nib": "PenTool",
    "fa-hands-helping": "Handshake",
    "fa-tree": "TreePine",
    "fa-users": "Users",
    "fa-newspaper": "Newspaper",
    "fa-edit": "Edit",
    "fa-handshake": "Handshake",
    "fa-sitemap": "Network",
    "fa-microscope": "Microscope",
    "fa-book": "Book",
    "fa-check-circle": "CheckCircle",
    "fa-star": "Star",
    "fa-chevron-right": "ChevronRight",
    "fa-chevron-left": "ChevronLeft",
    "fa-plus": "Plus",
    "fa-minus": "Minus",
    "fa-bell": "Bell",
    "fa-arrow-right": "ArrowRight"
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match <i className="...fa-icon..." ...></i> or similar
    fa_pattern = r'<i[^>]*className=["\'][^"\']*(fa-[a-z0-9\-]+)[^"\']*["\'][^>]*></i>'
    
    matches = list(re.finditer(fa_pattern, content))
    if not matches:
        return
        
    used_lucide_icons = set()
    
    # We replace from the end to not mess up indices
    for match in reversed(matches):
        full_tag = match.group(0)
        fa_class = match.group(1)
        
        lucide_icon = icon_map.get(fa_class, "CheckCircle")
        used_lucide_icons.add(lucide_icon)
        
        # Extract style or other attributes if present
        attr_pattern = r'<i([^>]*?)className=["\'][^"\']*["\']([^>]*?)></i>'
        attr_match = re.search(attr_pattern, full_tag)
        
        extra_attrs = ""
        if attr_match:
            # Combine attributes before and after className
            extra_attrs = f"{attr_match.group(1)} {attr_match.group(2)}".strip()
            # Clean up multiple spaces
            extra_attrs = re.sub(r'\s+', ' ', extra_attrs)
            if extra_attrs:
                extra_attrs = " " + extra_attrs
        
        replacement = f"<{lucide_icon} size={{18}}{extra_attrs} />"
        
        start, end = match.span()
        content = content[:start] + replacement + content[end:]

    if used_lucide_icons:
        # Avoid duplicate imports
        if "from 'lucide-react'" not in content and 'from "lucide-react"' not in content:
            import_statement = f"import {{ {', '.join(sorted(used_lucide_icons))} }} from 'lucide-react';\n"
            
            last_import = content.rfind("import ")
            if last_import != -1:
                end_of_last_import = content.find("\n", last_import)
                content = content[:end_of_last_import+1] + import_statement + content[end_of_last_import+1:]
            else:
                content = import_statement + content

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")

def main():
    base_dir = r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src"
    
    # Specifically exclude root level layout and page, and components already updated
    exclude_paths = [
        os.path.normpath(r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\components\Header.tsx"),
        os.path.normpath(r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\components\Sidebar.tsx"),
        os.path.normpath(r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\components\BottomNav.tsx"),
        os.path.normpath(r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\page.tsx"),
        os.path.normpath(r"c:\Users\panka\Videos\Projects\bbmku-nextjs\src\app\layout.tsx"),
    ]
    
    count = 0
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".tsx"):
                filepath = os.path.normpath(os.path.join(root, file))
                if filepath not in exclude_paths:
                    process_file(filepath)
                    count += 1
    print(f"Processed {count} files.")

if __name__ == "__main__":
    main()
