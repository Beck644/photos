const PAGE = Object.freeze({ width: 1240, height: 1754 });

const STYLE_BACKGROUND_FILES = {
  vintage: "./assets/backgrounds/vintage.png",
  modern: "./assets/backgrounds/modern.png",
  cute: "./assets/backgrounds/cute.png",
  cool: "./assets/backgrounds/cool.png",
  "modern-minimal": "./assets/backgrounds/love.png",
  dreamy: "./assets/backgrounds/dreamy.png",
  ancient: "./assets/backgrounds/ancient.png",
  cyber: "./assets/backgrounds/cyber.png",
  aesthetic: "./assets/backgrounds/aesthetic.png",
  fresh: "./assets/backgrounds/fresh.png",
};

const styleBackgrounds = {};

const ALBUM_STYLES = [
  {
    id: "vintage",
    name: "复古",
    tag: "旧日胶片",
    palette: ["#f2dfbd", "#7a4827", "#c59a62"],
    bg: ["#f0dec0", "#d9bd92", "#fff4df"],
    ink: "#4c321e",
    muted: "#82644b",
    accent: "#9b4f30",
    light: "#fff6df",
    frame: "#fff0ce",
    font: 'Georgia, "KaiTi", "Microsoft YaHei", serif',
    imageFilter: "sepia(42%) saturate(82%) contrast(96%)",
    dark: false,
  },
  {
    id: "modern",
    name: "现代",
    tag: "建筑地标",
    palette: ["#f7f9fb", "#1e2b37", "#3484a8"],
    bg: ["#f7f9fb", "#e8eef2", "#ffffff"],
    ink: "#111111",
    muted: "#6a6f6b",
    accent: "#3484a8",
    light: "#ffffff",
    frame: "#ffffff",
    font: '"Microsoft YaHei", "PingFang SC", Arial, sans-serif',
    imageFilter: "contrast(104%) saturate(104%)",
    dark: false,
  },
  {
    id: "cute",
    name: "可爱",
    tag: "糖果拼贴",
    palette: ["#ffd6df", "#ffeaa8", "#7fc8a9"],
    bg: ["#fff6f8", "#ffe5ec", "#fff1b9"],
    ink: "#6f3b52",
    muted: "#9c6a7d",
    accent: "#e77aa3",
    light: "#fff9fb",
    frame: "#ffffff",
    font: '"Microsoft YaHei", "PingFang SC", Arial, sans-serif',
    imageFilter: "saturate(112%) brightness(104%)",
    dark: false,
  },
  {
    id: "cool",
    name: "冷酷",
    tag: "金属暗调",
    palette: ["#101416", "#7fb1c8", "#d9e3e7"],
    bg: ["#0f1417", "#222a2f", "#0c1114"],
    ink: "#e8f0f2",
    muted: "#9fb1b8",
    accent: "#7fb1c8",
    light: "#f2f7f8",
    frame: "#161d21",
    font: '"Microsoft YaHei", "PingFang SC", Arial, sans-serif',
    imageFilter: "contrast(112%) saturate(88%) brightness(92%)",
    dark: true,
  },
  {
    id: "modern-minimal",
    name: "爱情",
    tag: "亲吻剪影",
    palette: ["#fff0f5", "#c63d66", "#342632"],
    bg: ["#fff4f7", "#ffe2ea", "#fff8f4"],
    ink: "#342632",
    muted: "#8f6071",
    accent: "#c63d66",
    light: "#fff7fa",
    frame: "#ffffff",
    font: '"Microsoft YaHei", "PingFang SC", Arial, sans-serif',
    imageFilter: "contrast(101%) saturate(108%) brightness(103%)",
    dark: false,
  },
  {
    id: "dreamy",
    name: "梦幻",
    tag: "柔光诗意",
    palette: ["#e9dbff", "#f7c9d8", "#95c7d8"],
    bg: ["#fbf5ff", "#e8f2ff", "#fff0f4"],
    ink: "#4f4268",
    muted: "#837592",
    accent: "#8d74c9",
    light: "#ffffff",
    frame: "#ffffff",
    font: '"Microsoft YaHei", "PingFang SC", Arial, sans-serif',
    imageFilter: "saturate(108%) brightness(106%)",
    dark: false,
  },
  {
    id: "ancient",
    name: "古风",
    tag: "纸墨雅集",
    palette: ["#efe4c8", "#2f2b22", "#a43c2f"],
    bg: ["#efe3c8", "#f9f0d7", "#ddc89d"],
    ink: "#2f2b22",
    muted: "#75664a",
    accent: "#a43c2f",
    light: "#fff5da",
    frame: "#f8edcf",
    font: '"KaiTi", "STKaiti", "Microsoft YaHei", serif',
    imageFilter: "sepia(18%) saturate(88%) contrast(98%)",
    dark: false,
  },
  {
    id: "cyber",
    name: "赛博",
    tag: "霓虹网格",
    palette: ["#080b17", "#00d7ff", "#ff3fb4"],
    bg: ["#080b17", "#12112c", "#061e2a"],
    ink: "#e8fbff",
    muted: "#7bb7c4",
    accent: "#00d7ff",
    light: "#f7feff",
    frame: "#0f1530",
    font: '"Microsoft YaHei", "PingFang SC", Arial, sans-serif',
    imageFilter: "contrast(118%) saturate(124%) brightness(92%)",
    dark: true,
  },
  {
    id: "aesthetic",
    name: "唯美",
    tag: "柔雅画册",
    palette: ["#fff8ee", "#b88d57", "#6d7c72"],
    bg: ["#fff8ee", "#f4ede2", "#edf2ee"],
    ink: "#3d342c",
    muted: "#7b7368",
    accent: "#b88d57",
    light: "#fffaf2",
    frame: "#ffffff",
    font: '"Microsoft YaHei", "PingFang SC", Arial, sans-serif',
    imageFilter: "saturate(96%) brightness(104%) contrast(98%)",
    dark: false,
  },
  {
    id: "fresh",
    name: "清新",
    tag: "自然微风",
    palette: ["#e9f7ef", "#59a98f", "#f6d87a"],
    bg: ["#f8fbf5", "#e5f4ee", "#fff8d9"],
    ink: "#25443d",
    muted: "#6c8278",
    accent: "#59a98f",
    light: "#ffffff",
    frame: "#ffffff",
    font: '"Microsoft YaHei", "PingFang SC", Arial, sans-serif',
    imageFilter: "saturate(105%) brightness(104%)",
    dark: false,
  },
];

const PATTERNS = {
  balanced: [3, 4, 2],
  airy: [2, 3],
  collage: [5, 6, 4],
};

const state = {
  photos: [],
  pages: [{ type: "empty", photos: [] }],
  pageCount: 4,
  pageStyles: [],
  styleId: "vintage",
  layout: "balanced",
  activePage: 0,
  nextPhotoId: 1,
  textBoxes: [],
  nextTextId: 1,
  selectedTextId: null,
  lastTextBoxes: [],
  textDrag: null,
  customLayoutEnabled: false,
  selectedPlacement: null,
  customRects: {},
  lastPlacements: [],
  drag: null,
};

const els = {
  dropZone: document.getElementById("dropZone"),
  fileInput: document.getElementById("fileInput"),
  chooseFiles: document.getElementById("chooseFiles"),
  pageCountInput: document.getElementById("pageCountInput"),
  applyPageCount: document.getElementById("applyPageCount"),
  pageStyleSelect: document.getElementById("pageStyleSelect"),
  styleGrid: document.getElementById("styleGrid"),
  assetStrip: document.getElementById("assetStrip"),
  clearPhotos: document.getElementById("clearPhotos"),
  activeStyleName: document.getElementById("activeStyleName"),
  photoCount: document.getElementById("photoCount"),
  albumCanvas: document.getElementById("albumCanvas"),
  thumbRail: document.getElementById("thumbRail"),
  pageCounter: document.getElementById("pageCounter"),
  prevPage: document.getElementById("prevPage"),
  nextPage: document.getElementById("nextPage"),
  exportPng: document.getElementById("exportPng"),
  exportAllPng: document.getElementById("exportAllPng"),
  exportPdf: document.getElementById("exportPdf"),
  freeMoveToggle: document.getElementById("freeMoveToggle"),
  selectedPhotoName: document.getElementById("selectedPhotoName"),
  deleteSelectedPhoto: document.getElementById("deleteSelectedPhoto"),
  resetPageLayout: document.getElementById("resetPageLayout"),
  photoX: document.getElementById("photoX"),
  photoY: document.getElementById("photoY"),
  photoScale: document.getElementById("photoScale"),
  photoRotate: document.getElementById("photoRotate"),
  addTextBox: document.getElementById("addTextBox"),
  selectedTextName: document.getElementById("selectedTextName"),
  deleteTextBox: document.getElementById("deleteTextBox"),
  textContent: document.getElementById("textContent"),
  textX: document.getElementById("textX"),
  textY: document.getElementById("textY"),
  textWidth: document.getElementById("textWidth"),
  textSize: document.getElementById("textSize"),
  textRotate: document.getElementById("textRotate"),
  textColor: document.getElementById("textColor"),
};

