The Summergill logo — use wherever the brand mark appears. **Primary** (stacked with strapline) is the master logo; use horizontal / wordmark where height is tight.

```jsx
<Logo base="../../assets/logo/" />                         {/* primary */}
<Logo variant="wordmark" height={36} />                    {/* site header */}
<Logo variant="horizontal" tone="white" height={44} />     {/* on ink / navy / cobalt */}
<Logo variant="stacked" height={80} />
<Logo variant="mark" height={32} />
<Logo variant="app-icon" iconStyle="navy" height={64} />
<Logo variant="avatar" iconStyle="cobalt" height={48} />
```

- Colour versions only on paper/surface/light blue. On dark or cobalt grounds use `tone="white"` (or the `-on-navy` / `-on-cobalt` tiles in assets/logo).
- Never recolour, outline, stretch or re-typeset the wordmark.
- `base` must point at `assets/logo/` relative to the consuming page.
