# Kolbo Bar Ilan - Product Tree Dashboard

## ✨ Features

### 🎯 Core Functionality
- **Drag & Drop** - Obvious drag handles (☰) with visual feedback
  - Drag subcategories between departments
  - Drag departments between groups
  - Visual drop zones with highlight effects
  - Ghost drag image showing what's being moved
  - Cursor changes to grabbing hand
  
- **Professional Modern UI**
  - Clean gradient backgrounds
  - Color-coded groups with distinct pastel palette
  - Smooth animations and transitions
  - Hover effects (glow, shadow, highlight)
  - Responsive design (desktop & tablet)
  - Modern typography and spacing
  
- **Folder Tree View** (Primary Interface)
  - Expandable/collapsible tree structure
  - Visual indent levels
  - Folder icons (📂📁📄)
  - Item counts per category
  - Drag handles clearly visible
  - Right-click context menu (ready for edit/delete/move)
  
- **Bulk Actions**
  - Checkboxes to select multiple items
  - Action bar appears when items selected
  - Delete with confirmation
  - Move to group/department via modal
  - Edit notes in bulk
  - Clear selection

- **Search & Filter**
  - Real-time search by name or Commax ID
  - Filter by group (sidebar + top dropdown)
  - Highlight matching items
  - Empty state messaging

- **Save & Cloud Integration**
  - Save to cloud button (💾)
  - Auto-save indicator
  - POST to `/api/save-data` endpoint
  - Local storage for unsaved changes
  - Success/error messaging

- **Additional Features**
  - Commax IDs displayed clearly (#89 format)
  - Notes field (click to edit)
  - Keyboard shortcuts:
    - Delete key: delete selected items
    - Ctrl+S / Cmd+S: save to cloud
  - Breadcrumb navigation
  - Color-coded visual hierarchy
  - Hebrew RTL support

## 📊 Data Structure

The dashboard manages:
- **21 Groups** (color-coded)
- **46 Departments**
- **171 Subcategories** with Commax IDs

## 🚀 Deployment

### Vercel
The app is configured for automatic deployment:
```bash
git push origin main  # Triggers Vercel auto-deploy
```

Visit: https://kolbo-bar-ilan-product-tree.vercel.app/

### Local Development
```bash
cd /opt/data/divine-dashboard/product-tree
python3 -m http.server 3000
# Open http://localhost:3000
```

## 📝 API

### POST /api/save-data
Saves the current data to cloud.

**Request:**
```json
{
  "groups": [
    {
      "id": 1,
      "name": "Group Name",
      "departments": [
        {
          "id": 1,
          "name": "Department Name",
          "subcategories": [
            {
              "id": 1,
              "name": "Subcategory",
              "commax_id": 89,
              "itemCount": 31,
              "notes": ""
            }
          ]
        }
      ]
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Data saved successfully",
  "timestamp": "2024-01-01T12:00:00Z",
  "counts": {
    "groups": 21,
    "departments": 46,
    "subcategories": 171
  }
}
```

## 🎨 Design System

### Color Palette
- Primary: #667eea
- Secondary: #764ba2
- Success: #10b981
- Danger: #ef4444
- Warning: #f59e0b
- Info: #3b82f6

### Group Colors (Pastel Palette)
10 distinct pastel colors for group differentiation:
- Pink, Yellow, Green, Blue, Purple
- Magenta, Red, Teal, Sky, Indigo

## 🧪 Testing Checklist

✅ Drag & drop works with obvious handles
✅ Drop zones visible on hover
✅ Bulk select checkboxes functional
✅ Delete action works with confirmation
✅ Move action works (try moving between groups)
✅ Notes edit works inline
✅ Save button posts to API
✅ Search filters items in real-time
✅ Filter by group works
✅ Commax IDs display correctly (#89 format)
✅ UI looks modern and professional
✅ Folder tree expands/collapses smoothly
✅ Color coding visible and distinct
✅ No console errors
✅ Responsive on desktop (test at different widths)

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with flexbox/grid, animations
- **Vanilla JavaScript** - No external dependencies
- **HTML5 Drag & Drop API** - Native browser drag functionality
- **Fetch API** - Cloud data persistence
- **Local Storage** - Offline changes buffer

## 📄 File Structure

```
product-tree/
├── index.html          # Main dashboard app
├── data.json          # Product tree data
├── vercel.json        # Deployment config
└── api/
    └── save-data.js   # Vercel serverless endpoint
```

## 🎓 Usage Guide

### Drag Items
1. Hover over item to see the drag handle (☰)
2. Click and hold the handle
3. Drag to new location
4. Drop zone highlights when hovering
5. Release to drop

### Select Multiple Items
1. Check the checkbox next to items
2. Action bar appears at top with options
3. Click buttons to delete, move, or add notes
4. Or use keyboard shortcut (Delete key)

### Search
1. Type in search box
2. Results filter in real-time
3. Shows name or Commax ID matches

### Save Changes
1. Click "💾 Save to Cloud" button
2. Or use Ctrl+S / Cmd+S
3. Watch indicator for save status
4. Changes auto-save every 30s to local storage

## 📞 Support

For issues or feature requests, check the GitHub repo:
https://github.com/eladyanai/kolbo-bar-ilan-product-tree

---

**Version:** 2.0 (Complete Redesign)
**Last Updated:** July 2024
**Status:** ✅ Production Ready
