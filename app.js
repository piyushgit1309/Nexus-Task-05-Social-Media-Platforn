/**
 * Nexus // Application Store & Interactive Social Engine
 * Social Features Engineered in a cinematic dark theme
 */

// ============================================================================
// 1. NEXUS AVATARS & SEED DATA
// ============================================================================
const NEXUS_AVATARS = [
  { id: 'av_red', name: 'Classic Red', url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=200&q=80' },
  { id: 'av_blue', name: 'Cyber Blue', url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80' },
  { id: 'av_magenta', name: 'Neon Glitch', url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80' },
  { id: 'av_green', name: 'Matrix Green', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
  { id: 'av_dark', name: 'Shadow Realm', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' }
];

const SEED_DATA = {
  users: [
    {
      id: 'usr_eleven',
      name: 'Eleven',
      handle: 'eleven_hopper',
      bio: 'Friends don\'t lie. Waffles, telekinesis, and Hawkins High. 🧇✨',
      avatar: NEXUS_AVATARS[0].url,
      coverBanner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      followers: ['usr_geralt', 'usr_wednesday', 'usr_v'],
      following: ['usr_geralt', 'usr_wednesday'],
      myList: ['post_001', 'reel_001', 'post_003'],
      stats: { postsCount: 3, followersCount: 1420, followingCount: 2 }
    },
    {
      id: 'usr_geralt',
      name: 'Geralt of Rivia',
      handle: 'white_wolf',
      bio: 'Witcher for hire. Swords, potions, and tossing coins to your bard. ⚔️🐺',
      avatar: NEXUS_AVATARS[1].url,
      coverBanner: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      followers: ['usr_eleven'],
      following: ['usr_eleven', 'usr_v'],
      myList: ['post_001'],
      stats: { postsCount: 2, followersCount: 3890, followingCount: 2 }
    },
    {
      id: 'usr_wednesday',
      name: 'Wednesday Addams',
      handle: 'wednesday_nevermore',
      bio: 'I act as if I don\'t care if people dislike me. Deep down… I secretly enjoy it. 🖤🎻',
      avatar: NEXUS_AVATARS[2].url,
      coverBanner: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
      followers: ['usr_eleven', 'usr_geralt'],
      following: ['usr_eleven'],
      myList: ['reel_001'],
      stats: { postsCount: 2, followersCount: 5210, followingCount: 1 }
    },
    {
      id: 'usr_v',
      name: 'V (Night City)',
      handle: 'cyber_v',
      bio: 'Mercenary legend of Night City. Chrome, netrunning, and neon nights. 🦾⚡',
      avatar: NEXUS_AVATARS[3].url,
      coverBanner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      followers: ['usr_geralt'],
      following: ['usr_eleven'],
      myList: ['post_002'],
      stats: { postsCount: 1, followersCount: 2150, followingCount: 1 }
    }
  ],
  stories: [
    {
      id: 'story_el_1',
      authorId: 'usr_eleven',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
      },
      caption: 'Late night Eggo run in Hawkins 🧇🌙',
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      durationMs: 5000,
      viewedBy: ['usr_geralt']
    },
    {
      id: 'story_el_2',
      authorId: 'usr_eleven',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80'
      },
      caption: 'Testing the signal across the Upside Down 📻',
      createdAt: new Date(Date.now() - 3600000).toISOString(),
      durationMs: 5000,
      viewedBy: []
    },
    {
      id: 'story_geralt_1',
      authorId: 'usr_geralt',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
      },
      caption: 'Roach won\'t get off the roof again. Hmm.',
      createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
      durationMs: 5000,
      viewedBy: []
    },
    {
      id: 'story_wednesday_1',
      authorId: 'usr_wednesday',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80'
      },
      caption: 'Practicing cello on the balcony. Thunderstorm approaching.',
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      durationMs: 5000,
      viewedBy: ['usr_eleven']
    },
    {
      id: 'story_v_1',
      authorId: 'usr_v',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80'
      },
      caption: 'Overlooking Watson district from the rooftop. 🌃',
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      durationMs: 5000,
      viewedBy: []
    }
  ],
  posts: [
    {
      id: 'post_001',
      authorId: 'usr_eleven',
      type: 'post',
      title: 'STARCOURT SECRET TUNNEL // HAWKINS HIGHS',
      matchScore: '99% Match',
      caption: 'Found the entrance to the Starcourt underground tunnel. Keeping the radio tuned to channel 11. Friends don\'t lie. #hawkins #strangerthings #upsidedown #nexus',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
      },
      tags: ['hawkins', 'strangerthings', 'upsidedown', 'nexus'],
      likes: ['usr_geralt', 'usr_wednesday', 'usr_v'],
      comments: [
        {
          id: 'cmt_101',
          authorId: 'usr_wednesday',
          text: 'If whatever creature comes through has venom, collect a vial for me.',
          createdAt: new Date(Date.now() - 3600000 * 3).toISOString()
        },
        {
          id: 'cmt_102',
          authorId: 'usr_geralt',
          text: 'Silver sword works best on monsters from other spheres.',
          createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
        }
      ],
      sharesCount: 54,
      createdAt: new Date(Date.now() - 3600000 * 6).toISOString()
    },
    {
      id: 'reel_001',
      authorId: 'usr_wednesday',
      type: 'reel',
      title: 'RAVE\'N DANCE CHOREOGRAPHY',
      matchScore: '98% Match',
      caption: 'Choreographed a little movement for the Rave\'N Dance. Normalcy is overrated. 🖤 #nevermore #wednesday #rave #trending',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80'
      },
      tags: ['nevermore', 'wednesday', 'rave', 'trending'],
      likes: ['usr_eleven', 'usr_geralt'],
      comments: [
        {
          id: 'cmt_103',
          authorId: 'usr_eleven',
          text: 'Bitchin\'. 🔥',
          createdAt: new Date(Date.now() - 3600000 * 1).toISOString()
        }
      ],
      sharesCount: 142,
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
    },
    {
      id: 'post_002',
      authorId: 'usr_v',
      type: 'post',
      title: 'AFTERLIFE CLUB RECON',
      matchScore: '97% Match',
      caption: 'Meeting Rogue at the Afterlife. Another contract, another chance to make a name in Night City. 🦾 #cyberpunk #nightcity #tech #afterlife',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
      },
      tags: ['cyberpunk', 'nightcity', 'tech', 'afterlife'],
      likes: ['usr_geralt'],
      comments: [
        {
          id: 'cmt_104',
          authorId: 'usr_geralt',
          text: 'Sounds like a contract with bad coin and worse odds. Be careful.',
          createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
        }
      ],
      sharesCount: 38,
      createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
    },
    {
      id: 'reel_002',
      authorId: 'usr_geralt',
      type: 'reel',
      title: 'KAER MORHEN BLADE TRAINING',
      matchScore: '96% Match',
      caption: 'Steel for humans, silver for monsters. The wolf school regimen never changes. ⚔️ #witcher #training #kaermorhen #trending',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
      },
      tags: ['witcher', 'training', 'kaermorhen', 'trending'],
      likes: ['usr_eleven', 'usr_v'],
      comments: [],
      sharesCount: 88,
      createdAt: new Date(Date.now() - 3600000 * 10).toISOString()
    },
    {
      id: 'post_003',
      authorId: 'usr_eleven',
      type: 'post',
      title: 'RADIO TRANSMISSION STATION',
      matchScore: '95% Match',
      caption: 'Cerebro is built. Dustin helped align the antennae on the hill. We can reach anywhere in Indiana. #friends #hawkins #strangerthings',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      tags: ['friends', 'hawkins', 'strangerthings'],
      likes: ['usr_wednesday'],
      comments: [],
      sharesCount: 29,
      createdAt: new Date(Date.now() - 3600000 * 14).toISOString()
    }
  ],
  notifications: [
    {
      id: 'notif_01',
      recipientId: 'usr_eleven',
      actorId: 'usr_wednesday',
      type: 'comment',
      postId: 'post_001',
      read: false,
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
    },
    {
      id: 'notif_02',
      recipientId: 'usr_eleven',
      actorId: 'usr_geralt',
      type: 'like',
      postId: 'post_001',
      read: false,
      createdAt: new Date(Date.now() - 3600000 * 3).toISOString()
    }
  ]
};

