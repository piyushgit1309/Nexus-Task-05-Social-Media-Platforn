# Nexus // Social Platform
### A Full-Featured, High-Performance Social Media Experience

![Nexus Banner](https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80)

## 🎬 Project Overview
**Nexus** brings together the engagement model of **Instagram** (Stories, Reels, Posts, Double-Tap Likes, Comments, Followers, Media Uploads) with a cinematic, premium social experience built around a dark, expressive interface.

Engineered in **100% pure vanilla JavaScript, HTML5, and CSS3**, the application requires **zero external build steps or npm installations** and runs out-of-the-box in any modern browser.

---

## 🌟 Key Features

### 1. 🎞️ Instagram Stories
* **Red Gradient Rings**: Circular creator nodes wrapped in glowing red gradient rings (`background: linear-gradient(135deg, #E50914, #ff3d47, #8b0000)`).
* **Segmented Auto-Play Viewer**: 5-second per-story precision timer using `requestAnimationFrame`, showing animated red progress bars for each story in a creator's collection.
* **Navigation & Gestures**: Tap left zone for previous story, tap right zone for next story, and click & hold to pause story playback.
* **Inline Story Replies & Reactions**: Direct reaction heart button and message input.

### 2. 📺 Billboard Hero Banner
* **Cinematic Header**: Highlights the top featured publication of the day with left and bottom shadow vignettes.
* **Top Post Badge & Match Score**: Displays "N TOP POST OF THE DAY" with dynamic green match ratings (e.g. `99% Match`).
* **Direct Actions**: "▶ Watch Post" opens the split viewer, "＋ My List" saves the publication, and audio controls toggle sound.

### 3. 📱 Carousel Rows & Feeds
* **Top 10 Today**: Features giant ranking numerals (1 to 10) positioned behind horizontal cards.
* **Trending Reels (9:16 Shorts)**: Vertical video and photo reels with duration tags and match scores.
* **Feed Publications & Photo Grid**: Clean 16:9 cards with creator chips, captions, double-tap like, comments, and bookmarking.
* **Signature Hover Zoom**: Hovering any card scales it smoothly (`transform: scale(1.08)`) with an elevated shadow and glowing red border.

### 4. 👥 "Who's Watching?" Profile Switcher
* **Profile Avatars**: Choose between themed avatar styles (Classic Red Smiley, Cyber Blue, Neon Glitch, Matrix Green, Shadow Realm).
* **One-Click Profile Switching**: Seamlessly switch between characters (Eleven, Geralt of Rivia, Wednesday Addams, Cyberpunk V).
* **Add New Profile Form**: Create new member accounts with custom names and handles.

### 5. ✍️ Multimedia Post, Reel & Story Creator
* **Choice of Format**: Switch between "Feed Post", "Reel Short (9:16)", or "24h Story".
* **Real File Uploads**: Uses native browser `FileReader` API to support real image (`PNG`, `JPG`, `GIF`) and video (`MP4`, `WebM`) file uploads.
* **Live Media Preview**: Preview uploaded files with remove controls before publishing.
* **Caption & Tag Chips**: Write descriptions and click quick-tag chips (`#trending`, `#nexus`, `#strangerthings`).

### 6. 💬 Split Post Viewer
* **Desktop Split Modal**: Large media viewport on the left, author header + follow button + scrollable comments list on the right.
* **Double-Tap Like Detection**: Double-tap anywhere on the media to trigger a floating, animated red heart effect.
* **Real-time Comments**: Submit comments with author avatars and relative timestamps.
* **Save to "My List"**: Instant bookmarking to your personal watchlist.

### 7. 🔔 Live Notifications & Global Search
* **Notification Center**: Bell icon with unread count badge tracking likes, comments, and new followers.
* **Global Search Bar**: Instant real-time filtering across titles, captions, hashtags, and creator handles.

---

## 📁 File Structure

```
nexus_platform/
├── index.html       # Semantic layout, billboard, stories shelf, modals
├── style.css        # Dark premium theme, red accents, card zoom, animations
├── app.js           # Reactive store, story player, post manager, seed data
└── README.md        # Comprehensive documentation and run guide
```

---

## 🚀 How to Run

1. Extract the downloaded `Nexus_Social_Platform.zip`.
2. Open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari).
3. **No Web Server Required**: The platform is self-contained and functions seamlessly via standard `file:///` protocol or any local server.
