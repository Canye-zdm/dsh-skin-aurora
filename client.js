/**
 * Aurora · 极光 —— dsh 浏览器端入口（client.js）
 * dsh 规定：每个插件的 client 入口必须是 __ModuleLoader__.load 注册格式，
 * 加载时只注册 factory；真正执行（注入样式等副作用）发生在 materialize 阶段。
 *
 * 改颜色请直接改下面 AURORA_CSS 模板字符串里的色值（集中在"样式表"段落）。
 */
window.__ModuleLoader__.load({
  id: "dsh-client-ui-skin-aurora",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    /* ==================== 样式表（改颜色改这里） ==================== */
    const AURORA_CSS = `
/* ============ 深色主题（主打） ============ */
body[data-dsh-aurora][data-ds-dark-theme] {
  --dsw-alias-bg-base: #131d33 !important;
  --dsw-alias-bg-layer-1: #172238 !important;
  --dsw-alias-bg-layer-2: #1b2942 !important;
  --dsw-alias-bg-layer-3: #20304e !important;
  --dsw-alias-bg-mask-1: rgba(12, 19, 34, 0.72) !important;
  --dsw-alias-bg-overlay: rgba(9, 14, 26, 0.92) !important;
  --dsw-alias-border-l1: rgba(125, 180, 240, 0.08) !important;
  --dsw-alias-border-l2: rgba(125, 180, 240, 0.16) !important;
  --dsw-alias-label-primary: #f2f6fc !important;
  --dsw-alias-label-secondary: #9aa7ba !important;
  --dsw-alias-label-tertiary: #6b7a90 !important;
  --dsw-alias-label-dimmed: #55637a !important;
  --dsw-alias-brand-primary: #4cc3ff !important;
  --dsw-alias-brand-primary-invert: #131d33 !important;
  --dsw-alias-brand-text: #e8eef7 !important;
  --dsw-alias-button-primary-fill: #4cc3ff !important;
  --dsw-alias-button-primary-hover: #7bd6ff !important;
  --dsw-alias-button-primary-dimmed: rgba(76, 195, 255, 0.14) !important;
  --dsw-alias-button-info-fill: #a78bfa !important;
  --dsw-alias-button-info-hover: #c4b5fd !important;
  --dsw-alias-button-ghost-active-fill: rgba(76, 195, 255, 0.10) !important;
  --dsw-alias-button-ghost-active-border: rgba(76, 195, 255, 0.35) !important;
  --dsw-alias-interactive-bg-hover: rgba(76, 195, 255, 0.10) !important;
  --dsw-alias-interactive-bg-active: rgba(76, 195, 255, 0.16) !important;
  --dsw-alias-interactive-bg-hover-solid: rgba(76, 195, 255, 0.18) !important;
  --dsw-alias-interactive-bg-hover-danger: rgba(248, 113, 113, 0.12) !important;
  --dsw-alias-state-error-primary: #f87171 !important;
  --dsw-alias-state-error-secondary: #fca5a5 !important;
  --dsw-alias-state-success-primary: #34d399 !important;
  --dsw-alias-state-success-secondary: #6ee7b7 !important;
  --dsw-alias-state-success-tertiary: rgba(52, 211, 153, 0.12) !important;
  --dsw-alias-state-warn-primary: #f5b84c !important;
  --dsw-alias-state-warn-secondary: #f8cd7c !important;
  --dsw-alias-state-warn-label: #f8cd7c !important;
  --dsw-alias-state-warn-tertiary: rgba(245, 184, 76, 0.12) !important;
  --dsw-alias-state-business-primary: #4cc3ff !important;
  --dsw-alias-markdown-code-block: #0c1420 !important;
  --dsw-alias-markdown-code-block-banner: #16223a !important;
  --dsw-alias-markdown-inline-code: rgba(76, 195, 255, 0.13) !important;
  --dsw-alias-markdown-citation: rgba(167, 139, 250, 0.10) !important;
  --dsw-alias-markdown-tag: rgba(167, 139, 250, 0.24) !important;
  --dsw-alias-markdown-placeholder: #33486b !important;
  --dsw-alias-scrollbar-bg-l1: rgba(125, 180, 240, 0.10) !important;
  --dsw-alias-scrollbar-bg-l2: rgba(125, 180, 240, 0.14) !important;
  --dsw-alias-scrollbar-hover-l1: rgba(125, 180, 240, 0.20) !important;
  --dsw-alias-scrollbar-hover-l2: rgba(125, 180, 240, 0.28) !important;
  --dsw-alias-tooltip-bg: #20304e !important;
  --dsw-alias-toast-bg: #1b2942 !important;
  --shiki-token-constant: #4cc3ff !important;
  --shiki-token-string: #34d399 !important;
  --shiki-token-comment: #6b7a90 !important;
  --shiki-token-keyword: #c4b5fd !important;
  --shiki-token-parameter: #f5b84c !important;
  --shiki-token-function: #7bd6ff !important;
  --shiki-token-string-expression: #6ee7b7 !important;
  --shiki-token-punctuation: #9aa7ba !important;
  --shiki-token-link: #4cc3ff !important;
}

/* ============ 静态色板换肤（深色）：官方组件写死引用 --dsw-static-*，
   整体把 bluish 中性色阶映射为极光色阶，一网打尽所有"漏网"组件 ============ */
body[data-dsh-aurora][data-ds-dark-theme] {
    --dsw-static-neutral-bluish-1000: #0d1526 !important;
    --dsw-static-neutral-bluish-950: #131d33 !important;
    --dsw-static-neutral-bluish-900: #172238 !important;
    --dsw-static-neutral-bluish-875: #1b2942 !important;
    --dsw-static-neutral-bluish-850: #20304e !important;
    --dsw-static-neutral-bluish-800: #253757 !important;
    --dsw-static-neutral-bluish-750: #2c4063 !important;
    --dsw-static-neutral-bluish-700: #364c71 !important;
    --dsw-static-neutral-bluish-600: #4b6289 !important;
    --dsw-static-neutral-bluish-500: #637aa3 !important;
    --dsw-static-neutral-bluish-400: #7a90b8 !important;
    --dsw-static-neutral-bluish-300: #a3b4d0 !important;
    --dsw-static-neutral-bluish-200: #bfcde2 !important;
    --dsw-static-neutral-bluish-150: #cedaeb !important;
    --dsw-static-neutral-bluish-100: #dde6f2 !important;
    --dsw-static-neutral-bluish-75: #eaeff8 !important;
    --dsw-static-neutral-bluish-60: #f1f5fb !important;
    --dsw-static-neutral-bluish-50: #f6f9fd !important;
    --dsw-static-neutral-bluish-00: #ffffff !important;
}

/* 极光层：独立悬浮图层（JS 注入 .aurora-sky），在内容之上、不挡交互。
   容器承载静态光晕；内部两条光带（band-a 主带 / band-b 副带）
   以不同速度、方向、幅度错位流动，模拟真实极光的层次感 */
body[data-dsh-aurora][data-ds-dark-theme] .aurora-sky {
  background:
    radial-gradient(ellipse 130% 46% at 50% -14%, rgba(76, 195, 255, 0.46), transparent 60%),
    radial-gradient(ellipse 60% 30% at 80% -8%, rgba(167, 139, 250, 0.30), transparent 55%),
    radial-gradient(ellipse 45% 24% at 18% -6%, rgba(52, 211, 153, 0.22), transparent 50%),
    linear-gradient(0deg, rgba(52, 211, 153, 0.16) 0%, rgba(76, 195, 255, 0.08) 14%, transparent 36%);
}
body[data-dsh-aurora][data-ds-dark-theme] .aurora-sky .band {
  position: absolute;
  inset: -12% -18%;
  filter: blur(26px);
  -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 30%, transparent 78%);
  mask-image: linear-gradient(180deg, #000 0%, #000 30%, transparent 78%);
}
body[data-dsh-aurora][data-ds-dark-theme] .aurora-band-a {
  background: linear-gradient(100deg,
    transparent 0%,
    transparent 12%,
    rgba(76, 195, 255, 0.44) 38%,
    rgba(167, 139, 250, 0.38) 55%,
    rgba(52, 211, 153, 0.26) 72%,
    transparent 88%,
    transparent 100%);
  animation: band-drift-a 12s ease-in-out infinite alternate;
}
body[data-dsh-aurora][data-ds-dark-theme] .aurora-band-b {
  background: linear-gradient(80deg,
    transparent 0%,
    transparent 24%,
    rgba(167, 139, 250, 0.34) 55%,
    rgba(76, 195, 255, 0.22) 72%,
    transparent 92%,
    transparent 100%);
  animation: band-drift-b 9s ease-in-out infinite alternate;
}
@keyframes band-drift-a {
  from { transform: translateX(-8%) scale(1.02); opacity: 0.85; }
  to { transform: translateX(8%) scale(1.08); opacity: 1; }
}
@keyframes band-drift-b {
  from { transform: translateX(6%) translateY(0.5%); opacity: 0.7; }
  to { transform: translateX(-9%) translateY(-1.5%); opacity: 0.95; }
}
@media (prefers-reduced-motion: reduce) {
  body[data-dsh-aurora] .aurora-sky .band { animation: none !important; }
}

/* 欢迎页主标题"探索未至之境"：极光渐变文字（深色版：亮色渐变） */
body[data-dsh-aurora][data-ds-dark-theme] [class*='headlineText'] {
  background: linear-gradient(92deg, #4cc3ff 0%, #a78bfa 55%, #7bd6ff 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
}

/* 侧栏选中高亮（深色）：极光青蓝淡底 + 左侧指示条，克制不发光 */
body[data-dsh-aurora][data-ds-dark-theme] :is([class*='sidebarCol'], [data-pane='sidebar']) :is([role='treeitem'][aria-selected='true'], [class*='selected']) {
  background: rgba(76, 195, 255, 0.15) !important;
  box-shadow: inset 2px 0 0 rgba(76, 195, 255, 0.9) !important;
}

/* 输入框/编辑区聚焦时泛起极光青光 */
body[data-dsh-aurora] :is(textarea, input, [class*='input'], [class*='editor']):focus,
body[data-dsh-aurora] :is(textarea, input, [class*='input'], [class*='editor']):focus-within {
  border-color: rgba(76, 195, 255, 0.65) !important;
  box-shadow: 0 0 0 3px rgba(76, 195, 255, 0.16) !important;
  outline: none !important;
}

/* ============ 浅色主题（白天） ============ */
body[data-dsh-aurora] {
  --dsw-alias-bg-base: #e8eff7 !important;
  --dsw-alias-bg-layer-1: #e2eaf4 !important;
  --dsw-alias-bg-layer-2: #dbe5f1 !important;
  --dsw-alias-bg-layer-3: #d3dfed !important;
  --dsw-alias-border-l1: rgba(76, 195, 255, 0.16) !important;
  --dsw-alias-border-l2: rgba(76, 195, 255, 0.26) !important;
  --dsw-alias-label-primary: #1c2740 !important;
  --dsw-alias-label-secondary: #5b6f90 !important;
  --dsw-alias-label-tertiary: #7b90b0 !important;
  --dsw-alias-brand-primary: #1283d8 !important;
  --dsw-alias-brand-primary-invert: #ffffff !important;
  --dsw-alias-brand-text: #ffffff !important;
  --dsw-alias-button-primary-fill: #1283d8 !important;
  --dsw-alias-button-primary-hover: #3b9be0 !important;
  --dsw-alias-button-info-fill: #7c5ce0 !important;
  --dsw-alias-button-info-hover: #9b7fe8 !important;
  --dsw-alias-interactive-bg-hover: rgba(18, 131, 216, 0.08) !important;
  --dsw-alias-interactive-bg-active: rgba(18, 131, 216, 0.14) !important;
  --dsw-alias-interactive-bg-hover-danger: rgba(214, 69, 69, 0.10) !important;
  --dsw-alias-state-error-primary: #d64545 !important;
  --dsw-alias-state-error-secondary: #e87878 !important;
  --dsw-alias-state-success-primary: #0e9f6e !important;
  --dsw-alias-state-success-secondary: #34bd8c !important;
  --dsw-alias-state-success-tertiary: rgba(14, 159, 110, 0.10) !important;
  --dsw-alias-state-warn-primary: #c58a1b !important;
  --dsw-alias-state-warn-secondary: #dba13a !important;
  --dsw-alias-state-warn-label: #a06f0e !important;
  --dsw-alias-state-warn-tertiary: rgba(197, 138, 27, 0.10) !important;
  --dsw-alias-state-business-primary: #1283d8 !important;
  --dsw-alias-markdown-code-block: #e0e9f4 !important;
  --dsw-alias-markdown-code-block-banner: #d8e3f0 !important;
  --dsw-alias-markdown-inline-code: rgba(76, 195, 255, 0.18) !important;
  --dsw-alias-markdown-citation: rgba(124, 92, 224, 0.12) !important;
  --dsw-alias-markdown-tag: rgba(124, 92, 224, 0.14) !important;
  --dsw-alias-markdown-placeholder: #b9c9dd !important;
  --shiki-token-constant: #1283d8 !important;
  --shiki-token-string: #0e9f6e !important;
  --shiki-token-comment: #7b90b0 !important;
  --shiki-token-keyword: #7c5ce0 !important;
  --shiki-token-parameter: #c58a1b !important;
  --shiki-token-function: #1b8fd8 !important;
  --shiki-token-string-expression: #34bd8c !important;
  --shiki-token-punctuation: #5b6f90 !important;
  --shiki-token-link: #1283d8 !important;
}

/* ============ 静态色板换肤（浅色） ============ */
body[data-dsh-aurora] {
    --dsw-static-neutral-bluish-1000: #1c2740 !important;
    --dsw-static-neutral-bluish-900: #28354f !important;
    --dsw-static-neutral-bluish-850: #34435f !important;
    --dsw-static-neutral-bluish-750: #465773 !important;
    --dsw-static-neutral-bluish-700: #5b6f90 !important;
    --dsw-static-neutral-bluish-600: #7b90b0 !important;
    --dsw-static-neutral-bluish-500: #9aacc8 !important;
    --dsw-static-neutral-bluish-400: #b6c4d9 !important;
    --dsw-static-neutral-bluish-300: #cfdae9 !important;
    --dsw-static-neutral-bluish-200: #d9e3f0 !important;
    --dsw-static-neutral-bluish-150: #e0e9f4 !important;
    --dsw-static-neutral-bluish-100: #e6edf6 !important;
    --dsw-static-neutral-bluish-75: #e9f0f8 !important;
    --dsw-static-neutral-bluish-60: #eef3fa !important;
    --dsw-static-neutral-bluish-50: #f2f6fb !important;
    --dsw-static-neutral-bluish-00: #ffffff !important;
}

/* 浅色极光：淡蓝白底上浮着一层极淡的彩色光，白天也有极光氛围 */
body[data-dsh-aurora] .aurora-sky {
  background:
    radial-gradient(ellipse 120% 40% at 50% -15%, rgba(76, 195, 255, 0.36), transparent 62%),
    radial-gradient(ellipse 55% 26% at 80% -8%, rgba(167, 139, 250, 0.22), transparent 58%),
    linear-gradient(0deg, rgba(52, 211, 153, 0.12) 0%, rgba(76, 195, 255, 0.06) 14%, transparent 34%);
}
body[data-dsh-aurora] .aurora-sky .band {
  position: absolute;
  inset: -12% -18%;
  filter: blur(26px);
  -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 22%, transparent 68%);
  mask-image: linear-gradient(180deg, #000 0%, #000 22%, transparent 68%);
}
body[data-dsh-aurora] .aurora-band-a {
  background: linear-gradient(100deg,
    transparent 0%,
    transparent 14%,
    rgba(76, 195, 255, 0.32) 38%,
    rgba(167, 139, 250, 0.24) 56%,
    rgba(52, 211, 153, 0.14) 72%,
    transparent 90%,
    transparent 100%);
  animation: band-drift-a 12s ease-in-out infinite alternate;
}
body[data-dsh-aurora] .aurora-band-b {
  background: linear-gradient(80deg,
    transparent 0%,
    transparent 26%,
    rgba(167, 139, 250, 0.20) 56%,
    rgba(76, 195, 255, 0.14) 74%,
    transparent 94%,
    transparent 100%);
  animation: band-drift-b 9s ease-in-out infinite alternate;
}

/* 欢迎页主标题渐变（浅色版：深色渐变保证白底可读） */
body[data-dsh-aurora] [class*='headlineText'] {
  background: linear-gradient(92deg, #1283d8 0%, #7c5ce0 55%, #0e9f6e 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
}

/* 侧栏选中高亮（浅色）：深青蓝淡底 + 指示条 */
body[data-dsh-aurora] :is([class*='sidebarCol'], [data-pane='sidebar']) :is([role='treeitem'][aria-selected='true'], [class*='selected']) {
  background: rgba(18, 131, 216, 0.12) !important;
  box-shadow: inset 2px 0 0 #1283d8 !important;
}

/* 卡片极光描边（深色）：默认淡青蓝边框，悬浮微亮发光 */
body[data-dsh-aurora][data-ds-dark-theme] [class*='card'] {
  border-color: rgba(76, 195, 255, 0.3) !important;
  transition: border-color 0.25s ease, box-shadow 0.25s ease !important;
}
body[data-dsh-aurora][data-ds-dark-theme] [class*='card']:hover {
  border-color: rgba(76, 195, 255, 0.9) !important;
  box-shadow: 0 0 0 1px rgba(76, 195, 255, 0.4), 0 0 30px rgba(76, 195, 255, 0.32), 0 0 64px rgba(76, 195, 255, 0.16) !important;
}

/* 卡片极光描边（浅色） */
body[data-dsh-aurora] [class*='card'] {
  border-color: rgba(18, 131, 216, 0.35) !important;
  transition: border-color 0.25s ease, box-shadow 0.25s ease !important;
}
body[data-dsh-aurora] [class*='card']:hover {
  border-color: rgba(18, 131, 216, 0.95) !important;
  box-shadow: 0 0 0 1px rgba(18, 131, 216, 0.45), 0 0 26px rgba(18, 131, 216, 0.35), 0 0 56px rgba(18, 131, 216, 0.18) !important;
}

/* 项目行极光光边（深色）：内描边光环，悬浮微亮外光 */
body[data-dsh-aurora][data-ds-dark-theme] :is([class*='sidebarCol'], [data-pane='sidebar']) :is([class*='workspaceRow'], [class*='projectRow']) {
  box-shadow: inset 0 0 0 1px rgba(76, 195, 255, 0.4) !important;
  transition: box-shadow 0.25s ease !important;
}
body[data-dsh-aurora][data-ds-dark-theme] :is([class*='sidebarCol'], [data-pane='sidebar']) :is([class*='workspaceRow'], [class*='projectRow']):hover {
  box-shadow: inset 0 0 0 1px rgba(76, 195, 255, 0.7), 0 0 14px rgba(76, 195, 255, 0.2) !important;
}

/* 项目行极光光边（浅色） */
body[data-dsh-aurora] :is([class*='sidebarCol'], [data-pane='sidebar']) :is([class*='workspaceRow'], [class*='projectRow']) {
  box-shadow: inset 0 0 0 1px rgba(18, 131, 216, 0.45) !important;
  transition: box-shadow 0.25s ease !important;
}
body[data-dsh-aurora] :is([class*='sidebarCol'], [data-pane='sidebar']) :is([class*='workspaceRow'], [class*='projectRow']):hover {
  box-shadow: inset 0 0 0 1px rgba(18, 131, 216, 0.75), 0 0 12px rgba(18, 131, 216, 0.22) !important;
}
`;
    /* ==================== 皮肤逻辑 ==================== */

    const SKIN_OWNER = "aurora";
    const SKIN_TITLE = "极光 · DeepSeek Harness";

    /**
     * apply 是皮肤的入口：激活标记 → 注入样式 → 改标题。
     * ctx.effect 注册卸载清理，Cordis 卸载插件时自动执行、界面完全还原。
     */
    function apply(ctx) {
      const body = document.body;

      // 1. 激活标记：body 挂上 data-dsh-aurora，样式表只在标记存在时生效
      body.dataset.dshAurora = "";

      // 2. 注入样式表
      const style = document.createElement("style");
      style.dataset.skinOwner = SKIN_OWNER;
      style.textContent = AURORA_CSS;
      document.head.append(style);

      // 3. 标签页标题
      document.title = SKIN_TITLE;

      // 4. 极光图层：独立悬浮层，盖在内容之上（不挡点击）。
      //    容器带静态光晕，内部两条光带以不同速度/方向错位流动
      const sky = document.createElement("div");
      sky.dataset.skinOwner = SKIN_OWNER;
      sky.setAttribute("aria-hidden", "true");
      sky.className = "aurora-sky";
      sky.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483000;";
      const bandA = document.createElement("div");
      bandA.className = "band aurora-band-a";
      const bandB = document.createElement("div");
      bandB.className = "band aurora-band-b";
      sky.append(bandA, bandB);
      document.body.append(sky);

      // 5. 侧栏背景修复：官方侧栏写死引用静态色板（--dsw-static-*），需组件级覆盖
      const sidebarFix = document.createElement("style");
      sidebarFix.dataset.skinOwner = SKIN_OWNER;
      sidebarFix.textContent = [
        "body[data-dsh-aurora][data-ds-dark-theme] :is([data-pane='sidebar'], [class*='sidebarCol']) { background: linear-gradient(165deg, #15213a 0%, #1b2742 40%, #2a3152 100%) !important; }",
        "body[data-dsh-aurora] :is([data-pane='sidebar'], [class*='sidebarCol']) { background: linear-gradient(165deg, #dde7f3 0%, #e5ebf5 50%, #ececf8 100%) !important; }",
      ].join("\n");
      document.head.append(sidebarFix);

      // 6. 卸载清理：Cordis 卸载插件时自动执行，界面完全还原
      ctx.effect(() => () => {
        delete body.dataset.dshAurora;
        style.remove();
        sidebarFix.remove();
        sky.remove();
        if (document.title === SKIN_TITLE) document.title = "DeepSeek Harness";
      }, "ui-skin-aurora: minimal aurora skin");
    }

    exports.apply = apply;
    return module.exports;
  }
});
