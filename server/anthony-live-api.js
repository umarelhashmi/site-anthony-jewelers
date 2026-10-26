/**
 * Anthony Jewelers (Lake Nona) — Live Social Media & Proxy Service
 * ================================================================
 * Provides:
 *  1. GET /api/latest-media
 *     - Dynamically linked to https://www.facebook.com/AnthonyJewelersOfLakeNona/
 *     - Returns the latest 3 media posts + additional live Facebook gallery items
 *       so whenever they upload a new post, it automatically updates.
 *  2. GET /api/media-proxy?id=<fbid>
 *     - Streams the live media image directly from Facebook's CDN in memory
 *       without ever downloading or storing Facebook files on disk.
 */

const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

let chromium = null;
for (const candidate of [
  "playwright",
  "/opt/wishshipped-auth/node_modules/playwright",
  "/root/node_modules/playwright",
  "/Users/umarelhashmi/.npm/_npx/e41f203b7505f1fb/node_modules/playwright"
]) {
  try {
    chromium = require(candidate).chromium;
    if (chromium) break;
  } catch (e) {}
}

const PORT = Number(process.env.PORT || 4049);
const ROOT_DIR = path.resolve(__dirname, "..");
const SOCIAL_PROFILE_URL = "https://www.facebook.com/AnthonyJewelersOfLakeNona/";
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

// Initial verified live posts & media from https://www.facebook.com/AnthonyJewelersOfLakeNona/
let latestFeedItems = [
  {
    id: "1479013290328931",
    postUrl:
      "https://www.facebook.com/AnthonyJewelersOfLakeNona/posts/pfbid035xXwMR3paLTKHWi6rrBnxAScijrjdZsyVBc2mqNenSJcFQ9irmMRZrcQ6KAEXW3Dl",
    photoUrl: "https://www.facebook.com/photo/?fbid=1479013290328931&set=pcb.1479014270328833",
    cdnUrl:
      "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/593423785_1479014340328826_7141101579104737941_n.jpg?stp=dst-jpg_tt6&cstp=mx750x1000&ctp=s750x1000&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lUJ7rjN4za4Q7kNvwEAjnu3&_nc_oc=AdrLyrQcyxHTbOal5SqeiC4nSv9xRZC8tAm8YOG-tuKJpOKE4JsQ0nxnPcdThk85W5brxP6l_pNWgUIlqqAgDhex&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=QD5ZmNKTtuRPxKPF8iZCTA&_nc_ss=7b289&oh=00_AQMbj8Blb72D-IsJu2o05eblLOAwSWhAEdvoP1DoqBjXog&oe=6AE4AE89",
    date: "December 4, 2025",
    title: "Classic Diamond Studs & Custom Engagement Rings",
    caption:
      "Fall in love with jewelry that actually feels special. From classic diamond studs to custom engagement rings, Anthony Jewelers helps you celebrate every moment in style."
  },
  {
    id: "1479013296995597",
    postUrl:
      "https://www.facebook.com/photo/?fbid=1479013296995597&set=pcb.1479014270328833",
    photoUrl: "https://www.facebook.com/photo/?fbid=1479013296995597&set=pcb.1479014270328833",
    cdnUrl:
      "https://scontent-mia5-2.xx.fbcdn.net/v/t39.30808-6/593413390_1479014343662159_8628188163536710884_n.jpg?stp=dst-jpg_tt6&cstp=mx750x1000&ctp=s750x1000&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FMXHmO6JEZ0Q7kNvwEJHOHF&_nc_oc=Ado64z1q74RUSaSDbHZFnP_nJrrr25SGYQbGfs6LbzicBwkG5pXeM1g1-A0yamlH8DaCIqu-crw4fBMiBy6n7P7a&_nc_zt=23&_nc_ht=scontent-mia5-2.xx&_nc_gid=QD5ZmNKTtuRPxKPF8iZCTA&_nc_ss=7b289&oh=00_AQPgO1O5vD1jM6O80csxRALxxl0VI6KmwFkBlFdTOgLfSA&oe=6AE47FAB",
    date: "December 4, 2025",
    title: "Holiday Fine Jewelry Showcase — Lake Nona",
    caption:
      "Fall in love with jewelry that actually feels special. From classic diamond studs to custom engagement rings, Anthony Jewelers helps you celebrate every moment in style."
  },
  {
    id: "1177694147127515",
    postUrl:
      "https://www.facebook.com/AnthonyJewelersOfLakeNona/posts/pfbid02kXp8xVSzaxUaRFSBQkHRhoS9pm9aKnc7Yto2rHLx5xiTeWB9jTvh9q1rateTmJWAl",
    photoUrl: "https://www.facebook.com/photo/?fbid=1177694147127515&set=pcb.1177694257127504",
    cdnUrl:
      "https://scontent-mia5-1.xx.fbcdn.net/v/t39.30808-6/488687553_1274476710782591_7943121711182806204_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1080x1440&ctp=p960x960&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V5uKaI5fq4kQ7kNvwE2BEpY&_nc_oc=Ado9ulTHveTt0APwKEtbspu8xe5KNQr6lURBc0POeipu2ngBd4QO28kd7FnkVOX2j2kgVJhftu70b14sX4BZwd3_&_nc_zt=23&_nc_ht=scontent-mia5-1.xx&_nc_gid=C__lcZTsdqtJJXRndGFI0Q&_nc_ss=7b289&oh=00_AQPjso4wcoApQQpM6TOU1uMxjSwP89tbxZ2PoPrPFzVtBg&oe=6AE4AA22",
    date: "December 6, 2024",
    title: "Heart of Lake Nona — Family Owned & Operated",
    caption:
      "We’re conveniently located in the heart of Lake Nona. Family owned and operated. Stop by today and pick up one of these beautiful pieces. 9971 Tagore Place - Lake Nona."
  }
];

