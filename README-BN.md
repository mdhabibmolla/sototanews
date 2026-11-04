# সততা নিউজ — Modular Multi-page Starter

এই ZIP-এ আপনার দেওয়া Single-file HTML থেকে CSS, JavaScript, Firebase config এবং common UI shell আলাদা করা হয়েছে। বিদ্যমান Firebase news/admin/ad logic `public/js/app.js`-এ রাখা হয়েছে, আর Header, navigation, feed, footer, article modal ও Admin UI `partials/site-shell.html`-এ রাখা হয়েছে। চারটি page entry point একই shared shell ব্যবহার করে।

## কোন পদ্ধতি বেছে নেওয়া হয়েছে?
আপনি এখনো hosting নেননি, তাই PHP বা Express server বাধ্যতামূলক করিনি। Firebase Realtime Database-কে backend হিসেবে রেখে **static multi-page HTML** রাখা হয়েছে। এতে পরে Firebase Hosting, Netlify বা অন্য static hosting-এ প্রকাশ করা সহজ হবে। Express/EJS server এখনই চালানোর প্রয়োজন নেই।

## ফোল্ডার
- `index.html` — Home
- `categories.html?cat=জাতীয়` — Category view
- `article.html?news=POST_ID` — Direct article URL
- `admin.html` — Admin login/dashboard
- `partials/site-shell.html` — Shared header, navigation, footer, modals, admin UI
- `public/css/app.css` — আগের CSS
- `public/js/firebase-config.js` — Firebase client config
- `public/js/app.js` — আগের application logic
- `public/js/bootstrap.js` — shared shell load করে app চালু করে
- `public/manifest.json`, `public/service-worker.js` — PWA foundation
- `legacy/` — original single-file backup

## Windows-এ চালানোর নিয়ম
1. ZIP extract করুন।
2. Python 3 ইনস্টল থাকলে `start-local.bat` double-click করুন।
3. Browser-এ `http://localhost:8000` খুলুন।
4. Firebase Console → Authentication → Settings → Authorized domains-এ `localhost` যোগ করুন।
5. `admin.html` খুলে আগের Firebase admin account দিয়ে লগইন করুন।

যদি Python না থাকে, terminal/cmd-তে project folder খুলে চালান:
`python -m http.server 8000`

## Android / Mac / Linux
Project folder-এ terminal খুলে চালান:
`python3 -m http.server 8000`
তারপর `http://localhost:8000` খুলুন।

## Category ও Article URL
- Category: `categories.html?cat=জাতীয়`
- Article: `article.html?news=FIREBASE_POST_ID`
- Blog view: `index.html?view=blog`

Article ID হলো Firebase `news_posts` record-এর `id`। Blog ID-ও বর্তমান অ্যাপের মতো `b_` prefix-সহ কাজ করবে।

## Hosting-এ প্রকাশ
Firebase Hosting ব্যবহার করতে পারেন:
1. Firebase CLI ইনস্টল করুন: `npm install -g firebase-tools`
2. লগইন: `firebase login`
3. এই folder-এ: `firebase init hosting`
4. Public directory হিসেবে `.` দিন; single-page app rewrite নির্বাচন করবেন না।
5. Deploy: `firebase deploy`

`firebase.json.example`-এ প্রাথমিক Hosting config দেওয়া আছে। ব্যবহার করার আগে সেটিকে `firebase.json` নামে কপি করুন।

## গুরুত্বপূর্ণ সীমাবদ্ধতা / নিরাপত্তা
- Firebase Web API key browser-এ প্রকাশ্য থাকে; আসল নিরাপত্তা Firebase Realtime Database Rules এবং Authentication দিয়ে করতে হবে। Admin write access কখনো `".write": true` করে খুলে রাখবেন না।
- `file://` দিয়ে HTML খুলবেন না। Firebase module, fetch-based shared partials এবং PWA Service Worker-এর জন্য localhost বা HTTPS hosting ব্যবহার করুন।
- Social crawler-এর server-side SEO/Open Graph preview এই static package-এ যোগ হয়নি; পেজের client-side SEO logic আগের মতোই আছে। Server-rendered SEO চাইলে পরে Express/EJS বা Cloud Functions যোগ করা যাবে।
- Adsterra বিজ্ঞাপন সরাসরি এখানে live-এ যাচাই করা হয়নি। আপনার বর্তমান Adsterra Zone settings ও Firebase data-ই ব্যবহৃত হবে।
- PWA service worker-এর cache shell baseline; নতুন ফাইল deploy করলে cache version বাড়াতে হবে।
- Original single-file version `legacy/`-এ রাখা আছে। কোনো সমস্যা হলে rollback হিসেবে সেটি ব্যবহার করতে পারবেন।

## প্রথমবার যাচাই
1. Home load হচ্ছে কি না।
2. Firebase থেকে news ও blog আসছে কি না।
3. Category button চাপলে `categories.html?cat=...` URL হচ্ছে কি না।
4. কোনো news খুললে `article.html?news=...` URL হচ্ছে কি না।
5. Admin login কাজ করছে কি না।
6. Footer, In-Feed ও In-Article Ad settings আগের মতো আছে কি না।


## Like, Comment ও View Count আপডেট
- Like ও View Count Firebase Realtime Database transaction দিয়ে বাড়ে, তাই একাধিক ডিভাইস একসঙ্গে ব্যবহার করলেও কাউন্ট overwrite হওয়ার ঝুঁকি কমে।
- মন্তব্য সংশ্লিষ্ট `news_posts/<index>/comments` অথবা `blog_posts/<index>/comments`-এ সংরক্ষিত হয় এবং Firebase realtime listener দিয়ে অন্য ডিভাইসেও দেখা যায়।
- নাম ৫০ এবং মন্তব্য ১০০০ অক্ষরে সীমাবদ্ধ; URL, HTML/JavaScript/code pattern ও কিছু সাধারণ স্প্যাম প্যাটার্ন ক্লায়েন্টে প্রত্যাখ্যান করা হয়। এটি সম্পূর্ণ spam-proof নয়; প্রকৃত নিরাপত্তার জন্য Firebase Database Rules/Cloud Functions-এও validation যোগ করা প্রয়োজন।
- Firebase Realtime Database Rules-এ public comment/like/view write অনুমোদিত না থাকলে এই কাজগুলো ব্যর্থ হবে। Admin-only post editing সুরক্ষা অপরিবর্তিত রাখুন; পুরো database-এ উন্মুক্ত write access দেবেন না।
