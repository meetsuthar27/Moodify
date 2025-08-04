#  Moodify - A Mood-Based Chrome Filter Extension

Moodify is a simple yet fun Chrome extension that lets users apply visual filters to websites based on their mood. Whether you're feeling dreamy, vintage, or need a dimmed vibe for late-night browsing, Moodify has a style for you.

This project was built as a way to explore Chrome Extension development using **Vanilla JavaScript**, **HTML**, and **CSS**. It uses the Chrome Storage API to remember your filter preferences and reapply them whenever you revisit the browser.

---

##  Features

-  **Mood-based filters** (5 basic filters in the compact view)
-  **Expanded filter list** (16 unique filters in expanded popup)
-  **Custom filter settings** (adjust brightness, hue, saturation, contrast)
-  **Data persistence** using Chrome's `storage.sync` API
-  **Manifest V3** based Chrome extension
-  Lightweight frontend with no external frameworks

---

##  Screenshots

### Compact Popup View
<img width="399" alt="Screenshot 2025-04-12 at 11 47 41 PM" src="https://github.com/user-attachments/assets/039ed400-9165-4119-ab5b-a072a72191e2" />

### Expanded Filter View
<img width="798" alt="Screenshot 2025-04-12 at 11 47 55 PM" src="https://github.com/user-attachments/assets/e12f7e7a-1262-4bc1-9d90-262760254fb4" />

---

## 🛠️ Installation & Usage

Since this extension is not yet published on the Chrome Web Store, here's how you can load it manually:

### 1. Clone or Download this Repository

```bash
git clone https://github.com/meetsuthar27/Moodify.git
```

### 2. Open Chrome and navigate to:
```chrome://extensions/```

### 3. Enable "Developer mode" (top right corner)

### 4. Click **"Load unpacked"** and select the project folder

That’s it! 🎉 You’ll now see the Moodify extension in your Chrome toolbar.

Click the icon to choose a filter and watch your browsing experience transform based on your mood.

---

##  How It Works

- Each filter corresponds to a **CSS class** applied to the current page.
- The user's filter preference is stored using Chrome's `storage.sync` so it persists across sessions.
- On page load, a **content script** checks for saved filters and reapplies them automatically.
- The **"Custom"** option allows manual adjustment of visual properties like:
  - Brightness
  - Hue rotation
  - Saturation
  - Contrast
 
![GIF](https://drive.google.com/file/d/1gaAtWDYf09aB-T2Su-wXhcGWT8qcqv4F/view?usp=sharing)

##  Future Improvements

-  Publish to Chrome Web Store  
-  Add mood-based automation using time of day  
-  More animated or interactive filters  
-  Option to exclude specific websites  

---

## Made with Love by Meet Suthar

Connect with me:

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/meetsuthar)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/meetsuthar)

---