// Additional live Facebook media items mapped by fbid (never downloaded to disk)
const liveMediaCatalog = new Map([
  [
    "1479013290328931",
    latestFeedItems[0]
  ],
  [
    "1479013296995597",
    latestFeedItems[1]
  ],
  [
    "1177694147127515",
    latestFeedItems[2]
  ],
  [
    "1177694170460846",
    {
      id: "1177694170460846",
      postUrl: "https://www.facebook.com/photo/?fbid=1177694170460846&set=pcb.1177694257127504",
      cdnUrl:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/489399749_1274477067449222_2358945578949797894_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1080x1440&ctp=p960x960&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pv1QXikhKm0Q7kNvwEbo4No&_nc_oc=AdoGvFxIju3CFuRSHL1Y_oxX3dHWGaC5eAJPWKbNmgkQL14S-bjIyHgADRfIxym-3b_f5UjvFeXztRPdA4hRcrvD&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=C__lcZTsdqtJJXRndGFI0Q&_nc_ss=7b289&oh=00_AQMdP8_2MNjTlAk26oPMM4sXZZGkHf39h_w0T3g5vjBhLA&oe=6AE4A847"
    }
  ],
  [
    "1177694183794178",
    {
      id: "1177694183794178",
      postUrl: "https://www.facebook.com/photo/?fbid=1177694183794178&set=pcb.1177694257127504",
      cdnUrl:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/489532646_1274476997449229_1927632909181504679_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1080x1440&ctp=p960x960&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PJ2K4v2kbooQ7kNvwEBAopg&_nc_oc=Adq7uFEWCinC0FIgqDxyeDb_zwwBkHMBnZ6kUK_6-lGC7eQAUcxnkJuRKhpfxzu2cbaXZx3eFzGlDFEF-O65zpuZ&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=C__lcZTsdqtJJXRndGFI0Q&_nc_ss=7b289&oh=00_AQMsCpmH0UKC_HlWHiaOmt3lUIVmTNGc2_1ZYqhk-nRfsw&oe=6AE49BE9"
    }
  ],
  [
    "1173866710843592",
    {
      id: "1173866710843592",
      postUrl: "https://www.facebook.com/photo/?fbid=1173866710843592&set=pcb.1173866794176917",
      cdnUrl:
        "https://scontent-mia5-1.xx.fbcdn.net/v/t39.30808-6/489168484_1274351287461800_6629690149804097227_n.jpg?stp=dst-jpg_tt6&cstp=mx642x798&ctp=s642x798&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uww_ZleF9vsQ7kNvwFph5sd&_nc_oc=AdobJlylrwsPmt3qoULOuUZojgGdVc8yvqNz6ae-xr1qHfEWCcvy5PNVgdgVdDe0RQlyQRb5A0mFqBPPjLxuk0Oh&_nc_zt=23&_nc_ht=scontent-mia5-1.xx&_nc_gid=C__lcZTsdqtJJXRndGFI0Q&_nc_ss=7b289&oh=00_AQN_J1cDeym7BroEZuljwUsSENyx-7ppsT9fQKpTRm69jg&oe=6AE47DB2"
    }
  ],
  [
    "6178208205584444",
    {
      id: "6178208205584444",
      postUrl: "https://www.facebook.com/photo/?fbid=6178208205584444&set=pcb.6178243315580933",
      cdnUrl:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/474899172_28169256502719632_7306150219792759416_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RlVO9f3y9xoQ7kNvwHdshwW&_nc_oc=Adojdn_2XFllyPM0RjR-hxt820tyndnPYPBg6V4hX-uC6IfJxBZFlXfYdZLHTmFnf3nvw3mWOaKDrvlXCRgQzd1I&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=Vxb2zU0uV68oWenABiR4og&_nc_ss=7b289&oh=00_AQPNMan9GQWuYkbulBfQhtifCzST-MmBJKkfN075v8ckxw&oe=6AE4A443"
    }
  ],
  [
    "6178208825584382",
    {
      id: "6178208825584382",
      postUrl: "https://www.facebook.com/photo/?fbid=6178208825584382&set=pcb.6178243315580933",
      cdnUrl:
        "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/474776111_28169256609386288_6863547382541467110_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eTfGBFDyVXcQ7kNvwFmoSS2&_nc_oc=AdrRmvLTs-5JX10Qu4S9mzOBfufWvOgkI8LLiYNwtu0UPpW1St2ZpEXATIJzrsp6HFrQ7gkiaFLjD_SRQqUujLQt&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=Vxb2zU0uV68oWenABiR4og&_nc_ss=7b289&oh=00_AQMxhMPIUlZpi4vir8d0xRDM6-ZptyQDFhv2xJ6oIMs1Tw&oe=6AE4AA0C"
    }
  ],
  [
    "489364752218498",
    {
      id: "489364752218498",
      postUrl: "https://www.facebook.com/AnthonyJewelersOfLakeNona/videos/489364752218498/",
      cdnUrl:
        "https://scontent-mia3-3.xx.fbcdn.net/v/t15.13418-10/166708464_461624255047674_835078241185368859_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=aaa768&_nc_ohc=Cq0m_2T1ktgQ7kNvwG3kovF&_nc_oc=AdrFksMG-RytCtpRUQLqr7C_lNQzzxtFlc_wYctcAQTo35uDzstjKa_t-FWBBtm4xJzlIYV7xTcFlCGJWzCLAgLB&_nc_zt=23&_nc_ht=scontent-mia3-3.xx&_nc_gid=Vxb2zU0uV68oWenABiR4og&_nc_ss=7b289&oh=00_AQPBvcPNCCuZiP50M5DjIdEB2yELEXd41E4RCRqp3our6A&oe=6AE4985C"
    }
  ]
]);

