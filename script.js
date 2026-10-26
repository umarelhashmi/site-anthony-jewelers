(() => {
  "use strict";

  // =========================================================================
  // 1. EXACT PRODUCTS & COLLECTIONS CATALOG (Zero Invented Prices)
  // =========================================================================
  const VAULT_ITEMS = [
    {
      id: "oval-halo-engagement",
      title: "Oval Halo Pavé Diamond Engagement Ring",
      spec: "Oval-Cut Center · Diamond Halo & Pavé Band",
      category: "bridal",
      categoryLabel: "Wedding & Engagement Sets",
      origin: "Lake Nona Showroom",
      studioImg: "assets/images/ai/edit-oval-halo-ring.webp",
      originalImg: "assets/images/gmaps/gmaps-photo-03.jpg"
    },
    {
      id: "dutch-marquis-tulip",
      title: "Custom Dutch Marquis Engagement Ring",
      spec: "Custom Tulip Setting · Custom Band Engraving",
      category: "custom",
      categoryLabel: "Custom One-of-a-Kind",
      origin: "Client Commission (Ishaq)",
      studioImg: "assets/images/gmaps/gmaps-photo-24.jpg",
      originalImg: "assets/images/gmaps/gmaps-photo-22.jpg"
    },
    {
      id: "oval-solitaire-hidden-halo",
      title: "Oval Solitaire Hidden-Halo Engagement Ring",
      spec: "Custom Diamond Shape · Pavé Gallery Setting",
      category: "bridal",
      categoryLabel: "Wedding & Engagement Sets",
      origin: "Client Commission (Brett Maneri)",
      studioImg: "assets/images/gmaps/gmaps-photo-08.jpg",
      originalImg: "assets/images/gmaps/gmaps-photo-08.jpg"
    },
    {
      id: "oval-marquise-bridal-set",
      title: "Custom Oval & Marquise Side-Stone Bridal Set",
      spec: "Oval Center Diamond · Matching Yellow Gold Band",
      category: "custom",
      categoryLabel: "Custom One-of-a-Kind",
      origin: "Client Commission (Saja Alkhafaji)",
      studioImg: "assets/images/gmaps/gmaps-photo-11.jpg",
      originalImg: "assets/images/gmaps/gmaps-photo-11.jpg"
    },
    {
      id: "custom-green-marquise-baguette",
      title: "Custom Marquise & Tapered Baguette Ring",
      spec: "Bespoke Colored Gemstone · Tapered Baguette Shoulders",
      category: "custom",
      categoryLabel: "Custom One-of-a-Kind",
      origin: "Client Commission (Hombuswa Curaçao)",
      studioImg: "assets/images/gmaps/gmaps-photo-18.jpg",
      originalImg: "assets/images/gmaps/gmaps-photo-17.jpg"
    },
    {
      id: "oval-yellow-gold-wedding-set",
      title: "Tailored Oval Solitaire & Wedding Ring Set",
      spec: "18K Yellow Gold Solitaire · His & Hers Wedding Bands",
      category: "bridal",
      categoryLabel: "Wedding & Engagement Sets",
      origin: "Client Commission (Seth Rivera)",
      studioImg: "assets/images/gmaps/gmaps-photo-19.jpg",
      originalImg: "assets/images/gmaps/gmaps-photo-20.jpg"
    },
    {
      id: "three-stone-sapphire-diamond",
      title: "Three-Stone Blue Sapphire & Diamond Ring",
      spec: "Round Royal Blue Sapphire · Brilliant Diamond Trio",
      category: "fine",
      categoryLabel: "Fine Jewelry",
      origin: "Lake Nona Showroom",
      studioImg: "assets/images/gmaps/gmaps-photo-10.jpg",
      originalImg: "assets/images/gmaps/gmaps-photo-10.jpg"
    },
    {
      id: "rose-gold-gemstone-trio",
      title: "Morganite Halo, Crossover Pavé & Amethyst Trio",
      spec: "Rose Gold & Colored Gemstone Statement Rings",
      category: "fine",
      categoryLabel: "Fine Jewelry",
      origin: "Lake Nona Showroom",
      studioImg: "assets/images/gmaps/gmaps-photo-05.jpg",
      originalImg: "assets/images/gmaps/gmaps-photo-05.jpg"
    },
    {
      id: "aquamarine-double-halo-pendant",
      title: "Aquamarine Double-Halo Diamond Pendant",
      spec: "Oval Blue Gemstone · Double Diamond Halo & Box Chain",
      category: "fine",
      categoryLabel: "Fine Necklaces",
      origin: "Lake Nona Showroom",
      studioImg: "assets/images/ai/edit-aquamarine-pendant.webp",
      originalImg: "assets/images/gmaps/gmaps-photo-06.jpg"
    },
    {
      id: "diamond-tennis-bracelets-bangles",
      title: "Diamond Tennis Bracelets, Clover & Gemstone Bangles",
      spec: "Pavé Cuffs · Emerald & Sapphire Bangles · Evil-Eye & Clover",
      category: "fine",
      categoryLabel: "Fine Bracelets",
      origin: "Lake Nona Showroom",
      studioImg: "assets/images/ai/edit-bracelet-bar.webp",
      originalImg: "assets/images/gmaps/gmaps-photo-07.jpg"
    },
    {
      id: "sunflower-collection-hakman",
      title: "Sunflower Collection by Hakman Designs",
      spec: "18K Yellow Gold with Chocolate Diamonds & White Diamond Petals",
      category: "designer",
      categoryLabel: "Hakman Designs",
      origin: "Official Designer Collection",
      studioImg: "assets/images/ai/t2i-sunflower-collection.webp",
      originalImg: "/api/media-proxy?id=489364752218498",
      fallbackImg:
        "https://scontent-mia3-3.xx.fbcdn.net/v/t15.13418-10/166708464_461624255047674_835078241185368859_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=aaa768&_nc_ohc=Cq0m_2T1ktgQ7kNvwG3kovF&_nc_oc=AdrFksMG-RytCtpRUQLqr7C_lNQzzxtFlc_wYctcAQTo35uDzstjKa_t-FWBBtm4xJzlIYV7xTcFlCGJWzCLAgLB&_nc_zt=23&_nc_ht=scontent-mia3-3.xx&_nc_gid=Vxb2zU0uV68oWenABiR4og&_nc_ss=7b289&oh=00_AQPBvcPNCCuZiP50M5DjIdEB2yELEXd41E4RCRqp3our6A&oe=6AE4985C",
      externalUrl: "https://www.facebook.com/AnthonyJewelersOfLakeNona/videos/489364752218498/"
    },
    {
      id: "yael-designs-partnership-1",
      title: "Yael Designs — Celebrity High Jewelry Collection",
      spec: "Award-Winning Designer Partnership · Worn by Celebrities",
      category: "designer",
      categoryLabel: "Yael Designs",
      origin: "Authorized Lake Nona Partner",
      studioImg: "/api/media-proxy?id=6178208205584444",
      originalImg: "/api/media-proxy?id=6178208205584444",
      fallbackImg:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/474899172_28169256502719632_7306150219792759416_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RlVO9f3y9xoQ7kNvwHdshwW&_nc_oc=Adojdn_2XFllyPM0RjR-hxt820tyndnPYPBg6V4hX-uC6IfJxBZFlXfYdZLHTmFnf3nvw3mWOaKDrvlXCRgQzd1I&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=Vxb2zU0uV68oWenABiR4og&_nc_ss=7b289&oh=00_AQPNMan9GQWuYkbulBfQhtifCzST-MmBJKkfN075v8ckxw&oe=6AE4A443",
      externalUrl: "https://www.facebook.com/photo/?fbid=6178208205584444&set=pcb.6178243315580933"
    },
    {
      id: "yael-designs-partnership-2",
      title: "Yael Designs — Bespoke Gemstone & Diamond Creations",
      spec: "Fine Colored Gemstones · Signature Pavé Architecture",
      category: "designer",
      categoryLabel: "Yael Designs",
      origin: "Authorized Lake Nona Partner",
      studioImg: "/api/media-proxy?id=6178208825584382",
      originalImg: "/api/media-proxy?id=6178208825584382",
      fallbackImg:
        "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/474776111_28169256609386288_6863547382541467110_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eTfGBFDyVXcQ7kNvwFmoSS2&_nc_oc=AdrRmvLTs-5JX10Qu4S9mzOBfufWvOgkI8LLiYNwtu0UPpW1St2ZpEXATIJzrsp6HFrQ7gkiaFLjD_SRQqUujLQt&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=Vxb2zU0uV68oWenABiR4og&_nc_ss=7b289&oh=00_AQMxhMPIUlZpi4vir8d0xRDM6-ZptyQDFhv2xJ6oIMs1Tw&oe=6AE4AA0C",
      externalUrl: "https://www.facebook.com/photo/?fbid=6178208825584382&set=pcb.6178243315580933"
    },
    {
      id: "classic-diamond-studs-custom-rings",
      title: "Classic Diamond Studs & Custom Engagement Rings",
      spec: "Natural & Lab-Grown Diamonds · Solitaire & Halo Settings",
      category: "bridal",
      categoryLabel: "Wedding & Engagement Sets",
      origin: "December 2025 Showcase",
      studioImg: "/api/media-proxy?id=1479013290328931",
      originalImg: "/api/media-proxy?id=1479013290328931",
      fallbackImg:
        "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/593423785_1479014340328826_7141101579104737941_n.jpg?stp=dst-jpg_tt6&cstp=mx750x1000&ctp=s750x1000&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lUJ7rjN4za4Q7kNvwEAjnu3&_nc_oc=AdrLyrQcyxHTbOal5SqeiC4nSv9xRZC8tAm8YOG-tuKJpOKE4JsQ0nxnPcdThk85W5brxP6l_pNWgUIlqqAgDhex&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=QD5ZmNKTtuRPxKPF8iZCTA&_nc_ss=7b289&oh=00_AQMbj8Blb72D-IsJu2o05eblLOAwSWhAEdvoP1DoqBjXog&oe=6AE4AE89",
      externalUrl: "https://www.facebook.com/photo/?fbid=1479013290328931&set=pcb.1479014270328833"
    },
    {
      id: "lake-nona-fine-showcase",
      title: "Lake Nona Signature Fine Jewelry Selection",
      spec: "Custom Earrings, Rings, Pendants & Anniversary Pieces",
      category: "fine",
      categoryLabel: "Fine Jewelry",
      origin: "9971 Tagore Pl Showcase",
      studioImg: "/api/media-proxy?id=1177694170460846",
      originalImg: "/api/media-proxy?id=1177694170460846",
      fallbackImg:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/489399749_1274477067449222_2358945578949797894_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1080x1440&ctp=p960x960&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pv1QXikhKm0Q7kNvwEbo4No&_nc_oc=AdoGvFxIju3CFuRSHL1Y_oxX3dHWGaC5eAJPWKbNmgkQL14S-bjIyHgADRfIxym-3b_f5UjvFeXztRPdA4hRcrvD&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=C__lcZTsdqtJJXRndGFI0Q&_nc_ss=7b289&oh=00_AQMdP8_2MNjTlAk26oPMM4sXZZGkHf39h_w0T3g5vjBhLA&oe=6AE4A847",
      externalUrl: "https://www.facebook.com/photo/?fbid=1177694170460846&set=pcb.1177694257127504"
    },
    {
      id: "custom-three-stone-emerald-flank",
      title: "Custom Three-Stone Engagement Ring Commission",
      spec: "Radiant & Baguette Side Stones · Yellow Gold Band",
      category: "custom",
      categoryLabel: "Custom One-of-a-Kind",
      origin: "Client Proposal in Paris (Ishaq)",
      studioImg: "assets/images/gmaps/gmaps-photo-23.jpg",
      originalImg: "assets/images/gmaps/gmaps-photo-23.jpg"
    }
  ];

  // =========================================================================
  // 2. CUSTOMER PHOTOS & VERIFIED REVIEWS (Google Maps + Facebook)
  // =========================================================================
  const CUSTOMER_PHOTOS = [
    { src: "assets/images/gmaps/gmaps-photo-24.jpg", label: "Custom Dutch Marquis · Ishaq" },
    { src: "assets/images/gmaps/gmaps-photo-22.jpg", label: "Paris Proposal · Ishaq" },
    { src: "assets/images/gmaps/gmaps-photo-23.jpg", label: "Custom Tulip Setting · Ishaq" },
    { src: "assets/images/gmaps/gmaps-photo-08.jpg", label: "Oval Solitaire · Brett Maneri" },
    { src: "assets/images/gmaps/gmaps-photo-11.jpg", label: "Custom Oval Set · Saja Alkhafaji" },
    { src: "assets/images/gmaps/gmaps-photo-18.jpg", label: "Custom Marquise · Hombuswa Curaçao" },
    { src: "assets/images/gmaps/gmaps-photo-17.jpg", label: "Engagement Commission · Hombuswa" },
    { src: "assets/images/gmaps/gmaps-photo-19.jpg", label: "Bridal Set · Seth Rivera" },
    { src: "assets/images/gmaps/gmaps-photo-20.jpg", label: "Wedding Bands & Rosary · Seth Rivera" },
    { src: "assets/images/gmaps/gmaps-photo-21.jpg", label: "Wedding Day · Seth Rivera" }
  ];

  const VERIFIED_REVIEWS = [
    {
      author: "Ishaq",
      meta: "Google Review · 11 reviews · 2 photos",
      date: "5 months ago",
      tag: "custom",
      hasPhotos: true,
      photos: ["assets/images/gmaps/gmaps-photo-24.jpg", "assets/images/gmaps/gmaps-photo-22.jpg", "assets/images/gmaps/gmaps-photo-23.jpg"],
      text: "I couldn’t be happier with my experience. He created a completely custom Dutch Marquis engagement ring with custom engraving on the band and even designed a custom tulip setting for the stone. It truly doesn’t get more custom or personal than that. The craftsmanship, attention to detail, and communication throughout the process were incredible."
    },
    {
      author: "Hombuswa Curaçao",
      meta: "Google Local Guide · 57 reviews · 14 photos",
      date: "5 months ago",
      tag: "custom",
      hasPhotos: true,
      photos: ["assets/images/gmaps/gmaps-photo-17.jpg", "assets/images/gmaps/gmaps-photo-18.jpg"],
      text: "Anthony and Joanne are the best in Orlando! Perfect designed and created a ring to fit my extremely specific request for an engagement ring. I could not imagine having anyone else exhibit the quality and kindness that they did as a team! We will be sure to continue using their services for both wedding rings for my partner and myself!"
    },
    {
      author: "Brett Maneri",
      meta: "Google Review · 3 reviews · 1 photo",
      date: "3 months ago",
      tag: "custom",
      hasPhotos: true,
      photos: ["assets/images/gmaps/gmaps-photo-08.jpg"],
      text: "My family and I have been going to Anthony’s for years, and I finally made the step to buy an engagement ring and there wouldn’t be anyone else I’d buy from except from them. Not only did they offer the highest quality diamonds and bands but they also made the process extremely stress free. From choosing the best quality diamond, diamond shape, and setting customization."
    },
    {
      author: "Seth Rivera",
      meta: "Google Local Guide · 18 reviews · 12 photos",
      date: "6 months ago",
      tag: "custom",
      hasPhotos: true,
      photos: ["assets/images/gmaps/gmaps-photo-19.jpg", "assets/images/gmaps/gmaps-photo-20.jpg", "assets/images/gmaps/gmaps-photo-21.jpg"],
      text: "I wish I could put more than just 5 stars for this amazing business. Anthony Jewelers is the best jeweler in all of Central Florida. They helped my wife and I navigate a momentous milestone such as marriage and engagement with incredible grace and compassion. Their timeliness in tailoring, creating, and presenting our rings was second to none."
    },
    {
      author: "Saja Alkhafaji",
      meta: "Google Local Guide · 15 reviews · 1 photo",
      date: "8 months ago",
      tag: "custom",
      hasPhotos: true,
      photos: ["assets/images/gmaps/gmaps-photo-11.jpg"],
      text: "I wish I could give them 10 stars, Tony and Joanne are amazing!! I’ve gone to Tony multiple times to fix my jewelry and he always does an amazing job in a timely manner, when it came time for me to get an engagement ring they absolutely killed it with the customizations. It was everything that I wanted, and they made it come to life!!"
    },
    {
      author: "Ivan Aguigui",
      meta: "Verified Review · January 22",
      date: "Recent",
      tag: "custom",
      hasPhotos: false,
      photos: [],
      text: "I can’t say enough great things about Anthony Jewelers of Lake Nona. Joanne and Anthony were absolutely amazing to work with — friendly, knowledgeable, and genuinely invested in helping me create the perfect ring. They made the whole process smooth and enjoyable, and the final result was even better than I imagined."
    },
    {
      author: "Fred Vega",
      meta: "Verified Review · July 16",
      date: "Recent",
      tag: "repair",
      hasPhotos: false,
      photos: [],
      text: "Did an outstanding job on our wedding rings. Made them look like brand new again. Would highly recommend them. Will definitely be doing business with him again."
    },
    {
      author: "Xavier Smith",
      meta: "Verified Review · May 26",
      date: "Recent",
      tag: "repair",
      hasPhotos: false,
      photos: [],
      text: "Absolutely phenomenal human being. Very kind. Very fair. Fixed my watch band for my birthday free of charge. Quick, efficient, fair. Will be back again."
    },
    {
      author: "Erin Lawrence",
      meta: "Verified Review · December 1, 2024",
      date: "1 year ago",
      tag: "custom",
      hasPhotos: false,
      photos: [],
      text: "Great place to get your jewelry from. Had him custom make my engagement and wedding bands over again because of wear and tear on my old set. He created a beautiful updated version and fixed up my old one so it could be passed down. Such beautiful work and so nice!"
    },
    {
      author: "Jerilyn Terry",
      meta: "Verified Review · June 22, 2023",
      date: "Verified",
      tag: "repair",
      hasPhotos: false,
      photos: [],
      text: "This is a top notch jeweler. I was so impressed with their beautiful collection and also their expertise in restoring and repairing a family heirloom. They were so informative and caring about returning my bracelet to original condition."
    },
    {
      author: "Diana Chaffee Evans",
      meta: "Verified Review · November 1, 2023",
      date: "Verified",
      tag: "custom",
      hasPhotos: false,
      photos: [],
      text: "Best Jeweler around — custom made my earrings and ring. They are perfect one of a kind perfection! Highly recommend."
    },
    {
      author: "Sandy Bernal",
      meta: "Verified Review · May 18, 2023",
      date: "Verified",
      tag: "repair",
      hasPhotos: false,
      photos: [],
      text: "Had to fix my daughter’s rosary last minute for her graduation and went to Anthony’s Jewelers and they fixed it for me on the spot. Thank you to Anthony’s Jewelers."
    },
    {
      author: "Beth Cole Bivona",
      meta: "Verified Patron · Lake Nona",
      date: "10-Year Client",
      tag: "custom",
      hasPhotos: false,
      photos: [],
      text: "Anthony has been my jeweler of choice for his 10 years in Lake Nona. I have bought beautiful rings (6 at last count), 3 necklaces and other pieces of jewelry from him. He has become a friend and I value his opinion on pieces of jewelry I purchase."
    },
    {
      author: "Jen Lee",
      meta: "Verified Review · December 31, 2022",
      date: "Verified",
      tag: "custom",
      hasPhotos: false,
      photos: [],
      text: "Anthony always helps my husband pick out the best Christmas presents for me. We got my engagement and wedding ring there a few years back and I always get the best compliments. Amazing quality and love supporting a local business."
    },
    {
      author: "Rita Daniels",
      meta: "Verified Review · August 3, 2022",
      date: "Verified",
      tag: "repair",
      hasPhotos: false,
      photos: [],
      text: "This is a great jeweler with beautiful pieces as well as repurposing/repairing jewelry. Very friendly and quick turn around."
    },
    {
      author: "Amanda Coral",
      meta: "Verified Review · July 25, 2022",
      date: "Verified",
      tag: "custom",
      hasPhotos: false,
      photos: [],
      text: "Anthony and his wife are top jewelry dealers. They are very transparent and have amazing customer service. They both really know what you're looking for and want to educate you. I definitely trust them."
    },
    {
      author: "Elecia Elle Skye Thompson",
      meta: "Verified Review · July 7, 2022",
      date: "Verified",
      tag: "custom",
      hasPhotos: false,
      photos: [],
      text: "Anthony is no less than Amazing!! His jewelry is high quality luxury pieces!! Found his store a few years ago and from the minute I walked in he was very welcoming! Top notch and honest with unbeatable quality!"
    },
    {
      author: "Prestige Frag",
      meta: "Verified Review · August 8, 2022",
      date: "Verified",
      tag: "repair",
      hasPhotos: false,
      photos: [],
      text: "Incredible service and the owner Anthony was very helpful. 5 Stars."
    }
  ];

  // =========================================================================
  // 3. HELPER FUNCTIONS & LIGHTBOX
  // =========================================================================
  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const loupeDialog = document.getElementById("loupeDialog");
  const loupeImg = document.getElementById("loupeImg");
  const loupeCaption = document.getElementById("loupeCaption");
  const loupeCloseBtn = document.getElementById("loupeCloseBtn");

  function openLoupe(src, caption) {
    if (!loupeDialog || !loupeImg) return;
    loupeImg.src = src;
    loupeImg.alt = caption || "Anthony Jewelers — Lake Nona";
    if (loupeCaption) loupeCaption.textContent = caption || "";
    if (typeof loupeDialog.showModal === "function") {
      loupeDialog.showModal();
    }
  }

  if (loupeCloseBtn && loupeDialog) {
    loupeCloseBtn.addEventListener("click", () => loupeDialog.close());
    loupeDialog.addEventListener("click", (e) => {
      if (e.target === loupeDialog) loupeDialog.close();
    });
  }

  // =========================================================================
  // 4. HERO INTERACTIVE STAGE
  // =========================================================================
  let heroMode = "studio";
  const heroMainImg = document.getElementById("heroMainImg");
  const heroStageLabel = document.getElementById("heroStageLabel");
  const heroModeBtns = document.querySelectorAll("[data-hero-mode]");
  const heroThumbs = document.querySelectorAll(".stage-thumb");

  function updateHeroDisplay() {
    if (!heroMainImg) return;
    const targetSrc =
      heroMode === "original"
        ? heroMainImg.getAttribute("data-original-src")
        : heroMainImg.getAttribute("data-studio-src");
    if (targetSrc) heroMainImg.src = targetSrc;
  }

  heroModeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      heroMode = btn.getAttribute("data-hero-mode") || "studio";
      heroModeBtns.forEach((b) => b.classList.toggle("active", b === btn));
      updateHeroDisplay();
    });
  });

  heroThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      heroThumbs.forEach((t) => t.classList.toggle("active", t === thumb));
      const studioSrc = thumb.getAttribute("data-studio");
      const origSrc = thumb.getAttribute("data-original");
      const title = thumb.getAttribute("data-title");
      if (heroMainImg) {
        heroMainImg.setAttribute("data-studio-src", studioSrc || "");
        heroMainImg.setAttribute("data-original-src", origSrc || "");
        updateHeroDisplay();
      }
      if (heroStageLabel && title) {
        heroStageLabel.textContent = title;
      }
    });
  });

  const heroFrame = document.querySelector('[data-lightbox-trigger="hero"]');
  if (heroFrame && heroMainImg) {
    heroFrame.addEventListener("click", () => {
      openLoupe(heroMainImg.src, heroStageLabel ? heroStageLabel.textContent : "");
    });
  }

  // =========================================================================
  // 5. RENDER THE VAULT & GLOBAL PHOTO TOGGLE
  // =========================================================================
  let activeVaultFilter = "all";
  let forceShowroomOriginals = false;
  const vaultGrid = document.getElementById("vaultGrid");
  const toggleAllOriginalsBtn = document.getElementById("toggleAllOriginalsBtn");

  function renderVault() {
    if (!vaultGrid) return;
    const filtered = VAULT_ITEMS.filter(
      (item) => activeVaultFilter === "all" || item.category === activeVaultFilter
    );

    vaultGrid.innerHTML = filtered
      .map((item) => {
        const hasDual = item.studioImg !== item.originalImg;
        const activeSrc = forceShowroomOriginals ? item.originalImg : item.studioImg;
        const altSrc = forceShowroomOriginals ? item.studioImg : item.originalImg;
        const fallbackAttr = item.fallbackImg
          ? `onerror="this.onerror=null;this.src='${esc(item.fallbackImg)}';"`
          : "";

        return `
          <article class="vault-card" data-id="${esc(item.id)}">
            <div class="vault-media" data-loupe-src="${esc(activeSrc)}" data-loupe-title="${esc(item.title)} — ${esc(item.spec)}">
              <img
                src="${esc(activeSrc)}"
                data-alt-src="${esc(altSrc)}"
                alt="${esc(item.title)}"
                loading="lazy"
                width="400"
                height="300"
                ${fallbackAttr}
              />
              <div class="vault-badge-bar">
                <span class="vault-cat-tag">${esc(item.categoryLabel)}</span>
                ${
                  hasDual
                    ? `<button type="button" class="card-swap-btn" data-swap-card="${esc(item.id)}">${
                        forceShowroomOriginals ? "Loupe View" : "Original Photo"
                      }</button>`
                    : ""
                }
              </div>
            </div>
            <div class="vault-body">
              <h3>${esc(item.title)}</h3>
              <p class="vault-spec">${esc(item.spec)}</p>
              <div class="vault-origin">
                <span>${esc(item.origin)}</span>
                ${
                  item.externalUrl
                    ? `<a href="${esc(item.externalUrl)}" target="_blank" rel="noopener">Post ↗</a>`
                    : `<span>In-Store</span>`
                }
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Wire individual card photo swap & lightbox
    vaultGrid.querySelectorAll(".card-swap-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const mediaWrap = btn.closest(".vault-media");
        const img = mediaWrap ? mediaWrap.querySelector("img") : null;
        if (!img) return;
        const current = img.getAttribute("src");
        const next = img.getAttribute("data-alt-src");
        if (next) {
          img.setAttribute("src", next);
          img.setAttribute("data-alt-src", current);
          mediaWrap.setAttribute("data-loupe-src", next);
          btn.textContent = btn.textContent === "Original Photo" ? "Loupe View" : "Original Photo";
        }
      });
    });

    vaultGrid.querySelectorAll(".vault-media").forEach((m) => {
      m.addEventListener("click", () => {
        const img = m.querySelector("img");
        const src = img ? img.src : m.getAttribute("data-loupe-src");
        const title = m.getAttribute("data-loupe-title");
        openLoupe(src, title);
      });
    });
  }

  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      activeVaultFilter = pill.getAttribute("data-filter") || "all";
      document.querySelectorAll(".filter-pill").forEach((p) => p.classList.toggle("active", p === pill));
      renderVault();
    });
  });

  if (toggleAllOriginalsBtn) {
    toggleAllOriginalsBtn.addEventListener("click", () => {
      forceShowroomOriginals = !forceShowroomOriginals;
      toggleAllOriginalsBtn.querySelector("span").textContent = forceShowroomOriginals
        ? "Showroom Originals: On"
        : "Showroom Originals: Off";
      renderVault();
    });
  }

  renderVault();

  // =========================================================================
  // 6. NATIVE BUILT-IN VIEWER: "LATEST from Anthony Jewelers:"
  //    Strictly zero occurrences of the word "Instagram" in this section!
  // =========================================================================
  function stripForbiddenPlatformWord(str) {
    return String(str || "").replace(/instagram/gi, "").replace(/\s+/g, " ").trim();
  }

  function renderLatestThreeMedia(items) {
    const grid = document.getElementById("latestMediaGrid");
    if (!grid) return;

    grid.innerHTML = items
      .slice(0, 3)
      .map((item, idx) => {
        const cleanTitle = stripForbiddenPlatformWord(item.title || `Feature ${idx + 1}`);
        const cleanCaption = stripForbiddenPlatformWord(item.caption);
        const cleanDate = stripForbiddenPlatformWord(item.date || "Recent");
        const postUrl = item.postUrl || "https://www.facebook.com/AnthonyJewelersOfLakeNona/";
        const proxyUrl = item.mediaUrl || `/api/media-proxy?id=${encodeURIComponent(item.id)}`;
        const fallbackCdn = item.cdnUrl || "assets/images/gmaps/gmaps-photo-03.jpg";

        return `
          <a href="${esc(postUrl)}" target="_blank" rel="noopener" class="latest-card">
            <div class="latest-card-media">
              <img
                src="${esc(proxyUrl)}"
                alt="${esc(cleanTitle)}"
                loading="lazy"
                width="420"
                height="280"
                onerror="this.onerror=null;this.src='${esc(fallbackCdn)}';"
              />
              <span class="latest-date-pill">${esc(cleanDate)}</span>
            </div>
            <div class="latest-card-body">
              <h3>${esc(cleanTitle)}</h3>
              <p>${esc(cleanCaption)}</p>
            </div>
          </a>
        `;
      })
      .join("");
  }

  async function initLatestSocialViewer() {
    const fallbackLatest = [
      {
        id: "1479013290328931",
        postUrl:
          "https://www.facebook.com/AnthonyJewelersOfLakeNona/posts/pfbid035xXwMR3paLTKHWi6rrBnxAScijrjdZsyVBc2mqNenSJcFQ9irmMRZrcQ6KAEXW3Dl",
        mediaUrl: "/api/media-proxy?id=1479013290328931",
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
        mediaUrl: "/api/media-proxy?id=1479013296995597",
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
        mediaUrl: "/api/media-proxy?id=1177694147127515",
        cdnUrl:
          "https://scontent-mia5-1.xx.fbcdn.net/v/t39.30808-6/488687553_1274476710782591_7943121711182806204_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1080x1440&ctp=p960x960&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V5uKaI5fq4kQ7kNvwE2BEpY&_nc_oc=Ado9ulTHveTt0APwKEtbspu8xe5KNQr6lURBc0POeipu2ngBd4QO28kd7FnkVOX2j2kgVJhftu70b14sX4BZwd3_&_nc_zt=23&_nc_ht=scontent-mia5-1.xx&_nc_gid=C__lcZTsdqtJJXRndGFI0Q&_nc_ss=7b289&oh=00_AQPjso4wcoApQQpM6TOU1uMxjSwP89tbxZ2PoPrPFzVtBg&oe=6AE4AA22",
        date: "December 6, 2024",
        title: "Heart of Lake Nona — 9971 Tagore Place",
        caption:
          "We’re conveniently located in the heart of Lake Nona. Family owned and operated. Stop by today and pick up one of these beautiful pieces."
      }
    ];

    renderLatestThreeMedia(fallbackLatest);

    try {
      const resp = await fetch("/api/latest-media");
      if (resp.ok) {
        const data = await resp.json();
        if (data && Array.isArray(data.items) && data.items.length >= 3) {
          renderLatestThreeMedia(data.items.slice(0, 3));
        }
      }
    } catch (e) {}
  }

  initLatestSocialViewer();

  // =========================================================================
  // 7. CUSTOMER PHOTO STRIP & VERIFIED REVIEWS
  // =========================================================================
  const customerPhotoStrip = document.getElementById("customerPhotoStrip");
  if (customerPhotoStrip) {
    customerPhotoStrip.innerHTML = CUSTOMER_PHOTOS.map(
      (p) => `
        <div class="cust-photo-chip" data-lightbox-src="${esc(p.src)}" data-lightbox-caption="${esc(p.label)}">
          <img src="${esc(p.src)}" alt="${esc(p.label)}" loading="lazy" width="132" height="102" />
          <span>${esc(p.label)}</span>
        </div>
      `
    ).join("");
  }

  let activeRevFilter = "all";
  const reviewsGrid = document.getElementById("reviewsGrid");

  function renderReviews() {
    if (!reviewsGrid) return;
    const filtered = VERIFIED_REVIEWS.filter((r) => {
      if (activeRevFilter === "all") return true;
      if (activeRevFilter === "photos") return r.hasPhotos;
      return r.tag === activeRevFilter;
    });

    reviewsGrid.innerHTML = filtered
      .map(
        (r) => `
          <article class="review-card">
            <div class="review-top">
              <div>
                <div class="review-author">${esc(r.author)}</div>
                <div class="review-meta">${esc(r.meta)}</div>
              </div>
              <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
            </div>
            <p class="review-text">“${esc(r.text)}”</p>
            ${
              r.photos && r.photos.length
                ? `<div class="review-thumbs">
                    ${r.photos
                      .map(
                        (ph) =>
                          `<img src="${esc(ph)}" alt="Customer review photo by ${esc(r.author)}" loading="lazy" width="54" height="54" data-lightbox-src="${esc(ph)}" data-lightbox-caption="Verified Commission Photo — ${esc(r.author)}" />`
                      )
                      .join("")}
                  </div>`
                : ""
            }
          </article>
        `
      )
      .join("");

    reviewsGrid.querySelectorAll("[data-lightbox-src]").forEach((el) => {
      el.addEventListener("click", () => {
        openLoupe(el.getAttribute("data-lightbox-src"), el.getAttribute("data-lightbox-caption"));
      });
    });
  }

  document.querySelectorAll(".rev-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      activeRevFilter = pill.getAttribute("data-rev-filter") || "all";
      document.querySelectorAll(".rev-pill").forEach((p) => p.classList.toggle("active", p === pill));
      renderReviews();
    });
  });

  renderReviews();

  // Wire static lightbox elements (Atelier & Showroom figures + Customer Photo Strip)
  document.querySelectorAll("[data-lightbox-src]").forEach((el) => {
    el.addEventListener("click", () => {
      openLoupe(el.getAttribute("data-lightbox-src"), el.getAttribute("data-lightbox-caption"));
    });
  });
})();
