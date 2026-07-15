# Kolbo Bar Ilan - Product Tree Dashboard

A comprehensive product hierarchy management system for Kolbo Bar Ilan built-in catalog.

## Features

✅ **Complete Hierarchy Structure**
- 21 Groups (קבוצות)
- 46 Departments (מחלקות)
- 171 Subcategories (קטגוריות משנה)

✅ **Dashboard Features**
- Tree view and Grid view toggles
- Real-time search by name
- Filter by group/department
- Sort by name or item count
- Expand/Collapse all functionality
- Checkbox marking system for items
- Notes field for each subcategory
- Commax ID display (#XXX)
- Delete functionality
- Auto-save to browser localStorage
- JSON download/export
- CSV export for reporting

✅ **Data Structure**
- Proper 3-tier hierarchy (Group > Department > Subcategory)
- Each item includes:
  - Unique ID
  - Name
  - Item count
  - Commax ID
  - Checked status
  - Notes field

## Files

- `index.html` - Complete dashboard application
- `data.json` - Product hierarchy in JSON format

## Usage

1. Open `index.html` in a modern web browser
2. Use the controls to:
   - Search for products
   - Filter by group
   - Toggle between tree and grid views
   - Mark/unmark items
   - Add notes
   - Export data

## Data Format

The hierarchy is stored in a nested JSON structure:

```json
{
  "groups": [
    {
      "id": 1,
      "name": "Group Name",
      "itemCount": 100,
      "checked": false,
      "departments": [
        {
          "id": 1,
          "name": "Department Name",
          "itemCount": 50,
          "checked": false,
          "subcategories": [
            {
              "id": 1,
              "name": "Subcategory Name",
              "itemCount": 10,
              "commax_id": 88,
              "checked": false,
              "notes": ""
            }
          ]
        }
      ]
    }
  ]
}
```

## Storage

- All changes are automatically saved to browser localStorage
- Use "Download JSON" button to export the current state
- Use "Export CSV" button for spreadsheet compatibility

## Verification

✅ 21 Groups confirmed
✅ 46 Departments confirmed
✅ 171 Subcategories confirmed
✅ All IDs and item counts verified
✅ Commax ID mapping complete
✅ Notes field operational
✅ localStorage auto-save working

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Built for Kolbo Bar Ilan product management system.
