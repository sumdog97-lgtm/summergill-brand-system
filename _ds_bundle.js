/* @ds-bundle: {"format":4,"namespace":"SummergillDesignSystem_2a6cb4","components":[{"name":"CheckList","sourcePath":"components/content/CheckList.jsx"},{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"FaqList","sourcePath":"components/content/FaqItem.jsx"},{"name":"GridPanel","sourcePath":"components/content/GridPanel.jsx"},{"name":"GridCell","sourcePath":"components/content/GridPanel.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"StatRow","sourcePath":"components/content/Stat.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ChoiceChip","sourcePath":"components/forms/ChoiceChip.jsx"},{"name":"ChoiceGroup","sourcePath":"components/forms/ChoiceChip.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"LaptopFrame","sourcePath":"components/marketing/DeviceShowcase.jsx"},{"name":"PhoneFrame","sourcePath":"components/marketing/DeviceShowcase.jsx"},{"name":"TabletFrame","sourcePath":"components/marketing/DeviceShowcase.jsx"},{"name":"DeviceShowcase","sourcePath":"components/marketing/DeviceShowcase.jsx"},{"name":"PriceCard","sourcePath":"components/marketing/PriceCard.jsx"},{"name":"PromoBanner","sourcePath":"components/marketing/PromoBanner.jsx"},{"name":"Hi","sourcePath":"components/marketing/PromoBanner.jsx"}],"sourceHashes":{"components/content/CheckList.jsx":"96e4e3ba5da7","components/content/FaqItem.jsx":"25ae45abf62f","components/content/GridPanel.jsx":"53222e6a9b97","components/content/SectionHeader.jsx":"3e1d598de650","components/content/Stat.jsx":"71912cddddb9","components/core/Button.jsx":"53ffb6dc91fc","components/core/Eyebrow.jsx":"ce3938563990","components/core/Icon.jsx":"4274bffa6f1a","components/core/Logo.jsx":"c561955a5839","components/core/Tag.jsx":"3d1496b84297","components/forms/ChoiceChip.jsx":"53eda663381d","components/forms/TextField.jsx":"833684990a65","components/marketing/DeviceShowcase.jsx":"6c52f47025d2","components/marketing/PriceCard.jsx":"fca741661f09","components/marketing/PromoBanner.jsx":"9892b1380601","ui_kits/website/Closing.jsx":"1e90ded67c22","ui_kits/website/Header.jsx":"a0401b082371","ui_kits/website/Hero.jsx":"9edf7d0b2b1e","ui_kits/website/Sections.jsx":"36fbd43dcca6","ui_kits/website/data.js":"2b79199136ca"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/core/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.SummergillDesignSystem_2a6cb4 = window.SummergillDesignSystem_2a6cb4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/FaqItem.jsx
try { (() => {
const {
  useState
} = React;
function FaqItem({
  question,
  children,
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid rgb(10 10 10 / .15)',
      padding: open ? '0 4px 20px' : '0 4px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    style: {
      all: 'unset',
      boxSizing: 'border-box',
      width: '100%',
      cursor: 'pointer',
      padding: '20px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--color-ink)'
    }
  }, question, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      lineHeight: '28px',
      color: 'var(--color-brand)',
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'transform .15s ease'
    }
  }, "+")), open && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 768,
      fontSize: 16,
      lineHeight: 1.625,
      color: 'rgb(10 10 10 / .7)'
    }
  }, children));
}
function FaqList({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgb(10 10 10 / .15)',
      ...style
    }
  }, items.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    question: f.q
  }, f.a)));
}
Object.assign(__ds_scope, { FaqItem, FaqList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  first,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: first ? 'none' : '1px solid rgb(10 10 10 / .15)',
      padding: '20px 20px 4px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: '40px',
      color: 'var(--color-ink)'
    }
  }, value), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: '16px',
      letterSpacing: '0.025em',
      textTransform: 'uppercase',
      color: 'rgb(10 10 10 / .55)'
    }
  }, label));
}
function StatRow({
  stats = [],
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("dl", {
    className: className,
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: `repeat(${stats.length || 4}, minmax(0, 1fr))`,
      borderTop: '1px solid rgb(10 10 10 / .15)',
      ...style
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Stat, {
    key: i,
    first: i === 0,
    value: s.value,
    label: s.label
  })));
}
Object.assign(__ds_scope, { Stat, StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'light',
  bracket,
  style,
  ...rest
}) {
  const color = {
    light: 'var(--color-brand)',
    dark: 'var(--color-brand-soft)',
    brand: 'rgb(255 255 255 / .7)',
    muted: 'rgb(10 10 10 / .6)'
  }[tone];
  const bracketColor = tone === 'dark' ? 'var(--color-brand-soft)' : 'var(--color-brand)';
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: bracket ? 'rgb(10 10 10 / .6)' : color,
      ...style
    }
  }, rest), bracket ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: bracketColor
    }
  }, "["), " ", children, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: bracketColor
    }
  }, "]")) : children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = 'light',
  align = 'left',
  style
}) {
  const dark = tone === 'dark' || tone === 'brand';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 672,
      marginInline: align === 'center' ? 'auto' : undefined,
      textAlign: align,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: tone
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: '40px',
      letterSpacing: '-0.025em',
      color: dark ? '#fff' : 'var(--color-ink)',
      margin: '16px 0 0',
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 18,
      lineHeight: 1.625,
      color: tone === 'brand' ? 'rgb(255 255 255 / .85)' : dark ? 'rgb(255 255 255 / .7)' : 'rgb(10 10 10 / .7)',
      textWrap: 'pretty'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const paths = {
  whatsapp: 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm4.9 13.9c-.2.6-1.2 1.1-1.7 1.2-.4 0-.9.2-3.1-.7-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9 1-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.1.3.7 1.1 1.5 1.8 1 .9 1.8 1.2 2.1 1.3.3.1.4.1.6-.1l.9-1c.2-.3.4-.2.7-.1l2 .9c.3.2.5.2.6.4 0 .1 0 .7-.2 1.2Z',
  check: 'M4 12.5 9.5 18 20 6.5',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  spark: 'M12 3v3m6.4-.4-2.1 2.1M21 12h-3m.4 6.4-2.1-2.1M12 18v3m-6.4-.4 2.1-2.1M3 12h3m-.4-6.4 2.1 2.1',
  shield: 'M12 3 4.5 6v5.1c0 4.6 3.2 8.9 7.5 9.9 4.3-1 7.5-5.3 7.5-9.9V6L12 3Zm-2.8 9.2 2 2 3.8-4',
  pencil: 'M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Zm10-12 3 3',
  rocket: 'M14 4c-3.5.8-6.4 3.3-7.7 6.6L4 13l3 1 1 3 2.4-2.3C13.7 13.4 16.2 10.5 17 7l.3-3.3L14 4Zm-1 5a1.5 1.5 0 1 0 0 .01M6 18c-.7.7-1 2-1 3 1 0 2.3-.3 3-1s.7-1.6 0-2.3S6.7 17.3 6 18Z',
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  phone: 'M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z',
  burger: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18'
};
const iconNames = Object.keys(paths);
function Icon({
  name = 'arrow',
  size = 20,
  strokeWidth,
  style,
  ...rest
}) {
  const sw = strokeWidth ?? (name === 'burger' || name === 'close' ? 2 : 1.8);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: paths[name]
  }));
}
Object.assign(__ds_scope, { iconNames, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/CheckList.jsx
try { (() => {
function CheckList({
  items = [],
  tone = 'light',
  columns = 1,
  style,
  className
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("ul", {
    className: className,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      columnGap: 32,
      rowGap: 12,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 16,
      lineHeight: '24px',
      color: dark ? 'rgb(255 255 255 / .75)' : 'rgb(10 10 10 / .75)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    style: {
      marginTop: 4,
      color: dark ? 'var(--color-brand-soft)' : 'var(--color-brand)'
    }
  }), it)));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/content/GridPanel.jsx
try { (() => {
function GridPanel({
  columns = 3,
  children,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: 1,
      border: '1px solid rgb(10 10 10 / .15)',
      background: 'rgb(10 10 10 / .15)',
      ...style
    }
  }, children);
}
function GridCell({
  title,
  children,
  icon,
  number,
  style
}) {
  const body = /*#__PURE__*/React.createElement("p", {
    style: {
      margin: number ? '10px 0 0' : icon ? '8px 0 0' : '12px 0 0',
      fontSize: 16,
      lineHeight: 1.625,
      color: 'rgb(10 10 10 / .7)'
    }
  }, children);
  const heading = /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: number ? '16px 0 0' : 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '28px',
      color: 'var(--color-ink)'
    }
  }, title);
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--color-paper)',
      padding: 32,
      display: icon ? 'flex' : 'block',
      gap: 20,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 44,
      height: 44,
      flexShrink: 0,
      background: 'var(--color-brand)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), number && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1,
      color: 'var(--color-brand)'
    }
  }, number), icon ? /*#__PURE__*/React.createElement("div", null, heading, body) : /*#__PURE__*/React.createElement(React.Fragment, null, heading, body));
}
Object.assign(__ds_scope, { GridPanel, GridCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GridPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const sizeMap = {
  sm: {
    padding: '10px 20px',
    fontSize: 14,
    gap: 8,
    icon: 16
  },
  md: {
    padding: '14px 24px',
    fontSize: 16,
    gap: 10,
    icon: 20
  },
  lg: {
    padding: '14px 28px',
    fontSize: 16,
    gap: 10,
    icon: 20
  }
};
function Button({
  variant = 'primary',
  size = 'lg',
  icon,
  iconRight,
  fullWidth,
  href,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const s = sizeMap[size] || sizeMap.lg;
  const v = {
    primary: {
      background: hover ? 'var(--color-brand-deep)' : 'var(--color-brand)',
      color: '#fff',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: hover ? 'var(--color-brand)' : 'var(--color-ink)',
      border: `1px solid ${hover ? 'var(--color-brand)' : 'var(--color-ink)'}`
    },
    'outline-dark': {
      background: 'transparent',
      color: hover ? 'var(--color-brand-soft)' : '#fff',
      border: `1px solid ${hover ? 'var(--color-brand-soft)' : 'rgb(255 255 255 / .6)'}`
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      boxSizing: 'border-box',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      fontWeight: 600,
      lineHeight: 1.5,
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      textDecoration: 'none',
      transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
      ...v,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const files = {
  primary: {
    name: 'summergill-primary',
    ratio: 380 / 280
  },
  horizontal: {
    name: 'summergill-horizontal',
    ratio: 470 / 122
  },
  wordmark: {
    name: 'summergill-wordmark',
    ratio: 312 / 84
  },
  stacked: {
    name: 'summergill-stacked',
    ratio: 272 / 182
  },
  mark: {
    name: 'summergill-mark',
    ratio: 170 / 162
  }
};
files.compact = files.wordmark;
function Logo({
  variant = 'primary',
  tone = 'color',
  iconStyle = 'cobalt',
  height = 40,
  base = 'assets/logo/',
  alt = 'Summergill — Ideas | Systems | Growth',
  style,
  ...rest
}) {
  const prefix = base.endsWith('/') ? base : base + '/';
  if (variant === 'app-icon' || variant === 'avatar') {
    const w = variant === 'avatar' ? height * (142 / 144) : height * (150 / 148);
    return /*#__PURE__*/React.createElement("img", _extends({
      src: `${prefix}${variant}-${iconStyle}.png`,
      alt: "Summergill",
      style: {
        display: 'block',
        height,
        width: Math.round(w),
        ...style
      }
    }, rest));
  }
  const f = files[variant] || files.primary;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${prefix}${f.name}${tone === 'white' ? '-white' : ''}.png`,
    alt: alt,
    style: {
      display: 'block',
      height,
      width: Math.round(height * f.ratio),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = 'light',
  solid,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    lineHeight: '16px',
    letterSpacing: solid ? '0.1em' : '0.025em',
    fontWeight: solid ? 500 : 400,
    textTransform: 'uppercase',
    padding: '4px 12px'
  };
  const t = solid ? {
    background: 'var(--color-brand)',
    color: '#fff',
    border: '1px solid var(--color-brand)'
  } : tone === 'dark' ? {
    border: '1px solid rgb(255 255 255 / .15)',
    color: 'rgb(255 255 255 / .65)'
  } : {
    border: '1px solid rgb(10 10 10 / .15)',
    color: 'rgb(10 10 10 / .65)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChoiceChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function ChoiceChip({
  pressed,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const s = pressed ? {
    border: '1px solid var(--color-ink)',
    background: 'var(--color-ink)',
    color: '#fff'
  } : {
    border: `1px solid ${hover ? 'var(--color-brand)' : 'rgb(10 10 10 / .2)'}`,
    background: 'transparent',
    color: hover ? 'var(--color-brand)' : 'rgb(10 10 10 / .7)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": pressed ? 'true' : 'false',
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '8px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
      borderRadius: 0,
      cursor: 'pointer',
      transition: 'all .15s ease',
      ...s,
      ...style
    }
  }, rest), children);
}
function ChoiceGroup({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      ...style
    }
  }, options.map(o => /*#__PURE__*/React.createElement(ChoiceChip, {
    key: o,
    pressed: o === value,
    onClick: () => onChange && onChange(o)
  }, o)));
}
Object.assign(__ds_scope, { ChoiceChip, ChoiceGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChoiceChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function TextField({
  multiline,
  rows = 2,
  style,
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const El = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement(El, _extends({
    rows: multiline ? rows : undefined,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'block',
      padding: '12px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--color-ink)',
      background: 'var(--color-paper)',
      border: `1px solid ${focus ? 'var(--color-brand)' : 'rgb(10 10 10 / .2)'}`,
      borderRadius: 0,
      outline: 'none',
      boxShadow: focus ? '0 0 0 2px rgb(29 78 216 / .3)' : 'none',
      resize: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/marketing/DeviceShowcase.jsx
try { (() => {
function LaptopFrame({
  src,
  alt = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -12,
      left: '6%',
      width: '88%',
      height: 24,
      borderRadius: '100%',
      background: 'rgb(10 10 10 / .3)',
      filter: 'blur(16px)'
    }
  }), /*#__PURE__*/React.createElement("figure", {
    style: {
      position: 'relative',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 3.5%',
      overflow: 'hidden',
      borderRadius: '12px 12px 0 0',
      border: '1px solid rgb(255 255 255 / .1)',
      borderBottom: 0,
      background: 'var(--device-laptop)',
      padding: '1.6% 1.6% 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '0.7%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: '#737373'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: '2px 2px 0 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 16,
      borderRadius: '0 0 12px 12px',
      borderTop: '1px solid rgb(0 0 0 / .7)',
      background: 'linear-gradient(to bottom, #404040, #262626, #0a0a0a)',
      boxShadow: '0 14px 24px rgba(10,10,10,0.16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      height: '38%',
      width: 96,
      borderRadius: '0 0 6px 6px',
      background: 'rgb(0 0 0 / .5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 1,
      height: 1,
      background: 'rgb(255 255 255 / .15)'
    }
  }))));
}
function PhoneFrame({
  src,
  alt = '',
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      position: 'relative',
      margin: 0,
      overflow: 'hidden',
      borderRadius: 27,
      border: '6px solid var(--device-bezel)',
      background: 'var(--device-bezel)',
      boxShadow: '0 22px 35px rgba(10,10,10,0.3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1,
      height: 10,
      width: '34%',
      borderRadius: 9999,
      background: 'var(--device-bezel)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: 20
    }
  }));
}
function TabletFrame({
  src,
  alt = '',
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: className,
    style: {
      margin: 0,
      overflow: 'hidden',
      borderRadius: 18,
      border: '7px solid var(--device-bezel)',
      background: 'var(--device-bezel)',
      boxShadow: '0 22px 35px rgba(10,10,10,0.22)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      borderRadius: 9
    }
  }));
}
function DeviceShowcase({
  desktop,
  mobile,
  name = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingRight: 40,
      paddingBottom: 48,
      ...style
    }
  }, /*#__PURE__*/React.createElement(LaptopFrame, {
    src: desktop,
    alt: `${name} — desktop view on a laptop`
  }), mobile && /*#__PURE__*/React.createElement(PhoneFrame, {
    src: mobile,
    alt: `${name} — mobile view on a phone`,
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '23%',
      minWidth: 88
    }
  }));
}
Object.assign(__ds_scope, { LaptopFrame, PhoneFrame, TabletFrame, DeviceShowcase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/DeviceShowcase.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PriceCard.jsx
try { (() => {
function PriceCard({
  badge,
  title = 'Website build + care plan',
  build,
  wasBuild,
  buildNote = 'one-off build',
  monthly,
  wasMonthly,
  annual,
  note,
  cta = 'Claim a build slot',
  ctaHref,
  style
}) {
  const strike = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'rgb(255 255 255 / .4)',
    textDecoration: 'line-through'
  };
  const row = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    columnGap: 12,
    rowGap: 4
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      border: '1px solid var(--color-brand)',
      background: 'rgb(255 255 255 / .04)',
      padding: 40,
      color: '#fff',
      ...style
    }
  }, badge && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    solid: true
  }, badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '24px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: '32px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      marginTop: 20
    }
  }, wasBuild && /*#__PURE__*/React.createElement("span", {
    style: {
      ...strike,
      fontSize: 30,
      lineHeight: '36px'
    }
  }, wasBuild), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1
    }
  }, build), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.025em',
      textTransform: 'uppercase',
      color: 'rgb(255 255 255 / .55)'
    }
  }, buildNote)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      marginTop: 12
    }
  }, wasMonthly && /*#__PURE__*/React.createElement("span", {
    style: {
      ...strike,
      fontSize: 18,
      lineHeight: '28px'
    }
  }, wasMonthly), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: '32px',
      color: 'var(--color-brand-soft)'
    }
  }, monthly, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'rgb(255 255 255 / .55)'
    }
  }, "/mo")), annual && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'rgb(255 255 255 / .55)'
    }
  }, annual)), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 14,
      lineHeight: 1.625,
      color: 'rgb(255 255 255 / .55)'
    }
  }, note), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    fullWidth: true,
    icon: "whatsapp",
    href: ctaHref,
    style: {
      marginTop: 28
    }
  }, cta));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PromoBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function PromoBanner({
  children,
  href = '#pricing',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      background: 'var(--color-ink)',
      padding: '8px 16px',
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 500,
      letterSpacing: '0.025em',
      color: hover ? '#fff' : 'rgb(255 255 255 / .8)',
      textDecoration: 'none',
      transition: 'color .15s ease',
      ...style
    }
  }, rest), children);
}
function Hi({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand-soft)'
    }
  }, children);
}
Object.assign(__ds_scope, { PromoBanner, Hi });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Closing.jsx
try { (() => {
const {
  SectionHeader: CSectionHeader,
  FaqList,
  Eyebrow: CEyebrow,
  ChoiceGroup,
  TextField,
  Button: CButton,
  Icon: CIcon
} = window.SummergillDesignSystem_2a6cb4;
function Faq() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "faq",
    bg: "var(--color-paper)",
    narrow: true
  }, /*#__PURE__*/React.createElement(CSectionHeader, {
    eyebrow: "06 / Questions",
    title: "Asked honestly, answered honestly."
  }), /*#__PURE__*/React.createElement(FaqList, {
    items: window.SG.faqs,
    style: {
      marginTop: 40
    }
  }));
}
function About() {
  const {
    brand
  } = window.SG;
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)",
    narrow: true,
    py: "sg-sec-about"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(CSectionHeader, {
    align: "center",
    style: {
      maxWidth: 'none'
    },
    eyebrow: "07 / Who you\u2019re dealing with",
    title: "Two builders. No account managers."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 0',
      maxWidth: 672,
      fontSize: 18,
      lineHeight: 1.625,
      color: 'rgb(10 10 10 / .7)'
    }
  }, "Summergill is ", /*#__PURE__*/React.createElement("strong", null, "Summers & Gill"), " \u2014 two people who design, build and look after every site personally. ", brand.basedIn, ", reachable on WhatsApp, and small enough to care whether your site actually brings in work. Part of ", brand.parentCompany, ".")));
}
function Enquire() {
  const {
    brand,
    enquiry,
    wa
  } = window.SG;
  const [type, setType] = React.useState(enquiry.businessTypes[0]);
  const [status, setStatus] = React.useState(enquiry.siteStatus[0]);
  const [name, setName] = React.useState('');
  const [note, setNote] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const parts = [`Hi Summergill — I'd like to talk about a website.`, `Business: ${type}.`, `Current site: ${status}.`];
  if (name.trim()) parts.push(`I'm ${name.trim()}.`);
  if (note.trim()) parts.push(note.trim());
  const message = parts.join(' ');
  const li = {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "enquire",
    className: "sg-sec",
    style: {
      background: 'var(--color-brand)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container sg-enq"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CSectionHeader, {
    tone: "brand",
    eyebrow: "08 / Start the conversation",
    title: "Tell us about your business. We\u2019ll tell you the truth.",
    lead: "Two taps and a name \u2014 we\u2019ll start a WhatsApp message for you. If a website genuinely won\u2019t help your business, we\u2019ll say so and save you the money."
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '28px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      color: 'rgb(255 255 255 / .85)'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: li
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "whatsapp"
  }), /*#__PURE__*/React.createElement("span", null, "WhatsApp-first \u2014 ", brand.whatsappDisplay, ". Start with a message, happy to jump on a call from there.")), /*#__PURE__*/React.createElement("li", {
    style: li
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "bolt"
  }), /*#__PURE__*/React.createElement("span", null, "Straight answers on price and what you\u2019ll get, same day")), /*#__PURE__*/React.createElement("li", {
    style: li
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "shield"
  }), /*#__PURE__*/React.createElement("span", null, "Nothing sends until you press send")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-paper)',
      color: 'var(--color-ink)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement(CEyebrow, null, "Step 1 \xB7 What do you do?"), /*#__PURE__*/React.createElement(ChoiceGroup, {
    options: enquiry.businessTypes,
    value: type,
    onChange: setType,
    style: {
      marginTop: 12
    }
  }), /*#__PURE__*/React.createElement(CEyebrow, {
    style: {
      marginTop: 24
    }
  }, "Step 2 \xB7 Where\u2019s your website at?"), /*#__PURE__*/React.createElement(ChoiceGroup, {
    options: enquiry.siteStatus,
    value: status,
    onChange: setStatus,
    style: {
      marginTop: 12
    }
  }), /*#__PURE__*/React.createElement(CEyebrow, {
    style: {
      marginTop: 24
    }
  }, "Step 3 \xB7 Your name & business"), /*#__PURE__*/React.createElement(TextField, {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "e.g. Sam \u2014 Sam\u2019s Barbershop",
    style: {
      marginTop: 12
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    multiline: true,
    rows: 2,
    value: note,
    onChange: e => setNote(e.target.value),
    placeholder: "Anything else worth knowing? (optional)",
    style: {
      marginTop: 12
    }
  }), /*#__PURE__*/React.createElement(CButton, {
    fullWidth: true,
    size: "md",
    icon: "whatsapp",
    href: wa(message),
    onClick: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      marginTop: 24
    }
  }, "Send it over WhatsApp"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      border: '1px solid var(--color-brand)',
      padding: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: 1.6,
      color: 'rgb(10 10 10 / .7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand)',
      letterSpacing: '0.1em'
    }
  }, "PREVIEW \xB7 WOULD OPEN WHATSAPP WITH:"), /*#__PURE__*/React.createElement("br", null), message) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'rgb(10 10 10 / .45)'
    }
  }, "OPENS WHATSAPP WITH THE MESSAGE FILLED IN \u2014 NOTHING SENDS UNTIL YOU PRESS SEND."))));
}
Object.assign(window, {
  Faq,
  About,
  Enquire
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Logo: HLogo,
  Button: HButton,
  Icon: HIcon,
  PromoBanner,
  Hi
} = window.SummergillDesignSystem_2a6cb4;
const navItems = [{
  href: '#work',
  label: 'Our work'
}, {
  href: '#pricing',
  label: 'Pricing'
}, {
  href: '#guarantee',
  label: 'Our promise'
}, {
  href: '#faq',
  label: 'FAQ'
}];
function NavLink({
  href,
  children,
  onNav
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: e => onNav(e, href),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: h ? 'var(--color-brand)' : 'rgb(10 10 10 / .7)',
      textDecoration: 'none',
      transition: 'color .15s'
    }
  }, children);
}
function Header({
  scrolled,
  onNav
}) {
  const {
    promo,
    pricing,
    wa,
    defaultEnquiry,
    brand
  } = window.SG;
  const [open, setOpen] = React.useState(false);
  const go = (e, href) => {
    setOpen(false);
    onNav(e, href);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50
    }
  }, promo.enabled && promo.slotsLeft > 0 && /*#__PURE__*/React.createElement(PromoBanner, {
    href: "#pricing",
    onClick: e => go(e, '#pricing')
  }, "LIMITED PROMOTION \u2014 ", promo.slotsTotal, " BUILD SLOTS: ", /*#__PURE__*/React.createElement(Hi, null, pricing.promo.build), " BUILD + ", /*#__PURE__*/React.createElement(Hi, null, pricing.promo.monthly, "/MO"), " (USUALLY ", pricing.standard.build, ") \xB7 ", promo.slotsLeft, "/", promo.slotsTotal, " LEFT"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--color-line)',
      background: 'rgb(255 255 255 / .95)',
      backdropFilter: 'blur(8px)',
      boxShadow: scrolled ? 'var(--shadow-header)' : 'none',
      transition: 'all .3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      paddingTop: scrolled ? 10 : 16,
      paddingBottom: scrolled ? 10 : 16,
      transition: 'all .3s'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => go(e, '#top'),
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(HLogo, {
    variant: "wordmark",
    height: scrolled ? 34 : 40,
    base: "../../assets/logo/",
    style: {
      transition: 'height .3s, width .3s'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "sg-desk",
    style: {
      alignItems: 'center',
      gap: 28
    }
  }, navItems.map(n => /*#__PURE__*/React.createElement(NavLink, {
    key: n.href,
    href: n.href,
    onNav: go
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(HButton, {
    className: "sg-sm-up",
    size: "sm",
    icon: "whatsapp",
    href: wa(defaultEnquiry),
    target: "_blank",
    rel: "noopener"
  }, "WhatsApp us"), /*#__PURE__*/React.createElement("button", {
    className: "sg-mob",
    type: "button",
    "aria-label": open ? 'Close menu' : 'Open menu',
    onClick: () => setOpen(!open),
    style: {
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgb(10 10 10 / .15)',
      background: 'var(--color-paper)',
      color: 'var(--color-ink)',
      cursor: 'pointer',
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement(HIcon, {
    name: open ? 'close' : 'burger',
    size: 24
  })))), open && /*#__PURE__*/React.createElement("nav", {
    className: "sg-mob-block",
    style: {
      borderTop: '1px solid var(--color-line)',
      padding: '4px 16px 16px'
    }
  }, navItems.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.href,
    href: n.href,
    onClick: e => go(e, n.href),
    style: {
      display: 'block',
      borderBottom: '1px solid var(--color-line)',
      padding: '14px 0',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-ink)',
      textDecoration: 'none'
    }
  }, n.label)), /*#__PURE__*/React.createElement(HButton, {
    fullWidth: true,
    size: "md",
    icon: "whatsapp",
    href: wa(defaultEnquiry),
    target: "_blank",
    style: {
      marginTop: 16,
      padding: '12px 16px'
    }
  }, "WhatsApp ", brand.whatsappDisplay))));
}
function Footer() {
  const {
    brand,
    wa,
    defaultEnquiry
  } = window.SG;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-ink)',
      padding: '48px 0',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      borderBottom: '1px solid rgb(255 255 255 / .15)',
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement(HLogo, {
    variant: "horizontal",
    tone: "white",
    height: 44,
    base: "../../assets/logo/"
  }), /*#__PURE__*/React.createElement(HButton, {
    size: "sm",
    href: wa(defaultEnquiry),
    target: "_blank"
  }, "WhatsApp ", brand.whatsappDisplay)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 8,
      paddingTop: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.025em',
      textTransform: 'uppercase',
      color: 'rgb(255 255 255 / .45)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\xA9 ", new Date().getFullYear(), " ", brand.name, " \xB7 ", brand.basedIn, " \xB7 A ", brand.parentCompany, " brand"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Websites done properly."))));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button: HeroButton,
  Eyebrow: HeroEyebrow,
  StatRow
} = window.SummergillDesignSystem_2a6cb4;
const SB_SOURCES = ['GOOGLE SEARCH', 'MAPS', 'INSTAGRAM BIO', 'WORD OF MOUTH'];
const SB_TRACES = ['M30 90 H105 V220 H188', 'M30 190 H130 V233 H188', 'M30 290 H130 V247 H188', 'M30 390 H105 V260 H188'];
const SB_Y = [90, 190, 290, 390];
const SB_MSGS = ['“Hi — are you free this week?”', '“Can I book you for Friday?”', '“Have you got a table for six?”', '“How much for a full rewire?”', '“Do you do same-day repairs?”'];
function Switchboard() {
  const ref = React.useRef(null);
  const [live, setLive] = React.useState({
    src: -1,
    out: false,
    hub: false,
    phone: false,
    chip: false,
    msg: 0
  });
  React.useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLive(l => ({
        ...l,
        chip: true
      }));
      return;
    }
    let alive = true,
      last = -1,
      msg = 0;
    const pulse = svg.querySelector('[data-pulse]');
    const wait = ms => new Promise(r => setTimeout(r, ms));
    const travel = (path, dur) => new Promise(res => {
      const len = path.getTotalLength(),
        t0 = performance.now();
      pulse.setAttribute('opacity', '1');
      const step = now => {
        const t = Math.min((now - t0) / dur, 1);
        const p = path.getPointAtLength(t * len);
        pulse.setAttribute('cx', p.x);
        pulse.setAttribute('cy', p.y);
        if (t < 1 && alive) requestAnimationFrame(step);else {
          pulse.setAttribute('opacity', '0');
          res();
        }
      };
      requestAnimationFrame(step);
    });
    (async () => {
      await wait(800);
      while (alive) {
        let i = Math.floor(Math.random() * 4);
        if (i === last) i = (i + 1) % 4;
        last = i;
        setLive(l => ({
          ...l,
          src: i
        }));
        await travel(svg.querySelector(`[data-trace="${i}"]`), 850);
        setLive(l => ({
          ...l,
          src: -1,
          hub: true
        }));
        await wait(240);
        setLive(l => ({
          ...l,
          hub: false,
          out: true
        }));
        await travel(svg.querySelector('[data-trace="out"]'), 600);
        setLive(l => ({
          ...l,
          out: false,
          phone: true,
          chip: true,
          msg
        }));
        msg = (msg + 1) % SB_MSGS.length;
        await wait(2300);
        setLive(l => ({
          ...l,
          phone: false,
          chip: false
        }));
        await wait(900 + Math.random() * 1600);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);
  const brand = 'var(--color-brand)';
  const lbl = {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '0.12em'
  };
  return /*#__PURE__*/React.createElement("svg", {
    ref: ref,
    viewBox: "0 0 440 480",
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    },
    role: "img",
    "aria-label": "Diagram: enquiries route through your website to your phone as WhatsApp messages"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "sb-grid",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "1.5",
    height: "1.5",
    fill: "rgb(10 10 10 / .07)"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "24",
    width: "440",
    height: "412",
    fill: "url(#sb-grid)"
  }), SB_TRACES.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    "data-trace": i,
    fill: "none",
    stroke: live.src === i ? brand : 'rgb(10 10 10 / .18)',
    strokeWidth: "1",
    style: {
      transition: 'stroke .25s'
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: "M252 240 H385",
    "data-trace": "out",
    fill: "none",
    stroke: live.out ? brand : 'rgb(10 10 10 / .18)',
    strokeWidth: "1"
  }), SB_SOURCES.map((s, i) => /*#__PURE__*/React.createElement("g", {
    key: s
  }, /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: SB_Y[i] - 16,
    style: lbl,
    fill: live.src === i ? brand : 'rgb(10 10 10 / .55)'
  }, s), /*#__PURE__*/React.createElement("rect", {
    x: "20.5",
    y: SB_Y[i] - 5.5,
    width: "10",
    height: "10",
    fill: "#fff",
    stroke: live.src === i ? brand : 'rgb(10 10 10 / .45)'
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "188",
    y: "208",
    width: "64",
    height: "64",
    fill: brand,
    style: {
      transformBox: 'fill-box',
      transformOrigin: 'center',
      transform: live.hub ? 'scale(1.08)' : 'none',
      transition: 'transform .22s'
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: "220",
    y: "292",
    textAnchor: "middle",
    style: lbl,
    fill: "rgb(10 10 10 / .55)"
  }, "YOUR WEBSITE"), /*#__PURE__*/React.createElement("g", {
    stroke: live.phone ? brand : 'rgb(10 10 10 / .6)',
    strokeWidth: "1",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "385.5",
    y: "208.5",
    width: "34",
    height: "63",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "394",
    y1: "217.5",
    x2: "411",
    y2: "217.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "400.5",
    y: "260.5",
    width: "4",
    height: "4"
  })), /*#__PURE__*/React.createElement("text", {
    x: "402",
    y: "292",
    textAnchor: "middle",
    style: lbl,
    fill: "rgb(10 10 10 / .55)"
  }, "YOU"), /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: live.chip ? 1 : 0,
      transform: live.chip ? 'none' : 'translateY(6px)',
      transition: 'opacity .3s, transform .3s'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "402",
    y1: "180",
    x2: "402",
    y2: "204",
    stroke: brand,
    strokeDasharray: "2 3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "225",
    y: "148",
    width: "196",
    height: "32",
    fill: "#fff",
    stroke: brand
  }), /*#__PURE__*/React.createElement("text", {
    x: "323",
    y: "168",
    textAnchor: "middle",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5
    },
    fill: "var(--color-ink)"
  }, SB_MSGS[live.msg])), /*#__PURE__*/React.createElement("circle", {
    r: "3.5",
    "data-pulse": "",
    opacity: "0",
    fill: brand
  }), /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "464",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      letterSpacing: '0.14em'
    },
    fill: "rgb(10 10 10 / .4)"
  }, "FIG. 01 \u2014 HOW A SUMMERGILL SITE WORKS"));
}
function Hero({
  onNav
}) {
  const {
    promo,
    pricing,
    wa,
    defaultEnquiry,
    brand
  } = window.SG;
  const active = promo.enabled && promo.slotsLeft > 0;
  const build = active ? pricing.promo.build : pricing.standard.build;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "sg-hero",
    style: {
      background: 'var(--color-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-xl",
    style: {
      position: 'absolute',
      top: '50%',
      right: 0,
      width: 420,
      transform: 'translateY(-50%)'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Switchboard, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 768
    }
  }, /*#__PURE__*/React.createElement(HeroEyebrow, {
    bracket: true,
    style: {
      marginBottom: 24
    }
  }, "Hand-built websites \xB7 UK based"), /*#__PURE__*/React.createElement("h1", {
    className: "sg-h1",
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      lineHeight: 0.98,
      letterSpacing: '-0.025em',
      color: 'var(--color-ink)'
    }
  }, "Your business deserves", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand)'
    }
  }, "a proper website.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      maxWidth: 672,
      fontSize: 18,
      lineHeight: 1.625,
      color: 'rgb(10 10 10 / .7)'
    }
  }, "No website? A site from 2014 that nobody can read on a phone? We build fast, hand-made websites for local businesses that turn searches into customers \u2014 live in two weeks, from ", build, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(HeroButton, {
    icon: "whatsapp",
    href: wa(defaultEnquiry),
    target: "_blank"
  }, "WhatsApp us about yours"), /*#__PURE__*/React.createElement(HeroButton, {
    variant: "outline",
    iconRight: "arrow",
    href: "#work",
    onClick: e => onNav(e, '#work')
  }, "See our work")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1.625,
      color: 'rgb(10 10 10 / .5)'
    }
  }, brand.whatsappDisplay, " \u2014 message us what you do and we\u2019ll reply with straight answers. WhatsApp first, calls whenever they\u2019re useful."))), /*#__PURE__*/React.createElement(StatRow, {
    className: "sg-stats",
    style: {
      marginTop: 64
    },
    stats: [{
      value: '2 wks',
      label: 'from first chat to live'
    }, {
      value: '100%',
      label: 'hand-built, no templates'
    }, {
      value: build,
      label: active ? 'build price this round' : 'one-off build price'
    }, {
      value: '0',
      label: 'surprise invoices, ever'
    }]
  })));
}
Object.assign(window, {
  Hero,
  Switchboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const {
  SectionHeader,
  GridPanel,
  GridCell,
  Tag: STag,
  PriceCard,
  CheckList,
  LaptopFrame,
  PhoneFrame,
  TabletFrame
} = window.SummergillDesignSystem_2a6cb4;
function Section({
  id,
  bg,
  children,
  narrow,
  py
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: py || 'sg-sec',
    style: {
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sg-container",
    style: narrow ? {
      maxWidth: 896
    } : null
  }, children));
}
function Problem() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "01 / The problem",
    title: "Good businesses lose work to worse ones with better websites.",
    lead: "You\u2019re brilliant at what you do. But online, nobody can tell \u2014 and that\u2019s the only place new customers are looking."
  }), /*#__PURE__*/React.createElement(GridPanel, {
    columns: 3,
    className: "sg-grid3",
    style: {
      marginTop: 48
    }
  }, window.SG.problems.map(p => /*#__PURE__*/React.createElement(GridCell, {
    key: p.title,
    title: p.title
  }, p.body))));
}
function Proof() {
  const img = (id, v) => `../../assets/proof/${id}-${v}.png`;
  return /*#__PURE__*/React.createElement(Section, {
    id: "work",
    bg: "var(--color-paper)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "02 / Our work",
    title: "Built by hand. Sharp on every screen.",
    lead: "Every site shown exactly as it renders on desktop, tablet and phone \u2014 because that\u2019s where your customers actually are."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 96
    }
  }, window.SG.proof.map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: p.id,
    className: `sg-proof ${i % 2 ? 'sg-proof-rev' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingRight: 40,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement(LaptopFrame, {
    src: img(p.id, 'desktop'),
    alt: `${p.name} — desktop view on a laptop`
  }), /*#__PURE__*/React.createElement(PhoneFrame, {
    src: img(p.id, 'mobile'),
    alt: `${p.name} — mobile view`,
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '23%',
      minWidth: 88
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: '32px'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 18,
      lineHeight: 1.625,
      color: 'rgb(10 10 10 / .7)'
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(STag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement(TabletFrame, {
    className: "sg-lg",
    src: img(p.id, 'tablet'),
    alt: `${p.name} — tablet view`,
    style: {
      marginTop: 36,
      maxWidth: 320
    }
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '64px 0 0',
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.025em',
      textTransform: 'uppercase',
      color: 'rgb(10 10 10 / .45)'
    }
  }, "More builds joining the wall soon \u2014 including a few we can\u2019t show off quite yet."));
}
function Pricing() {
  const {
    promo,
    pricing,
    wa,
    defaultEnquiry
  } = window.SG;
  const active = promo.enabled && promo.slotsLeft > 0;
  const price = active ? pricing.promo : pricing.standard;
  const msg = active ? "Hi Summergill — I'd like to claim one of the five promotional build slots for my business." : defaultEnquiry;
  return /*#__PURE__*/React.createElement(Section, {
    id: "pricing",
    bg: "var(--color-ink)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "03 / Pricing",
    title: "One clear price. Everything included.",
    lead: "No quotes that triple halfway through. A one-off build fee, then a simple pay monthly plan that covers everything your website needs to stay fast, live and yours."
  }), /*#__PURE__*/React.createElement("div", {
    className: active ? 'sg-price-grid' : '',
    style: {
      marginTop: 48,
      display: 'grid',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PriceCard, {
    badge: active ? `Limited promotion — ${promo.slotsTotal} slots` : null,
    wasBuild: active ? pricing.standard.build : null,
    build: price.build,
    buildNote: price.buildNote,
    wasMonthly: active ? pricing.standard.monthly : null,
    monthly: price.monthly,
    annual: price.annual,
    note: "Same site, same care, whatever you pay. The build fee is the only one-off cost \u2014 everything below is in the plan.",
    cta: active ? 'Claim a build slot' : 'Get started',
    ctaHref: wa(msg)
  }), active && /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '1px solid rgb(255 255 255 / .15)',
      padding: 40,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '28px'
    }
  }, "Why ", pricing.promo.build, "?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 14,
      lineHeight: 1.625,
      color: 'rgb(255 255 255 / .7)'
    }
  }, promo.reason), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 14,
      lineHeight: 1.625,
      color: 'rgb(255 255 255 / .7)'
    }
  }, "When they\u2019re filled, the standard rate of ", pricing.standard.build, " + ", pricing.standard.monthly, "/mo applies.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '32px 0 0',
      borderTop: '1px solid rgb(255 255 255 / .15)',
      paddingTop: 20,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-brand-soft)'
    }
  }, promo.slotsLeft, " of ", promo.slotsTotal, " slots open"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      border: '1px solid rgb(255 255 255 / .15)',
      padding: 40,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '28px'
    }
  }, "Every plan includes"), /*#__PURE__*/React.createElement(CheckList, {
    tone: "dark",
    columns: 3,
    className: "sg-check",
    items: pricing.included,
    style: {
      marginTop: 24
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      borderTop: '1px solid rgb(255 255 255 / .15)',
      paddingTop: 20,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1.625,
      color: 'rgb(255 255 255 / .45)'
    }
  }, "BIGGER JOBS \u2014 EXTRA PAGES, BOOKINGS, ORDERING \u2014 GET A FIXED QUOTE UP FRONT. NEVER AN HOURLY SURPRISE.")));
}
function Guarantee() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "guarantee",
    bg: "var(--color-paper)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "04 / The Summergill promise",
    title: "Everything the web industry gets wrong, in reverse.",
    lead: "Agencies register your domain to themselves, bill by the surprise hour and make leaving painful. We built Summergill to be the opposite \u2014 in writing."
  }), /*#__PURE__*/React.createElement(GridPanel, {
    columns: 2,
    style: {
      marginTop: 48
    }
  }, window.SG.guarantee.map(g => /*#__PURE__*/React.createElement(GridCell, {
    key: g.title,
    icon: g.icon,
    title: g.title
  }, g.body))));
}
function Process() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "05 / How it works",
    title: "Three steps. Two weeks. Zero jargon."
  }), /*#__PURE__*/React.createElement(GridPanel, {
    columns: 3,
    style: {
      marginTop: 48
    }
  }, window.SG.process.map(s => /*#__PURE__*/React.createElement(GridCell, {
    key: s.step,
    number: `0${s.step}`,
    title: s.title
  }, s.body))));
}
Object.assign(window, {
  Section,
  Problem,
  Proof,
  Pricing,
  Guarantee,
  Process
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Content mirrored from src/data/site.ts
window.SG = {
  brand: {
    name: 'Summergill',
    whatsappNumber: '447305517515',
    whatsappDisplay: '07305 517 515',
    parentCompany: 'Rippers Golf Ltd',
    basedIn: 'UK based'
  },
  wa: m => `https://wa.me/447305517515?text=${encodeURIComponent(m)}`,
  defaultEnquiry: "Hi Summergill — I'd like to talk about a website for my business.",
  promo: {
    enabled: true,
    slotsTotal: 5,
    slotsLeft: 5,
    reason: 'Every site is hand-built — there are two of us and no production line. So we open a handful of build slots at a time and price them to fill quickly. This round: five.'
  },
  pricing: {
    standard: {
      build: '£850',
      buildNote: 'one-off build',
      monthly: '£39',
      annual: 'or £390/yr — two months free'
    },
    promo: {
      build: '£495',
      buildNote: 'one-off build',
      monthly: '£29',
      annual: 'or £290/yr — two months free'
    },
    included: ['Hand-built design — no templates, no page builders', 'Mobile-first and fast on every screen', 'WhatsApp-first enquiry tools that turn visits into messages', 'Copy written for you from your business info', 'Hosting, SSL and uptime monitoring', 'Your domain name, registered to you, renewals covered', 'Small content changes included every month', 'SEO foundations + Google Business Profile help', 'Live within two weeks of our first chat']
  },
  problems: [{
    title: 'Invisible on Google',
    body: 'When someone local searches for what you do and you’re not there, the job goes to whoever is. Every week, quietly, to a competitor.'
  }, {
    title: 'A site that ages you',
    body: 'Stanford’s web credibility research found ~75% of people judge a business by its website design. A 2014 relic doesn’t say “established” — it says “closed”.'
  }, {
    title: 'Visitors with no next step',
    body: 'Most small-business sites bury the phone number and hope. Ours put a one-tap WhatsApp message in front of every visitor, on every screen.'
  }],
  guarantee: [{
    icon: 'shield',
    title: 'Your domain, your content. Always.',
    body: 'The domain is registered to you, not us. Nothing about your business is ever held hostage.'
  }, {
    icon: 'pencil',
    title: 'Flat monthly. No surprise invoices.',
    body: 'Small changes are included in the plan. Bigger jobs get a fixed quote before we lift a finger — never an hourly bill you didn’t see coming.'
  }, {
    icon: 'arrow',
    title: 'Leave with everything.',
    body: 'After the first 12 months you can walk away any time, and we hand over the full site files and your domain. No exit fees, no fuss.'
  }, {
    icon: 'spark',
    title: 'Quality is non-negotiable.',
    body: 'Every site is built by hand to the same standard — whatever the price. If it isn’t good enough to go in our portfolio, it doesn’t ship.'
  }],
  process: [{
    step: '1',
    title: 'Chat',
    body: 'WhatsApp us about your business. We’ll tell you straight what a site can and can’t do for you — and exactly what it costs.'
  }, {
    step: '2',
    title: 'Build',
    body: 'We design and build it by hand, write the copy from your business info, and show you everything before launch. Live within two weeks.'
  }, {
    step: '3',
    title: 'Grow',
    body: 'We host it, watch it, and keep it fresh month to month. You get on with the day job while the site brings the work in.'
  }],
  proof: [{
    id: 'sd',
    name: 'Simon Dyson Performance Academy',
    blurb: 'Booking-focused coaching site for a 6× DP World Tour winner — built to turn searches into lessons at Mottram Hall.',
    tags: ['Sports & coaching', 'Booking-led', 'simondyson.com']
  }, {
    id: 'gcl',
    name: 'Golf Coach Launch',
    blurb: 'Brand and conversion site for a coaching growth system — positioning, case study and call-booking in one page.',
    tags: ['B2B services', 'Lead generation']
  }],
  faqs: [{
    q: 'Do I actually own my domain?',
    a: 'Yes — it’s registered to you from day one. We manage and renew it as part of your plan, but it’s yours. Most agencies register it to themselves; we think that’s wrong.'
  }, {
    q: 'What does the pay monthly plan cover?',
    a: 'Hosting, SSL, uptime monitoring, your domain renewals, and small content changes each month — new prices, photos, opening hours, that sort of thing. You message us, it gets done.'
  }, {
    q: 'What if I want to leave?',
    a: 'After the first 12 months, leave any time with 30 days’ notice. You get the complete site files and your domain handed over. No exit fees.'
  }, {
    q: 'How fast will my site be live?',
    a: 'Two weeks from our first proper chat, usually quicker. You see and approve everything before it goes live.'
  }, {
    q: 'Why are you cheaper than agencies?',
    a: 'There are two of us, no office and no account managers — and we build on modern foundations that don’t need constant patching. The saving is structural, not a quality cut.'
  }, {
    q: 'My business is a bit different — can you handle it?',
    a: 'Probably. Bookings, menus, galleries, quote tools — message us what you do and we’ll tell you honestly whether we’re the right fit.'
  }],
  enquiry: {
    businessTypes: ['Trades & services', 'Shop or salon', 'Food & drink', 'Sports & coaching', 'Something else'],
    siteStatus: ['No website yet', 'Outdated site', 'Site exists, brings in nothing']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.FaqList = __ds_scope.FaqList;

__ds_ns.GridPanel = __ds_scope.GridPanel;

__ds_ns.GridCell = __ds_scope.GridCell;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ChoiceChip = __ds_scope.ChoiceChip;

__ds_ns.ChoiceGroup = __ds_scope.ChoiceGroup;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.LaptopFrame = __ds_scope.LaptopFrame;

__ds_ns.PhoneFrame = __ds_scope.PhoneFrame;

__ds_ns.TabletFrame = __ds_scope.TabletFrame;

__ds_ns.DeviceShowcase = __ds_scope.DeviceShowcase;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.Hi = __ds_scope.Hi;

})();