init();

function init() {
  syncPageStyles();
  renderStyleOptions();
  bindEvents();
  preloadStyleBackgrounds();
  rebuildAlbum();
}

function bindEvents() {
  els.chooseFiles.addEventListener("click", () => els.fileInput.click());
  els.fileInput.addEventListener("change", (event) => {
    addFiles(event.target.files);
    event.target.value = "";
  });

  ["dragenter", "dragover"].forEach((type) => {
    els.dropZone.addEventListener(type, (event) => {
      event.preventDefault();
      els.dropZone.classList.add("is-over");
    });
  });

  ["dragleave", "drop"].forEach((type) => {
    els.dropZone.addEventListener(type, (event) => {
      event.preventDefault();
      els.dropZone.classList.remove("is-over");
    });
  });

  els.dropZone.addEventListener("drop", (event) => {
    addFiles(event.dataTransfer.files);
  });

  els.applyPageCount.addEventListener("click", applyPageCount);
  els.pageCountInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    applyPageCount();
  });
  els.pageStyleSelect.addEventListener("change", () => {
    setActivePageStyle(els.pageStyleSelect.value);
  });

  els.styleGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-style]");
    if (!button) return;
    setActivePageStyle(button.dataset.style);
  });

  document.querySelectorAll("[data-layout]").forEach((button) => {
    button.addEventListener("click", () => {
      state.layout = button.dataset.layout;
      document.querySelectorAll("[data-layout]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      clearCustomLayouts();
      rebuildAlbum();
    });
  });

  els.freeMoveToggle.addEventListener("change", () => {
    state.customLayoutEnabled = els.freeMoveToggle.checked;
    if (!state.customLayoutEnabled) {
      state.selectedPlacement = null;
      state.drag = null;
    }
    renderEverything();
  });

  els.resetPageLayout.addEventListener("click", resetActivePageLayout);
  els.deleteSelectedPhoto.addEventListener("click", deleteSelectedPhoto);
  els.photoX.addEventListener("input", updateSelectedFromSliders);
  els.photoY.addEventListener("input", updateSelectedFromSliders);
  els.photoScale.addEventListener("input", updateSelectedFromSliders);
  els.photoRotate.addEventListener("input", updateSelectedFromSliders);
  els.addTextBox.addEventListener("click", addTextBox);
  els.deleteTextBox.addEventListener("click", deleteSelectedTextBox);
  els.textContent.addEventListener("input", updateSelectedTextBox);
  els.textX.addEventListener("input", updateSelectedTextBox);
  els.textY.addEventListener("input", updateSelectedTextBox);
  els.textWidth.addEventListener("input", updateSelectedTextBox);
  els.textSize.addEventListener("input", updateSelectedTextBox);
  els.textRotate.addEventListener("input", updateSelectedTextBox);
  els.textColor.addEventListener("input", updateSelectedTextBox);
  els.albumCanvas.addEventListener("pointerdown", handleCanvasPointerDown);
  window.addEventListener("pointermove", handleCanvasPointerMove);
  window.addEventListener("pointerup", handleCanvasPointerUp);
  window.addEventListener("pointercancel", handleCanvasPointerUp);

  els.clearPhotos.addEventListener("click", clearPhotos);
  els.prevPage.addEventListener("click", () => setActivePage(state.activePage - 1));
  els.nextPage.addEventListener("click", () => setActivePage(state.activePage + 1));
  els.exportPng.addEventListener("click", () => exportPagePng(state.activePage));
  els.exportAllPng.addEventListener("click", exportAllPng);
  els.exportPdf.addEventListener("click", exportPdf);
}

function renderStyleOptions() {
  els.styleGrid.textContent = "";
  els.pageStyleSelect.textContent = "";

  ALBUM_STYLES.forEach((style) => {
    const option = document.createElement("option");
    option.value = style.id;
    option.textContent = `${style.name} · ${style.tag}`;
    els.pageStyleSelect.appendChild(option);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "style-option";
    button.dataset.style = style.id;

    const name = document.createElement("span");
    name.className = "style-name";
    name.textContent = style.name;

    const tag = document.createElement("span");
    tag.className = "style-tag";
    tag.textContent = style.tag;

    const swatches = document.createElement("span");
    swatches.className = "swatches";
    style.palette.forEach((color) => {
      const swatch = document.createElement("i");
      swatch.style.background = color;
      swatches.appendChild(swatch);
    });

    button.append(name, tag, swatches);
    els.styleGrid.appendChild(button);
  });
}

function preloadStyleBackgrounds() {
  Object.entries(STYLE_BACKGROUND_FILES).forEach(([styleId, src]) => {
    const image = new Image();
    image.onload = renderEverything;
    image.src = src;
    styleBackgrounds[styleId] = image;
  });
}

async function addFiles(fileList) {
  const files = Array.from(fileList || []).filter((file) => file.type.startsWith("image/"));
  if (!files.length) return;

  for (const file of files) {
    try {
      const photo = await readPhoto(file);
      state.photos.push(photo);
    } catch (error) {
      console.warn(`无法读取图片：${file.name}`, error);
    }
  }

  clearCustomLayouts();
  rebuildAlbum();
}

function readPhoto(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      resolve({
        id: state.nextPhotoId++,
        name: file.name,
        size: file.size,
        url,
        image,
        width: image.naturalWidth || image.width,
        height: image.naturalHeight || image.height,
      });
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image load failed"));
    };

    image.src = url;
  });
}

function clearPhotos() {
  state.photos.forEach((photo) => URL.revokeObjectURL(photo.url));
  state.photos = [];
  state.activePage = 0;
  clearCustomLayouts();
  rebuildAlbum();
}

function removePhoto(id) {
  const index = state.photos.findIndex((photo) => photo.id === id);
  if (index === -1) return;
  URL.revokeObjectURL(state.photos[index].url);
  state.photos.splice(index, 1);
  clearCustomLayouts();
  rebuildAlbum();
}

function clearCustomLayouts() {
  state.customRects = {};
  state.selectedPlacement = null;
  state.drag = null;
}

function syncPageStyles() {
  const fallback = state.styleId || ALBUM_STYLES[0].id;
  state.pageStyles = Array.from({ length: state.pageCount }, (_, index) => {
    const styleId = state.pageStyles[index] || fallback;
    return ALBUM_STYLES.some((style) => style.id === styleId) ? styleId : fallback;
  });
}

function applyPageCount() {
  const nextCount = Math.round(clamp(Number(els.pageCountInput.value) || 1, 1, 30));
  state.pageCount = nextCount;
  state.activePage = Math.min(state.activePage, nextCount - 1);
  state.textBoxes = state.textBoxes.filter((box) => box.pageIndex < nextCount);
  state.selectedTextId = state.textBoxes.some((box) => box.id === state.selectedTextId) ? state.selectedTextId : null;
  clearCustomLayouts();
  syncPageStyles();
  rebuildAlbum();
}

function setActivePageStyle(styleId) {
  if (!ALBUM_STYLES.some((style) => style.id === styleId)) return;
  syncPageStyles();
  state.pageStyles[state.activePage] = styleId;
  state.styleId = styleId;
  renderEverything();
}

function rebuildAlbum() {
  syncPageStyles();
  state.pages = buildPages();
  state.activePage = Math.min(state.activePage, state.pages.length - 1);
  renderEverything();
}

function buildPages() {
  const pageCount = Math.max(1, state.pageCount);
  if (!state.photos.length) {
    return Array.from({ length: pageCount }, () => ({ type: "empty", photos: [] }));
  }

  const perPage = Math.max(1, Math.ceil(state.photos.length / pageCount));
  return Array.from({ length: pageCount }, (_, pageIndex) => {
    const photos = state.photos.slice(pageIndex * perPage, pageIndex * perPage + perPage).slice(0, 6);
    return {
      type: photos.length ? "gallery" : "empty",
      photos,
      groupIndex: pageIndex,
    };
  });
}

function renderEverything() {
  renderMainPage();
  renderControls();
  renderAssets();
  renderThumbnails();
}

function renderControls() {
  const style = getStyle(state.activePage);
  const canExport = hasExportContent();

  els.photoCount.textContent = `${state.photos.length} 张`;
  els.activeStyleName.textContent = `第 ${state.activePage + 1} 页 · ${style.name}相册`;
  els.pageCountInput.value = String(state.pageCount);
  els.pageStyleSelect.value = style.id;
  els.prevPage.disabled = state.activePage <= 0;
  els.nextPage.disabled = state.activePage >= state.pages.length - 1;
  els.exportPng.disabled = !canExport;
  els.exportAllPng.disabled = !canExport;
  els.exportPdf.disabled = !canExport;
  els.clearPhotos.disabled = state.photos.length === 0;
  els.freeMoveToggle.checked = state.customLayoutEnabled;
  els.albumCanvas.classList.toggle("is-editing", (state.customLayoutEnabled && state.photos.length > 0) || state.textBoxes.length > 0);
  els.albumCanvas.classList.toggle("is-dragging", Boolean(state.drag || state.textDrag));
  renderPositionControls();
  renderTextControls();

  document.querySelectorAll("[data-style]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.style === style.id);
  });
}

