
// Shared Firebase initialization (config loaded from firebase-config.js)
if (!firebase.apps.length) firebase.initializeApp(window.SOTOTA_FIREBASE_CONFIG);
const db = firebase.database();
const auth = firebase.auth();

    const TRANSLATIONS = {
      bn: {
        liveBadge: "২৪/৭ লাইভ",
        blogBtn: "📚 ব্লগ",
        moreBtn: "আরও ▾",
        latestNews: "সর্বশেষ সংবাদ",
        allNews: "সব সংবাদ",
        readMore: "বিস্তারিত পড়ুন →",
        like: "পছন্দ",
        liked: "পছন্দ করেছেন",
        share: "শেয়ার",
        comments: "পাঠকের মন্তব্য",
        commentedNotice: "🔒 আপনি ইতোমধ্যে এই পোস্টে একটি মন্তব্য করেছেন।",
        postComment: "মন্তব্য প্রকাশ করুন",
        sponsor: "স্পনসরড বিজ্ঞাপন",
        rewardTitle: "🔒 সম্পূর্ণ সংবাদ ও বিশ্লেষণ পড়তে বিজ্ঞাপনটি দেখুন",
        rewardBtn: "🎁 বিজ্ঞাপন দেখুন (আনলক করুন)",
        searchPlaceholder: "লিখুন...",
        searchSubmitBtn: "খুঁজুন",
        loadMore: "📥 আরও সংবাদ দেখুন",
        remaining: "টি বাকি",
        reporter: "প্রতিবেদক:",
        readTime: "মিনিট পাঠ",
        viewsText: "বার পঠিত",
        relatedTitle: "📌 সম্পর্কিত আরও সংবাদ (ট্রেন্ডিং ও ভাইরাল)",
        noComments: "এখনও কোনো মন্তব্য নেই।",
        namePlaceholder: "আপনার নাম",
        commentPlaceholder: "আপনার মন্তব্য লিখুন..."
      },
      en: {
        liveBadge: "24/7 LIVE",
        blogBtn: "📚 Blog",
        moreBtn: "More ▾",
        latestNews: "Latest News",
        allNews: "All News",
        readMore: "Read Full Story →",
        like: "Like",
        liked: "Liked",
        share: "Share",
        comments: "Reader Comments",
        commentedNotice: "🔒 You have already commented on this post.",
        postComment: "Post Comment",
        sponsor: "Sponsored Ad",
        rewardTitle: "🔒 Watch sponsored ad to unlock full story",
        rewardBtn: "🎁 Watch Ad to Unlock",
        searchPlaceholder: "Type here...",
        searchSubmitBtn: "Search",
        loadMore: "📥 Load More News",
        remaining: "remaining",
        reporter: "Reporter:",
        readTime: "min read",
        viewsText: "views",
        relatedTitle: "📌 Related News (Trending & Viral)",
        noComments: "No comments yet.",
        namePlaceholder: "Your Name",
        commentPlaceholder: "Write your comment..."
      }
    };
    const INITIAL_NEWS = [
      {
        id: "p1",
        title: "দেশের ডিজিটাল রূপান্তরে যুগান্তকারী পদক্ষেপে নতুন ক্লাউড সেন্টার উদ্বোধন",
        category: "প্রযুক্তি",
        author: "আইটি প্রতিনিধি",
        timestamp: Date.now() - 600000,
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        body: "দেশের তথ্যপ্রযুক্তি খাতে সক্ষমতা বাড়াতে আজ সর্বাধুনিক প্রযুক্তির ক্লাউড ডেটাসেন্টার চালু করা হয়েছে। এই অবকাঠামোর মাধ্যমে সরকারি ও বেসরকারি খাতের ডিজিটাল সেবা আরও দ্রুত এবং সুরক্ষিত হবে।",
        likes: 38,
        views: 1420,
        comments: [{ name: "রাকিব", text: "প্রযুক্তিতে দেশের এগিয়ে যাওয়া সত্যি প্রশংসনীয়।" }]
      },
      {
        id: "p2",
        title: "আন্তর্জাতিক চলচ্চিত্র উৎসবে দেশের তরুণ পরিচালকের বিশেষ পুরস্কার জয়",
        category: "বিনোদন",
        author: "বিনোদন ডেস্ক",
        timestamp: Date.now() - 1500000,
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
        body: "বিশ্বমঞ্চে দেশের সিনেমাকে তুলে ধরে বিশেষ সম্মাননা পেয়েছেন তরুণ এই চিত্রপরিচালক। উৎসবের জুরি বোর্ড তার নির্মিত সৃষ্টির ভূয়সী প্রশংসা করেন।",
        likes: 54,
        views: 2850,
        comments: []
      },
      {
        id: "p3",
        title: "বিশ্বকাপের প্রস্তুতি ম্যাচে টাইগারদের নিয়ন্ত্রিত জয়",
        category: "খেলাধুলা",
        author: "ক্রীড়া প্রতিবেদক",
        timestamp: Date.now() - 3600000,
        img: "https://images.unsplash.com/photo-1531415074868-036b1c57e3ce?w=800&q=80",
        body: "ব্যাটারদের ছন্দময় ব্যাটিং ও বোলারদের নিয়ন্ত্রিত বোলিংয়ে প্রস্তুতি ম্যাচে ৬ উইকেটের সহজ জয় তুলে নিয়েছে জাতীয় দল।",
        likes: 92,
        views: 4120,
        comments: []
      },
      {
        id: "p4",
        title: "জাতীয় অর্থনৈতিক পরিষদের সভায় গ্রামীণ অবকাঠামো প্রকল্প অনুমোদন",
        category: "জাতীয়",
        author: "অর্থনৈতিক প্রতিবেদক",
        timestamp: Date.now() - 7200000,
        img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
        body: "গ্রামীণ রাস্তাঘাট ও ড্রেনেজ অবকাঠামো উন্নয়নে আজ একনেক বৈঠকে বেশ কয়েকটি নতুন প্রকল্পের চূড়ান্ত অনুমোদন দেওয়া হয়েছে।",
        likes: 29,
        views: 980,
        comments: []
      },
      {
        id: "p5",
        title: "ভূ-রাজনৈতিক সংকট নিরসনে নতুন কূটনৈতিক উদ্যোগ",
        category: "আন্তর্জাতিক",
        author: "আন্তর্জাতিক ডেস্ক",
        timestamp: Date.now() - 10800000,
        img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
        body: "আন্তর্জাতিক শান্তি প্রতিষ্ঠায় বিশ্বনেতারা নতুন সংলাপ শুরুর বিষয়ে সম্মত হয়েছেন। সংকট কাটিয়ে উঠতেই এই বহুপাক্ষিক পদক্ষেপ।",
        likes: 19,
        views: 650,
        comments: []
      }
    ];

    // ================= চারটি স্বতন্ত্র বিজ্ঞাপন স্লট =================
    // Footer, In-feed ও In-article-এর জন্য আলাদা Banner code ব্যবহার করা যাবে।
    // পুরোনো "banner" সেটিং থাকলে সেটি তিনটি Banner স্লটের fallback হিসেবে কাজ করবে।
    const AD_SLOTS = [
      { id: "footer", name: "⬇️ Footer Banner", desc: "Desktop ও Mobile-এর জন্য আলাদা Banner Code দিন। Desktop 728×90, Mobile 320×50।", placeholder: "Adsterra Banner-এর সম্পূর্ণ Script ও DIV কোড দিন..." },
      { id: "infeed", name: "📰 In-Feed Banner", desc: "প্রতিটি কোড আলাদা Adsterra Zone হবে। ১ম কোড: Mobile ৩ / Desktop ৪ পোস্টের পর, ২য় কোড: Mobile ৬ / Desktop ৮ পোস্টের পর—এভাবে পরের কোডগুলো ধারাবাহিকভাবে ব্যবহার হবে।", placeholder: "Adsterra In-Feed Banner code..." },
      { id: "article", name: "📄 In-Article Banner", desc: "নিউজের লেখার মাঝখানে ব্যানার দেখাবে।", placeholder: "In-Article Banner-এর সম্পূর্ণ Adsterra Script ও DIV কোড দিন..." },
      { id: "smartlink", name: "🔗 Smartlink Ad", desc: "পাঠক কোনো নিউজ খুললে Smartlink নতুন ট্যাবে চালু হবে।", placeholder: "Adsterra Smartlink URL দিন (https:// দিয়ে শুরু)..." }
    ];

    const FONT_OPTIONS = [
      { name: "Hind Siliguri (হিন্দ শিলিগুড়ি)", value: "'Hind Siliguri', sans-serif" },
      { name: "Noto Sans Bengali (নোতো সান্স)", value: "'Noto Sans Bengali', sans-serif" },
      { name: "Anek Bangla (অনেক বাংলা)", value: "'Anek Bangla', sans-serif" },
      { name: "Tiro Bangla (তিরো বাংলা - ক্লাসিক)", value: "'Tiro Bangla', serif" },
      { name: "Mina (মিনা ফন্ট)", value: "'Mina', sans-serif" },
      { name: "সিস্টেম ডিফল্ট (System UI)", value: "system-ui, -apple-system, sans-serif" }
    ];
    // ইনস্ট্যান্ট ক্যাশ লোডার (ক্র্যাশ প্রোটেকশন সহ)
    let newsPosts = INITIAL_NEWS;
    let blogPosts = [];
    try {
      const cachedN = localStorage.getItem('cached_sotota_news');
      if (cachedN) newsPosts = JSON.parse(cachedN);
      const cachedB = localStorage.getItem('cached_sotota_blogs');
      if (cachedB) blogPosts = JSON.parse(cachedB);
    } catch (e) {
      localStorage.removeItem('cached_sotota_news');
    }

    let siteLanguage = 'bn';
    let currentCategory = 'সব সংবাদ';
    let isBlogView = false;
    let activePostForModal = null;
    let selectedAdSlotId = "footer";
    let activeFooterAdMode = "";
    let pendingConfirmCallback = null;
    let initialUrlChecked = false;

    // Like ও Comment উন্মুক্ত; ফর্ম সবসময় সক্রিয় থাকবে।
    function getVisitorLikes() { return []; }
    function getVisitorComments() { return []; }

    function updateLikeBtnState() {
      const btn = document.querySelector('.btn-like-pill');
      const txt = document.getElementById('txt-like-btn');
      if (!btn || !txt) return;
      btn.style.background = 'rgba(0,0,0,0.06)';
      btn.style.color = 'var(--text-main)';
      btn.style.fontWeight = 'normal';
      txt.innerText = TRANSLATIONS[siteLanguage].like || 'Like';
    }

    function updateCommentFormState() {
      const authorInp = document.getElementById('comment-author-input');
      const textInp = document.getElementById('comment-text-input');
      const submitBtn = document.getElementById('txt-post-comment-btn');
      if (authorInp) authorInp.disabled = false;
      if (textInp) textInp.disabled = false;
      if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; submitBtn.style.cursor = 'pointer'; }
      const notice = document.getElementById('comment-lock-notice');
      if (notice) notice.style.display = 'none';
    }

    function hasDisallowedCommentContent(value) {
      const v = String(value || '').trim();
      const urlOrDomain = /(?:https?:\/\/|www\.|\b[a-z0-9-]+\.(?:com|net|org|io|bd|info|xyz)\b)/i;
      const codeOrMarkup = /<\/?[a-z][^>]*>|\b(?:javascript|data|vbscript):|\b(?:function\s*\(|<script|<iframe|eval\s*\(|document\.|window\.)/i;
      const codeSyntax = /(?:\{\s*\}|=>|\bconsole\.|\bSELECT\s+.+\bFROM\b|\bINSERT\s+INTO\b)/i;
      const repeatedSpam = /(.)\1{11,}/u.test(v) || /(\b\w+\b)(?:\s+\1){5,}/iu.test(v);
      return urlOrDomain.test(v) || codeOrMarkup.test(v) || codeSyntax.test(v) || repeatedSpam;
    }

    // পঠিত সংবাদের হিস্ট্রি সংরক্ষণ (যাতে সম্পর্কিত সংবাদে একই পোস্ট বারবার না আসে)
    let readPostsHistory = [];
    try {
      const stored = sessionStorage.getItem('sotota_read_news_ids');
      if (stored) readPostsHistory = JSON.parse(stored);
    } catch(e) {}

    function markPostAsRead(id) {
      if (!id) return;
      const strId = String(id);
      if (!readPostsHistory.includes(strId)) {
        readPostsHistory.push(strId);
        try {
          sessionStorage.setItem('sotota_read_news_ids', JSON.stringify(readPostsHistory));
        } catch(e) {}
      }
    }

    // পেজিনেশন ও লাইভ সার্চ ভেরিয়েবল
    let postsPerPage = 12;
    let currentPage = 1;
    let searchQuery = '';

    let brandingSettings = {
      title: "সততা নিউজ",
      sub: "SOTOTA NEWS",
      slogan: "সত্যের সন্ধানে সার্বক্ষণিক",
      customLogo: null,
      theme: "default",
      imgbbKey: ""
    };
    let fontSettings = {
      global: "'Hind Siliguri', sans-serif",
      headline: "'Hind Siliguri', sans-serif",
      nav: "'Hind Siliguri', sans-serif",
      article: "'Hind Siliguri', sans-serif",
      logo: "'Hind Siliguri', sans-serif"
    };

    let adStore = {
      master: true,
      slots: {},
      networks: {}
    };
    // Article ad render retry/token: modal open এবং Firebase ad config load—দুই অবস্থাই সামলায়।
    let articleAdRenderTimer = null;
    let articleAdRenderToken = 0;

    function getAdConfig(slotId) {
      if (adStore.slots && adStore.slots[slotId]) return adStore.slots[slotId];
      if (adStore.networks) {
        const legacy = Object.values(adStore.networks).find(n => n.placement === slotId);
        if (legacy) return legacy;
      }
      // আগের সংস্করণের একক Banner সেটিং থাকলে তিনটি Banner placement-এ fallback হবে।
      if (['footer', 'infeed', 'article'].includes(slotId)) {
        if (adStore.slots && adStore.slots.banner) return adStore.slots.banner;
        if (adStore.networks) {
          const oldBanner = Object.values(adStore.networks).find(n => n.placement === 'banner');
          if (oldBanner) return oldBanner;
          const oldPlacement = Object.values(adStore.networks).find(n => ['infeed', 'footer', 'article'].includes(n.placement));
          if (oldPlacement) return oldPlacement;
        }
      }
      return { enabled: false, code: "", network: "" };
    }

    // বাংলা ও ইংরেজি সংখ্যা রূপান্তর (ভাষা অনুযায়ী)
    function toBanglaNum(n) {
      if (siteLanguage === 'en') return String(n);
      return String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
    }

    // পড়ার আনুমানিক সময় হিসাবকারী
    function calculateReadingTime(text) {
      if (!text) return "১ মিনিট পাঠ";
      const clean = text.replace(/<[^>]*>?/gm, '').trim();
      const words = clean.split(/\s+/).filter(Boolean).length;
      const mins = Math.max(1, Math.ceil(words / 140));
      return `${toBanglaNum(mins)} মিনিট পাঠ`;
    }

    // আপেক্ষিক সময় ও তারিখ ফরম্যাটার
    function getFormattedBanglaTime(ts) {
      if (!ts) return "সম্প্রতি";
      const now = Date.now();
      const diff = now - ts;
      const mins = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);

      const d = new Date(ts);
      const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
      const dateStr = `${toBanglaNum(d.getDate())} ${months[d.getMonth()]} ${toBanglaNum(d.getFullYear())}`;

      let relStr = "";
      if (mins < 1) {
        relStr = "এইমাত্র";
      } else if (mins < 60) {
        relStr = `${toBanglaNum(mins)} মিনিট আগে`;
      } else if (hours < 24) {
        relStr = `${toBanglaNum(hours)} ঘণ্টা আগে`;
      } else if (days === 1) {
        relStr = "গতকাল";
      } else {
        relStr = `${toBanglaNum(days)} দিন আগে`;
      }

      return `${relStr} • ${dateStr}`;
    }

    // ================= ফায়ারবেস ক্লাউড লিসেনার =================
    db.ref('news_posts').on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        newsPosts = Array.isArray(data) ? data : Object.values(data);
      } else {
        db.ref('news_posts').set(INITIAL_NEWS);
        newsPosts = INITIAL_NEWS;
      }
      try {
        localStorage.setItem('cached_sotota_news', JSON.stringify(newsPosts.slice(0, 10)));
      } catch(e) {}
      if (activePostForModal) {
        const active = newsPosts.find(p => String(p.id) === String(activePostForModal.id));
        if (active) { activePostForModal = active; renderComments();
          const likeEl = document.getElementById('like-count'); if (likeEl) likeEl.innerText = toBanglaNum(active.likes || 0);
          const viewEl = document.getElementById('modal-views-count'); if (viewEl) viewEl.innerText = `👁️ ${toBanglaNum(active.views || 0)} বার পঠিত`;
        }
      }
      renderFeed();
      if (!initialUrlChecked) checkInitialUrlRouting();
      if (document.getElementById('admin-dashboard-modal').style.display === 'flex') {
        renderAdminPostsTable();
        renderAdminCommentsTable();
      }
    });

    db.ref('blog_posts').on('value', (snapshot) => {
      const data = snapshot.val();
      blogPosts = data ? (Array.isArray(data) ? data : Object.values(data)) : [];
      try {
        localStorage.setItem('cached_sotota_blogs', JSON.stringify(blogPosts.slice(0, 10)));
      } catch(e) {}
      if (activePostForModal && String(activePostForModal.id).startsWith('b_')) {
        const active = blogPosts.find(p => String(p.id) === String(activePostForModal.id));
        if (active) { activePostForModal = active; renderComments();
          const likeEl = document.getElementById('like-count'); if (likeEl) likeEl.innerText = toBanglaNum(active.likes || 0);
          const viewEl = document.getElementById('modal-views-count'); if (viewEl) viewEl.innerText = `👁️ ${toBanglaNum(active.views || 0)} বার পঠিত`;
        }
      }
      if (isBlogView) renderFeed();
      if (!initialUrlChecked) checkInitialUrlRouting();
      if (document.getElementById('admin-dashboard-modal').style.display === 'flex') {
        renderAdminBlogsTable();
      }
    });

    db.ref('branding_settings').on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        brandingSettings = Object.assign(brandingSettings, data);
        applyBranding();
      }
    });

    db.ref('ad_store').on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        adStore = data;
        renderAllAds();
        renderFeed();
        // Direct URL দিয়ে Article খুললে অনেক সময় ad_store পরে লোড হয়।
        // Ad config আসার পর খোলা Article-টিও view count না বাড়িয়ে refresh করি,
        // যাতে In-Article slot তৈরি হয়ে Adsterra code inject হয়।
        if (activePostForModal) {
          // Article পুরোটা আবার আঁকা নয়—শুধু In-Article ad slot আপডেট করি,
          // এতে আরও পড়ুন/সরাসরি লিংক দুই ক্ষেত্রেই লেখা ও scroll অবস্থান অক্ষত থাকে।
          renderArticleInlineAd();
        }
      }
    });

    db.ref('font_settings').on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        fontSettings = data;
        applyFontSettings();
      }
    });
    // ================= গুগল সার্চ মেটা ও Schema.org ইনজেক্টর =================
    function setOrUpdateMeta(name, content, isProperty = false) {
      if (!content) return;
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    }

    function updateSEOMetaAndSchema(post, isBlog = false) {
      const displayTitle = post.metaTitle && post.metaTitle.trim() ? post.metaTitle : post.title;
      const fullTitle = `${displayTitle} | ${brandingSettings.title}`;
      document.title = fullTitle;

      const cleanBody = post.body.replace(/<[^>]*>?/gm, '').trim();
      const metaDesc = (post.metaDesc && post.metaDesc.trim()) 
        ? post.metaDesc 
        : (cleanBody.length > 160 ? cleanBody.substring(0, 157) + "..." : cleanBody);
      
      const keywords = (post.keywords && post.keywords.trim())
        ? post.keywords
        : `${post.category || 'সংবাদ'}, সততা নিউজ, সর্বশেষ সংবাদ, বাংলাদেশ`;

      const currentUrl = window.location.href;
      const imageUrl = post.img || '';

      // সার্চ মেটা ট্যাগ
      setOrUpdateMeta('description', metaDesc);
      setOrUpdateMeta('keywords', keywords);

      // ফেসবুক ও সোশ্যাল ওপেন-গ্রাফ
      setOrUpdateMeta('og:title', fullTitle, true);
      setOrUpdateMeta('og:description', metaDesc, true);
      setOrUpdateMeta('og:image', imageUrl, true);
      setOrUpdateMeta('og:url', currentUrl, true);
      setOrUpdateMeta('og:type', isBlog ? 'article' : 'news', true);

      // গুগলের অফিশিয়াল NewsArticle / BlogPosting Schema (JSON-LD)
      let schemaEl = document.getElementById('seo-jsonld-schema');
      if (!schemaEl) {
        schemaEl = document.createElement('script');
        schemaEl.id = 'seo-jsonld-schema';
        schemaEl.type = 'application/ld+json';
        document.head.appendChild(schemaEl);
      }

      const schemaData = {
        "@context": "https://schema.org",
        "@type": isBlog ? "BlogPosting" : "NewsArticle",
        "headline": displayTitle,
        "description": metaDesc,
        "image": [imageUrl],
        "datePublished": new Date(post.timestamp || Date.now()).toISOString(),
        "dateModified": new Date(post.timestamp || Date.now()).toISOString(),
        "author": [{
          "@type": "Person",
          "name": post.author || "নিজস্ব প্রতিবেদক"
        }],
        "publisher": {
          "@type": "Organization",
          "name": brandingSettings.title,
          "logo": {
            "@type": "ImageObject",
            "url": brandingSettings.customLogo || ""
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        }
      };
      schemaEl.text = JSON.stringify(schemaData);
    }

    function resetSEOMetaToDefault() {
      const defTitle = `${brandingSettings.title} | ${brandingSettings.slogan}`;
      document.title = defTitle;
      setOrUpdateMeta('description', `${brandingSettings.title} - ${brandingSettings.slogan}`);
      setOrUpdateMeta('keywords', 'সততা নিউজ, বাংলা খবর, সর্বশেষ সংবাদ, বাংলাদেশ নিউজ, লাইভ খবর');
      setOrUpdateMeta('og:title', defTitle, true);
      setOrUpdateMeta('og:description', brandingSettings.slogan, true);
      setOrUpdateMeta('og:url', window.location.origin + window.location.pathname, true);

      const schemaEl = document.getElementById('seo-jsonld-schema');
      if (schemaEl) schemaEl.remove();
    }

    function showToast(msg) {
      const toast = document.getElementById('app-toast');
      toast.innerText = msg;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 2500);
    }

    function showCustomConfirm(msg, callback) {
      document.getElementById('custom-confirm-msg').innerText = msg;
      document.getElementById('custom-confirm-modal').style.display = 'flex';
      pendingConfirmCallback = callback;
    }

    function resolveCustomConfirm(res) {
      document.getElementById('custom-confirm-modal').style.display = 'none';
      if (pendingConfirmCallback) {
        pendingConfirmCallback(res);
        pendingConfirmCallback = null;
      }
    }

    function updateLiveClock() {
      const timeEl = document.getElementById('live-clock-time');
      const dateEl = document.getElementById('live-clock-date');
      if (!timeEl || !dateEl) return;

      // Bangladesh time: independent of the visitor's device timezone.
      const now = new Date();
      const isBangla = (typeof siteLanguage === 'undefined' || siteLanguage === 'bn');
      try {
        const locale = isBangla ? 'bn-BD-u-nu-beng' : 'en-GB';
        timeEl.textContent = new Intl.DateTimeFormat(locale, {
          timeZone: 'Asia/Dhaka', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true
        }).format(now);
        dateEl.textContent = new Intl.DateTimeFormat(isBangla ? 'bn-BD-u-nu-beng' : 'en-GB', {
          timeZone: 'Asia/Dhaka', day: 'numeric', month: 'long', year: 'numeric'
        }).format(now);
      } catch (err) {
        // Fallback for browsers with incomplete Intl timezone support.
        const dhaka = new Date(now.getTime() + (6 * 60 * 60 * 1000));
        const utc = new Date(dhaka.getTime() + dhaka.getTimezoneOffset() * 60000);
        const pad = n => String(n).padStart(2, '0');
        const h24 = utc.getHours();
        const h12 = h24 % 12 || 12;
        const period = h24 >= 12 ? (isBangla ? 'অপরাহ্ণ' : 'PM') : (isBangla ? 'পূর্বাহ্ণ' : 'AM');
        const digits = value => isBangla ? String(value).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[Number(d)]) : String(value);
        const monthsBn = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
        const monthsEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        timeEl.textContent = `${period} ${digits(h12)}:${digits(pad(utc.getMinutes()))}:${digits(pad(utc.getSeconds()))}`;
        dateEl.textContent = isBangla
          ? `${digits(utc.getDate())} ${monthsBn[utc.getMonth()]} ${digits(utc.getFullYear())}`
          : `${utc.getDate()} ${monthsEn[utc.getMonth()]} ${utc.getFullYear()}`;
      }
    }

    function applyFontSettings() {
      const r = document.documentElement;
      r.style.setProperty('--font-global', fontSettings.global);
      r.style.setProperty('--font-headline', fontSettings.headline);
      r.style.setProperty('--font-nav', fontSettings.nav);
      r.style.setProperty('--font-article', fontSettings.article);
      r.style.setProperty('--font-logo', fontSettings.logo);
    }

    function applyBranding() {
      document.getElementById('site-display-title').innerText = brandingSettings.title;
      document.getElementById('site-display-sub').innerText = brandingSettings.sub;
      document.getElementById('site-display-slogan').innerText = brandingSettings.slogan;
      document.getElementById('footer-brand-name').innerText = brandingSettings.title;
      document.getElementById('page-head-title').innerText = `${brandingSettings.title} | ${brandingSettings.slogan}`;

      const logoContainer = document.getElementById('site-logo-container');
      if (brandingSettings.customLogo) {
        logoContainer.innerHTML = `<img src="${brandingSettings.customLogo}" class="custom-logo-circle" alt="Logo">`;
      } else {
        logoContainer.innerHTML = `<div class="shield-emblem"><div class="shield-inner">${brandingSettings.title.charAt(0)}</div></div>`;
      }

      document.body.className = brandingSettings.theme === 'default' ? '' : brandingSettings.theme;
    }
    function applyLanguage() {
      const t = TRANSLATIONS[siteLanguage];
      document.getElementById('txt-live-badge').innerText = t.liveBadge;
      document.getElementById('btn-blog-top').innerText = t.blogBtn;
      document.getElementById('btn-more-toggle').innerText = t.moreBtn;
      document.getElementById('txt-like-btn').innerText = t.like;
      const shareBtnTxt = document.getElementById('txt-share-btn');
      if (shareBtnTxt) shareBtnTxt.innerText = t.share;
      document.getElementById('txt-comments-title').innerText = t.comments;
      document.getElementById('txt-post-comment-btn').innerText = t.postComment;
      document.getElementById('txt-inter-sponsor').innerText = t.sponsor;
      document.getElementById('txt-reward-title').innerText = t.rewardTitle;
      document.getElementById('txt-reward-btn').innerText = t.rewardBtn;

      const searchInp = document.getElementById('site-search-input');
      if (searchInp) searchInp.placeholder = t.searchPlaceholder || (siteLanguage === 'bn' ? 'লিখুন...' : 'Type here...');

      const searchBtn = document.getElementById('btn-search-submit');
      if (searchBtn) searchBtn.innerText = t.searchSubmitBtn || (siteLanguage === 'bn' ? 'খুঁজুন' : 'Search');

      const authorInp = document.getElementById('comment-author-input');
      if (authorInp) authorInp.placeholder = t.namePlaceholder;

      const commentInp = document.getElementById('comment-text-input');
      if (commentInp) commentInp.placeholder = t.commentPlaceholder;

      const relatedTitleEl = document.querySelector('#related-news-section h3');
      if (relatedTitleEl) relatedTitleEl.innerText = t.relatedTitle;

      const catMap = {
        'সব সংবাদ': siteLanguage === 'bn' ? 'সব সংবাদ' : 'All News',
        'জাতীয়': siteLanguage === 'bn' ? 'জাতীয়' : 'National',
        'আন্তর্জাতিক': siteLanguage === 'bn' ? 'আন্তর্জাতিক' : 'International',
        'খেলাধুলা': siteLanguage === 'bn' ? 'খেলাধুলা' : 'Sports',
        'প্রযুক্তি': siteLanguage === 'bn' ? 'প্রযুক্তি' : 'Technology',
        'বিনোদন': siteLanguage === 'bn' ? 'বিনোদন' : 'Entertainment',
        'রাজনীতি': siteLanguage === 'bn' ? 'রাজনীতি' : 'Politics',
        'অর্থনীতি': siteLanguage === 'bn' ? 'অর্থনীতি' : 'Economy',
        'সারা বাংলা': siteLanguage === 'bn' ? 'সারা বাংলা' : 'National Desk',
        'অপরাধ ও আদালত': siteLanguage === 'bn' ? 'অপরাধ ও আদালত' : 'Crime & Law',
        'শিক্ষা': siteLanguage === 'bn' ? 'শিক্ষা' : 'Education',
        'স্বাস্থ্য': siteLanguage === 'bn' ? 'স্বাস্থ্য' : 'Health',
        'প্রবাস': siteLanguage === 'bn' ? 'প্রবাস' : 'Diaspora',
        'মতামত': siteLanguage === 'bn' ? 'মতামত' : 'Opinion'
      };

      document.querySelectorAll('#cat-scroll-container .cat-btn, #more-menu-list .more-item').forEach(btn => {
        const raw = btn.getAttribute('data-cat');
        if (catMap[raw]) btn.innerText = catMap[raw];
      });

      if (activePostForModal) {
        const isLiked = getVisitorLikes().includes(String(activePostForModal.id));
        updateLikeBtnState(isLiked);
        const isCommented = getVisitorComments().includes(String(activePostForModal.id));
        updateCommentFormState(isCommented);
      }

      updateLiveClock();
      renderFeed();
    }

    function processImageFile(file, callback) {
      if (!file || !file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const maxW = 800;
          let w = img.width;
          let h = img.height;
          if (w > maxW) {
            h = Math.round((h * maxW) / w);
            w = maxW;
          }
          canvas.width = w;
          canvas.height = h;
          ctx.drawImage(img, 0, 0, w, h);
          callback(canvas.toDataURL('image/jpeg', 0.75));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function previewUploadImage(e, imgId, delBtnId) {
      const file = e.target.files[0];
      if (!file) return;
      processImageFile(file, (dataUrl) => {
        const img = document.getElementById(imgId);
        img.src = dataUrl;
        img.style.display = 'block';
        document.getElementById(delBtnId).style.display = 'inline-block';
      });
    }

    function removeUploadPhoto(inputId, imgId, delBtnId) {
      document.getElementById(inputId).value = '';
      const img = document.getElementById(imgId);
      img.src = '';
      img.style.display = 'none';
      document.getElementById(delBtnId).style.display = 'none';
    }

    // ImgBB ক্লাউড সরাসরি আপলোড ফাংশন
    async function uploadImageToServer(file) {
      if (!file) return null;
      const apiKey = (brandingSettings.imgbbKey || '').trim();
      if (apiKey) {
        try {
          showToast("ImgBB ক্লাউডে ছবি আপলোড হচ্ছে...");
          const formData = new FormData();
          formData.append('image', file);
          const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData
          });
          const data = await res.json();
          if (data && data.success && data.data && data.data.url) {
            showToast("ImgBB ক্লাউড আপলোড সফল!");
            return data.data.url;
          }
        } catch (err) {
          console.error("ImgBB upload error:", err);
          showToast("ImgBB সংযোগ সমস্যা, কম্প্রেসড ছবি ব্যবহার হচ্ছে।");
        }
      }
      return new Promise(resolve => processImageFile(file, resolve));
    }
    // ================= সার্চ বার ওপেন, ক্লোজ ও অটো-হাইড হ্যান্ডলার =================
    function openSearchBar(e) {
      if (e) e.stopPropagation();
      const wrap = document.getElementById('header-search-wrap');
      const inp = document.getElementById('site-search-input');
      if (wrap) {
        wrap.classList.add('open');
        if (inp) {
          setTimeout(() => inp.focus(), 100);
        }
      }
    }

    function closeSearchBar() {
      const wrap = document.getElementById('header-search-wrap');
      const inp = document.getElementById('site-search-input');
      if (wrap && wrap.classList.contains('open')) {
        wrap.classList.remove('open');
        if (inp) {
          inp.value = '';
          onSearchInput('');
        }
      }
    }

    function onSearchInput(val) {
      const clearBtn = document.getElementById('search-clear-btn');
      if (clearBtn) {
        clearBtn.style.display = val.trim().length > 0 ? 'inline-block' : 'none';
      }
    }

    function clearSearchInput(e) {
      if (e) e.stopPropagation();
      const inp = document.getElementById('site-search-input');
      if (inp) {
        inp.value = '';
        onSearchInput('');
        inp.focus();
      }
    }

    // ১. সার্চ বারের বাইরে ক্লিক বা টাচ করলে সার্চ বার নিজে থেকেই সরে যাবে
    document.addEventListener('click', function(e) {
      const wrap = document.getElementById('header-search-wrap');
      if (wrap && wrap.classList.contains('open')) {
        if (!wrap.contains(e.target)) {
          closeSearchBar();
        }
      }
    });

    document.addEventListener('touchstart', function(e) {
      const wrap = document.getElementById('header-search-wrap');
      if (wrap && wrap.classList.contains('open')) {
        if (!wrap.contains(e.target)) {
          closeSearchBar();
        }
      }
    }, { passive: true });

    // ২. কিছু না লিখে স্ক্রোল করলে সার্চ বার নিজে থেকেই সরে যাবে
    window.addEventListener('scroll', function() {
      const wrap = document.getElementById('header-search-wrap');
      if (wrap && wrap.classList.contains('open')) {
        const inp = document.getElementById('site-search-input');
        if (!inp || inp.value.trim() === '') {
          closeSearchBar();
        }
      }
    }, { passive: true });

    // যেকোনো ক্যাটাগরিতে থাকলেও সব পোস্ট থেকে সার্চ করে পপআপে দেখাবে
    function triggerSearchPopup() {
      const inp = document.getElementById('site-search-input');
      const q = inp ? inp.value.trim().toLowerCase() : '';
      if (!q) {
        showToast("অনুগ্রহ করে কিছু লিখে অনুসন্ধান করুন!");
        return;
      }

      // সব সংবাদ ও ব্লগ একত্রিত করে সার্চ করা
      const allItems = [];
      (newsPosts || []).forEach(p => allItems.push({ ...p, isBlog: false }));
      (blogPosts || []).forEach(b => allItems.push({ ...b, isBlog: true }));

      const results = allItems.filter(p => {
        const title = (p.title || '').toLowerCase();
        const body = (p.body || '').toLowerCase();
        const cat = (p.category || '').toLowerCase();
        const author = (p.author || '').toLowerCase();
        const kw = (p.keywords || '').toLowerCase();
        return title.includes(q) || body.includes(q) || cat.includes(q) || author.includes(q) || kw.includes(q);
      });

      const modal = document.getElementById('search-results-modal');
      const list = document.getElementById('search-results-list');
      const heading = document.getElementById('search-results-heading');

      heading.innerText = `🔍 "${inp.value.trim()}" এর ফলাফল (${toBanglaNum(results.length)} টি পাওয়া গেছে)`;
      list.innerHTML = '';

      if (results.length === 0) {
        list.innerHTML = '<div style="text-align: center; padding: 30px; color: var(--text-muted); font-size: 14px;">আপনার অনুসন্ধানের সাথে মেলে এমন কোনো সংবাদ পাওয়া যায়নি।</div>';
      } else {
        results.forEach(post => {
          const item = document.createElement('div');
          item.className = 'search-item-card';
          item.onclick = () => {
            closeSearchModal();
            openArticle(post, post.isBlog);
          };
          const timeStr = getFormattedBanglaTime(post.timestamp);
          const thumb = post.img || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800';
          const catName = post.isBlog ? 'ব্লগ' : (post.category || 'সংবাদ');
          item.innerHTML = `
            <img src="${thumb}" class="search-item-thumb" alt="${post.title}">
            <div class="search-item-content">
              <div class="search-item-meta">
                <span class="search-item-cat">${catName}</span>
                <span>${post.author || 'প্রতিবেদক'}</span>
                <span>• ${timeStr}</span>
              </div>
              <h4 class="search-item-title">${post.title}</h4>
            </div>
          `;
          list.appendChild(item);
        });
      }

      modal.style.display = 'block';
      modal.scrollTop = 0;
    }

    function closeSearchModal() {
      const modal = document.getElementById('search-results-modal');
      if (modal) modal.style.display = 'none';
    }
    function injectAdHTML(containerId, htmlContent, options = {}) {
      const container = document.getElementById(containerId);
      if (!container) return;

      // বিজ্ঞাপন বন্ধ বা কোড ফাঁকা হলে শুধু ওই স্লটটি পরিষ্কার হবে।
      if (!adStore.master || !htmlContent || !htmlContent.trim()) {
        if (container._adObserver) container._adObserver.disconnect();
        container._adObserver = null;
        container.classList.remove('active-ad', 'ad-pending');
        container.innerHTML = '';
        container.removeAttribute('style');
        container.style.display = 'none';
        return;
      }

      if (container._adObserver) container._adObserver.disconnect();
      container._adObserver = null;
      container.innerHTML = '';
      container.classList.remove('ad-pending');
      container.classList.add('active-ad');
      container.removeAttribute('style');
      container.style.display = 'block';
      container.style.visibility = 'visible';

      // HTML fragment থেকে script-গুলো আলাদা করে নতুন script element হিসেবে চালানো হয়।
      // এতে DOM-এ পরে inject করা Adsterra external এবং inline script কার্যকর হয়।
      const template = document.createElement('template');
      template.innerHTML = htmlContent.trim();
      const fragment = template.content;
      const scripts = Array.from(fragment.querySelectorAll('script'));
      scripts.forEach(script => script.remove());
      container.appendChild(fragment);

      scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });
        if (oldScript.textContent) newScript.textContent = oldScript.textContent;
        container.appendChild(newScript);
      });

      // Footer-এ একাধিক ad-card এলে প্রথম সম্পূর্ণ card-টি ছাড়া বাকিগুলো লুকানো হবে।
      const keepOnlyOneCreative = () => {
        const candidates = Array.from(container.querySelectorAll('iframe, ins, img, video, object, embed'));
        const topLevelCreatives = candidates.filter(el =>
          !candidates.some(other => other !== el && other.contains(el))
        );
        if (!topLevelCreatives.length) return false;

        if (containerId === 'ad-footer-banner' && topLevelCreatives.length > 1) {
          // সব creative-এর সবচেয়ে কাছের সাধারণ parent খুঁজে বের করি।
          // এতে Adsterra-এর nested wrapper-এর ভেতরে থাকা পৃথক ad-card-ও ধরা পড়ে।
          const ancestors = el => {
            const list = [];
            let node = el;
            while (node && node !== container) { list.push(node); node = node.parentElement; }
            return list;
          };
          const firstChain = ancestors(topLevelCreatives[0]);
          let common = firstChain.find(node => topLevelCreatives.every(el => node === el || node.contains(el)));
          if (!common) common = container;

          const branchFor = el => {
            let node = el;
            while (node && node.parentElement && node.parentElement !== common) node = node.parentElement;
            return node && node.parentElement === common ? node : el;
          };
          const branches = [...new Set(topLevelCreatives.map(branchFor))];

          // প্রতিটি পৃথক card branch-এর মধ্যে প্রথমটিই থাকবে।
          branches.forEach((branch, index) => {
            if (index === 0) {
              branch.style.removeProperty('display');
              branch.style.removeProperty('visibility');
              branch.removeAttribute('data-duplicate-ad-hidden');
            } else {
              branch.style.setProperty('display', 'none', 'important');
              branch.setAttribute('data-duplicate-ad-hidden', 'true');
            }
          });
        } else {
          topLevelCreatives.forEach((el, index) => {
            if (index === 0) {
              el.style.removeProperty('display');
              el.style.removeProperty('visibility');
              el.removeAttribute('data-duplicate-ad-hidden');
            } else {
              el.style.setProperty('display', 'none', 'important');
              el.setAttribute('data-duplicate-ad-hidden', 'true');
            }
          });
        }
        return true;
      };

      // Adsterra কিছুক্ষণ পর creative যোগ করতে পারে; তাই observer চালু রাখা হবে।
      const creativeObserver = new MutationObserver(() => {
        if (keepOnlyOneCreative()) {
          container.classList.add('active-ad');
          container.style.display = 'block';
          container.style.visibility = 'visible';
        }
      });
      creativeObserver.observe(container, { childList: true, subtree: true });
      container._adObserver = creativeObserver;
      keepOnlyOneCreative();
    }

    function getEnabledBannerCode(slotId) {
      if (!adStore.master) return "";
      const bannerConf = getAdConfig(slotId);
      return (bannerConf && bannerConf.enabled && bannerConf.code) ? bannerConf.code : "";
    }

    // প্রতিটি In-Feed অবস্থানের জন্য আলাদা Adsterra Zone Code নির্বাচন।
    function getEnabledInfeedCode(slotNumber) {
      if (!adStore.master) return "";
      const conf = getAdConfig('infeed');
      if (!conf || !conf.enabled) return "";
      const codes = Array.isArray(conf.codes) ? conf.codes : (conf.code ? [conf.code] : []);
      return String(codes[slotNumber - 1] || '').trim();
    }

    function escapeAdField(value) {
      return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function addInfeedCodeField(value = '') {
      const list = document.getElementById('infeed-code-list');
      if (!list) return;
      const index = list.querySelectorAll('.infeed-code-field').length + 1;
      const field = document.createElement('div');
      field.className = 'infeed-code-field form-group';
      field.style.cssText = 'border:1px solid #d8dee8;border-radius:8px;padding:10px;margin:10px 0;background:#fff;';
      field.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:7px;">
          <label class="form-label" style="margin:0;font-weight:700;">${index} নম্বর In-Feed Ad Code</label>
          <button type="button" class="btn-delete" style="padding:5px 9px;" onclick="this.closest('.infeed-code-field').remove(); renumberInfeedCodeFields();">✖ মুছুন</button>
        </div>
        <textarea class="form-textarea code-editor-area infeed-code-value" style="min-height:125px;width:100%;" placeholder="Adsterra থেকে এই অবস্থানের জন্য আলাদা Banner Zone-এর সম্পূর্ণ কোড দিন..."></textarea>`;
      field.querySelector('textarea').value = value;
      list.appendChild(field);
      renumberInfeedCodeFields();
    }

    function renumberInfeedCodeFields() {
      const list = document.getElementById('infeed-code-list');
      if (!list) return;
      list.querySelectorAll('.infeed-code-field').forEach((field, index) => {
        const label = field.querySelector('label');
        if (label) label.textContent = `${index + 1} নম্বর In-Feed Ad Code`;
      });
    }

    function getFooterDeviceMode() {
      return window.matchMedia && window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop';
    }

    function getFooterDeviceCode() {
      if (!adStore.master) return "";
      const conf = getAdConfig('footer');
      if (!conf || !conf.enabled) return "";
      const mode = getFooterDeviceMode();
      // পুরোনো একক কোড থাকলে backward-compatible fallback।
      if (mode === 'mobile') return conf.mobileCode || "";
      return conf.desktopCode || conf.code || "";
    }

    function renderAllAds() {
      // এক সময়ে শুধু বর্তমান ডিভাইসের Footer Adsterra code inject হবে।
      const mode = getFooterDeviceMode();
      activeFooterAdMode = mode;
      injectAdHTML('ad-footer-banner', getFooterDeviceCode());
      const footerAd = document.getElementById('ad-footer-banner');
      if (footerAd) {
        footerAd.classList.toggle('footer-banner-mobile', mode === 'mobile');
        footerAd.classList.toggle('footer-banner-desktop', mode === 'desktop');
      }
      // In-Feed Banner renderFeed() থেকে প্রতি ৩টি পোস্টের পর আলাদাভাবে inject হয়।
      // In-Article Banner displayArticleModal() থেকে article স্লটে inject হয়।
    }

    // Desktop/Mobile orientation বা viewport width বদলালে উপযুক্ত ad slot পুনরায় নির্বাচন।
    if (window.matchMedia) {
      const footerMediaQuery = window.matchMedia('(max-width: 767px)');
      const onFooterViewportChange = () => {
        const nextMode = getFooterDeviceMode();
        if (nextMode !== activeFooterAdMode) { renderAllAds(); renderFeed(); }
      };
      if (footerMediaQuery.addEventListener) footerMediaQuery.addEventListener('change', onFooterViewportChange);
      else if (footerMediaQuery.addListener) footerMediaQuery.addListener(onFooterViewportChange);
    }

    function triggerSmartlinkAd() {
      if (!adStore.master) return;
      const smartConf = getAdConfig("smartlink");
      if (smartConf && smartConf.enabled && smartConf.code && /^https?:\/\//i.test(smartConf.code.trim())) {
        window.open(smartConf.code.trim(), '_blank', 'noopener');
      }
    }
    function renderFeed(append = false) {
      const container = document.getElementById('news-feed-container');
      const heading = document.getElementById('current-section-heading');
      const badge = document.getElementById('post-count-badge');
      const loadMoreBox = document.getElementById('load-more-container');
      const loadMoreButton = document.getElementById('load-more-button');
      const loadMoreLabel = document.getElementById('load-more-button-label');
      if (!append) {
        container.innerHTML = '';
        container.dataset.renderedCount = '0';
      }

      let baseList = [];
      if (isBlogView) {
        baseList = [...blogPosts];
      } else {
        baseList = currentCategory === 'সব সংবাদ' ? [...newsPosts] : newsPosts.filter(p => p.category === currentCategory);
      }

      // সার্চ ফিল্টারিং
      if (searchQuery) {
        baseList = baseList.filter(p => 
          (p.title && p.title.toLowerCase().includes(searchQuery)) ||
          (p.body && p.body.toLowerCase().includes(searchQuery)) ||
          (p.category && p.category.toLowerCase().includes(searchQuery)) ||
          (p.author && p.author.toLowerCase().includes(searchQuery))
        );
        heading.innerText = `🔍 অনুসন্ধান: "${searchQuery}"`;
        badge.innerText = `${toBanglaNum(baseList.length)} টি ফলাফল`;
      } else if (isBlogView) {
        heading.innerText = siteLanguage === 'bn' ? "📚 জ্ঞান ও তথ্যমূলক ব্লগ / ভ্লগ" : "📚 Knowledge Blog";
        badge.innerText = `${toBanglaNum(baseList.length)} টি পোস্ট`;
      } else {
        heading.innerText = currentCategory === 'সব সংবাদ' ? TRANSLATIONS[siteLanguage].latestNews : `${currentCategory}`;
        badge.innerText = `${toBanglaNum(baseList.length)} টি সংবাদ`;
      }

      if (baseList.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">কোনো সংবাদ বা তথ্য পাওয়া যায়নি।</div>`;
        if (loadMoreBox) loadMoreBox.style.display = 'none';
        return;
      }

      // সব ক্যাটাগরিতে একই Banner কোড ব্যবহার হবে।

      // পেজিনেশন স্লাইসিং
      const totalPosts = baseList.length;
      const visibleCount = currentPage * postsPerPage;
      const visibleList = baseList.slice(0, visibleCount);
      const appendStart = append ? Math.min(Number(container.dataset.renderedCount || 0), visibleList.length) : 0;
      const postsToRender = visibleList.slice(appendStart);

      postsToRender.forEach((post, localIdx) => {
        const idx = appendStart + localIdx;

        const card = document.createElement('div');
        card.className = 'news-card';
        card.onclick = () => openArticle(post, isBlogView);
        const timeFormatted = getFormattedBanglaTime(post.timestamp);
        card.innerHTML = `
          <div class="card-thumb-wrap">
            <img class="card-thumb" src="${post.img || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800'}" alt="${post.title}">
            <span class="card-badge" ${isBlogView ? 'style="background: #2b3440;"' : ''}>${isBlogView ? 'ব্লগ' : post.category}</span>
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span>${post.author || 'নিজস্ব প্রতিবেদক'}</span>
              <span>${timeFormatted}</span>
            </div>
            <h3 class="card-title">${post.title}</h3>
            <p class="card-excerpt">${(post.body || '').replace(/<[^>]*>?/gm, '')}</p>
            <div class="card-footer">
              <span class="btn-readmore-pill">${TRANSLATIONS[siteLanguage].readMore}</span>
              <span>👁️ ${toBanglaNum(post.views || 1)} • ❤️ ${toBanglaNum(post.likes || 0)}</span>
            </div>
          </div>`;
        container.appendChild(card);

        // Mobile-এ প্রতি ৩টি এবং Desktop-এ প্রতি ৪টি পোস্টের পর একটি In-Feed Banner।
        // Breakpoint-টি সাইটের mobile layout-এর সঙ্গে মিলিয়ে 767px রাখা হয়েছে।
        const isMobileFeed = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
        const postsPerAd = isMobileFeed ? 3 : 4;
        if ((idx + 1) % postsPerAd === 0) {
          const slotNumber = Math.floor((idx + 1) / postsPerAd);
          const bannerCode = getEnabledInfeedCode(slotNumber);
          if (bannerCode) {
            const slotId = `ad-infeed-banner-group-${isMobileFeed ? 'm' : 'd'}-${slotNumber}`;
            const adBox = document.createElement('div');
            adBox.id = slotId;
            adBox.className = 'ad-infeed-card';
            adBox.dataset.adGroup = String(slotNumber);
            adBox.style.gridColumn = '1 / -1';
            adBox.style.width = '100%';
            adBox.style.maxWidth = '100%';
            container.appendChild(adBox);
            injectAdHTML(slotId, bannerCode);
          }
        }
      });
      container.dataset.renderedCount = String(visibleList.length);

      // লোড মোর কন্ট্রোল
      if (loadMoreBox) {
        if (visibleCount < totalPosts) {
          loadMoreBox.style.display = 'block';
          if (loadMoreButton) loadMoreButton.disabled = false;
          if (loadMoreLabel) loadMoreLabel.innerText = 'আরও পড়ুন';
          if (loadMoreButton) loadMoreButton.setAttribute('aria-label', 'আরও ১২টি পোস্ট দেখুন');
        } else {
          loadMoreBox.style.display = 'none';
        }
      }
    }

    function loadMoreNews() {
      const loadMoreButton = document.getElementById('load-more-button');
      const loadMoreLabel = document.getElementById('load-more-button-label');
      if (loadMoreButton && loadMoreButton.disabled) return;
      if (loadMoreButton) {
        loadMoreButton.disabled = true;
        loadMoreButton.setAttribute('aria-busy', 'true');
      }
      if (loadMoreLabel) loadMoreLabel.innerText = 'লোড হচ্ছে...';

      // প্রতি ক্লিকে পরবর্তী ১২টি পোস্ট দৃশ্যমান হবে।
      currentPage++;
      renderFeed(true);
      if (loadMoreButton) loadMoreButton.removeAttribute('aria-busy');
    }

    function filterCategory(cat, updateHistory = true) {
      isBlogView = false;
      currentCategory = cat;
      currentPage = 1;

      document.querySelectorAll('#cat-scroll-container .cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
      });

      const moreMenu = document.getElementById('more-menu-list');
      if (moreMenu) moreMenu.classList.remove('open');

      if (updateHistory) {
        const url = new URL(window.location.href);
        url.searchParams.delete('news');
        url.searchParams.delete('view');
        if (cat === 'সব সংবাদ') {
          url.searchParams.delete('cat');
        } else {
          url.searchParams.set('cat', cat);
        }
        const categoryPath = cat === 'সব সংবাদ'
          ? new URL('index.html', window.location.href).pathname
          : new URL('categories.html', window.location.href).pathname;
        history.pushState({ cat: cat }, '', categoryPath + (url.search || ''));
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderFeed();
    }

    function toggleBlogFeed(updateHistory = true) {
      isBlogView = !isBlogView;
      currentPage = 1;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));

      if (updateHistory) {
        const url = new URL(window.location.href);
        url.searchParams.delete('news');
        url.searchParams.delete('cat');
        if (isBlogView) {
          url.searchParams.set('view', 'blog');
        } else {
          url.searchParams.delete('view');
        }
        history.pushState({ view: isBlogView ? 'blog' : null }, '', url.pathname + (url.search || ''));
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderFeed();
    }

    function toggleMoreMenu(e) {
      e.stopPropagation();
      document.getElementById('more-menu-list').classList.toggle('open');
    }
    document.addEventListener('click', () => {
      const menu = document.getElementById('more-menu-list');
      if (menu) menu.classList.remove('open');
    });
    // ================= সম্পর্কিত সংবাদ রেন্ডারার =================
    function renderRelatedNews(currentPost, isBlog) {
      const container = document.getElementById('related-news-grid');
      const section = document.getElementById('related-news-section');
      if (!container || !section) return;
      container.innerHTML = '';

      markPostAsRead(currentPost.id);

      const pool = isBlog ? blogPosts : newsPosts;
      let availablePosts = pool.filter(p => String(p.id) !== String(currentPost.id) && !readPostsHistory.includes(String(p.id)));

      if (availablePosts.length < 3) {
        availablePosts = pool.filter(p => String(p.id) !== String(currentPost.id));
      }

      availablePosts.sort((a, b) => {
        const scoreA = (Number(a.views) || 0) + (Number(a.likes) || 0) * 3;
        const scoreB = (Number(b.views) || 0) + (Number(b.likes) || 0) * 3;
        if (scoreB !== scoreA) return scoreB - scoreA;
        return (b.timestamp || 0) - (a.timestamp || 0);
      });

      let categoryMatches = availablePosts.filter(p => isBlog || p.category === currentPost.category);
      let otherViral = availablePosts.filter(p => !categoryMatches.includes(p));
      let related = categoryMatches.concat(otherViral).slice(0, 3);

      if (related.length === 0) {
        section.style.display = 'none';
        return;
      }
      section.style.display = 'block';

      related.forEach(item => {
        const card = document.createElement('div');
        card.style.cssText = "background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; cursor: pointer; box-shadow: var(--shadow-sm); transition: transform 0.2s;";
        card.onmouseover = () => { card.style.transform = 'translateY(-2px)'; };
        card.onmouseout = () => { card.style.transform = 'none'; };
        card.onclick = () => { openArticle(item, isBlog); };
        card.innerHTML = `
          <div style="aspect-ratio: 16/9; overflow: hidden; background: #e9ecef; position: relative;">
            <img src="${item.img || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800'}" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 6px; left: 6px; background: rgba(139,0,0,0.85); color: #fff; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 3px;">🔥 ভাইরাল</span>
          </div>
          <div style="padding: 10px;">
            <div style="font-size: 11.5px; color: var(--text-muted); margin-bottom: 4px; display: flex; justify-content: space-between;">
              <span>${getFormattedBanglaTime(item.timestamp)}</span>
              <span style="color: #0a5c36; font-weight: 600;">👁️ ${toBanglaNum(item.views || 1)}</span>
            </div>
            <h4 style="font-size: 13.5px; font-weight: 700; line-height: 1.4; color: var(--text-main); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.title}</h4>
          </div>`;
        container.appendChild(card);
      });
    }

    function renderArticleInlineAd() {
      // প্রতিবার Article খোলা বা ad_store আপডেট হলে আগের অপেক্ষা বাতিল করে নতুন করে চেষ্টা।
      const token = ++articleAdRenderToken;
      if (articleAdRenderTimer) clearTimeout(articleAdRenderTimer);
      articleAdRenderTimer = null;

      const run = () => {
        if (token !== articleAdRenderToken) return;
        const modal = document.getElementById('article-view-modal');
        const slot = document.getElementById('ad-article-inline');
        if (!modal || !slot || !slot.isConnected || !activePostForModal) return;
        if (window.getComputedStyle(modal).display === 'none') return;

        const config = adStore && adStore.master !== false ? getAdConfig('article') : null;
        const code = config && config.enabled && config.code ? String(config.code).trim() : '';
        if (!code) {
          // Firebase-এর ad_store দেরিতে এলে Article খোলা থাকা পর্যন্ত অপেক্ষা।
          slot.classList.add('ad-pending');
          slot.style.display = 'block';
          slot.style.minHeight = '1px';
          articleAdRenderTimer = setTimeout(run, 700);
          return;
        }

        // একই DOM slot-এ একই Zone Code দ্বিতীয়বার inject নয়।
        if (slot.dataset.articleAdInjected === 'true' && slot.dataset.articleAdCode === code) return;

        try {
          // পুরোনো ব্যর্থ/অসম্পূর্ণ state থাকলে পরিষ্কার করে নতুন slot-এ code inject।
          slot.dataset.articleAdInjected = 'false';
          slot.dataset.articleAdCode = '';
          injectAdHTML('ad-article-inline', code, { waitForCreative: true });
          if (slot.isConnected && slot.querySelector('script, iframe, ins, div')) {
            slot.dataset.articleAdCode = code;
            slot.dataset.articleAdInjected = 'true';
          } else {
            articleAdRenderTimer = setTimeout(run, 700);
          }
        } catch (error) {
          console.error('In-Article Ad inject failed:', error);
          articleAdRenderTimer = setTimeout(run, 900);
        }
      };

      // Modal-এর layout সম্পূর্ণ দৃশ্যমান হওয়ার পর Adsterra script চালাই।
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (token !== articleAdRenderToken) return;
          articleAdRenderTimer = setTimeout(run, 300);
        });
      });
    }

    function openArticle(post, isBlog = false) {
      triggerSmartlinkAd();
      displayArticleModal(post, isBlog, true);
    }

    function displayArticleModal(post, isBlog, updateHistory = true, countView = true) {
      activePostForModal = post;

      const articleModal = document.getElementById('article-view-modal');
      if (articleModal) articleModal.scrollTop = 0;

      if (countView) {
        const targetTable = isBlog ? 'blog_posts' : 'news_posts';
        const pool = isBlog ? blogPosts : newsPosts;
        const pIdx = pool.findIndex(p => String(p.id) === String(post.id));
        if (pIdx !== -1) {
          db.ref(`${targetTable}/${pIdx}/views`).transaction(current => (Number(current) || 0) + 1)
            .then(result => {
              if (!result.committed) return;
              const total = Number(result.snapshot.val()) || 0;
              pool[pIdx].views = total;
              if (activePostForModal && String(activePostForModal.id) === String(post.id)) {
                activePostForModal.views = total;
                const viewEl = document.getElementById('modal-views-count');
                if (viewEl) viewEl.innerText = `👁️ ${toBanglaNum(total)} বার পঠিত`;
              }
            }).catch(error => console.error('View count update failed:', error));
        }
      }

      document.getElementById('modal-cat').innerText = isBlog ? 'ব্লগ' : post.category;
      document.getElementById('modal-title').innerText = post.title;
      document.getElementById('modal-author').innerText = `প্রতিবেদক: ${post.author || 'নিজস্ব প্রতিবেদক'}`;
      document.getElementById('modal-time').innerText = getFormattedBanglaTime(post.timestamp);
      document.getElementById('modal-read-time').innerText = `⏱️ ${calculateReadingTime(post.body)}`;
      document.getElementById('modal-views-count').innerText = `👁️ ${toBanglaNum(post.views)} বার পঠিত`;
      document.getElementById('modal-img').src = post.img || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800';
      const articleBody = document.getElementById('modal-body');
      const rawArticleText = String(post.body || '').trim();
      const articleAdConfig = adStore.master ? getAdConfig('article') : null;
      const articleAdCode = articleAdConfig && articleAdConfig.enabled ? articleAdConfig.code : '';

      // লেখাকে আগে অনুচ্ছেদে ভাগ করা হয়; একটিমাত্র অনুচ্ছেদ হলেও মাঝখানে বিজ্ঞাপন বসবে।
      let articleParts = rawArticleText.split(/\n\s*\n|\n/).map(part => part.trim()).filter(Boolean);
      if (articleParts.length < 2 && rawArticleText) {
        const sentences = rawArticleText.match(/[^.!?।]+[.!?।]*/g) || [rawArticleText];
        if (sentences.length > 1) {
          const middle = Math.ceil(sentences.length / 2);
          articleParts = [sentences.slice(0, middle).join(' ').trim(), sentences.slice(middle).join(' ').trim()].filter(Boolean);
        } else {
          const words = rawArticleText.split(/\s+/);
          if (words.length > 8) {
            const middle = Math.ceil(words.length / 2);
            articleParts = [words.slice(0, middle).join(' '), words.slice(middle).join(' ')];
          } else articleParts = [rawArticleText];
        }
      }
      const splitAt = Math.max(1, Math.ceil(articleParts.length / 2));
      const articleBefore = articleParts.slice(0, splitAt).join('<br><br>');
      const articleAfter = articleParts.slice(splitAt).join('<br><br>');
      // Config লোড হতে দেরি হলেও slot DOM-এ থাকবে; config এলে পরে ad inject হবে।
      articleBody.innerHTML = (articleBefore ? '<p>' + articleBefore + '</p>' : '') +
        '<div id="ad-article-inline" class="ad-slot-wrapper"></div>' +
        (articleAfter ? '<p>' + articleAfter + '</p>' : '');
      document.getElementById('like-count').innerText = toBanglaNum(post.likes || 0);

      if (updateHistory) {
        const url = new URL(window.location.href);
        url.searchParams.set('news', post.id);
        const articlePath = window.location.pathname.endsWith('/article.html')
          ? window.location.pathname
          : new URL('article.html', window.location.href).pathname;
        history.pushState({ modalOpen: true, newsId: post.id }, '', articlePath + (url.search || ''));
      }
      updateSEOMetaAndSchema(post, isBlog);

      renderRelatedNews(post, isBlog);
      renderComments();

      const isLikedAlready = getVisitorLikes().includes(String(post.id));
      updateLikeBtnState(isLikedAlready);
      const isCommentedAlready = getVisitorComments().includes(String(post.id));
      updateCommentFormState(isCommentedAlready);

      document.getElementById('article-view-modal').style.display = 'block';
      if (articleModal) articleModal.scrollTop = 0;
      // আরও পড়ুন ও সরাসরি URL—দুই পথেই modal visible হওয়ার পর article ad চালু করি।
      renderArticleInlineAd();
    }
    function closeArticleModal() {
      articleAdRenderToken++;
      if (articleAdRenderTimer) clearTimeout(articleAdRenderTimer);
      articleAdRenderTimer = null;
      const modal = document.getElementById('article-view-modal');
      if (modal) modal.style.display = 'none';
      activePostForModal = null;

      resetSEOMetaToDefault();

      const url = new URL(window.location.href);
      if (url.searchParams.has('news')) {
        url.searchParams.delete('news');
        if (currentCategory && currentCategory !== 'সব সংবাদ') {
          url.searchParams.set('cat', currentCategory);
        } else if (isBlogView) {
          url.searchParams.set('view', 'blog');
        }
        history.pushState(null, '', url.pathname + (url.search || ''));
      }
    }

    window.addEventListener('popstate', () => {
      const params = new URLSearchParams(window.location.search);
      const newsId = params.get('news');
      const cat = params.get('cat');
      const view = params.get('view');

      if (newsId) {
        const post = newsPosts.find(p => String(p.id) === String(newsId)) ||
                     blogPosts.find(b => String(b.id) === String(newsId));
        if (post) {
          displayArticleModal(post, String(post.id).startsWith('b_'), false);
        }
      } else {
        const modal = document.getElementById('article-view-modal');
        if (modal) modal.style.display = 'none';
        activePostForModal = null;
        resetSEOMetaToDefault();

        if (view === 'blog') {
          if (!isBlogView) toggleBlogFeed(false);
        } else if (cat) {
          filterCategory(cat, false);
        } else {
          filterCategory('সব সংবাদ', false);
        }
      }
    });

    function checkInitialUrlRouting() {
      const params = new URLSearchParams(window.location.search);
      const newsId = params.get('news');
      const cat = params.get('cat');
      const view = params.get('view');

      if (newsId) {
        const post = newsPosts.find(p => String(p.id) === String(newsId)) ||
                     blogPosts.find(b => String(b.id) === String(newsId));
        if (post) {
          initialUrlChecked = true;
          displayArticleModal(post, String(post.id).startsWith('b_'), false);
          return;
        }
      }

      if (view === 'blog') {
        initialUrlChecked = true;
        toggleBlogFeed(false);
        return;
      }

      if (cat) {
        initialUrlChecked = true;
        filterCategory(cat, false);
        return;
      }

      initialUrlChecked = true;
    }

    async function handleLike() {
      if (!activePostForModal) return;
      const post = activePostForModal;
      const postId = String(post.id);
      const isBlog = postId.startsWith('b_');
      const table = isBlog ? 'blog_posts' : 'news_posts';
      const pool = isBlog ? blogPosts : newsPosts;
      const index = pool.findIndex(p => String(p.id) === postId);
      if (index < 0) return;
      try {
        const result = await db.ref(`${table}/${index}/likes`).transaction(current => (Number(current) || 0) + 1);
        if (!result.committed) throw new Error('Like transaction not committed');
        const count = Number(result.snapshot.val()) || 0;
        pool[index].likes = count;
        if (activePostForModal && String(activePostForModal.id) === postId) {
          activePostForModal.likes = count;
          document.getElementById('like-count').innerText = toBanglaNum(count);
        }
        showToast(siteLanguage === 'bn' ? 'আপনার লাইক যুক্ত হয়েছে!' : 'Liked successfully!');
      } catch (error) {
        console.error('Like update failed:', error);
        showToast('লাইক সংরক্ষণ করা যায়নি। আবার চেষ্টা করুন।');
      }
    }

    function getShareUrl() {
      if (!activePostForModal) return window.location.href;
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('news', activePostForModal.id);
        url.searchParams.delete('cat');
        url.searchParams.delete('view');
        return url.href;
      } catch(e) {
        return window.location.origin + window.location.pathname + '?news=' + activePostForModal.id;
      }
    }

    function shareOnWhatsApp() {
      if (!activePostForModal) return;
      const text = activePostForModal.title + '\n\nবিস্তারিত পড়ুন: ' + getShareUrl();
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    }

    function shareOnFacebook() {
      if (!activePostForModal) return;
      const shareUrl = getShareUrl();
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl), '_blank', 'noopener,noreferrer,width=600,height=500');
    }

    function shareArticle() {
      const url = getShareUrl();
      if (navigator.share && activePostForModal) {
        navigator.share({ title: activePostForModal.title, url: url }).catch(() => {});
      } else {
        navigator.clipboard.writeText(url).then(() => showToast("সংবাদের লিংক কপি করা হয়েছে!"));
      }
    }

    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      const btn = document.getElementById('btn-pwa-install');
      if (btn) btn.style.display = 'inline-flex';
    });

    function triggerPWAInstall() {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(() => {
          deferredPrompt = null;
          document.getElementById('btn-pwa-install').style.display = 'none';
        });
      }
    }

    function renderComments() {
      const list = document.getElementById('modal-comments-list');
      list.innerHTML = '';
      const comments = activePostForModal.comments || [];
      if (comments.length === 0) {
        list.innerHTML = `<div style="font-size: 13px; color: #888;">এখনও কোনো মন্তব্য নেই।</div>`;
        return;
      }
      comments.forEach(c => {
        const item = document.createElement('div');
        item.style.cssText = "background: rgba(0,0,0,0.03); padding: 8px 12px; border-radius: 6px; margin-bottom: 8px; font-size: 13.5px;";
        const author = document.createElement('strong');
        author.textContent = String(c.name || 'পাঠক');
        const body = document.createElement('p');
        body.style.marginTop = '2px';
        body.textContent = String(c.text || '');
        item.appendChild(author);
        item.appendChild(body);
        list.appendChild(item);
      });
    }

    async function addComment() {
      if (!activePostForModal) return;
      const nameInput = document.getElementById('comment-author-input');
      const textInput = document.getElementById('comment-text-input');
      const name = (nameInput.value.trim() || (siteLanguage === 'bn' ? 'পাঠক' : 'Reader'));
      const commentText = textInput.value.trim();
      if (name.length > 50) return showToast('নাম সর্বোচ্চ ৫০ অক্ষরের হতে পারবে।');
      if (!commentText) return showToast(siteLanguage === 'bn' ? 'অনুগ্রহ করে মন্তব্য লিখুন!' : 'Please write a comment!');
      if (commentText.length > 1000) return showToast('মন্তব্য সর্বোচ্চ ১০০০ অক্ষরের হতে পারবে।');
      if (hasDisallowedCommentContent(name) || hasDisallowedCommentContent(commentText)) {
        return showToast('নাম বা মন্তব্যে লিংক, কোড, HTML অথবা স্প্যাম দেওয়া যাবে না।');
      }

      const post = activePostForModal;
      const postId = String(post.id);
      const isBlog = postId.startsWith('b_');
      const table = isBlog ? 'blog_posts' : 'news_posts';
      const pool = isBlog ? blogPosts : newsPosts;
      const index = pool.findIndex(p => String(p.id) === postId);
      if (index < 0) return showToast('পোস্টটি পাওয়া যায়নি। আবার চেষ্টা করুন।');

      const comment = { name, text: commentText, timestamp: Date.now() };
      try {
        const result = await db.ref(`${table}/${index}/comments`).transaction(current => {
          const comments = Array.isArray(current) ? current : (current ? Object.values(current) : []);
          comments.push(comment);
          return comments;
        });
        if (!result.committed) throw new Error('Comment transaction not committed');
        pool[index].comments = result.snapshot.val() || [];
        if (activePostForModal && String(activePostForModal.id) === postId) {
          activePostForModal.comments = pool[index].comments;
          renderComments();
        }
        textInput.value = '';
        showToast(siteLanguage === 'bn' ? 'মন্তব্য প্রকাশিত হয়েছে!' : 'Comment published!');
      } catch (error) {
        console.error('Comment save failed:', error);
        showToast('মন্তব্য সংরক্ষণ করা যায়নি। আবার চেষ্টা করুন।');
      }
    }
    function openAdminLoginModal() {
      document.getElementById('admin-login-modal').style.display = 'flex';
      document.getElementById('admin-user-input').value = '';
      document.getElementById('admin-pass-input').value = '';
      document.getElementById('admin-user-input').focus();
    }

    function closeAdminLoginModal() {
      document.getElementById('admin-login-modal').style.display = 'none';
    }

    function verifyAdminLogin() {
      const email = document.getElementById('admin-user-input').value.trim();
      const pass = document.getElementById('admin-pass-input').value;

      if (!email || !pass) {
        return showToast("ইমেইল ও পাসওয়ার্ড প্রদান করুন!");
      }

      auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
          closeAdminLoginModal();
          openAdminDashboard();
          showToast("অ্যাডমিন লগইন সফল হয়েছে!");
        })
        .catch((error) => {
          console.error("Firebase Auth Error:", error);
          showToast("ভুল ইমেইল বা পাসওয়ার্ড!");
        });
    }

    function openAdminDashboard() {
      const user = auth.currentUser;
      if (!user) {
        showToast("অননুমোদিত অ্যাক্সেস! অনুগ্রহ করে লগইন করুন।");
        openAdminLoginModal();
        return;
      }

      document.getElementById('admin-dashboard-modal').style.display = 'flex';
      renderAdNetworkSelector();
      renderAdminPostsTable();
      renderAdminBlogsTable();
      renderAdminCommentsTable();
      initBrandingSettingsTab();
      initFontSettingsTab();
      
      const emailBox = document.getElementById('sec-username-in');
      if (emailBox) emailBox.value = user.email || '';
    }

    function closeAdminDashboard() {
      document.getElementById('admin-dashboard-modal').style.display = 'none';
      auth.signOut()
        .then(() => {
          showToast("অ্যাডমিন প্যানেল থেকে সফলভাবে লগআউট সম্পন্ন হয়েছে।");
        })
        .catch((err) => {
          console.error("SignOut Error:", err);
        });
    }

    function switchAdminTab(tabId, btnEl) {
      document.querySelectorAll('.dash-nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.dash-tab-pane').forEach(p => p.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      const targetPane = document.getElementById(tabId);
      if (targetPane) targetPane.classList.add('active');
    }

    async function publishNews() {
      const user = auth.currentUser;
      if (!user) return showToast("অননুমোদিত অ্যাক্সেস!");

      const title = document.getElementById('news-title-in').value.trim();
      const cat = document.getElementById('news-cat-in').value;
      const author = document.getElementById('news-author-in').value.trim() || 'নিজস্ব প্রতিবেদক';
      const body = document.getElementById('news-body-in').value.trim();
      const fileInput = document.getElementById('news-photo-file');

      const metaTitle = document.getElementById('news-meta-title-in').value.trim();
      const keywords = document.getElementById('news-keywords-in').value.trim();
      const metaDesc = document.getElementById('news-meta-desc-in').value.trim();

      if (!title || !body) return showToast("শিরোনাম ও সংবাদের বর্ণনা দিন!");

      let finalImg = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800";
      if (fileInput && fileInput.files && fileInput.files[0]) {
        finalImg = await uploadImageToServer(fileInput.files[0]);
      }

      const newPost = {
        id: "p_" + Date.now(),
        title,
        category: cat,
        author,
        timestamp: Date.now(),
        img: finalImg,
        body,
        metaTitle: metaTitle || title,
        keywords: keywords,
        metaDesc: metaDesc,
        likes: 0,
        views: 1,
        comments: []
      };

      newsPosts.unshift(newPost);
      db.ref('news_posts').set(newsPosts).then(() => {
        showToast("সংবাদ সফলভাবে প্রকাশিত হয়েছে!");
      });

      document.getElementById('news-title-in').value = '';
      document.getElementById('news-body-in').value = '';
      document.getElementById('news-meta-title-in').value = '';
      document.getElementById('news-keywords-in').value = '';
      document.getElementById('news-meta-desc-in').value = '';
      removeUploadPhoto('news-photo-file', 'news-photo-prev', 'news-photo-del');
      closeAdminDashboard();
    }

    async function publishBlog() {
      const user = auth.currentUser;
      if (!user) return showToast("অননুমোদিত অ্যাক্সেস!");

      const title = document.getElementById('blog-title-in').value.trim();
      const body = document.getElementById('blog-body-in').value.trim();
      const fileInput = document.getElementById('blog-photo-file');

      const metaTitle = document.getElementById('blog-meta-title-in').value.trim();
      const keywords = document.getElementById('blog-keywords-in').value.trim();
      const metaDesc = document.getElementById('blog-meta-desc-in').value.trim();

      if (!title || !body) return showToast("ব্লগের শিরোনাম ও কন্টেন্ট দিন!");

      let finalImg = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800";
      if (fileInput && fileInput.files && fileInput.files[0]) {
        finalImg = await uploadImageToServer(fileInput.files[0]);
      }

      const newBlog = {
        id: "b_" + Date.now(),
        title,
        author: "সম্পাদকীয় দল",
        timestamp: Date.now(),
        img: finalImg,
        body,
        metaTitle: metaTitle || title,
        keywords: keywords,
        metaDesc: metaDesc,
        likes: 0,
        views: 1,
        comments: []
      };

      blogPosts.unshift(newBlog);
      db.ref('blog_posts').set(blogPosts).then(() => {
        showToast("ব্লগ/ভ্লগ সফলভাবে প্রকাশিত হয়েছে!");
      });

      document.getElementById('blog-title-in').value = '';
      document.getElementById('blog-body-in').value = '';
      document.getElementById('blog-meta-title-in').value = '';
      document.getElementById('blog-keywords-in').value = '';
      document.getElementById('blog-meta-desc-in').value = '';
      removeUploadPhoto('blog-photo-file', 'blog-photo-prev', 'blog-photo-del');
      closeAdminDashboard();
    }
    function renderAdminPostsTable() {
      const wrap = document.getElementById('admin-posts-table-wrap');
      if (newsPosts.length === 0) {
        wrap.innerHTML = "<p>কোনো সংবাদ পাওয়া যায়নি।</p>";
        return;
      }
      let html = `<table style="width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 550px;">
        <tr style="background: #f1f3f5; text-align: left;">
          <th style="padding: 8px; border: 1px solid #ddd;">শিরোনাম</th>
          <th style="padding: 8px; border: 1px solid #ddd;">বিভাগ</th>
          <th style="padding: 8px; border: 1px solid #ddd;">আপলোড সময়</th>
          <th style="padding: 8px; border: 1px solid #ddd;">অ্যাকশন</th>
        </tr>`;
      newsPosts.forEach(p => {
        const timeStr = getFormattedBanglaTime(p.timestamp);
        html += `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; max-width: 250px;">${p.title}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${p.category}</td>
            <td style="padding: 8px; border: 1px solid #ddd; font-size: 12px; color: #555;">${timeStr}</td>
            <td style="padding: 8px; border: 1px solid #ddd; white-space: nowrap;">
              <button class="btn-submit-action" style="padding: 4px 10px; font-size: 12px; background: #007bff; margin-right: 5px;" onclick="openEditNewsModal('${p.id}')">✏️ এডিট</button>
              <button class="btn-submit-action" style="padding: 4px 10px; font-size: 12px; background: #e03131;" onclick="deleteNewsPost('${p.id}')">🗑️ মুছুন</button>
            </td>
          </tr>`;
      });
      html += `</table>`;
      wrap.innerHTML = html;
    }

    function openEditNewsModal(id) {
      const post = newsPosts.find(p => p.id === id);
      if (!post) return;
      document.getElementById('edit-news-id').value = post.id;
      document.getElementById('edit-news-title').value = post.title;
      document.getElementById('edit-news-cat').value = post.category;
      document.getElementById('edit-news-author').value = post.author || 'নিজস্ব প্রতিবেদক';
      document.getElementById('edit-news-body').value = post.body;

      document.getElementById('edit-news-meta-title').value = post.metaTitle || '';
      document.getElementById('edit-news-keywords').value = post.keywords || '';
      document.getElementById('edit-news-meta-desc').value = post.metaDesc || '';

      const prev = document.getElementById('edit-news-photo-prev');
      const delBtn = document.getElementById('edit-news-photo-del');
      if (post.img) {
        prev.src = post.img;
        prev.style.display = 'block';
        delBtn.style.display = 'inline-block';
      } else {
        prev.style.display = 'none';
        delBtn.style.display = 'none';
      }

      document.getElementById('news-edit-modal').style.display = 'flex';
    }

    function closeEditNewsModal() {
      document.getElementById('news-edit-modal').style.display = 'none';
    }

    async function saveEditedNews() {
      const user = auth.currentUser;
      if (!user) return showToast("অননুমোদিত অ্যাক্সেস!");

      const id = document.getElementById('edit-news-id').value;
      const title = document.getElementById('edit-news-title').value.trim();
      const cat = document.getElementById('edit-news-cat').value;
      const author = document.getElementById('edit-news-author').value.trim() || 'নিজস্ব প্রতিবেদক';
      const body = document.getElementById('edit-news-body').value.trim();
      const fileInput = document.getElementById('edit-news-photo-file');

      const metaTitle = document.getElementById('edit-news-meta-title').value.trim();
      const keywords = document.getElementById('edit-news-keywords').value.trim();
      const metaDesc = document.getElementById('edit-news-meta-desc').value.trim();

      if (!title || !body) return showToast("শিরোনাম ও সংবাদের বর্ণনা দিন!");

      const idx = newsPosts.findIndex(p => p.id === id);
      if (idx !== -1) {
        newsPosts[idx].title = title;
        newsPosts[idx].category = cat;
        newsPosts[idx].author = author;
        newsPosts[idx].body = body;
        newsPosts[idx].metaTitle = metaTitle || title;
        newsPosts[idx].keywords = keywords;
        newsPosts[idx].metaDesc = metaDesc;

        if (fileInput && fileInput.files && fileInput.files[0]) {
          const uploadedUrl = await uploadImageToServer(fileInput.files[0]);
          if (uploadedUrl) newsPosts[idx].img = uploadedUrl;
        }

        db.ref('news_posts').set(newsPosts).then(() => {
          closeEditNewsModal();
          showToast("সংবাদ ও এসইও সফলভাবে আপডেট করা হয়েছে!");
        });
      }
    }

    function deleteNewsPost(id) {
      showCustomConfirm("আপনি কি নিশ্চিত এই সংবাদটি মুছে ফেলতে চান?", (yes) => {
        if (!yes) return;
        const user = auth.currentUser;
        if (!user) return showToast("অননুমোদিত অ্যাক্সেস!");

        newsPosts = newsPosts.filter(p => p.id !== id);
        db.ref('news_posts').set(newsPosts).then(() => {
          showToast("সংবাদটি মুছে ফেলা হয়েছে!");
        });
      });
    }

    function renderAdminBlogsTable() {
      const wrap = document.getElementById('admin-blogs-table-wrap');
      if (blogPosts.length === 0) {
        wrap.innerHTML = "<p>কোনো ব্লগ বা ভ্লগ পাওয়া যায়নি।</p>";
        return;
      }
      let html = `<table style="width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 550px;">
        <tr style="background: #f1f3f5; text-align: left;">
          <th style="padding: 8px; border: 1px solid #ddd;">শিরোনাম</th>
          <th style="padding: 8px; border: 1px solid #ddd;">আপলোড সময়</th>
          <th style="padding: 8px; border: 1px solid #ddd;">অ্যাকশন</th>
        </tr>`;
      blogPosts.forEach(b => {
        const timeStr = getFormattedBanglaTime(b.timestamp);
        html += `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; max-width: 280px;">${b.title}</td>
            <td style="padding: 8px; border: 1px solid #ddd; font-size: 12px; color: #555;">${timeStr}</td>
            <td style="padding: 8px; border: 1px solid #ddd; white-space: nowrap;">
              <button class="btn-submit-action" style="padding: 4px 10px; font-size: 12px; background: #007bff; margin-right: 5px;" onclick="openEditBlogModal('${b.id}')">✏️ এডিট</button>
              <button class="btn-submit-action" style="padding: 4px 10px; font-size: 12px; background: #e03131;" onclick="deleteBlogPost('${b.id}')">🗑️ মুছুন</button>
            </td>
          </tr>`;
      });
      html += `</table>`;
      wrap.innerHTML = html;
    }

    function openEditBlogModal(id) {
      const blog = blogPosts.find(b => b.id === id);
      if (!blog) return;
      document.getElementById('edit-blog-id').value = blog.id;
      document.getElementById('edit-blog-title').value = blog.title;
      document.getElementById('edit-blog-body').value = blog.body;

      document.getElementById('edit-blog-meta-title').value = blog.metaTitle || '';
      document.getElementById('edit-blog-keywords').value = blog.keywords || '';
      document.getElementById('edit-blog-meta-desc').value = blog.metaDesc || '';

      const prev = document.getElementById('edit-blog-photo-prev');
      const delBtn = document.getElementById('edit-blog-photo-del');
      if (blog.img) {
        prev.src = blog.img;
        prev.style.display = 'block';
        delBtn.style.display = 'inline-block';
      } else {
        prev.style.display = 'none';
        delBtn.style.display = 'none';
      }

      document.getElementById('blog-edit-modal').style.display = 'flex';
    }

    function closeEditBlogModal() {
      document.getElementById('blog-edit-modal').style.display = 'none';
    }

    async function saveEditedBlog() {
      const user = auth.currentUser;
      if (!user) return showToast("অননুমোদিত অ্যাক্সেস!");

      const id = document.getElementById('edit-blog-id').value;
      const title = document.getElementById('edit-blog-title').value.trim();
      const body = document.getElementById('edit-blog-body').value.trim();
      const fileInput = document.getElementById('edit-blog-photo-file');

      const metaTitle = document.getElementById('edit-blog-meta-title').value.trim();
      const keywords = document.getElementById('edit-blog-keywords').value.trim();
      const metaDesc = document.getElementById('edit-blog-meta-desc').value.trim();

      if (!title || !body) return showToast("শিরোনাম ও কন্টেন্ট দিন!");

      const idx = blogPosts.findIndex(b => b.id === id);
      if (idx !== -1) {
        blogPosts[idx].title = title;
        blogPosts[idx].body = body;
        blogPosts[idx].metaTitle = metaTitle || title;
        blogPosts[idx].keywords = keywords;
        blogPosts[idx].metaDesc = metaDesc;

        if (fileInput && fileInput.files && fileInput.files[0]) {
          const uploadedUrl = await uploadImageToServer(fileInput.files[0]);
          if (uploadedUrl) blogPosts[idx].img = uploadedUrl;
        }

        db.ref('blog_posts').set(blogPosts).then(() => {
          closeEditBlogModal();
          showToast("ব্লগ/ভ্লগ সফলভাবে আপডেট করা হয়েছে!");
        });
      }
    }

    function deleteBlogPost(id) {
      showCustomConfirm("আপনি কি নিশ্চিত এই ব্লগ/ভ্লগটি মুছে ফেলতে চান?", (yes) => {
        if (!yes) return;
        const user = auth.currentUser;
        if (!user) return showToast("অননুমোদিত অ্যাক্সেস!");

        blogPosts = blogPosts.filter(b => b.id !== id);
        db.ref('blog_posts').set(blogPosts).then(() => {
          showToast("ব্লগ/ভ্লগটি মুছে ফেলা হয়েছে!");
        });
      });
    }
    function renderAdminCommentsTable() {
      const wrap = document.getElementById('admin-comments-table-wrap');
      let allComments = [];
      newsPosts.forEach(p => {
        if (p.comments) {
          p.comments.forEach((c, idx) => allComments.push({ postId: p.id, postTitle: p.title, commentIdx: idx, name: c.name, text: c.text }));
        }
      });

      if (allComments.length === 0) {
        wrap.innerHTML = "<p style='color: #777;'>বর্তমানে কোনো মন্তব্য নেই।</p>";
        return;
      }

      let html = `<table style="width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 500px;">
        <tr style="background: #f1f3f5; text-align: left;">
          <th style="padding: 8px; border: 1px solid #ddd;">সংবাদ</th>
          <th style="padding: 8px; border: 1px solid #ddd;">মন্তব্যকারী</th>
          <th style="padding: 8px; border: 1px solid #ddd;">মন্তব্য</th>
          <th style="padding: 8px; border: 1px solid #ddd;">অ্যাকশন</th>
        </tr>`;
      allComments.forEach(c => {
        html += `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; max-width: 180px;">${c.postTitle}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${c.name}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${c.text}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              <button class="btn-submit-action" style="padding: 4px 8px; font-size: 12px; background: #e03131;" onclick="deleteComment('${c.postId}', ${c.commentIdx})">মুছুন</button>
            </td>
          </tr>`;
      });
      html += `</table>`;
      wrap.innerHTML = html;
    }

    function deleteComment(postId, idx) {
      showCustomConfirm("আপনি কি নিশ্চিত এই মন্তব্যটি মুছে ফেলতে চান?", (yes) => {
        if (!yes) return;
        const user = auth.currentUser;
        if (!user) return showToast("অননুমোদিত অ্যাক্সেস!");

        const post = newsPosts.find(p => p.id === postId);
        if (post && post.comments) {
          post.comments.splice(idx, 1);
          db.ref('news_posts').set(newsPosts).then(() => {
            showToast("মন্তব্যটি মুছে ফেলা হয়েছে!");
          });
        }
      });
    }

    // অ্যাড চিপস রেন্ডারার
    function renderAdNetworkSelector() {
      const chips = document.getElementById('ad-network-selector-chips');
      if (!chips) return;
      chips.innerHTML = '';
      
      const masterSwitch = document.getElementById('ad-master-switch');
      if (masterSwitch) masterSwitch.checked = (adStore.master !== false);

      AD_SLOTS.forEach(slot => {
        const conf = getAdConfig(slot.id);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `cat-btn ${slot.id === selectedAdSlotId ? 'active' : ''}`;
        btn.style.cssText = "border: 1px solid #ced4da; font-size: 13px; padding: 6px 12px; margin: 3px;";
        btn.innerHTML = `${slot.name} ${conf.enabled ? '🟢' : '⚪'}`;
        btn.onclick = () => {
          selectedAdSlotId = slot.id;
          renderAdNetworkSelector();
        };
        chips.appendChild(btn);
      });

      renderCurrentAdConfig();
    }

    function renderCurrentAdConfig() {
      const container = document.getElementById('ad-network-config-container');
      if (!container) return;

      const slot = AD_SLOTS.find(s => s.id === selectedAdSlotId) || AD_SLOTS[0];
      const conf = getAdConfig(slot.id);

      if (slot.id === "infeed") {
        const savedCodes = Array.isArray(conf.codes) ? conf.codes : (conf.code ? [conf.code] : []);
        const codeFields = savedCodes.length ? savedCodes : [''];
        container.innerHTML = `
          <div style="border-bottom:2px solid var(--primary-red);padding-bottom:8px;margin-bottom:14px;">
            <h3 style="font-size:16.5px;color:var(--primary-red);margin-bottom:4px;">${slot.name}</h3>
            <p style="font-size:13px;color:#555;">💡 ${slot.desc}</p>
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;background:#eef2f7;padding:10px 14px;border-radius:6px;">
            <input type="checkbox" id="curr-ad-enabled" ${conf.enabled ? 'checked' : ''} style="width:18px;height:18px;cursor:pointer;">
            <label for="curr-ad-enabled" style="font-weight:700;cursor:pointer;">In-Feed Banner বিজ্ঞাপন চালু রাখুন</label>
          </div>
          <div class="form-group" style="max-width:350px;">
            <label class="form-label">অ্যাড নেটওয়ার্কের নাম</label>
            <input type="text" id="curr-ad-network-name" class="form-input" placeholder="যেমন: Adsterra" value="${escapeAdField(conf.network || '')}">
          </div>
          <div id="infeed-code-list"></div>
          <button type="button" class="btn-submit-action" style="margin:6px 0 14px;" onclick="addInfeedCodeField()">＋ আরও একটি Feed Ad Code যোগ করুন</button>
          <div style="background:#fff8e6;border:1px solid #f0d58a;border-radius:7px;padding:10px 12px;margin:8px 0 14px;font-size:12.5px;color:#664d03;">
            ⚠️ প্রতিটি অবস্থানের জন্য Adsterra থেকে আলাদা Zone/Ad Code দিন। ১ম কোড ১ম বিজ্ঞাপনে, ২য় কোড ২য় বিজ্ঞাপনে—এভাবে ক্রমানুসারে ব্যবহার হবে। কোডের সাইজ এখানে নির্ধারণ করা হবে না।
          </div>
          <button type="button" class="btn-submit-action" onclick="saveCurrentAdSlot()">💾 সব In-Feed Ad Code সেভ করুন</button>`;
        const list = document.getElementById('infeed-code-list');
        codeFields.forEach(code => addInfeedCodeField(code));
        return;
      }

      if (slot.id === "footer") {
        const legacyCode = conf.code || "";
        const desktopCode = conf.desktopCode || legacyCode;
        const mobileCode = conf.mobileCode || "";
        container.innerHTML = `
          <div style="border-bottom: 2px solid var(--primary-red); padding-bottom: 8px; margin-bottom: 14px;">
            <h3 style="font-size: 16.5px; color: var(--primary-red); margin-bottom: 4px;">${slot.name}</h3>
            <p style="font-size: 13px; color: #555;">💡 ${slot.desc}</p>
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;background:#eef2f7;padding:10px 14px;border-radius:6px;">
            <input type="checkbox" id="curr-ad-enabled" ${conf.enabled ? 'checked' : ''} style="width:18px;height:18px;cursor:pointer;">
            <label for="curr-ad-enabled" style="font-weight:700;cursor:pointer;">Footer Banner বিজ্ঞাপন চালু রাখুন</label>
          </div>
          <div class="form-group" style="max-width:350px;">
            <label class="form-label">অ্যাড নেটওয়ার্কের নাম</label>
            <input type="text" id="curr-ad-network-name" class="form-input" placeholder="যেমন: Adsterra" value="${String(conf.network || '').replace(/"/g, '&quot;')}">
          </div>
          <div class="form-group">
            <label class="form-label">🖥️ Desktop Banner Code (728×90)</label>
            <textarea id="curr-ad-desktop-code" class="form-textarea code-editor-area" style="min-height:130px;" placeholder="Desktop 728×90 Adsterra Script ও DIV কোড এখানে দিন...">${desktopCode}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">📱 Mobile Banner Code (320×50)</label>
            <textarea id="curr-ad-mobile-code" class="form-textarea code-editor-area" style="min-height:130px;" placeholder="Mobile 320×50 Adsterra Script ও DIV কোড এখানে দিন...">${mobileCode}</textarea>
          </div>
          <div style="background:#fff8e6;border:1px solid #f0d58a;border-radius:7px;padding:10px 12px;margin:12px 0;font-size:12.5px;color:#664d03;">
            ⚠️ Desktop ও Mobile-এর জন্য Adsterra থেকে আলাদা Banner code ব্যবহার করুন। একটি কোড দুই ঘরে কপি করবেন না। পুরোনো Footer code থাকলে Desktop ঘরে সেটি দেখানো হবে।
          </div>
          <button type="button" class="btn-submit-action" onclick="saveCurrentAdSlot()">💾 Footer Banner-এর দুইটি কোড সেভ করুন</button>
        `;
        return;
      }

      container.innerHTML = `
        <div style="border-bottom: 2px solid var(--primary-red); padding-bottom: 8px; margin-bottom: 14px;">
          <h3 style="font-size: 16.5px; color: var(--primary-red); margin-bottom: 4px;">${slot.name}</h3>
          <p style="font-size: 13px; color: #555;">💡 ${slot.desc}</p>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; background: #eef2f7; padding: 10px 14px; border-radius: 6px;">
          <input type="checkbox" id="curr-ad-enabled" ${conf.enabled ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;">
          <label for="curr-ad-enabled" style="font-weight: 700; cursor: pointer;">এই বিজ্ঞাপন স্লটটি সক্রিয় (চালু) রাখুন</label>
        </div>

        <div class="form-group" style="max-width: 350px;">
          <label class="form-label">অ্যাড নেটওয়ার্কের নাম (যেমন: Adsterra)</label>
          <input type="text" id="curr-ad-network-name" class="form-input" placeholder="নেটওয়ার্কের নাম..." value="${conf.network || ''}">
        </div>

        <div class="form-group">
          <label class="form-label">বিজ্ঞাপনের কোড বা লিংক</label>
          <textarea id="curr-ad-code" class="form-textarea code-editor-area" style="min-height: 120px;" placeholder="${slot.placeholder}">${conf.code || ''}</textarea>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button type="button" class="btn-submit-action" onclick="saveCurrentAdSlot()">💾 এই স্লটের বিজ্ঞাপন সেভ করুন</button>
        </div>
      `;
    }

    function saveCurrentAdSlot() {
      const user = auth.currentUser;
      if (!user) return showToast("অননুমোদিত অ্যাক্সেস! দয়া করে লগইন করুন।");

      adStore.master = document.getElementById('ad-master-switch').checked;
      const enabled = document.getElementById('curr-ad-enabled').checked;
      const network = document.getElementById('curr-ad-network-name').value.trim();
      // Footer-এর জন্য Desktop ও Mobile আলাদা Adsterra কোড সংরক্ষণ।
      const savedSlots = { ...(adStore.slots || {}) };
      if (selectedAdSlotId === "footer") {
        const desktopCode = document.getElementById('curr-ad-desktop-code').value.trim();
        const mobileCode = document.getElementById('curr-ad-mobile-code').value.trim();
        savedSlots.footer = { enabled, network, desktopCode, mobileCode, code: "" };
      } else if (selectedAdSlotId === "infeed") {
        const codes = Array.from(document.querySelectorAll('#infeed-code-list .infeed-code-value'))
          .map(field => field.value.trim()).filter(Boolean);
        savedSlots.infeed = { enabled, network, codes, code: codes[0] || '' };
      } else {
        const code = document.getElementById('curr-ad-code').value.trim();
        savedSlots[selectedAdSlotId] = { enabled, network, code };
      }

      // অন্য স্লটের সেটিংস অক্ষত রেখে শুধু নির্বাচিত স্লট আপডেট করা হয়।
      adStore.slots = savedSlots;
      adStore.networks = {};

      db.ref('ad_store').set(adStore).then(() => {
        showToast("বিজ্ঞাপন স্লটটি সফলভাবে সংরক্ষিত হয়েছে!");
        renderAdNetworkSelector();
        renderAllAds();
        renderFeed();
      });
    }

    function saveCurrentAdNetwork() {
      saveCurrentAdSlot();
    }

    function initBrandingSettingsTab() {
      document.getElementById('setting-language-select').value = siteLanguage;
      document.getElementById('setting-site-title').value = brandingSettings.title;
      document.getElementById('setting-site-sub').value = brandingSettings.sub;
      document.getElementById('setting-site-slogan').value = brandingSettings.slogan;
      document.getElementById('setting-theme-select').value = brandingSettings.theme;
      document.getElementById('setting-imgbb-key').value = brandingSettings.imgbbKey || '';

      const logoImg = document.getElementById('logo-prev-img');
      const delBtn = document.getElementById('logo-prev-del');
      if (brandingSettings.customLogo) {
        logoImg.src = brandingSettings.customLogo;
        logoImg.style.display = 'block';
        delBtn.style.display = 'inline-block';
      } else {
        logoImg.style.display = 'none';
        delBtn.style.display = 'none';
      }
    }

    function saveBrandingSettings() {
      const user = auth.currentUser;
      if (!user) return showToast("অননুমোদিত অ্যাক্সেস!");

      siteLanguage = document.getElementById('setting-language-select').value;
      brandingSettings.title = document.getElementById('setting-site-title').value.trim() || "সততা নিউজ";
      brandingSettings.sub = document.getElementById('setting-site-sub').value.trim() || "SOTOTA NEWS";
      brandingSettings.slogan = document.getElementById('setting-site-slogan').value.trim() || "সত্যের সন্ধানে সার্বক্ষণিক";
      brandingSettings.theme = document.getElementById('setting-theme-select').value;
      brandingSettings.imgbbKey = document.getElementById('setting-imgbb-key').value.trim();

      const logoPrev = document.getElementById('logo-prev-img').src;
      brandingSettings.customLogo = logoPrev && logoPrev.startsWith('data:') ? logoPrev : null;

      db.ref('branding_settings').set(brandingSettings).then(() => {
        applyLanguage();
        showToast("ব্র্যান্ডিং ও ImgBB ক্লাউড সেটিংস সংরক্ষিত হয়েছে!");
      });
    }

    function initFontSettingsTab() {
      const selects = [
        { id: 'font-global-select', key: 'global' },
        { id: 'font-headline-select', key: 'headline' },
        { id: 'font-nav-select', key: 'nav' },
        { id: 'font-article-select', key: 'article' },
        { id: 'font-logo-select', key: 'logo' }
      ];

      selects.forEach(s => {
        const el = document.getElementById(s.id);
        el.innerHTML = '';
        FONT_OPTIONS.forEach(opt => {
          const optEl = document.createElement('option');
          optEl.value = opt.value;
          optEl.innerText = opt.name;
          if (fontSettings[s.key] === opt.value) optEl.selected = true;
          el.appendChild(optEl);
        });
      });
    }

    function saveFontSettings() {
      const user = auth.currentUser;
      if (!user) return showToast("অননুমোদিত অ্যাক্সেস!");

      fontSettings.global = document.getElementById('font-global-select').value;
      fontSettings.headline = document.getElementById('font-headline-select').value;
      fontSettings.nav = document.getElementById('font-nav-select').value;
      fontSettings.article = document.getElementById('font-article-select').value;
      fontSettings.logo = document.getElementById('font-logo-select').value;

      db.ref('font_settings').set(fontSettings).then(() => {
        showToast("ফন্ট সেটিংস সংরক্ষিত হয়েছে!");
      });
    }

    function updateAdminPassword() {
      const user = auth.currentUser;
      if (!user) return showToast("অননুমোদিত অ্যাক্সেস! লগইন করুন।");

      const curr = document.getElementById('sec-current-pass').value;
      const n1 = document.getElementById('sec-new-pass').value;
      const n2 = document.getElementById('sec-confirm-pass').value;

      if (!curr) return showToast("বর্তমান পাসওয়ার্ড প্রদান করুন!");
      if (!n1 || n1.length < 6) return showToast("নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে!");
      if (n1 !== n2) return showToast("নতুন পাসওয়ার্ড দুটি মিলছে না!");

      const cred = firebase.auth.EmailAuthProvider.credential(user.email, curr);
      user.reauthenticateWithCredential(cred)
        .then(() => {
          return user.updatePassword(n1);
        })
        .then(() => {
          document.getElementById('sec-current-pass').value = '';
          document.getElementById('sec-new-pass').value = '';
          document.getElementById('sec-confirm-pass').value = '';
          showToast("পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে!");
        })
        .catch((error) => {
          console.error("Password update error:", error);
          showToast("পাসওয়ার্ড পরিবর্তন ব্যর্থ হয়েছে! বর্তমান পাসওয়ার্ড সঠিক নয়।");
        });
    }

    // পোর্টাল শুরু — ঘড়ি অন্য UI initialization-এর ওপর নির্ভর করবে না।
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
    applyFontSettings();
    applyBranding();
    applyLanguage();
    renderAllAds();