let lastSyncTime = Date.now();
let syncInFlight = false;

async function syncLiveFacebookFeed() {
  if (!chromium || syncInFlight) return;
  syncInFlight = true;
  let browser = null;
  try {
    const launchOpts = {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
    };
    if (
      process.platform === "darwin" &&
      fs.existsSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
    ) {
      launchOpts.executablePath =
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    }
    browser = await chromium.launch(launchOpts);
    const context = await browser.newContext({
      userAgent: USER_AGENT,
      viewport: { width: 1280, height: 900 },
      locale: "en-US"
    });
    const page = await context.newPage();
    await page.goto(SOCIAL_PROFILE_URL, {
      waitUntil: "domcontentloaded",
      timeout: 25000
    });
    await page.waitForTimeout(3000);
    try {
      const closeBtn = await page.$('[aria-label="Close"]');
      if (closeBtn) await closeBtn.click();
    } catch (e) {}

    const freshItems = await page.evaluate(() => {
      const articles = Array.from(document.querySelectorAll('[role="article"]'));
      const discovered = [];
      for (const art of articles) {
        const text = art.innerText || "";
        const imgs = Array.from(art.querySelectorAll('img[src*="scontent"]'))
          .map((i) => i.src)
          .filter((s) => !s.includes("s320x320") && !s.includes("p50x50"));
        const links = Array.from(art.querySelectorAll("a[href]"))
          .map((a) => a.href)
          .filter(
            (h) =>
              h.includes("/posts/") ||
              h.includes("/photo/?fbid=") ||
              h.includes("/videos/") ||
              h.includes("/reel/")
          );
        if (imgs.length > 0 && links.length > 0) {
          const cleanLinks = links.map((l) => l.split("?__cft__")[0].split("&__cft__")[0]);
          const postUrl = cleanLinks[0];
          const fbidMatch = cleanLinks.join(" ").match(/fbid=(\d+)/);
          const id = fbidMatch ? fbidMatch[1] : String(Date.now() + discovered.length);
          const lines = text
            .split("\n")
            .map((l) => l.trim())
            .filter(
              (l) =>
                l &&
                !l.includes("Anthony Jewelers") &&
                !l.includes("All reactions") &&
                l !== "Like" &&
                l !== "Comment" &&
                l !== "·"
            );
          discovered.push({
            id,
            postUrl,
            cdnUrl: imgs[0],
            date: lines[0] || "Recent",
            caption: lines.slice(1).join(" ").slice(0, 220) || "Anthony Jewelers — Lake Nona"
          });
        }
        if (discovered.length >= 3) break;
      }
      return discovered;
    });

    if (Array.isArray(freshItems) && freshItems.length >= 3) {
      latestFeedItems = freshItems.slice(0, 3);
      for (const item of latestFeedItems) {
        liveMediaCatalog.set(item.id, item);
      }
      lastSyncTime = Date.now();
    }
  } catch (err) {
    console.warn("[AnthonyLive] Background sync warning:", err.message);
  } finally {
    syncInFlight = false;
    if (browser) await browser.close().catch(() => {});
  }
}