function renderPositionControls() {
  const selected = getSelectedPlacement();
  const enabled = Boolean(selected && state.customLayoutEnabled);
  const hasPageCustom = Object.keys(state.customRects).some((key) => key.startsWith(`${state.activePage}:`));

  els.selectedPhotoName.textContent = selected ? selected.photo.name : "未选中";
  els.photoX.disabled = !enabled;
  els.photoY.disabled = !enabled;
  els.photoScale.disabled = !enabled;
  els.photoRotate.disabled = !enabled;
  els.deleteSelectedPhoto.disabled = !enabled;
  els.resetPageLayout.disabled = !hasPageCustom;

  if (!selected) {
    els.photoX.value = 50;
    els.photoY.value = 50;
    els.photoScale.value = 100;
    els.photoRotate.value = 0;
    return;
  }

  const { rect, baseRect } = selected;
  const xMax = Math.max(1, PAGE.width - rect.w);
  const yMax = Math.max(1, PAGE.height - rect.h);
  els.photoX.value = Math.round((rect.x / xMax) * 100);
  els.photoY.value = Math.round((rect.y / yMax) * 100);
  els.photoScale.value = Math.round((rect.w / baseRect.w) * 100);
  els.photoRotate.value = Math.round(rect.rotation || 0);
}

function renderTextControls() {
  const box = getSelectedTextBox();
  const enabled = Boolean(box);

  els.selectedTextName.textContent = box ? `文本 ${box.id}` : "未选中";
  els.deleteTextBox.disabled = !enabled;
  els.textContent.disabled = !enabled;
  els.textX.disabled = !enabled;
  els.textY.disabled = !enabled;
  els.textWidth.disabled = !enabled;
  els.textSize.disabled = !enabled;
  els.textRotate.disabled = !enabled;
  els.textColor.disabled = !enabled;

  if (!box) {
    els.textContent.value = "";
    els.textX.value = 50;
    els.textY.value = 50;
    els.textWidth.value = 520;
    els.textSize.value = 48;
    els.textRotate.value = 0;
    els.textColor.value = "#171816";
    return;
  }

  const xMax = Math.max(1, PAGE.width - box.w);
  els.textContent.value = box.text;
  els.textX.value = Math.round((box.x / xMax) * 100);
  els.textY.value = Math.round((box.y / PAGE.height) * 100);
  els.textWidth.value = Math.round(box.w);
  els.textSize.value = Math.round(box.fontSize);
  els.textRotate.value = Math.round(box.rotation || 0);
  els.textColor.value = box.color;
}

function renderAssets() {
  els.assetStrip.textContent = "";
  els.assetStrip.classList.toggle("is-empty", state.photos.length === 0);

  if (!state.photos.length) {
    els.assetStrip.textContent = "暂无图片";
    return;
  }

  state.photos.forEach((photo) => {
    const item = document.createElement("div");
    item.className = "asset-item";

    const img = document.createElement("img");
    img.className = "asset-thumb";
    img.src = photo.url;
    img.alt = photo.name;

    const meta = document.createElement("div");
    meta.className = "asset-meta";

    const name = document.createElement("p");
    name.className = "asset-name";
    name.textContent = photo.name;

    const size = document.createElement("p");
    size.className = "asset-size";
    size.textContent = `${photo.width} x ${photo.height} · ${formatBytes(photo.size)}`;

    const remove = document.createElement("button");
    remove.className = "asset-action";
    remove.type = "button";
    remove.title = "移除";
    remove.setAttribute("aria-label", `移除 ${photo.name}`);
    remove.textContent = "×";
    remove.addEventListener("click", () => removePhoto(photo.id));

    meta.append(name, size);
    item.append(img, meta, remove);
    els.assetStrip.appendChild(item);
  });
}

function renderMainPage() {
  renderPage(els.albumCanvas, state.pages[state.activePage], state.activePage, 1, { interactive: true });
  els.pageCounter.textContent = `${state.activePage + 1} / ${state.pages.length}`;
}

function renderThumbnails() {
  els.thumbRail.textContent = "";

  state.pages.forEach((page, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "thumb-button";
    button.classList.toggle("is-active", index === state.activePage);
    button.addEventListener("click", () => setActivePage(index));

    const canvas = document.createElement("canvas");
    renderPage(canvas, page, index, 0.13);

    const label = document.createElement("span");
    label.textContent = `${String(index + 1).padStart(2, "0")} · ${getStyle(index).name}`;

    button.append(canvas, label);
    els.thumbRail.appendChild(button);
  });
}

function setActivePage(index) {
  state.activePage = Math.max(0, Math.min(index, state.pages.length - 1));
  renderEverything();
}

function getStyle(pageIndex = state.activePage) {
  const styleId = state.pageStyles[pageIndex] || state.styleId;
  return ALBUM_STYLES.find((style) => style.id === styleId) || ALBUM_STYLES[0];
}

function renderPage(canvas, page, pageIndex, scale = 1, options = {}) {
  canvas.width = Math.round(PAGE.width * scale);
  canvas.height = Math.round(PAGE.height * scale);

  const ctx = canvas.getContext("2d");
  const style = getStyle(pageIndex);
  const renderOptions = { interactive: false, ...options };

  if (renderOptions.interactive) {
    state.lastPlacements = [];
    state.lastTextBoxes = [];
  }

  ctx.save();
  ctx.scale(scale, scale);
  drawBackground(ctx, style);

  if (page.type === "cover") {
    drawCoverPage(ctx, style, page, pageIndex, renderOptions);
  } else if (page.type === "gallery") {
    drawGalleryPage(ctx, style, page, pageIndex, renderOptions);
  } else if (page.type === "ending") {
    drawEndingPage(ctx, style, page, pageIndex, renderOptions);
  } else {
    drawEmptyPage(ctx, style);
  }

  drawTextBoxes(ctx, style, pageIndex, renderOptions);

  if (renderOptions.interactive) {
    drawInteractiveOverlay(ctx, style, pageIndex);
  }

  ctx.restore();
}

