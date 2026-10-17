export const PAGE_SIZE = 8;

export const LIGHT_MODE = "light",
	DARK_MODE = "dark",
	AUTO_MODE = "auto";
export const DEFAULT_THEME = AUTO_MODE;

// Banner height unit: vh
//
// ⚠️ 首页背景高度 = BANNER_HEIGHT + BANNER_HEIGHT_EXTEND（下一行算出来的）
//   BANNER_HEIGHT        → 内页（文章页 / 关于 / 归档）的背景高度
//   BANNER_HEIGHT_EXTEND → 首页在此之上再额外加高多少
//
// 当前 35 + 65 = 100vh：首页背景正好占满一屏。
// 背景图是 2557×1437（宽高比 1.78 ≈ 16:9），在 16:9 屏幕上
// 高度取 100vh 时容器宽高比与图片一致，图片可完整显示、几乎不裁切。
export const BANNER_HEIGHT = 35;
export const BANNER_HEIGHT_EXTEND = 65;
export const BANNER_HEIGHT_HOME = BANNER_HEIGHT + BANNER_HEIGHT_EXTEND;

// The height the main panel overlaps the banner, unit: rem
export const MAIN_PANEL_OVERLAPS_BANNER_HEIGHT = 3.5;

// Page width: rem
export const PAGE_WIDTH = 75;