function handleLatestMedia(req, res) {
  if (Date.now() - lastSyncTime > 15 * 60 * 1000 && !syncInFlight) {
    syncLiveFacebookFeed().catch(() => {});
  }

  const items = latestFeedItems.slice(0, 3).map((item) => ({
    id: item.id,
    postUrl: item.postUrl,
    mediaUrl: `/api/media-proxy?id=${encodeURIComponent(item.id)}`,
    cdnUrl: item.cdnUrl,
    date: item.date,
    title: item.title || "Anthony Jewelers — Lake Nona",
    caption: String(item.caption || "").replace(/instagram/gi, "").trim()
  }));

  const payload = JSON.stringify({
    ok: true,
    profileUrl: SOCIAL_PROFILE_URL,
    updatedAt: new Date(lastSyncTime).toISOString(),
    items
  });

  res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "public, max-age=120",
    "Access-Control-Allow-Origin": "*"
  });
  res.end(payload);
}

function handleMediaProxy(req, res, parsedUrl) {
  const id = String(parsedUrl.searchParams.get("id") || "").trim();
  const entry = liveMediaCatalog.get(id) || latestFeedItems.find((x) => x.id === id);
  if (!entry || !entry.cdnUrl) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Media ID not found");
  }

  const u = new URL(entry.cdnUrl);
  const proxyReq = https.request(
    {
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: "GET",
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        Referer: "https://www.facebook.com/"
      },
      timeout: 12000
    },
    (proxyRes) => {
      if (proxyRes.statusCode !== 200) {
        res.writeHead(302, { Location: entry.cdnUrl });
        proxyRes.resume();
        return res.end();
      }
      res.writeHead(200, {
        "Content-Type": proxyRes.headers["content-type"] || "image/jpeg",
        "Cache-Control": "public, max-age=900",
        "Access-Control-Allow-Origin": "*",
        "Cross-Origin-Resource-Policy": "cross-origin"
      });
      proxyRes.pipe(res);
    }
  );
  proxyReq.on("error", () => {
    if (!res.headersSent) {
      res.writeHead(302, { Location: entry.cdnUrl });
      res.end();
    }
  });
  proxyReq.end();
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = parsedUrl.pathname;

  if (pathname === "/api/latest-media") {
    return handleLatestMedia(req, res);
  }
  if (pathname === "/api/media-proxy") {
    return handleMediaProxy(req, res, parsedUrl);
  }

  let relPath = pathname === "/" ? "/index.html" : pathname;
  relPath = path.normalize(relPath).replace(/^(\.\.(\/|\\|$))+/, "");
  const filePath = path.join(ROOT_DIR, relPath);

  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Not found");
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Cache-Control": "public, max-age=300"
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`[AnthonyLive] Listening on http://127.0.0.1:${PORT}`);
});