function drawBackground(ctx, style) {
  const gradient = ctx.createLinearGradient(0, 0, PAGE.width, PAGE.height);
  const stops = style.bg.length - 1 || 1;
  style.bg.forEach((color, index) => gradient.addColorStop(index / stops, color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, PAGE.width, PAGE.height);

  const background = getStyleBackground(style.id);
  if (background) {
    drawBackgroundImage(ctx, background, style);
    return;
  }

  if (style.id === "vintage") {
    drawNoise(ctx, "rgba(71, 45, 24, 0.09)", 900, 2, 11);
    drawRuleLines(ctx, "rgba(93, 57, 29, 0.12)", 86, 22);
  }

  if (style.id === "modern") {
    drawModernArchitecture(ctx, style);
  }

  if (style.id === "cute") {
    drawConfetti(ctx, style);
    drawCuteAnimalPattern(ctx, style);
  }

  if (style.id === "cool") {
    ctx.fillStyle = "rgba(127, 177, 200, 0.1)";
    drawPolygon(ctx, [
      [0, 0],
      [PAGE.width, 0],
      [PAGE.width, 260],
      [0, 90],
    ]);
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    drawPolygon(ctx, [
      [PAGE.width, PAGE.height],
      [PAGE.width, PAGE.height - 360],
      [210, PAGE.height],
    ]);
  }

  if (style.id === "modern-minimal") {
    drawLoveBackdrop(ctx, style);
  }

  if (style.id === "dreamy") {
    ctx.fillStyle = "rgba(255, 255, 255, 0.32)";
    drawPolygon(ctx, [
      [0, 300],
      [PAGE.width, 120],
      [PAGE.width, 350],
      [0, 560],
    ]);
    ctx.fillStyle = "rgba(141, 116, 201, 0.09)";
    drawPolygon(ctx, [
      [0, PAGE.height - 260],
      [PAGE.width, PAGE.height - 440],
      [PAGE.width, PAGE.height],
      [0, PAGE.height],
    ]);
  }

  if (style.id === "ancient") {
    drawNoise(ctx, "rgba(93, 70, 38, 0.08)", 1100, 1.4, 31);
    ctx.strokeStyle = "rgba(47, 43, 34, 0.18)";
    ctx.lineWidth = 5;
    ctx.strokeRect(64, 64, PAGE.width - 128, PAGE.height - 128);
    ctx.strokeStyle = "rgba(164, 60, 47, 0.36)";
    ctx.strokeRect(PAGE.width - 214, 122, 76, 76);
  }

  if (style.id === "cyber") {
    drawGrid(ctx, "rgba(0, 215, 255, 0.12)", 54);
    drawCyberpunkBackdrop(ctx, style);
  }

  if (style.id === "aesthetic") {
    ctx.strokeStyle = "rgba(184, 141, 87, 0.34)";
    ctx.lineWidth = 3;
    ctx.strokeRect(86, 86, PAGE.width - 172, PAGE.height - 172);
    ctx.strokeStyle = "rgba(109, 124, 114, 0.22)";
    ctx.strokeRect(112, 112, PAGE.width - 224, PAGE.height - 224);
  }

  if (style.id === "fresh") {
    ctx.fillStyle = "rgba(89, 169, 143, 0.12)";
    ctx.fillRect(0, 0, PAGE.width, 150);
    drawPlantBackground(ctx, style);
    drawLeafLine(ctx, style);
  }
}

function getStyleBackground(styleId) {
  const image = styleBackgrounds[styleId];
  if (!image || !image.complete || !image.naturalWidth) return null;
  return image;
}

function drawBackgroundImage(ctx, image, style) {
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  drawImageCover(ctx, image, 0, 0, PAGE.width, PAGE.height);
  ctx.fillStyle = style.dark ? "rgba(0, 0, 0, 0.22)" : "rgba(255, 255, 255, 0.16)";
  ctx.fillRect(0, 0, PAGE.width, PAGE.height);
  ctx.restore();
}

function drawCoverPage(ctx, style, page, pageIndex, options) {
  const photo = page.photos[0];

  if (photo) {
    const baseRect = {
      x: 110,
      y: 190,
      w: 1020,
      h: 980,
      r: style.id === "modern" || style.id === "cyber" ? 4 : 20,
      pad: style.id === "modern" ? 0 : 16,
    };
    const rect = getPhotoRect(pageIndex, photo, baseRect);
    drawPhotoCard(ctx, photo, rect.x, rect.y, rect.w, rect.h, style, {
      radius: rect.r,
      pad: rect.pad,
      rotation: rect.rotation,
      shadow: true,
    });
    recordPlacement(pageIndex, photo, rect, baseRect, options);
  } else {
    drawPhotoPlaceholder(ctx, 110, 190, 1020, 980, style);
  }
}

function drawGalleryPage(ctx, style, page, pageIndex, options) {
  const rects = getGalleryRects(page.photos.length, state.layout, page.groupIndex || 0);
  page.photos.forEach((photo, index) => {
    const baseRect = rects[index];
    const rect = getPhotoRect(pageIndex, photo, baseRect);
    drawPhotoCard(ctx, photo, rect.x, rect.y, rect.w, rect.h, style, {
      radius: rect.r,
      pad: rect.pad,
      rotation: rect.rotation,
      shadow: true,
    });
    recordPlacement(pageIndex, photo, rect, baseRect, options);
  });
}

function drawEndingPage(ctx, style, page, pageIndex, options) {
  const rects = [
    { x: 146, y: 285, w: 280, h: 430, r: 18, pad: 12 },
    { x: 480, y: 225, w: 280, h: 500, r: 18, pad: 12 },
    { x: 814, y: 285, w: 280, h: 430, r: 18, pad: 12 },
  ];

  page.photos.forEach((photo, index) => {
    const baseRect = rects[index % rects.length];
    const rect = getPhotoRect(pageIndex, photo, baseRect);
    drawPhotoCard(ctx, photo, rect.x, rect.y, rect.w, rect.h, style, {
      radius: rect.r,
      pad: rect.pad,
      rotation: rect.rotation,
      shadow: true,
    });
    recordPlacement(pageIndex, photo, rect, baseRect, options);
  });
}

function drawTextBoxes(ctx, style, pageIndex, options) {
  getPageTextBoxes(pageIndex).forEach((box) => {
    const rect = drawTextBox(ctx, box, style);
    if (options.interactive) {
      state.lastTextBoxes.push({ box, rect });
    }
  });
}

function drawTextBox(ctx, box, style) {
  const lines = getTextLines(ctx, box, style);
  const lineHeight = box.fontSize * 1.22;
  const height = Math.max(lineHeight, lines.length * lineHeight);

  ctx.save();
  ctx.translate(box.x + box.w / 2, box.y + height / 2);
  ctx.rotate(((box.rotation || 0) * Math.PI) / 180);
  setCanvasFont(ctx, box.fontSize, 900, style);
  ctx.textBaseline = "top";
  ctx.fillStyle = box.color;
  ctx.shadowColor = "rgba(0, 0, 0, 0.18)";
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 3;

  lines.forEach((line, index) => {
    ctx.fillText(line, -box.w / 2, -height / 2 + index * lineHeight);
  });

  ctx.restore();
  ctx.textBaseline = "alphabetic";

  return {
    x: box.x,
    y: box.y,
    w: box.w,
    h: height,
    rotation: box.rotation || 0,
  };
}

function getTextLines(ctx, box, style) {
  setCanvasFont(ctx, box.fontSize, 900, style);
  const rawLines = (box.text || " ").split(/\r?\n/);
  const lines = [];

  rawLines.forEach((rawLine) => {
    const chars = rawLine || " ";
    let current = "";

    chars.split("").forEach((char) => {
      const next = current + char;
      if (ctx.measureText(next).width > box.w && current) {
        lines.push(current);
        current = char;
      } else {
        current = next;
      }
    });

    lines.push(current || " ");
  });

  return lines;
}

function getPhotoRect(pageIndex, photo, baseRect) {
  const saved = state.customRects[customRectKey(pageIndex, photo.id)];
  if (!saved) return { ...baseRect };

  return {
    ...baseRect,
    x: saved.x,
    y: saved.y,
    w: saved.w,
    h: saved.h,
    rotation: saved.rotation || 0,
  };
}

function recordPlacement(pageIndex, photo, rect, baseRect, options) {
  if (!options.interactive) return;
  state.lastPlacements.push({
    pageIndex,
    photo,
    photoId: photo.id,
    rect: { ...rect },
    baseRect: { ...baseRect },
  });
}

function drawInteractiveOverlay(ctx, style, pageIndex) {
  if (state.customLayoutEnabled && state.photos.length) {
    state.lastPlacements.forEach((placement) => {
      const selected = isSelectedPlacement(pageIndex, placement.photoId);
      const { rect } = placement;

      ctx.save();
      ctx.translate(rect.x + rect.w / 2, rect.y + rect.h / 2);
      ctx.rotate(((rect.rotation || 0) * Math.PI) / 180);
      ctx.setLineDash(selected ? [] : [14, 12]);
      ctx.lineWidth = selected ? 6 : 3;
      ctx.strokeStyle = selected ? style.accent : style.dark ? "rgba(255,255,255,0.38)" : "rgba(23,24,22,0.24)";
      roundRect(ctx, -rect.w / 2 - 8, -rect.h / 2 - 8, rect.w + 16, rect.h + 16, (rect.r || 10) + 8);
      ctx.stroke();

      if (selected) {
        ctx.fillStyle = style.accent;
        ctx.beginPath();
        ctx.arc(rect.w / 2, rect.h / 2, 18, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });
  }

  state.lastTextBoxes.forEach(({ box, rect }) => {
    const selected = box.id === state.selectedTextId;

    ctx.save();
    ctx.translate(rect.x + rect.w / 2, rect.y + rect.h / 2);
    ctx.rotate(((rect.rotation || 0) * Math.PI) / 180);
    ctx.setLineDash(selected ? [] : [12, 10]);
    ctx.lineWidth = selected ? 5 : 3;
    ctx.strokeStyle = selected ? style.accent : style.dark ? "rgba(255,255,255,0.42)" : "rgba(23,24,22,0.28)";
    roundRect(ctx, -rect.w / 2 - 12, -rect.h / 2 - 12, rect.w + 24, rect.h + 24, 10);
    ctx.stroke();

    if (selected) {
      ctx.fillStyle = style.accent;
      ctx.beginPath();
      ctx.arc(rect.w / 2 + 8, rect.h / 2 + 8, 15, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  });
}

function customRectKey(pageIndex, photoId) {
  return `${pageIndex}:${photoId}`;
}

function isSelectedPlacement(pageIndex, photoId) {
  return Boolean(
    state.selectedPlacement &&
      state.selectedPlacement.pageIndex === pageIndex &&
      state.selectedPlacement.photoId === photoId,
  );
}

function getSelectedPlacement() {
  if (!state.selectedPlacement || state.selectedPlacement.pageIndex !== state.activePage) return null;
  return state.lastPlacements.find((placement) => placement.photoId === state.selectedPlacement.photoId) || null;
}

function handleCanvasPointerDown(event) {
  const point = getCanvasPoint(event);
  const textBox = hitTestTextBox(point.x, point.y);

  if (textBox) {
    state.selectedTextId = textBox.box.id;
    state.selectedPlacement = null;
    state.textDrag = {
      id: textBox.box.id,
      offsetX: point.x - textBox.box.x,
      offsetY: point.y - textBox.box.y,
    };
    els.albumCanvas.setPointerCapture(event.pointerId);
    renderEverything();
    return;
  }

  if (!state.customLayoutEnabled || !state.photos.length) {
    state.selectedTextId = null;
    renderEverything();
    return;
  }

  const placement = hitTestPlacement(point.x, point.y);
  if (!placement) {
    state.selectedPlacement = null;
    state.selectedTextId = null;
    renderEverything();
    return;
  }

  const rect = ensureCustomRect(placement);
  state.selectedPlacement = { pageIndex: state.activePage, photoId: placement.photoId };
  state.selectedTextId = null;
  state.drag = {
    photoId: placement.photoId,
    offsetX: point.x - rect.x,
    offsetY: point.y - rect.y,
  };
  els.albumCanvas.setPointerCapture(event.pointerId);
  renderEverything();
}

function handleCanvasPointerMove(event) {
  if (state.textDrag) {
    const point = getCanvasPoint(event);
    const box = state.textBoxes.find((item) => item.id === state.textDrag.id);
    if (!box) return;
    box.x = clamp(point.x - state.textDrag.offsetX, 0, PAGE.width - box.w);
    box.y = clamp(point.y - state.textDrag.offsetY, 0, PAGE.height - 40);
    renderMainPage();
    renderTextControls();
    renderThumbnails();
    return;
  }

  if (!state.drag || !state.customLayoutEnabled) return;
  const point = getCanvasPoint(event);
  const placement = state.lastPlacements.find((item) => item.photoId === state.drag.photoId);
  if (!placement) return;

  const rect = ensureCustomRect(placement);
  rect.x = clamp(point.x - state.drag.offsetX, 34, PAGE.width - rect.w - 34);
  rect.y = clamp(point.y - state.drag.offsetY, 34, PAGE.height - rect.h - 34);
  renderMainPage();
  renderPositionControls();
}

function handleCanvasPointerUp(event) {
  if (!state.drag && !state.textDrag) return;
  state.drag = null;
  state.textDrag = null;
  if (els.albumCanvas.hasPointerCapture(event.pointerId)) {
    els.albumCanvas.releasePointerCapture(event.pointerId);
  }
  renderEverything();
}

function hitTestPlacement(x, y) {
  for (let index = state.lastPlacements.length - 1; index >= 0; index -= 1) {
    const placement = state.lastPlacements[index];
    if (pointInsidePlacement(x, y, placement)) {
      return placement;
    }
  }
  return null;
}

function hitTestTextBox(x, y) {
  for (let index = state.lastTextBoxes.length - 1; index >= 0; index -= 1) {
    const item = state.lastTextBoxes[index];
    if (pointInsideRect(x, y, item.rect)) {
      return item;
    }
  }
  return null;
}

function pointInsidePlacement(x, y, placement) {
  const { rect } = placement;
  const angle = -((rect.rotation || 0) * Math.PI) / 180;
  const centerX = rect.x + rect.w / 2;
  const centerY = rect.y + rect.h / 2;
  const dx = x - centerX;
  const dy = y - centerY;
  const localX = dx * Math.cos(angle) - dy * Math.sin(angle);
  const localY = dx * Math.sin(angle) + dy * Math.cos(angle);

  return Math.abs(localX) <= rect.w / 2 && Math.abs(localY) <= rect.h / 2;
}

function pointInsideRect(x, y, rect) {
  const angle = -((rect.rotation || 0) * Math.PI) / 180;
  const centerX = rect.x + rect.w / 2;
  const centerY = rect.y + rect.h / 2;
  const dx = x - centerX;
  const dy = y - centerY;
  const localX = dx * Math.cos(angle) - dy * Math.sin(angle);
  const localY = dx * Math.sin(angle) + dy * Math.cos(angle);

  return Math.abs(localX) <= rect.w / 2 + 18 && Math.abs(localY) <= rect.h / 2 + 18;
}

function ensureCustomRect(placement) {
  const key = customRectKey(placement.pageIndex, placement.photoId);
  if (!state.customRects[key]) {
    state.customRects[key] = {
      x: placement.rect.x,
      y: placement.rect.y,
      w: placement.rect.w,
      h: placement.rect.h,
      rotation: placement.rect.rotation || 0,
    };
  }
  return state.customRects[key];
}

function updateSelectedFromSliders() {
  const placement = getSelectedPlacement();
  if (!placement || !state.customLayoutEnabled) return;

  const rect = ensureCustomRect(placement);
  const maxScale = Math.min(1.45, (PAGE.width - 68) / placement.baseRect.w, (PAGE.height - 68) / placement.baseRect.h);
  const scale = Math.min(Number(els.photoScale.value) / 100, maxScale);
  const nextW = placement.baseRect.w * scale;
  const nextH = placement.baseRect.h * scale;
  const xMax = Math.max(1, PAGE.width - nextW);
  const yMax = Math.max(1, PAGE.height - nextH);

  rect.w = nextW;
  rect.h = nextH;
  rect.x = clamp((Number(els.photoX.value) / 100) * xMax, 34, PAGE.width - nextW - 34);
  rect.y = clamp((Number(els.photoY.value) / 100) * yMax, 34, PAGE.height - nextH - 34);
  rect.rotation = Number(els.photoRotate.value) || 0;
  renderMainPage();
  renderPositionControls();
}

function deleteSelectedPhoto() {
  const selected = getSelectedPlacement();
  if (!selected) return;
  removePhoto(selected.photoId);
}

function addTextBox() {
  const style = getStyle();
  const box = {
    id: state.nextTextId++,
    pageIndex: state.activePage,
    text: "新文本",
    x: 180,
    y: 1220,
    w: 720,
    fontSize: 54,
    rotation: 0,
    color: style.dark ? "#ffffff" : style.ink,
  };

  state.textBoxes.push(box);
  state.selectedTextId = box.id;
  state.selectedPlacement = null;
  renderEverything();
  els.textContent.focus();
  els.textContent.select();
}

function getSelectedTextBox() {
  return state.textBoxes.find((box) => box.id === state.selectedTextId) || null;
}

function getPageTextBoxes(pageIndex) {
  return state.textBoxes.filter((box) => box.pageIndex === pageIndex);
}

function updateSelectedTextBox() {
  const box = getSelectedTextBox();
  if (!box) return;

  const width = Number(els.textWidth.value);
  box.text = els.textContent.value;
  box.w = width;
  box.fontSize = Number(els.textSize.value);
  box.rotation = Number(els.textRotate.value) || 0;
  box.color = els.textColor.value;
  box.x = clamp((Number(els.textX.value) / 100) * Math.max(1, PAGE.width - width), 0, PAGE.width - width);
  box.y = clamp((Number(els.textY.value) / 100) * PAGE.height, 0, PAGE.height - 40);

  renderMainPage();
  renderTextControls();
  renderThumbnails();
}

function deleteSelectedTextBox() {
  if (!state.selectedTextId) return;
  state.textBoxes = state.textBoxes.filter((box) => box.id !== state.selectedTextId);
  state.selectedTextId = null;
  state.textDrag = null;
  renderEverything();
}

function resetActivePageLayout() {
  Object.keys(state.customRects).forEach((key) => {
    if (key.startsWith(`${state.activePage}:`)) {
      delete state.customRects[key];
    }
  });
  state.selectedPlacement = null;
  renderEverything();
}

function getCanvasPoint(event) {
  const bounds = els.albumCanvas.getBoundingClientRect();
  return {
    x: ((event.clientX - bounds.left) / bounds.width) * PAGE.width,
    y: ((event.clientY - bounds.top) / bounds.height) * PAGE.height,
  };
}

function clamp(value, min, max) {
  if (max < min) return min;
  return Math.min(Math.max(value, min), max);
}

function drawEmptyPage(ctx, style) {
  drawPhotoPlaceholder(ctx, 112, 210, 1016, 940, style);
}

function drawPhotoCard(ctx, photo, x, y, w, h, style, options = {}) {
  const rotation = options.rotation || 0;

  ctx.save();
  if (rotation) {
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    drawPhotoCardCore(ctx, photo, -w / 2, -h / 2, w, h, style, options);
  } else {
    drawPhotoCardCore(ctx, photo, x, y, w, h, style, options);
  }
  ctx.restore();
}

function drawPhotoCardCore(ctx, photo, x, y, w, h, style, options = {}) {
  const radius = options.radius ?? 16;
  const pad = options.pad ?? 12;

  ctx.save();
  if (options.shadow) {
    ctx.shadowColor = style.dark ? "rgba(0, 0, 0, 0.5)" : "rgba(40, 34, 26, 0.18)";
    ctx.shadowBlur = style.dark ? 24 : 28;
    ctx.shadowOffsetY = 14;
  }
  roundRect(ctx, x - pad, y - pad, w + pad * 2, h + pad * 2, radius + 4);
  ctx.fillStyle = style.frame;
  ctx.fill();
  ctx.restore();

  ctx.save();
  roundRect(ctx, x, y, w, h, radius);
  ctx.clip();
  ctx.filter = style.imageFilter;
  drawImageCover(ctx, photo.image, x, y, w, h);
  ctx.restore();
  ctx.filter = "none";

  ctx.save();
  roundRect(ctx, x, y, w, h, radius);
  ctx.lineWidth = style.id === "cyber" ? 5 : 2;
  ctx.strokeStyle = style.id === "cyber" ? style.accent : style.dark ? "rgba(255,255,255,0.28)" : "rgba(23,24,22,0.16)";
  ctx.stroke();
  ctx.restore();

  if (style.id === "vintage") {
    ctx.fillStyle = "rgba(80, 47, 22, 0.22)";
    ctx.fillRect(x + 28, y - pad - 8, 116, 18);
    ctx.fillRect(x + w - 144, y + h + pad - 10, 116, 18);
  }
}

function drawPhotoPlaceholder(ctx, x, y, w, h, style) {
  ctx.save();
  roundRect(ctx, x, y, w, h, 22);
  ctx.fillStyle = style.dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.72)";
  ctx.fill();
  ctx.strokeStyle = style.dark ? "rgba(255,255,255,0.25)" : "rgba(23,24,22,0.18)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.strokeStyle = style.accent;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(x + 90, y + h - 120);
  ctx.lineTo(x + w * 0.42, y + h * 0.54);
  ctx.lineTo(x + w * 0.62, y + h * 0.68);
  ctx.lineTo(x + w - 90, y + h - 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x + w - 160, y + 140, 44, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawImageCover(ctx, image, x, y, w, h) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const imageRatio = imageWidth / imageHeight;
  const targetRatio = w / h;
  let sx = 0;
  let sy = 0;
  let sw = imageWidth;
  let sh = imageHeight;

  if (imageRatio > targetRatio) {
    sw = imageHeight * targetRatio;
    sx = (imageWidth - sw) / 2;
  } else {
    sh = imageWidth / targetRatio;
    sy = (imageHeight - sh) / 2;
  }

  ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
}

function getGalleryRects(count, layout, groupIndex) {
  const airy = layout === "airy";
  const x = airy ? 126 : 92;
  const y = airy ? 226 : 205;
  const w = PAGE.width - x * 2;
  const h = airy ? 1176 : 1270;
  const gap = airy ? 36 : 26;
  const radius = layout === "collage" ? 14 : 10;
  const pad = layout === "collage" ? 10 : 8;

  if (count === 1) {
    return [{ x, y, w, h, r: radius, pad }];
  }

  if (count === 2) {
    const itemH = (h - gap) / 2;
    return [
      { x, y, w, h: itemH, r: radius, pad },
      { x, y: y + itemH + gap, w, h: itemH, r: radius, pad },
    ];
  }

  if (count === 3) {
    const topH = groupIndex % 2 === 0 ? Math.round(h * 0.58) : Math.round(h * 0.46);
    const bottomH = h - topH - gap;
    const bottomW = (w - gap) / 2;
    return [
      { x, y, w, h: topH, r: radius, pad },
      { x, y: y + topH + gap, w: bottomW, h: bottomH, r: radius, pad },
      { x: x + bottomW + gap, y: y + topH + gap, w: bottomW, h: bottomH, r: radius, pad },
    ];
  }

  if (count === 4) {
    const itemW = (w - gap) / 2;
    const itemH = (h - gap) / 2;
    return [0, 1, 2, 3].map((index) => ({
      x: x + (index % 2) * (itemW + gap),
      y: y + Math.floor(index / 2) * (itemH + gap),
      w: itemW,
      h: itemH,
      r: radius,
      pad,
    }));
  }

  if (count === 5) {
    const leftW = Math.round(w * 0.56);
    const rightW = w - leftW - gap;
    const smallH = (h - gap * 2) / 3;
    const bottomW = (leftW - gap) / 2;
    return [
      { x, y, w: leftW, h: smallH * 2 + gap, r: radius, pad },
      { x: x + leftW + gap, y, w: rightW, h: smallH, r: radius, pad },
      { x: x + leftW + gap, y: y + smallH + gap, w: rightW, h: smallH, r: radius, pad },
      { x, y: y + smallH * 2 + gap * 2, w: bottomW, h: smallH, r: radius, pad },
      { x: x + bottomW + gap, y: y + smallH * 2 + gap * 2, w: bottomW + rightW + gap, h: smallH, r: radius, pad },
    ];
  }

  const columns = 2;
  const rows = 3;
  const itemW = (w - gap) / columns;
  const itemH = (h - gap * 2) / rows;
  return Array.from({ length: Math.min(count, 6) }, (_, index) => ({
    x: x + (index % columns) * (itemW + gap),
    y: y + Math.floor(index / columns) * (itemH + gap),
    w: itemW,
    h: itemH,
    r: radius,
    pad,
  }));
}

function setCanvasFont(ctx, size, weight, style) {
  ctx.font = `${weight} ${size}px ${style.font}`;
}

function roundRect(ctx, x, y, w, h, radius) {
  const r = Math.min(radius, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawPolygon(ctx, points) {
  ctx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fill();
}

function drawGrid(ctx, color, size) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;

  for (let x = 0; x <= PAGE.width; x += size) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, PAGE.height);
    ctx.stroke();
  }

  for (let y = 0; y <= PAGE.height; y += size) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(PAGE.width, y);
    ctx.stroke();
  }
}

function drawRuleLines(ctx, color, startY, gap) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  for (let y = startY; y < PAGE.height; y += gap) {
    ctx.beginPath();
    ctx.moveTo(70, y);
    ctx.lineTo(PAGE.width - 70, y);
    ctx.stroke();
  }
}

function drawNoise(ctx, color, count, maxRadius, seed) {
  const rand = seededRandom(seed);
  ctx.fillStyle = color;
  for (let i = 0; i < count; i += 1) {
    const x = rand() * PAGE.width;
    const y = rand() * PAGE.height;
    const radius = rand() * maxRadius;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawConfetti(ctx, style) {
  const rand = seededRandom(42);
  const colors = style.palette;
  for (let i = 0; i < 42; i += 1) {
    const x = rand() * PAGE.width;
    const y = rand() * PAGE.height;
    const size = 10 + rand() * 18;
    ctx.fillStyle = colors[i % colors.length];
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rand() * Math.PI);
    roundRect(ctx, -size / 2, -size / 2, size, size * 0.58, 5);
    ctx.fill();
    ctx.restore();
  }
}

function drawCuteAnimalPattern(ctx, style) {
  drawPawPrints(ctx, style, 118, 128, 0.72, 0);
  drawPawPrints(ctx, style, 990, 1285, 0.82, -0.28);
  drawPawPrints(ctx, style, 205, 1510, 0.66, 0.24);
  drawCartoonCat(ctx, 938, 96, 1.08, style);
  drawCartoonDog(ctx, 92, 1380, 1.02, style);
  drawCartoonCat(ctx, 982, 1462, 0.72, style);
}

function drawCartoonCat(ctx, x, y, scale, style) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = "rgba(255, 255, 255, 0.72)";
  roundRect(ctx, 0, 38, 160, 118, 50);
  ctx.fill();

  ctx.fillStyle = "#ffd6df";
  drawPolygon(ctx, [
    [28, 58],
    [48, 2],
    [72, 54],
  ]);
  drawPolygon(ctx, [
    [88, 54],
    [116, 2],
    [132, 62],
  ]);

  ctx.fillStyle = "#fff8fb";
  ctx.beginPath();
  ctx.ellipse(80, 86, 70, 58, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = style.ink;
  ctx.beginPath();
  ctx.arc(54, 82, 5, 0, Math.PI * 2);
  ctx.arc(106, 82, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = style.accent;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(77, 96);
  ctx.quadraticCurveTo(80, 102, 83, 96);
  ctx.stroke();

  ctx.strokeStyle = "rgba(111, 59, 82, 0.42)";
  ctx.lineWidth = 2;
  [-1, 1].forEach((side) => {
    ctx.beginPath();
    ctx.moveTo(78 + side * 20, 98);
    ctx.lineTo(78 + side * 52, 92);
    ctx.moveTo(78 + side * 20, 106);
    ctx.lineTo(78 + side * 54, 112);
    ctx.stroke();
  });

  ctx.restore();
}

function drawCartoonDog(ctx, x, y, scale, style) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = "rgba(255, 234, 168, 0.78)";
  ctx.beginPath();
  ctx.ellipse(82, 88, 72, 58, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#c88b62";
  ctx.beginPath();
  ctx.ellipse(24, 72, 28, 48, -0.45, 0, Math.PI * 2);
  ctx.ellipse(140, 72, 28, 48, 0.45, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.62)";
  ctx.beginPath();
  ctx.ellipse(82, 106, 42, 28, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = style.ink;
  ctx.beginPath();
  ctx.arc(58, 82, 5, 0, Math.PI * 2);
  ctx.arc(106, 82, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#7f4a3a";
  ctx.beginPath();
  ctx.ellipse(82, 100, 10, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#7f4a3a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(82, 108);
  ctx.quadraticCurveTo(70, 120, 58, 110);
  ctx.moveTo(82, 108);
  ctx.quadraticCurveTo(94, 120, 106, 110);
  ctx.stroke();

  ctx.restore();
}

function drawPawPrints(ctx, style, x, y, scale, rotation) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);
  ctx.fillStyle = "rgba(231, 122, 163, 0.22)";

  for (let step = 0; step < 3; step += 1) {
    const ox = step * 74;
    ctx.beginPath();
    ctx.ellipse(ox + 32, 42, 18, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    [[10, 18], [27, 4], [47, 6], [62, 22]].forEach(([px, py]) => {
      ctx.beginPath();
      ctx.ellipse(ox + px, py, 8, 10, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  ctx.restore();
}

function drawModernArchitecture(ctx, style) {
  ctx.save();
  ctx.fillStyle = "rgba(52, 132, 168, 0.08)";
  ctx.fillRect(0, PAGE.height - 420, PAGE.width, 420);

  ctx.strokeStyle = "rgba(30, 43, 55, 0.12)";
  ctx.lineWidth = 2;
  for (let y = PAGE.height - 390; y < PAGE.height - 90; y += 46) {
    ctx.beginPath();
    ctx.moveTo(72, y);
    ctx.lineTo(PAGE.width - 72, y);
    ctx.stroke();
  }

  drawTower(ctx, 118, 1266, 104, 330, "#293746", "#86b8d1");
  drawStackedSkyscraper(ctx, 265, 1190, 125, 410, "#1e2b37", "#b7d7e6");
  drawOperaShells(ctx, 446, 1370, 1.04, style);
  drawSpireTower(ctx, 784, 1125, 96, 520, "#213140", "#7ab0cb");
  drawCurvedTower(ctx, 962, 1220, 118, 390, "#2b3f50", "#9ac9dc");

  ctx.fillStyle = "rgba(255,255,255,0.56)";
  ctx.fillRect(0, PAGE.height - 120, PAGE.width, 120);
  ctx.restore();
}

function drawTower(ctx, x, y, w, h, fill, light) {
  ctx.fillStyle = fill;
  roundRect(ctx, x, y, w, h, 8);
  ctx.fill();
  ctx.fillStyle = light;
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      ctx.fillRect(x + 20 + col * 25, y + 28 + row * 30, 10, 16);
    }
  }
}

function drawStackedSkyscraper(ctx, x, y, w, h, fill, light) {
  ctx.fillStyle = fill;
  for (let i = 0; i < 5; i += 1) {
    const step = i * 16;
    ctx.fillRect(x + step / 2, y + step, w - step, h - step);
  }
  ctx.fillStyle = light;
  for (let row = 0; row < 12; row += 1) {
    ctx.fillRect(x + 24, y + 34 + row * 28, w - 48, 4);
  }
}

function drawSpireTower(ctx, x, y, w, h, fill, light) {
  ctx.fillStyle = fill;
  drawPolygon(ctx, [
    [x + w / 2, y],
    [x + w, y + h],
    [x, y + h],
  ]);
  ctx.strokeStyle = light;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x + w / 2, y + 42);
  ctx.lineTo(x + w / 2, y + h);
  ctx.moveTo(x + 25, y + h * 0.46);
  ctx.lineTo(x + w - 25, y + h * 0.46);
  ctx.moveTo(x + 13, y + h * 0.68);
  ctx.lineTo(x + w - 13, y + h * 0.68);
  ctx.stroke();
}

function drawCurvedTower(ctx, x, y, w, h, fill, light) {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(x + 22, y + h);
  ctx.bezierCurveTo(x - 18, y + h * 0.48, x + 42, y + 90, x + 82, y);
  ctx.bezierCurveTo(x + 128, y + 104, x + 144, y + h * 0.55, x + w, y + h);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = light;
  ctx.lineWidth = 3;
  for (let row = 0; row < 9; row += 1) {
    ctx.beginPath();
    ctx.moveTo(x + 26, y + h - row * 36 - 28);
    ctx.lineTo(x + w - 14, y + h - row * 36 - 28);
    ctx.stroke();
  }
}

function drawOperaShells(ctx, x, y, scale, style) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = "rgba(255,255,255,0.78)";
  ctx.strokeStyle = "rgba(30, 43, 55, 0.24)";
  ctx.lineWidth = 4;
  [0, 62, 125].forEach((offset, index) => {
    ctx.beginPath();
    ctx.moveTo(offset, 145);
    ctx.quadraticCurveTo(offset + 44, 20 - index * 6, offset + 116, 145);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });
  ctx.fillStyle = style.accent;
  ctx.fillRect(-14, 144, 270, 16);
  ctx.restore();
}

function drawLoveBackdrop(ctx, style) {
  ctx.save();
  drawHeartField(ctx, style);

  ctx.fillStyle = "rgba(52, 38, 50, 0.12)";
  ctx.beginPath();
  ctx.ellipse(PAGE.width / 2, 525, 330, 240, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(52, 38, 50, 0.58)";
  drawKissingSilhouette(ctx, PAGE.width / 2 - 240, 300, 1.36, -1);
  drawKissingSilhouette(ctx, PAGE.width / 2 + 80, 300, 1.36, 1);

  ctx.strokeStyle = "rgba(198, 61, 102, 0.32)";
  ctx.lineWidth = 3;
  ctx.strokeRect(74, 82, PAGE.width - 148, PAGE.height - 164);
  ctx.restore();
}

function drawKissingSilhouette(ctx, x, y, scale, side) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale * side, scale);

  ctx.beginPath();
  ctx.arc(95, 106, 66, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(42, 176);
  ctx.bezierCurveTo(10, 300, 32, 455, 140, 545);
  ctx.lineTo(270, 545);
  ctx.bezierCurveTo(206, 408, 196, 258, 146, 176);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(146, 108);
  ctx.quadraticCurveTo(172, 122, 148, 138);
  ctx.quadraticCurveTo(176, 150, 146, 164);
  ctx.lineTo(120, 156);
  ctx.lineTo(124, 108);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

function drawHeartField(ctx, style) {
  const rand = seededRandom(88);
  for (let i = 0; i < 34; i += 1) {
    const x = 70 + rand() * (PAGE.width - 140);
    const y = 80 + rand() * (PAGE.height - 220);
    const size = 13 + rand() * 24;
    drawHeart(ctx, x, y, size, i % 3 === 0 ? "rgba(198, 61, 102, 0.26)" : "rgba(255, 136, 166, 0.24)");
  }
}

function drawHeart(ctx, x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 32, size / 32);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 10);
  ctx.bezierCurveTo(-28, -12, -12, -34, 0, -18);
  ctx.bezierCurveTo(12, -34, 28, -12, 0, 10);
  ctx.fill();
  ctx.restore();
}

function drawPlantBackground(ctx, style) {
  drawTallPlant(ctx, 68, 1070, 1.15, style);
  drawTallPlant(ctx, 1040, 1120, 1.02, style);
  drawHangingVine(ctx, 95, 40, 0.92, style);
  drawHangingVine(ctx, 1045, 36, 1.08, style);
  drawMonsteraLeaf(ctx, 980, 174, 1.18, -0.45, "rgba(89, 169, 143, 0.24)");
  drawMonsteraLeaf(ctx, 156, 258, 0.86, 0.42, "rgba(37, 68, 61, 0.13)");
}

function drawTallPlant(ctx, x, y, scale, style) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.strokeStyle = "rgba(37, 68, 61, 0.48)";
  ctx.lineWidth = 5;
  [-70, -36, 0, 38, 72].forEach((bend, index) => {
    ctx.beginPath();
    ctx.moveTo(120, 330);
    ctx.bezierCurveTo(106 + bend * 0.2, 210, 120 + bend * 0.6, 120, 120 + bend, 28 + index * 16);
    ctx.stroke();
    drawLeaf(ctx, 120 + bend, 52 + index * 16, 46, index % 2 ? -0.8 : 0.8, "rgba(89, 169, 143, 0.34)");
  });

  ctx.fillStyle = "rgba(246, 216, 122, 0.48)";
  roundRect(ctx, 58, 318, 124, 72, 12);
  ctx.fill();
  ctx.fillStyle = "rgba(89, 169, 143, 0.36)";
  ctx.fillRect(72, 330, 96, 8);
  ctx.restore();
}

function drawHangingVine(ctx, x, y, scale, style) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.strokeStyle = "rgba(89, 169, 143, 0.34)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(34, 92, -34, 182, 10, 292);
  ctx.stroke();

  for (let i = 0; i < 8; i += 1) {
    drawLeaf(ctx, i % 2 ? 20 : -12, 38 + i * 32, 22, i % 2 ? 0.8 : -0.8, "rgba(89, 169, 143, 0.28)");
  }
  ctx.restore();
}

function drawLeaf(ctx, x, y, size, rotation, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 0, size, size * 0.38, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawMonsteraLeaf(ctx, x, y, scale, rotation, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -92);
  ctx.bezierCurveTo(90, -70, 104, 44, 0, 116);
  ctx.bezierCurveTo(-104, 44, -90, -70, 0, -92);
  ctx.fill();
  ctx.strokeStyle = "rgba(37, 68, 61, 0.18)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, -76);
  ctx.lineTo(0, 100);
  ctx.stroke();
  ctx.restore();
}

function drawCyberpunkBackdrop(ctx, style) {
  ctx.save();
  const rand = seededRandom(2077);

  ctx.strokeStyle = "rgba(255, 63, 180, 0.55)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, 320);
  ctx.lineTo(PAGE.width, 160);
  ctx.stroke();

  for (let i = 0; i < 95; i += 1) {
    ctx.strokeStyle = i % 2 ? "rgba(0, 215, 255, 0.2)" : "rgba(255, 63, 180, 0.18)";
    ctx.lineWidth = 1 + rand() * 2;
    const x = rand() * PAGE.width;
    const y = rand() * PAGE.height;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 20, y + 90 + rand() * 120);
    ctx.stroke();
  }

  drawCyberStreet(ctx);
  drawCyberSkyline(ctx, style);
  drawNeonSign(ctx, 102, 260, 210, 88, "#00d7ff");
  drawNeonSign(ctx, 914, 360, 220, 92, "#ff3fb4");
  drawNeonSign(ctx, 824, 1236, 250, 88, "#f6e05e");
  ctx.restore();
}

function drawCyberSkyline(ctx, style) {
  const buildings = [
    [48, 890, 112, 560],
    [184, 720, 152, 730],
    [362, 980, 96, 470],
    [492, 780, 180, 670],
    [704, 910, 116, 540],
    [852, 690, 164, 760],
    [1048, 860, 126, 590],
  ];

  buildings.forEach(([x, y, w, h], index) => {
    ctx.fillStyle = index % 2 ? "rgba(8, 10, 24, 0.82)" : "rgba(17, 19, 45, 0.86)";
    roundRect(ctx, x, y, w, h, 8);
    ctx.fill();
    ctx.strokeStyle = index % 2 ? "rgba(0, 215, 255, 0.55)" : "rgba(255, 63, 180, 0.46)";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = index % 2 ? "#00d7ff" : "#ff3fb4";
    for (let row = 0; row < Math.floor(h / 44); row += 1) {
      for (let col = 0; col < Math.floor(w / 34); col += 1) {
        if ((row + col + index) % 3 !== 0) {
          ctx.fillRect(x + 18 + col * 30, y + 28 + row * 38, 12, 18);
        }
      }
    }
  });

  ctx.fillStyle = "rgba(0, 215, 255, 0.18)";
  drawPolygon(ctx, [
    [0, PAGE.height],
    [PAGE.width * 0.42, 1035],
    [PAGE.width * 0.58, 1035],
    [PAGE.width, PAGE.height],
  ]);
}

function drawCyberStreet(ctx) {
  ctx.strokeStyle = "rgba(0, 215, 255, 0.42)";
  ctx.lineWidth = 3;
  for (let i = 0; i < 9; i += 1) {
    const offset = i * 82;
    ctx.beginPath();
    ctx.moveTo(PAGE.width / 2 - 40 - offset, PAGE.height);
    ctx.lineTo(PAGE.width / 2 - 12, 1040);
    ctx.moveTo(PAGE.width / 2 + 40 + offset, PAGE.height);
    ctx.lineTo(PAGE.width / 2 + 12, 1040);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(255, 63, 180, 0.34)";
  for (let y = 1120; y < PAGE.height; y += 82) {
    ctx.beginPath();
    ctx.moveTo(180, y);
    ctx.lineTo(PAGE.width - 180, y);
    ctx.stroke();
  }
}

function drawNeonSign(ctx, x, y, w, h, color) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = 20;
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  roundRect(ctx, x, y, w, h, 8);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fillRect(x + 22, y + h / 2 - 4, w - 44, 8);
  ctx.restore();
}

function drawLeafLine(ctx, style) {
  ctx.strokeStyle = "rgba(89, 169, 143, 0.46)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(82, 1460);
  ctx.bezierCurveTo(300, 1340, 530, 1520, 760, 1386);
  ctx.bezierCurveTo(900, 1305, 1030, 1340, 1134, 1260);
  ctx.stroke();

  ctx.fillStyle = "rgba(89, 169, 143, 0.34)";
  for (let i = 0; i < 7; i += 1) {
    const x = 180 + i * 140;
    const y = 1428 - (i % 2) * 60;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((i % 2 ? -1 : 1) * 0.55);
    ctx.beginPath();
    ctx.ellipse(0, 0, 42, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return function rand() {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function hasExportContent() {
  return state.photos.length > 0 || state.textBoxes.length > 0;
}

function getAlbumBaseName() {
  const firstText = state.textBoxes.find((box) => box.text.trim());
  if (!firstText) return "自定义相册";
  return firstText.text.trim().replace(/\s+/g, "").slice(0, 24) || "自定义相册";
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

function sanitizeFileName(text) {
  return (text || "album").replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, "-").slice(0, 60) || "album";
}

async function exportPagePng(pageIndex) {
  if (!hasExportContent()) return;
  const canvas = renderPageToCanvas(pageIndex);
  const blob = await canvasToBlob(canvas, "image/png");
  downloadBlob(blob, `${sanitizeFileName(getAlbumBaseName())}-第${pageIndex + 1}页.png`);
}

async function exportAllPng() {
  if (!hasExportContent()) return;
  els.exportAllPng.disabled = true;

  for (let index = 0; index < state.pages.length; index += 1) {
    const canvas = renderPageToCanvas(index);
    const blob = await canvasToBlob(canvas, "image/png");
    downloadBlob(blob, `${sanitizeFileName(getAlbumBaseName())}-第${index + 1}页.png`);
    await sleep(140);
  }

  renderControls();
}

async function exportPdf() {
  if (!hasExportContent()) return;
  els.exportPdf.disabled = true;

  const images = state.pages.map((page, index) => {
    const canvas = document.createElement("canvas");
    renderPage(canvas, page, index, 1);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    return {
      bytes: dataUrlToBytes(dataUrl),
      width: canvas.width,
      height: canvas.height,
    };
  });

  const blob = createPdfBlob(images);
  downloadBlob(blob, `${sanitizeFileName(getAlbumBaseName())}.pdf`);
  renderControls();
}

function renderPageToCanvas(pageIndex) {
  const canvas = document.createElement("canvas");
  renderPage(canvas, state.pages[pageIndex], pageIndex, 1);
  return canvas;
}

function canvasToBlob(canvas, type) {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), type, 0.95);
  });
}

function dataUrlToBytes(dataUrl) {
  const base64 = dataUrl.split(",")[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function createPdfBlob(images) {
  const encoder = new TextEncoder();
  const chunks = [];
  const offsets = [];
  let offset = 0;
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const objectCount = 2 + images.length * 3;

  const addBytes = (bytes) => {
    chunks.push(bytes);
    offset += bytes.byteLength;
  };
  const addText = (text) => addBytes(encoder.encode(text));
  const beginObject = (id) => {
    offsets[id] = offset;
    addText(`${id} 0 obj\n`);
  };
  const endObject = () => addText("\nendobj\n");

  addText("%PDF-1.4\n");

  beginObject(1);
  addText("<< /Type /Catalog /Pages 2 0 R >>");
  endObject();

  beginObject(2);
  const pageRefs = images.map((_, index) => `${3 + index * 3} 0 R`).join(" ");
  addText(`<< /Type /Pages /Kids [${pageRefs}] /Count ${images.length} >>`);
  endObject();

  images.forEach((image, index) => {
    const pageId = 3 + index * 3;
    const contentId = pageId + 1;
    const imageId = pageId + 2;
    const imageName = `Im${index + 1}`;
    const stream = `q\n${pageWidth} 0 0 ${pageHeight} 0 0 cm\n/${imageName} Do\nQ`;
    const streamBytes = encoder.encode(stream);

    beginObject(pageId);
    addText(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /ProcSet [/PDF /ImageC] /XObject << /${imageName} ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`,
    );
    endObject();

    beginObject(contentId);
    addText(`<< /Length ${streamBytes.byteLength} >>\nstream\n`);
    addBytes(streamBytes);
    addText("\nendstream");
    endObject();

    beginObject(imageId);
    addText(
      `<< /Type /XObject /Subtype /Image /Width ${image.width} /Height ${image.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.bytes.byteLength} >>\nstream\n`,
    );
    addBytes(image.bytes);
    addText("\nendstream");
    endObject();
  });

  const xrefOffset = offset;
  addText(`xref\n0 ${objectCount + 1}\n`);
  addText("0000000000 65535 f \n");
  for (let id = 1; id <= objectCount; id += 1) {
    addText(`${String(offsets[id]).padStart(10, "0")} 00000 n \n`);
  }
  addText(`trailer\n<< /Size ${objectCount + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);

  return new Blob(chunks, { type: "application/pdf" });
}

function downloadBlob(blob, filename) {
  if (!blob) return;
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