// ============================================================================
// 2. CENTRAL REACTIVE STORE
// ============================================================================
class NexusStore {
  constructor() {
    this.STORAGE_KEY = 'nexus_store_v1';
    this.subscribers = new Set();
    this.activeFilter = 'all'; // 'all' | 'reels' | 'trending' | 'my_list' | 'explore'
    this.searchQuery = '';
    this.init();
  }

  init() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.users = parsed.users || SEED_DATA.users;
        this.stories = parsed.stories || SEED_DATA.stories;
        this.posts = parsed.posts || SEED_DATA.posts;
        this.notifications = parsed.notifications || SEED_DATA.notifications;
        this.currentUserId = parsed.currentUserId || this.users[0].id;
      } else {
        this.resetSeeds();
      }
    } catch (e) {
      this.resetSeeds();
    }
  }

  resetSeeds() {
    this.users = JSON.parse(JSON.stringify(SEED_DATA.users));
    this.stories = JSON.parse(JSON.stringify(SEED_DATA.stories));
    this.posts = JSON.parse(JSON.stringify(SEED_DATA.posts));
    this.notifications = JSON.parse(JSON.stringify(SEED_DATA.notifications));
    this.currentUserId = this.users[0].id;
    this.persist();
  }

  persist() {
    try {
      const data = {
        users: this.users,
        stories: this.stories,
        posts: this.posts,
        notifications: this.notifications,
        currentUserId: this.currentUserId
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('LocalStorage limit or error:', e);
    }
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  notify() {
    this.persist();
    for (const callback of this.subscribers) {
      callback();
    }
  }

  getCurrentUser() {
    return this.users.find(u => u.id === this.currentUserId) || this.users[0];
  }

  switchProfile(userId) {
    const user = this.users.find(u => u.id === userId);
    if (!user) return;
    this.currentUserId = userId;
    this.notify();
  }

  createProfile({ name, handle, bio, avatarUrl }) {
    const cleanHandle = handle.replace(/^@/, '').trim().toLowerCase();
    if (this.users.some(u => u.handle === cleanHandle)) {
      throw new Error(`The handle @${cleanHandle} is already registered.`);
    }

    const newUser = {
      id: `usr_${Date.now()}`,
      name: name.trim(),
      handle: cleanHandle,
      bio: bio ? bio.trim() : 'Nexus Explorer',
      avatar: avatarUrl || NEXUS_AVATARS[0].url,
      coverBanner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      followers: [],
      following: [],
      myList: [],
      stats: { postsCount: 0, followersCount: 0, followingCount: 0 }
    };

    this.users.push(newUser);
    this.currentUserId = newUser.id;
    this.notify();
    return newUser;
  }

  // --- Stories Handling ---
  getHydratedStoriesList() {
    const curUser = this.getCurrentUser();
    const authorMap = new Map();

    for (const story of this.stories) {
      if (!authorMap.has(story.authorId)) {
        const author = this.users.find(u => u.id === story.authorId);
        if (author) {
          authorMap.set(story.authorId, {
            author,
            stories: [],
            hasUnseen: false
          });
        }
      }
      const group = authorMap.get(story.authorId);
      if (group) {
        group.stories.push(story);
        const isSeen = story.viewedBy && story.viewedBy.includes(curUser.id);
        if (!isSeen) group.hasUnseen = true;
      }
    }

    return Array.from(authorMap.values()).sort((a, b) => {
      if (a.author.id === curUser.id) return -1;
      if (b.author.id === curUser.id) return 1;
      if (a.hasUnseen && !b.hasUnseen) return -1;
      if (!a.hasUnseen && b.hasUnseen) return 1;
      return 0;
    });
  }

  createStory({ media, caption = '' }) {
    const curUser = this.getCurrentUser();
    const newStory = {
      id: `story_${Date.now()}`,
      authorId: curUser.id,
      media,
      caption: caption.trim(),
      createdAt: new Date().toISOString(),
      durationMs: 5000,
      viewedBy: [curUser.id]
    };

    this.stories.unshift(newStory);
    this.notify();
    return newStory;
  }

  markStoryViewed(storyId) {
    const curUser = this.getCurrentUser();
    const story = this.stories.find(s => s.id === storyId);
    if (!story) return;

    if (!story.viewedBy) story.viewedBy = [];
    if (!story.viewedBy.includes(curUser.id)) {
      story.viewedBy.push(curUser.id);
      this.notify();
    }
  }

  // --- Posts & Reels Management ---
  createPostOrReel({ type = 'post', media, caption = '', manualTags = [] }) {
    const curUser = this.getCurrentUser();
    if (!curUser) throw new Error('No user profile active.');

    const inlineMatches = caption.match(/#[a-zA-Z0-9_-]+/g) || [];
    const inlineTags = inlineMatches.map(t => t.slice(1).toLowerCase());
    const manualSanitized = manualTags.map(t => t.replace(/^#/, '').trim().toLowerCase());
    const mergedTags = Array.from(new Set([...inlineTags, ...manualSanitized])).filter(Boolean);

    const score = `${Math.floor(Math.random() * 6) + 94}% Match`;
    const title = caption.slice(0, 30).toUpperCase() || 'NEXUS ORIGINAL';

    const newPost = {
      id: `${type}_${Date.now()}`,
      authorId: curUser.id,
      type: type === 'reel' ? 'reel' : 'post',
      title: title,
      matchScore: score,
      caption: caption.trim(),
      media,
      tags: mergedTags,
      likes: [],
      comments: [],
      sharesCount: 0,
      createdAt: new Date().toISOString()
    };

    this.posts.unshift(newPost);
    curUser.stats.postsCount = (curUser.stats.postsCount || 0) + 1;
    this.notify();
    return newPost;
  }

  toggleLike(postId) {
    const curUser = this.getCurrentUser();
    const post = this.posts.find(p => p.id === postId);
    if (!post) return false;

    const idx = post.likes.indexOf(curUser.id);
    const wasLiked = idx !== -1;

    if (wasLiked) {
      post.likes.splice(idx, 1);
    } else {
      post.likes.push(curUser.id);
      if (post.authorId !== curUser.id) {
        this.addNotification({
          recipientId: post.authorId,
          actorId: curUser.id,
          type: 'like',
          postId: post.id
        });
      }
    }

    this.notify();
    return !wasLiked;
  }

  addComment(postId, commentText) {
    const curUser = this.getCurrentUser();
    const post = this.posts.find(p => p.id === postId);
    if (!post) throw new Error('Post not found');
    const text = commentText.trim();
    if (!text) throw new Error('Comment cannot be empty');

    const newComment = {
      id: `cmt_${Date.now()}`,
      authorId: curUser.id,
      text: text,
      createdAt: new Date().toISOString()
    };

    post.comments.push(newComment);

    if (post.authorId !== curUser.id) {
      this.addNotification({
        recipientId: post.authorId,
        actorId: curUser.id,
        type: 'comment',
        postId: post.id
      });
    }

    this.notify();
    return newComment;
  }

  toggleMyList(postId) {
    const curUser = this.getCurrentUser();
    if (!curUser.myList) curUser.myList = [];

    const idx = curUser.myList.indexOf(postId);
    const isInList = idx !== -1;

    if (isInList) {
      curUser.myList.splice(idx, 1);
    } else {
      curUser.myList.push(postId);
    }

    this.notify();
    return !isInList;
  }

  toggleFollow(targetUserId) {
    const curUser = this.getCurrentUser();
    if (curUser.id === targetUserId) return;

    const target = this.users.find(u => u.id === targetUserId);
    if (!target) return;

    if (!curUser.following) curUser.following = [];
    if (!target.followers) target.followers = [];

    const idx = curUser.following.indexOf(targetUserId);
    const isFollowing = idx !== -1;

    if (isFollowing) {
      curUser.following.splice(idx, 1);
      const fIdx = target.followers.indexOf(curUser.id);
      if (fIdx !== -1) target.followers.splice(fIdx, 1);
      curUser.stats.followingCount = Math.max(0, curUser.following.length);
      target.stats.followersCount = Math.max(0, target.followers.length);
    } else {
      curUser.following.push(targetUserId);
      target.followers.push(curUser.id);
      curUser.stats.followingCount = curUser.following.length;
      target.stats.followersCount = target.followers.length;

      this.addNotification({
        recipientId: targetUserId,
        actorId: curUser.id,
        type: 'follow',
        postId: null
      });
    }

    this.notify();
    return !isFollowing;
  }

  addNotification({ recipientId, actorId, type, postId = null }) {
    const notif = {
      id: `notif_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      recipientId,
      actorId,
      type,
      postId,
      read: false,
      createdAt: new Date().toISOString()
    };
    this.notifications.unshift(notif);
  }

  markAllNotificationsRead() {
    const curId = this.currentUserId;
    this.notifications.forEach(n => {
      if (n.recipientId === curId) n.read = true;
    });
    this.notify();
  }

  getCurrentUserNotifications() {
    const curId = this.currentUserId;
    return this.notifications
      .filter(n => n.recipientId === curId)
      .map(n => ({
        ...n,
        actor: this.users.find(u => u.id === n.actorId) || { name: 'Stranger', avatar: NEXUS_AVATARS[0].url }
      }));
  }

  getUnreadNotificationsCount() {
    const curId = this.currentUserId;
    return this.notifications.filter(n => n.recipientId === curId && !n.read).length;
  }

  setFilter(filterName) {
    this.activeFilter = filterName;
    this.notify();
  }

  setSearchQuery(q) {
    this.searchQuery = q.trim().toLowerCase();
    this.notify();
  }

  getFilteredPosts() {
    const curUser = this.getCurrentUser();
    let list = [...this.posts];

    if (this.activeFilter === 'reels') {
      list = list.filter(p => p.type === 'reel');
    } else if (this.activeFilter === 'trending') {
      list = list.sort((a, b) => ((b.likes?.length || 0) + (b.comments?.length || 0)) - ((a.likes?.length || 0) + (a.comments?.length || 0)));
    } else if (this.activeFilter === 'my_list') {
      list = list.filter(p => curUser.myList && curUser.myList.includes(p.id));
    } else if (this.activeFilter === 'explore') {
      list = list.sort((a, b) => (b.sharesCount || 0) - (a.sharesCount || 0));
    }

    if (this.searchQuery) {
      const q = this.searchQuery;
      list = list.filter(p => {
        const author = this.users.find(u => u.id === p.authorId);
        const inCaption = p.caption.toLowerCase().includes(q);
        const inTags = p.tags && p.tags.some(t => t.toLowerCase().includes(q.replace(/^#/, '')));
        const inAuthor = author && (author.name.toLowerCase().includes(q) || author.handle.toLowerCase().includes(q));
        return inCaption || inTags || inAuthor;
      });
    }

    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
}

// ============================================================================
// 3. STORY PLAYBACK ENGINE
// ============================================================================
class StoryViewerEngine {
  constructor({ store, onRenderStory, onProgressUpdate, onClose }) {
    this.store = store;
    this.onRenderStory = onRenderStory;
    this.onProgressUpdate = onProgressUpdate;
    this.onClose = onClose;

    this.authorPlaylist = [];
    this.authorIndex = 0;
    this.storyIndex = 0;

    this.durationMs = 5000;
    this.elapsedMs = 0;
    this.lastTimestamp = null;
    this.isPaused = false;
    this.rafId = null;
  }

  openPlaylist(authorStoriesList, startAuthorId = null) {
    this.authorPlaylist = authorStoriesList;
    if (startAuthorId) {
      const idx = this.authorPlaylist.findIndex(g => g.author.id === startAuthorId);
      this.authorIndex = idx !== -1 ? idx : 0;
    } else {
      this.authorIndex = 0;
    }
    this.storyIndex = 0;
    this.startStory();
  }

  getCurrentGroup() {
    return this.authorPlaylist[this.authorIndex] || null;
  }

  getCurrentStory() {
    const group = this.getCurrentGroup();
    return group ? group.stories[this.storyIndex] : null;
  }

  startStory() {
    this.stopTimer();
    const story = this.getCurrentStory();
    const group = this.getCurrentGroup();

    if (!story || !group) {
      this.close();
      return;
    }

    this.store.markStoryViewed(story.id);

    this.durationMs = story.durationMs || 5000;
    this.elapsedMs = 0;
    this.lastTimestamp = performance.now();
    this.isPaused = false;

    if (this.onRenderStory) {
      this.onRenderStory({
        story,
        author: group.author,
        storyIndex: this.storyIndex,
        totalStoriesInGroup: group.stories.length
      });
    }

    this.tick = this.tick.bind(this);
    this.rafId = requestAnimationFrame(this.tick);
  }

  tick(currentTimestamp) {
    if (this.isPaused) {
      this.lastTimestamp = currentTimestamp;
      this.rafId = requestAnimationFrame(this.tick);
      return;
    }

    const delta = currentTimestamp - this.lastTimestamp;
    this.lastTimestamp = currentTimestamp;
    this.elapsedMs += delta;

    const progress = Math.min(100, (this.elapsedMs / this.durationMs) * 100);
    if (this.onProgressUpdate) {
      this.onProgressUpdate(progress, this.storyIndex);
    }

    if (this.elapsedMs >= this.durationMs) {
      this.nextStory();
    } else {
      this.rafId = requestAnimationFrame(this.tick);
    }
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
    this.lastTimestamp = performance.now();
  }

  nextStory() {
    const group = this.getCurrentGroup();
    if (!group) return this.close();

    if (this.storyIndex < group.stories.length - 1) {
      this.storyIndex++;
      this.startStory();
    } else {
      if (this.authorIndex < this.authorPlaylist.length - 1) {
        this.authorIndex++;
        this.storyIndex = 0;
        this.startStory();
      } else {
        this.close();
      }
    }
  }

  previousStory() {
    if (this.elapsedMs > 1200) {
      this.startStory();
      return;
    }

    if (this.storyIndex > 0) {
      this.storyIndex--;
      this.startStory();
    } else if (this.authorIndex > 0) {
      this.authorIndex--;
      const prevGroup = this.getCurrentGroup();
      this.storyIndex = Math.max(0, prevGroup ? prevGroup.stories.length - 1 : 0);
      this.startStory();
    } else {
      this.startStory();
    }
  }

  stopTimer() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  close() {
    this.stopTimer();
    if (this.onClose) this.onClose();
  }
}

// ============================================================================
// 4. UI CONTROLLER & DOM INTEGRATION
// ============================================================================
class NexusApp {
  constructor() {
    this.store = new NexusStore();
    this.activeModalPost = null;
    this.selectedCreateType = 'post';
    this.createMediaAttachment = null;
    this.selectedNewProfileAvatar = NEXUS_AVATARS[0].url;

    this.cacheDOM();
    this.initStoryViewer();
    this.bindEvents();

    this.store.subscribe(() => this.render());
    this.render();
  }

  cacheDOM() {
    // Navigation
    this.navbar = document.getElementById('nfgNavbar');
    this.brandHomeBtn = document.getElementById('brandHomeBtn');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.globalSearchInput = document.getElementById('globalSearchInput');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.openCreateModalBtn = document.getElementById('openCreateModalBtn');
    this.notifBellBtn = document.getElementById('notifBellBtn');
    this.notifBadge = document.getElementById('notifBadge');
    this.notifDropdown = document.getElementById('notifDropdown');
    this.notifList = document.getElementById('notifList');
    this.markAllReadBtn = document.getElementById('markAllReadBtn');
    this.profileDropdownBtn = document.getElementById('profileDropdownBtn');
    this.navUserAvatar = document.getElementById('navUserAvatar');
    this.navUserName = document.getElementById('navUserName');

    // Stories Shelf
    this.storiesShelf = document.getElementById('storiesShelf');

    // Billboard
    this.billboardBackdrop = document.getElementById('billboardBackdrop');
    this.billboardVideo = document.getElementById('billboardVideo');
    this.billboardMatch = document.getElementById('billboardMatch');
    this.billboardTitle = document.getElementById('billboardTitle');
    this.billboardCreator = document.getElementById('billboardCreator');
    this.billboardDesc = document.getElementById('billboardDesc');
    this.billboardPlayBtn = document.getElementById('billboardPlayBtn');
    this.billboardListBtn = document.getElementById('billboardListBtn');
    this.billboardListIcon = document.getElementById('billboardListIcon');
    this.billboardListText = document.getElementById('billboardListText');
    this.billboardSoundBtn = document.getElementById('billboardSoundBtn');

    // Active Filter Bar
    this.activeFilterBar = document.getElementById('activeFilterBar');
    this.filterValueText = document.getElementById('filterValueText');
    this.clearFilterBtn = document.getElementById('clearFilterBtn');

    // Rows & Feeds
    this.top10RowSection = document.getElementById('top10RowSection');
    this.top10Track = document.getElementById('top10Track');
    this.reelsRowSection = document.getElementById('reelsRowSection');
    this.reelsTrack = document.getElementById('reelsTrack');
    this.mainFeedGrid = document.getElementById('mainFeedGrid');
    this.myListRowSection = document.getElementById('myListRowSection');
    this.myListGrid = document.getElementById('myListGrid');

    // Modal 1: Who's Watching
    this.profileSwitcherModal = document.getElementById('profileSwitcherModal');
    this.switcherProfilesGrid = document.getElementById('switcherProfilesGrid');
    this.openAddProfileBtn = document.getElementById('openAddProfileBtn');
    this.closeSwitcherBtn = document.getElementById('closeSwitcherBtn');
    this.addProfileForm = document.getElementById('addProfileForm');
    this.newMemberName = document.getElementById('newMemberName');
    this.newMemberHandle = document.getElementById('newMemberHandle');
    this.newMemberBio = document.getElementById('newMemberBio');
    this.avatarOptionsRow = document.getElementById('avatarOptionsRow');
    this.cancelAddProfileBtn = document.getElementById('cancelAddProfileBtn');

    // Modal 2: Story Viewer
    this.storyViewerModal = document.getElementById('storyViewerModal');
    this.storyProgressStrip = document.getElementById('storyProgressStrip');
    this.storyAuthorAvatar = document.getElementById('storyAuthorAvatar');
    this.storyAuthorName = document.getElementById('storyAuthorName');
    this.storyTimestamp = document.getElementById('storyTimestamp');
    this.storyPauseBtn = document.getElementById('storyPauseBtn');
    this.closeStoryModalBtn = document.getElementById('closeStoryModalBtn');
    this.storyImgMedia = document.getElementById('storyImgMedia');
    this.storyVideoMedia = document.getElementById('storyVideoMedia');
    this.storyTapLeft = document.getElementById('storyTapLeft');
    this.storyTapRight = document.getElementById('storyTapRight');
    this.storyCaptionText = document.getElementById('storyCaptionText');
    this.storyReplyInput = document.getElementById('storyReplyInput');
    this.storyLikeBtn = document.getElementById('storyLikeBtn');

    // Modal 3: Create Post
    this.createPostModal = document.getElementById('createPostModal');
    this.closeCreateModalBtn = document.getElementById('closeCreateModalBtn');
    this.cancelCreateBtn = document.getElementById('cancelCreateBtn');
    this.createTabs = document.querySelectorAll('.create-tab');
    this.mediaDropzone = document.getElementById('mediaDropzone');
    this.createFileInput = document.getElementById('createFileInput');
    this.dropzoneEmpty = document.getElementById('dropzoneEmpty');
    this.dropzonePreview = document.getElementById('dropzonePreview');
    this.dropzoneMediaHost = document.getElementById('dropzoneMediaHost');
    this.removeUploadBtn = document.getElementById('removeUploadBtn');
    this.createCaptionInput = document.getElementById('createCaptionInput');
    this.quickChips = document.querySelectorAll('.quick-chip');
    this.createPostForm = document.getElementById('createPostForm');

    // Modal 4: Split Post Detail
    this.postDetailModal = document.getElementById('postDetailModal');
    this.closeDetailModalBtn = document.getElementById('closeDetailModalBtn');
    this.splitMediaHost = document.getElementById('splitMediaHost');
    this.splitAuthorAvatar = document.getElementById('splitAuthorAvatar');
    this.splitAuthorName = document.getElementById('splitAuthorName');
    this.splitAuthorHandle = document.getElementById('splitAuthorHandle');
    this.splitFollowBtn = document.getElementById('splitFollowBtn');
    this.splitCaptionAvatar = document.getElementById('splitCaptionAvatar');
    this.splitCaptionAuthorName = document.getElementById('splitCaptionAuthorName');
    this.splitCaptionText = document.getElementById('splitCaptionText');
    this.splitTagsRow = document.getElementById('splitTagsRow');
    this.splitPostTime = document.getElementById('splitPostTime');
    this.splitCommentsList = document.getElementById('splitCommentsList');
    this.splitLikeBtn = document.getElementById('splitLikeBtn');
    this.splitCommentFocusBtn = document.getElementById('splitCommentFocusBtn');
    this.splitShareBtn = document.getElementById('splitShareBtn');
    this.splitMyListBtn = document.getElementById('splitMyListBtn');
    this.splitLikesCount = document.getElementById('splitLikesCount');
    this.splitAddCommentForm = document.getElementById('splitAddCommentForm');
    this.splitCommentInput = document.getElementById('splitCommentInput');

    // Toast
    this.toastContainer = document.getElementById('toastContainer');
  }

  initStoryViewer() {
    this.storyViewer = new StoryViewerEngine({
      store: this.store,
      onRenderStory: ({ story, author, storyIndex, totalStoriesInGroup }) => {
        this.renderStoryModalContent(story, author, storyIndex, totalStoriesInGroup);
      },
      onProgressUpdate: (percentage, index) => {
        const fill = document.getElementById(`progressFill_${index}`);
        if (fill) fill.style.width = `${percentage}%`;
      },
      onClose: () => {
        this.storyViewerModal.style.display = 'none';
      }
    });
  }

  bindEvents() {
    // Scroll listener for sticky transparent-to-black navbar
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    });

    // Logo click returns to Home
    this.brandHomeBtn.addEventListener('click', () => {
      this.store.setFilter('all');
      this.clearSearch();
    });

    // Nav Filter Links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const filter = link.getAttribute('data-filter');
        this.store.setFilter(filter);
        this.clearSearch();
      });
    });

    // Search input
    this.globalSearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      this.clearSearchBtn.style.display = val ? 'block' : 'none';
      this.store.setSearchQuery(val);
    });

    this.clearSearchBtn.addEventListener('click', () => {
      this.clearSearch();
    });

    // Clear filter banner
    this.clearFilterBtn.addEventListener('click', () => {
      this.store.setFilter('all');
      this.clearSearch();
    });

    // Notifications Dropdown
    this.notifBellBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = this.notifDropdown.style.display === 'flex';
      this.notifDropdown.style.display = open ? 'none' : 'flex';
    });

    this.markAllReadBtn.addEventListener('click', () => {
      this.store.markAllNotificationsRead();
      this.showToast('All notifications marked as read.');
    });

    document.addEventListener('click', (e) => {
      if (!this.notifDropdown.contains(e.target) && e.target !== this.notifBellBtn) {
        this.notifDropdown.style.display = 'none';
      }
    });

    // Profile Switcher ("Who's Watching?")
    this.profileDropdownBtn.addEventListener('click', () => this.openProfileSwitcher());
    this.closeSwitcherBtn.addEventListener('click', () => this.closeProfileSwitcher());
    this.openAddProfileBtn.addEventListener('click', () => {
      this.addProfileForm.style.display = 'flex';
      this.renderAvatarOptions();
    });
    this.cancelAddProfileBtn.addEventListener('click', () => {
      this.addProfileForm.style.display = 'none';
    });

    this.addProfileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      try {
        const user = this.store.createProfile({
          name: this.newMemberName.value,
          handle: this.newMemberHandle.value,
          bio: this.newMemberBio.value,
          avatarUrl: this.selectedNewProfileAvatar
        });
        this.addProfileForm.reset();
        this.addProfileForm.style.display = 'none';
        this.closeProfileSwitcher();
        this.showToast(`Welcome, ${user.name}!`);
      } catch (err) {
        alert(err.message);
      }
    });

    // Create Modal Triggers
    this.openCreateModalBtn.addEventListener('click', () => this.openCreateModal());
    this.closeCreateModalBtn.addEventListener('click', () => this.closeCreateModal());
    this.cancelCreateBtn.addEventListener('click', () => this.closeCreateModal());

    this.createTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.createTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.selectedCreateType = tab.getAttribute('data-type');
      });
    });

    // Dropzone File Input
    this.mediaDropzone.addEventListener('click', (e) => {
      if (e.target !== this.removeUploadBtn) {
        this.createFileInput.click();
      }
    });

    this.createFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const isImg = file.type.startsWith('image/');
      const isVid = file.type.startsWith('video/');

      if (!isImg && !isVid) {
        alert('Please select an image or video file.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (loadEvt) => {
        this.createMediaAttachment = {
          type: isImg ? 'image' : 'video',
          url: loadEvt.target.result,
          name: file.name
        };
        this.renderDropzonePreview();
      };
      reader.readAsDataURL(file);
    });

    this.removeUploadBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.createMediaAttachment = null;
      this.createFileInput.value = '';
      this.renderDropzonePreview();
    });

    // Quick tag chips in create modal
    this.quickChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const tag = chip.getAttribute('data-tag');
        const cur = this.createCaptionInput.value;
        this.createCaptionInput.value = cur ? `${cur} #${tag}` : `#${tag}`;
      });
    });

    // Create Form Submit
    this.createPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const caption = this.createCaptionInput.value;

      if (!caption.trim() && !this.createMediaAttachment) {
        alert('Please write a caption or attach media.');
        return;
      }

      // Default fallback media if none attached
      const finalMedia = this.createMediaAttachment || {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80'
      };

      if (this.selectedCreateType === 'story') {
        this.store.createStory({ media: finalMedia, caption });
        this.showToast('24h Story published to Nexus!');
      } else {
        this.store.createPostOrReel({
          type: this.selectedCreateType,
          media: finalMedia,
          caption
        });
        this.showToast(this.selectedCreateType === 'reel' ? 'Reel published to trending track!' : 'Publication posted to feed!');
      }

      this.createPostForm.reset();
      this.createMediaAttachment = null;
      this.renderDropzonePreview();
      this.closeCreateModal();
    });

    // Story Modal Tap Controls
    this.storyTapLeft.addEventListener('click', () => this.storyViewer.previousStory());
    this.storyTapRight.addEventListener('click', () => this.storyViewer.nextStory());
    this.closeStoryModalBtn.addEventListener('click', () => this.storyViewer.close());

    // Pause on hold
    this.storyTapLeft.addEventListener('mousedown', () => this.storyViewer.pause());
    this.storyTapLeft.addEventListener('mouseup', () => this.storyViewer.resume());
    this.storyTapRight.addEventListener('mousedown', () => this.storyViewer.pause());
    this.storyTapRight.addEventListener('mouseup', () => this.storyViewer.resume());

    this.storyPauseBtn.addEventListener('click', () => {
      if (this.storyViewer.isPaused) {
        this.storyViewer.resume();
        this.storyPauseBtn.textContent = '⏸';
      } else {
        this.storyViewer.pause();
        this.storyPauseBtn.textContent = '▶';
      }
    });

    this.storyLikeBtn.addEventListener('click', (e) => {
      this.triggerHeartPop(e.clientX, e.clientY);
      this.showToast('Story reaction sent ❤️');
    });

    // Billboard Play Button
    this.billboardPlayBtn.addEventListener('click', () => {
      const topPost = this.store.posts[0];
      if (topPost) this.openDetailModal(topPost);
    });

    // Billboard My List Button
    this.billboardListBtn.addEventListener('click', () => {
      const topPost = this.store.posts[0];
      if (topPost) {
        const added = this.store.toggleMyList(topPost.id);
        this.showToast(added ? 'Added to My List' : 'Removed from My List');
        this.renderBillboard();
      }
    });

    // Billboard Sound Toggle
    this.billboardSoundBtn.addEventListener('click', () => {
      this.showToast('Audio stream toggled.');
    });

    // Split Post Detail Modal Controls
    this.closeDetailModalBtn.addEventListener('click', () => this.closeDetailModal());

    this.splitLikeBtn.addEventListener('click', (e) => {
      if (!this.activeModalPost) return;
      const nowLiked = this.store.toggleLike(this.activeModalPost.id);
      if (nowLiked) this.triggerHeartPop(e.clientX, e.clientY);
      this.updateDetailModalSocialState();
    });

    this.splitMyListBtn.addEventListener('click', () => {
      if (!this.activeModalPost) return;
      const added = this.store.toggleMyList(this.activeModalPost.id);
      this.showToast(added ? 'Added to My List' : 'Removed from My List');
      this.updateDetailModalSocialState();
    });

    this.splitShareBtn.addEventListener('click', () => {
      if (!this.activeModalPost) return;
      this.store.sharePost(this.activeModalPost.id);
      this.showToast('Link copied to clipboard!');
    });

    this.splitCommentFocusBtn.addEventListener('click', () => {
      this.splitCommentInput.focus();
    });

    this.splitFollowBtn.addEventListener('click', () => {
      if (!this.activeModalPost) return;
      const nowFollowing = this.store.toggleFollow(this.activeModalPost.authorId);
      this.showToast(nowFollowing ? 'Following creator' : 'Unfollowed');
      this.updateDetailModalSocialState();
    });

    this.splitAddCommentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!this.activeModalPost) return;
      const text = this.splitCommentInput.value;
      try {
        this.store.addComment(this.activeModalPost.id, text);
        this.splitCommentInput.value = '';
        this.updateDetailModalSocialState();
        this.showToast('Comment posted!');
      } catch (err) {
        alert(err.message);
      }
    });

    // Double-tap on split media pane to like
    this.bindDoubleTap(this.splitMediaHost, (x, y) => {
      if (!this.activeModalPost) return;
      this.triggerHeartPop(x, y);
      this.store.toggleLike(this.activeModalPost.id);
      this.updateDetailModalSocialState();
    });
  }

  clearSearch() {
    this.globalSearchInput.value = '';
    this.clearSearchBtn.style.display = 'none';
    this.store.setSearchQuery('');
  }

  renderDropzonePreview() {
    if (!this.createMediaAttachment) {
      this.dropzoneEmpty.style.display = 'block';
      this.dropzonePreview.style.display = 'none';
      this.dropzoneMediaHost.innerHTML = '';
      return;
    }

    this.dropzoneEmpty.style.display = 'none';
    this.dropzonePreview.style.display = 'block';
    if (this.createMediaAttachment.type === 'image') {
      this.dropzoneMediaHost.innerHTML = `<img src="${this.createMediaAttachment.url}" alt="Upload Preview" />`;
    } else {
      this.dropzoneMediaHost.innerHTML = `<video src="${this.createMediaAttachment.url}" controls></video>`;
    }
  }

  // --- Modals Management ---
  openProfileSwitcher() {
    this.renderProfileSwitcherList();
    this.profileSwitcherModal.style.display = 'flex';
  }

  closeProfileSwitcher() {
    this.profileSwitcherModal.style.display = 'none';
    this.addProfileForm.style.display = 'none';
  }

  renderProfileSwitcherList() {
    const curUser = this.store.getCurrentUser();
    this.switcherProfilesGrid.innerHTML = this.store.users.map(u => `
      <div class="switcher-item ${u.id === curUser.id ? 'active' : ''}" data-uid="${u.id}">
        <img src="${u.avatar}" alt="${u.name}" class="switcher-item-avatar" />
        <span class="switcher-item-name">${u.name}</span>
      </div>
    `).join('');

    this.switcherProfilesGrid.querySelectorAll('.switcher-item').forEach(item => {
      item.addEventListener('click', () => {
        const uid = item.getAttribute('data-uid');
        this.store.switchProfile(uid);
        this.closeProfileSwitcher();
        this.showToast(`Switched profile to ${this.store.getCurrentUser().name}`);
      });
    });
  }

  renderAvatarOptions() {
    this.avatarOptionsRow.innerHTML = NEXUS_AVATARS.map((av, idx) => `
      <img src="${av.url}" class="avatar-option-choice ${idx === 0 ? 'selected' : ''}" data-url="${av.url}" alt="${av.name}" />
    `).join('');

    this.avatarOptionsRow.querySelectorAll('.avatar-option-choice').forEach(img => {
      img.addEventListener('click', () => {
        this.avatarOptionsRow.querySelectorAll('.avatar-option-choice').forEach(i => i.classList.remove('selected'));
        img.classList.add('selected');
        this.selectedNewProfileAvatar = img.getAttribute('data-url');
      });
    });
  }

  openCreateModal() {
    this.createPostModal.style.display = 'flex';
  }

  closeCreateModal() {
    this.createPostModal.style.display = 'none';
  }

  openDetailModal(post) {
    this.activeModalPost = post;
    const author = this.store.users.find(u => u.id === post.authorId);

    // Media Column Left
    if (post.media && post.media.type === 'video') {
      this.splitMediaHost.innerHTML = `<video src="${post.media.url}" controls autoplay playsinline loop></video>`;
    } else {
      this.splitMediaHost.innerHTML = `<img src="${post.media ? post.media.url : ''}" alt="${post.title}" />`;
    }

    // Social Details Right
    this.splitAuthorAvatar.src = author.avatar;
    this.splitAuthorName.textContent = author.name;
    this.splitAuthorHandle.textContent = `@${author.handle}`;

    this.splitCaptionAvatar.src = author.avatar;
    this.splitCaptionAuthorName.textContent = author.name;
    this.splitCaptionText.textContent = post.caption;

    this.splitTagsRow.innerHTML = (post.tags || []).map(t => `<span class="split-tag-badge" data-tag="${t}">#${t}</span>`).join('');
    this.splitTagsRow.querySelectorAll('.split-tag-badge').forEach(badge => {
      badge.addEventListener('click', () => {
        const tag = badge.getAttribute('data-tag');
        this.closeDetailModal();
        this.store.setSearchQuery(tag);
      });
    });

    this.splitPostTime.textContent = this.formatTime(post.createdAt);

    this.updateDetailModalSocialState();
    this.postDetailModal.style.display = 'flex';
  }

  closeDetailModal() {
    this.postDetailModal.style.display = 'none';
    this.splitMediaHost.innerHTML = '';
    this.activeModalPost = null;
  }

  updateDetailModalSocialState() {
    if (!this.activeModalPost) return;
    const post = this.store.posts.find(p => p.id === this.activeModalPost.id) || this.activeModalPost;
    const curUser = this.store.getCurrentUser();
    const isLiked = post.likes && post.likes.includes(curUser.id);
    const isInList = curUser.myList && curUser.myList.includes(post.id);
    const isFollowing = curUser.following && curUser.following.includes(post.authorId);
    const isSelf = curUser.id === post.authorId;

    // Follow button
    if (isSelf) {
      this.splitFollowBtn.style.display = 'none';
    } else {
      this.splitFollowBtn.style.display = 'block';
      this.splitFollowBtn.textContent = isFollowing ? 'Following' : '+ Follow';
      this.splitFollowBtn.className = `btn-follow ${isFollowing ? 'following' : ''}`;
    }

    // Likes & Actions
    this.splitLikeBtn.className = `icon-btn-action ${isLiked ? 'liked' : ''}`;
    this.splitMyListBtn.className = `icon-btn-action ${isInList ? 'saved' : ''}`;
    this.splitLikesCount.textContent = `${(post.likes || []).length} likes`;

    // Comments List
    if (!post.comments || post.comments.length === 0) {
      this.splitCommentsList.innerHTML = `<div style="color: var(--nfg-text-muted); font-size: 0.85rem; text-align: center; padding: 1rem 0;">No comments yet. Start the conversation!</div>`;
    } else {
      this.splitCommentsList.innerHTML = post.comments.map(c => {
        const cAuthor = this.store.users.find(u => u.id === c.authorId) || { name: 'User', avatar: NEXUS_AVATARS[0].url };
        return `
          <div class="comment-row">
            <img src="${cAuthor.avatar}" class="avatar-sm" alt="${cAuthor.name}" />
            <div class="comment-content">
              <p><strong>${cAuthor.name}</strong> ${this.escapeHTML(c.text)}</p>
              <span class="comment-time">${this.formatTime(c.createdAt)}</span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  renderStoryModalContent(story, author, storyIndex, totalStoriesInGroup) {
    // 1. Setup Progress Strip
    this.storyProgressStrip.innerHTML = '';
    for (let i = 0; i < totalStoriesInGroup; i++) {
      const track = document.createElement('div');
      track.className = 'progress-segment-track';
      const fill = document.createElement('div');
      fill.className = 'progress-segment-fill';
      fill.id = `progressFill_${i}`;
      if (i < storyIndex) fill.style.width = '100%';
      track.appendChild(fill);
      this.storyProgressStrip.appendChild(track);
    }

    // 2. Author Details
    this.storyAuthorAvatar.src = author.avatar;
    this.storyAuthorName.textContent = author.name;
    this.storyTimestamp.textContent = this.formatTime(story.createdAt);

    // 3. Media Render
    if (story.media && story.media.type === 'video') {
      this.storyImgMedia.style.display = 'none';
      this.storyVideoMedia.style.display = 'block';
      this.storyVideoMedia.src = story.media.url;
      this.storyVideoMedia.play().catch(() => {});
    } else {
      this.storyVideoMedia.style.display = 'none';
      this.storyImgMedia.style.display = 'block';
      this.storyImgMedia.src = story.media ? story.media.url : '';
    }

    this.storyCaptionText.textContent = story.caption || '';
    this.storyViewerModal.style.display = 'flex';
  }

  triggerHeartPop(x, y) {
    const heart = document.createElement('div');
    heart.className = 'nexus-heart-pop';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.innerHTML = `
      <svg viewBox="0 0 24 24" width="80" height="80" fill="#E50914" stroke="#ffffff" stroke-width="1">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;
    document.body.appendChild(heart);

    setTimeout(() => {
      if (heart.parentNode) heart.parentNode.removeChild(heart);
    }, 850);
  }

  bindDoubleTap(element, callback) {
    let lastTap = 0;
    element.addEventListener('click', (e) => {
      const now = Date.now();
      if (now - lastTap < 300) {
        callback(e.clientX, e.clientY);
        lastTap = 0;
      } else {
        lastTap = now;
      }
    });
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'nfg-toast';
    toast.textContent = message;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
  }

  // --- Main Render Loop ---
  render() {
    const curUser = this.store.getCurrentUser();
    if (!curUser) return;

    // 1. Top Navbar User State
    this.navUserAvatar.src = curUser.avatar;
    this.navUserName.textContent = curUser.name;

    // Active Navigation Links
    this.navLinks.forEach(link => {
      const filter = link.getAttribute('data-filter');
      if (this.store.activeFilter === filter && !this.store.searchQuery) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Notifications Badge & List
    const unread = this.store.getUnreadNotificationsCount();
    if (unread > 0) {
      this.notifBadge.style.display = 'flex';
      this.notifBadge.textContent = unread > 9 ? '9+' : unread;
    } else {
      this.notifBadge.style.display = 'none';
    }

    const notifs = this.store.getCurrentUserNotifications();
    if (notifs.length === 0) {
      this.notifList.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--nfg-text-muted); font-size: 0.85rem;">No notifications yet.</div>`;
    } else {
      this.notifList.innerHTML = notifs.map(n => {
        let txt = '';
        if (n.type === 'like') txt = 'liked your publication';
        else if (n.type === 'comment') txt = 'commented on your publication';
        else if (n.type === 'follow') txt = 'started following you';
        return `
          <div class="notif-item ${n.read ? '' : 'unread'}">
            <img src="${n.actor.avatar}" class="notif-avatar" alt="${n.actor.name}" />
            <div>
              <p class="notif-text"><strong>${n.actor.name}</strong> ${txt}</p>
              <span class="notif-time">${this.formatTime(n.createdAt)}</span>
            </div>
          </div>
        `;
      }).join('');
    }

    // 2. Render Stories Shelf
    this.renderStoriesShelf();

    // 3. Render Billboard
    this.renderBillboard();

    // 4. Render Active Filter Bar
    if (this.store.searchQuery) {
      this.activeFilterBar.style.display = 'flex';
      this.filterValueText.textContent = `Search: "${this.store.searchQuery}"`;
    } else if (this.store.activeFilter !== 'all') {
      this.activeFilterBar.style.display = 'flex';
      this.filterValueText.textContent = this.store.activeFilter.toUpperCase();
    } else {
      this.activeFilterBar.style.display = 'none';
    }

    // 5. Render Carousel Rows & Feeds
    this.renderRows();
  }

  renderStoriesShelf() {
    const curUser = this.store.getCurrentUser();
    const storyGroups = this.store.getHydratedStoriesList();

    // "Your Story (+)" create node
    let html = `
      <div class="story-node" id="createStoryNode">
        <div class="story-ring story-create-ring">
          <img src="${curUser.avatar}" class="story-avatar" alt="You" />
          <span class="story-plus-badge">+</span>
        </div>
        <span class="story-handle">Your Story</span>
      </div>
    `;

    // Stories from creators
    html += storyGroups.map(group => `
      <div class="story-node ${group.hasUnseen ? '' : 'viewed'}" data-author-id="${group.author.id}">
        <div class="story-ring">
          <img src="${group.author.avatar}" class="story-avatar" alt="${group.author.name}" />
        </div>
        <span class="story-handle">@${group.author.handle}</span>
      </div>
    `).join('');

    this.storiesShelf.innerHTML = html;

    // Attach Click Handlers
    const createNode = document.getElementById('createStoryNode');
    if (createNode) {
      createNode.addEventListener('click', () => {
        this.selectedCreateType = 'story';
        this.createTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-type') === 'story'));
        this.openCreateModal();
      });
    }

    this.storiesShelf.querySelectorAll('.story-node:not(#createStoryNode)').forEach(node => {
      node.addEventListener('click', () => {
        const authorId = node.getAttribute('data-author-id');
        this.storyViewer.openPlaylist(storyGroups, authorId);
      });
    });
  }

  renderBillboard() {
    const topPost = this.store.posts[0];
    if (!topPost) return;
    const author = this.store.users.find(u => u.id === topPost.authorId);
    const curUser = this.store.getCurrentUser();
    const isInList = curUser.myList && curUser.myList.includes(topPost.id);

    this.billboardBackdrop.src = topPost.media ? topPost.media.url : '';
    this.billboardMatch.textContent = topPost.matchScore || '99% Match';
    this.billboardTitle.textContent = topPost.title || 'NEXUS ORIGINAL';
    this.billboardCreator.textContent = author ? `Publication by @${author.handle}` : '';
    this.billboardDesc.textContent = topPost.caption;

    this.billboardListIcon.textContent = isInList ? '✓' : '＋';
    this.billboardListText.textContent = isInList ? 'In My List' : 'My List';
  }

  renderRows() {
    const posts = this.store.getFilteredPosts();
    const curUser = this.store.getCurrentUser();

    // 1. Top 10 Today Row
    const top10 = posts.slice(0, 10);
    this.top10Track.innerHTML = top10.map((post, idx) => `
      <div class="top10-card-wrapper" data-post-id="${post.id}">
        <span class="top10-rank-num">${idx + 1}</span>
        <div class="top10-card-body">
          <img src="${post.media ? post.media.url : ''}" alt="${post.title}" loading="lazy" />
          <div class="top10-overlay-title">${post.title}</div>
        </div>
      </div>
    `).join('');

    this.top10Track.querySelectorAll('.top10-card-wrapper').forEach(card => {
      card.addEventListener('click', () => {
        const pid = card.getAttribute('data-post-id');
        const p = this.store.posts.find(item => item.id === pid);
        if (p) this.openDetailModal(p);
      });
    });

    // 2. Trending Reels Row (Filtered for 9:16 vertical reels)
    const reels = this.store.posts.filter(p => p.type === 'reel');
    this.reelsTrack.innerHTML = reels.map(reel => {
      const author = this.store.users.find(u => u.id === reel.authorId);
      return `
        <div class="reel-card" data-post-id="${reel.id}">
          <img src="${reel.media ? reel.media.url : ''}" alt="${reel.title}" loading="lazy" />
          <div class="reel-top-badges">
            <span class="reel-n-badge">N</span>
            <span class="reel-match-badge">${reel.matchScore || '98% Match'}</span>
          </div>
          <div class="reel-bottom-meta">
            <span class="reel-author-name">@${author ? author.handle : 'creator'}</span>
            <span class="reel-caption-snippet">${reel.caption}</span>
            <div class="reel-metrics-row">
              <span>❤️ ${(reel.likes || []).length}</span>
              <span>💬 ${(reel.comments || []).length}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.reelsTrack.querySelectorAll('.reel-card').forEach(card => {
      card.addEventListener('click', () => {
        const pid = card.getAttribute('data-post-id');
        const p = this.store.posts.find(item => item.id === pid);
        if (p) this.openDetailModal(p);
      });
    });

    // 3. Main Feed Grid
    this.mainFeedGrid.innerHTML = posts.map(post => {
      const author = this.store.users.find(u => u.id === post.authorId);
      const isLiked = post.likes && post.likes.includes(curUser.id);
      const isInList = curUser.myList && curUser.myList.includes(post.id);

      return `
        <article class="feed-card" data-post-id="${post.id}">
          <div class="feed-card-thumb-wrapper">
            <img src="${post.media ? post.media.url : ''}" alt="${post.title}" loading="lazy" />
          </div>
          <div class="feed-card-info">
            <div class="card-creator-row">
              <div class="creator-mini">
                <img src="${author ? author.avatar : ''}" class="creator-mini-avatar" alt="${author ? author.name : ''}" />
                <span class="creator-mini-name">@${author ? author.handle : 'user'}</span>
              </div>
              <span class="card-match-score">${post.matchScore || '95% Match'}</span>
            </div>
            <p class="card-caption-line">${this.escapeHTML(post.caption)}</p>
            <div class="card-action-bar">
              <div class="card-action-left">
                <button class="card-icon-btn like-btn ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span>${(post.likes || []).length}</span>
                </button>
                <button class="card-icon-btn comment-btn" data-post-id="${post.id}">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>${(post.comments || []).length}</span>
                </button>
              </div>
              <button class="card-icon-btn save-btn ${isInList ? 'saved' : ''}" data-post-id="${post.id}" title="My List">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card handlers
    this.mainFeedGrid.querySelectorAll('.feed-card').forEach(card => {
      const pid = card.getAttribute('data-post-id');
      const post = this.store.posts.find(item => item.id === pid);

      card.querySelector('.feed-card-thumb-wrapper').addEventListener('click', () => {
        if (post) this.openDetailModal(post);
      });

      // Double-tap on thumbnail to like
      this.bindDoubleTap(card.querySelector('.feed-card-thumb-wrapper'), (x, y) => {
        this.triggerHeartPop(x, y);
        this.store.toggleLike(pid);
      });

      // Like Button
      card.querySelector('.like-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        const nowLiked = this.store.toggleLike(pid);
        if (nowLiked) this.triggerHeartPop(e.clientX, e.clientY);
      });

      // Comment Button
      card.querySelector('.comment-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (post) this.openDetailModal(post);
      });

      // Save Button
      card.querySelector('.save-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        const added = this.store.toggleMyList(pid);
        this.showToast(added ? 'Saved to My List' : 'Removed from My List');
      });
    });

    // 4. My List Row (if active filter is my_list or has items)
    const myListPosts = this.store.posts.filter(p => curUser.myList && curUser.myList.includes(p.id));
    if (this.store.activeFilter === 'my_list' || myListPosts.length > 0) {
      this.myListRowSection.style.display = 'block';
      this.myListGrid.innerHTML = myListPosts.map(post => {
        const author = this.store.users.find(u => u.id === post.authorId);
        return `
          <div class="feed-card" data-post-id="${post.id}">
            <div class="feed-card-thumb-wrapper">
              <img src="${post.media ? post.media.url : ''}" alt="${post.title}" />
            </div>
            <div class="feed-card-info">
              <span class="card-creator-row">@${author ? author.handle : ''} · ${post.matchScore}</span>
              <p class="card-caption-line">${post.caption}</p>
            </div>
          </div>
        `;
      }).join('');

      this.myListGrid.querySelectorAll('.feed-card').forEach(card => {
        card.addEventListener('click', () => {
          const pid = card.getAttribute('data-post-id');
          const p = this.store.posts.find(item => item.id === pid);
          if (p) this.openDetailModal(p);
        });
      });
    } else {
      this.myListRowSection.style.display = 'none';
    }
  }

  // --- Helpers ---
  escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  formatTime(isoDate) {
    const diff = Date.now() - new Date(isoDate).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 3600000);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    return new Date(isoDate).toLocaleDateString();
  }
}

// Global window exposure for tests
window.NexusStore = NexusStore;
window.StoryViewerEngine = StoryViewerEngine;
window.NexusApp = NexusApp;

// Bootstrap Application
window.addEventListener('DOMContentLoaded', () => {
  window.app = new NexusApp();
});
