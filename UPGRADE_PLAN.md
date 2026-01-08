# Package Upgrade Plan - tang.is

**Generated**: 2026-01-08
**Current Status**: 32 security vulnerabilities (1 Critical, 7 High, 18 Moderate, 6 Low)
**Build Status**: ✅ Passing

---

## Repository Analysis

### Tech Stack
- **Framework**: Next.js 12.2.5 (Pages Router)
- **UI Library**: React 18.2.0
- **Styling**: Theme UI 0.15.0-develop.5 + Emotion
- **Data Fetching**: SWR 1.3.0
- **Language**: TypeScript 4.7.4
- **Package Manager**: Yarn 1.22.22

### Current Feature Usage

#### Next.js Features Used
- ✅ Pages Router (`pages/` directory)
- ✅ Custom `_app.tsx` with ThemeProvider
- ✅ Custom `_document.tsx` (class-based with `getInitialProps`)
- ✅ API Routes (`pages/api/now-playing.tsx`)
- ✅ `next/link` with old pattern (passHref + child `<a>`)
- ✅ `next/head` for meta tags
- ✅ Manual font preloading in `_document.tsx`
- ❌ **NOT USED**: `next/image`, App Router, Middleware

#### Dependencies Used
- ✅ **Theme UI**: Heavy usage (ThemeProvider, useColorMode, InitializeColorMode, sx prop)
- ✅ **React Icons**: FiSun, FiMoon, IoTriangleSharp
- ✅ **SWR**: Data fetching for Spotify API
- ✅ **Vercel Analytics**: Old version (0.1.3)
- ❌ **NOT USED**: framer-motion (can remove)
- ❌ **NOT USED**: @mdx-js/react (can remove)
- ❌ **NOT USED**: remark/remark-html (can remove if not needed)

#### TypeScript Patterns
- Using `any` types in some places (e.g., `links.tsx:7`)
- Older type definitions (@types/react 18.0.17 vs React 18.2.0)

---

## Migration Strategy: Staged Approach

### Stage 1: Security Patches & Cleanup (LOW RISK)
**Goal**: Fix security vulnerabilities without breaking changes
**Estimated Impact**: Minimal testing needed

#### 1.1 Remove Unused Dependencies
```bash
yarn remove framer-motion @mdx-js/react remark remark-html
```
**Why**: These packages are installed but never imported/used
**Risk**: None - not being used

#### 1.2 Update Minor/Patch Versions
```json
{
  "@emotion/react": "11.9.0 → 11.14.0",
  "@emotion/styled": "11.8.1 → 11.14.1",
  "theme-ui": "0.15.0-develop.5 → 0.17.4",
  "gray-matter": "4.0.3 → 4.0.3" (check latest),
  "@types/node": "17.0.35 → 17.0.45"
}
```
**Why**: Backward compatible, bug fixes
**Risk**: Very low

#### 1.3 Update ESLint Config
```json
{
  "eslint-config-prettier": "8.5.0 → 8.10.2"
}
```
**Why**: Compatible with current ESLint 8.22.0
**Risk**: Very low

**Testing**: Run `yarn build && yarn lint`

---

### Stage 2: Next.js 12 → 13 (MODERATE RISK)
**Goal**: Get security fixes while staying on Pages Router
**Estimated Impact**: Code changes required

#### 2.1 Update Core Dependencies
```json
{
  "next": "12.2.5 → 13.5.7",
  "eslint-config-next": "12.2.5 → 13.5.7"
}
```

#### 2.2 Code Changes Required

**File: `components/nav.tsx:25-35`**
```tsx
// OLD (Next.js 12)
<Link href="/" passHref>
  <a aria-label="Go to Mike Tang's home page" sx={{ variant: 'links.logo', maxHeight: '24px' }}>
    <Logo />
  </a>
</Link>

// NEW (Next.js 13)
<Link
  href="/"
  aria-label="Go to Mike Tang's home page"
  sx={{ variant: 'links.logo', maxHeight: '24px' }}
>
  <Logo />
</Link>
```
**Why**: Next.js 13 automatically wraps Link children in `<a>`, no longer need `passHref`
**Impact**: 1 file to update

**File: `pages/_document.tsx`**
```tsx
// Consider updating to functional component pattern
// Current: Class-based with getInitialProps (still works in Next 13)
// Future: Could migrate to Document component without getInitialProps
```
**Why**: Modern pattern, but current code still works
**Impact**: Optional - can defer to later

**Font Loading Strategy**
- Current: Manual `<link rel="preload">` in `_document.tsx`
- Next.js 13 has `next/font` but it's optional
- **Decision**: Keep current approach or migrate to `next/font`

#### 2.3 Verify Vercel Analytics Compatibility
```json
{
  "@vercel/analytics": "0.1.3 → 0.1.11"
}
```
**Why**: Stay on 0.x for Next.js 13 compatibility
**Note**: Version 1.x requires Next.js 13.4+

**Testing**:
- Run `yarn build`
- Test routing and navigation
- Verify API routes still work
- Check Spotify integration

---

### Stage 3: TypeScript & Tooling (LOW-MODERATE RISK)
**Goal**: Modernize TypeScript without breaking changes

#### 3.1 Update TypeScript
```json
{
  "typescript": "4.7.4 → 4.9.5"
}
```
**Why**: Last of TypeScript 4.x, stable and well-tested
**Risk**: May reveal type errors (good thing!)

#### 3.2 Update Type Definitions
```json
{
  "@types/react": "18.0.17 → 18.3.27",
  "@types/node": "17.0.45 → 20.0.0"
}
```
**Why**: Match React 18.2.0 and Node.js LTS
**Risk**: Low - mostly additions

#### 3.3 Fix TypeScript Issues
**File: `components/links.tsx:7`**
```tsx
// OLD
interface TextLinkProps {
  text: string,
  url: string,
  sx?: any  // ❌ Using 'any'
}

// NEW
interface TextLinkProps {
  text: string,
  url: string,
  sx?: ThemeUIStyleObject  // ✅ Proper typing
}
```

**Testing**: Run `yarn build` and fix any new type errors

---

### Stage 4: React & Dependencies Update (MODERATE RISK)
**Goal**: Stay current but avoid React 19 for now

#### 4.1 Update React Icons
```json
{
  "react-icons": "4.4.0 → 4.12.0"
}
```
**Why**: Stay on v4 (v5 has breaking changes)
**Risk**: Low - same major version

#### 4.2 Update SWR
```json
{
  "swr": "1.3.0 → 2.3.8"
}
```
**Why**: Better performance, new features
**Breaking Changes**:
- Return value of `useSWR` is now always defined (even when loading)
- `useSWRInfinite` API changes (not used in this project)

**File: `components/content/now-playing.tsx:13`**
```tsx
// Current code should work, but verify:
const { data } = useSWR('/api/now-playing', fetcher)

// SWR 2.x behavior: data is undefined initially, then populated
// Your code already handles this correctly with:
if (!loading && data && !data.isPlaying)
```
**Impact**: Should work without changes, but test thoroughly

**Testing**: Test Spotify "Now Playing" feature

---

### Stage 5: Next.js 13 → 15 (HIGH RISK)
**Goal**: Get to stable modern version before Next.js 16
**Note**: Skipping Next.js 14 would miss important security fixes

#### 5.1 Next.js 13.5.7 → 14.2.32 → 15.1.0
```json
{
  "next": "13.5.7 → 15.1.0",
  "eslint-config-next": "13.5.7 → 15.1.0"
}
```

#### 5.2 Breaking Changes to Address

**Turbopack (Optional)**
- Next.js 15 defaults to Turbopack for `next dev`
- Can opt out with `next dev --turbo false`

**Caching Changes**
- Fetch requests no longer cached by default
- API routes behavior unchanged (using Pages Router)

**Removed Deprecated Features**
- Check if any warnings appear in Next.js 13/14

**React Compiler (Optional)**
- Next.js 15 supports React Compiler (experimental)
- Not required for this project

#### 5.3 Update Vercel Analytics
```json
{
  "@vercel/analytics": "0.1.11 → 1.6.1"
}
```

**File: `pages/_app.tsx:7,18`**
```tsx
// OLD
import { Analytics } from '@vercel/analytics/react'

// NEW - verify import path is still the same
import { Analytics } from '@vercel/analytics/react'
```
**Impact**: Check @vercel/analytics changelog for breaking changes

**Testing**:
- Full regression testing
- Verify all pages load
- Test API routes
- Check analytics tracking
- Test dark/light mode switching

---

### Stage 6: Modern Stack (OPTIONAL - HIGHEST RISK)
**Goal**: Upgrade to cutting edge (only if needed)

#### 6.1 Next.js 16 + React 19
```json
{
  "next": "15.1.0 → 16.1.1",
  "react": "18.2.0 → 19.2.3",
  "react-dom": "18.2.0 → 19.2.3",
  "@types/react": "18.3.27 → 19.2.7"
}
```

**React 19 Breaking Changes**:
- Deprecated props removed (e.g., `defaultProps` on function components)
- New features: `useActionState`, `useFormStatus`, etc.
- `useOptimistic` renamed
- Stricter Rules of Hooks enforcement

**Theme UI Compatibility**:
- ⚠️ Check if Theme UI 0.17.4 supports React 19
- May need to wait for Theme UI update
- Alternative: Consider migrating to vanilla Emotion or other solution

#### 6.2 ESLint 9 + Flat Config
```json
{
  "eslint": "8.22.0 → 9.39.2",
  "eslint-config-next": "16.1.1",
  "eslint-config-prettier": "8.10.2 → 10.1.8"
}
```

**Breaking Changes**:
- New flat config format (`.eslintrc.json` → `eslint.config.js`)
- Many plugins need updates

**File: `.eslintrc.json`**
```json
// OLD
{
  "extends": "next/core-web-vitals"
}

// NEW (eslint.config.js)
import eslint from '@eslint/js'
import nextPlugin from 'eslint-config-next'

export default [
  eslint.configs.recommended,
  ...nextPlugin
]
```

#### 6.3 TypeScript 5
```json
{
  "typescript": "4.9.5 → 5.9.3"
}
```

**Breaking Changes**:
- Stricter type checking
- Enum changes
- Decorator changes (not used in this project)

**Testing**: Complete system testing

---

## Recommended Execution Plan

### Conservative Path (Recommended for Production)

```bash
# Week 1: Cleanup & Minor Updates
Stage 1: Security patches & cleanup
- Remove unused packages
- Update minor versions
- Test & commit

# Week 2-3: Next.js 13 Migration
Stage 2: Next.js 12 → 13
- Update Next.js to 13.5.7
- Fix Link component usage
- Test thoroughly
- Deploy to staging

# Week 4: TypeScript & Tooling
Stage 3: TypeScript updates
- Update TypeScript to 4.9.5
- Fix type definitions
- Update @types packages

# Week 5: Dependency Updates
Stage 4: React ecosystem
- Update React Icons
- Update SWR
- Test Spotify integration

# Week 6-7: Next.js 15
Stage 5: Next.js 13 → 15
- Incremental update (13 → 14 → 15)
- Update Vercel Analytics
- Full regression testing

# Future: Hold on Stage 6
- Wait for Theme UI React 19 support
- Consider migration to Next.js 16 in Q2 2026
```

### Aggressive Path (If You Have Good Test Coverage)

```bash
# Day 1-2: Cleanup & Jump to Next 13
- Stage 1 + Stage 2 combined
- Remove unused packages
- Update to Next.js 13.5.7
- Fix Link component

# Day 3-4: TypeScript & Dependencies
- Stage 3 + Stage 4 combined
- Update TypeScript, SWR, React Icons
- Fix type errors

# Day 5-7: Next.js 15
- Stage 5
- Update to Next.js 15
- Update Vercel Analytics
- Full testing

# Future: Stage 6 when dependencies ready
```

---

## Key Files to Update

### Confirmed Changes Needed

| File | Changes | Stage |
|------|---------|-------|
| `package.json` | All dependency updates | All |
| `components/nav.tsx:25-35` | Remove passHref from Link | Stage 2 |
| `components/links.tsx:7` | Fix `any` type to proper Theme UI type | Stage 3 |
| `.eslintrc.json` | Potentially migrate to flat config | Stage 6 |
| `pages/_document.tsx` | Optional: Modernize to functional component | Stage 2-5 |

### Files to Test Thoroughly

- `pages/api/now-playing.tsx` - API route
- `components/content/now-playing.tsx` - SWR usage
- `components/theme-selector.tsx` - Theme UI hooks
- `pages/_app.tsx` - Vercel Analytics
- All components using `sx` prop (Theme UI)

---

## Testing Checklist

### After Each Stage

- [ ] `yarn install` completes without errors
- [ ] `yarn build` succeeds
- [ ] `yarn lint` passes
- [ ] `yarn dev` starts successfully
- [ ] Homepage loads correctly
- [ ] Dark/Light mode toggle works
- [ ] Spotify "Now Playing" widget updates
- [ ] Navigation works (Logo click)
- [ ] All external links work
- [ ] SEO meta tags render correctly
- [ ] Favicon loads
- [ ] Fonts load correctly
- [ ] No console errors in browser
- [ ] Mobile responsive design intact
- [ ] Analytics tracking works (check Vercel dashboard)

### Performance Testing

- [ ] Lighthouse score maintained or improved
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] No layout shift issues

### Security Testing

- [ ] `yarn audit` shows reduced vulnerabilities
- [ ] No new security warnings
- [ ] API endpoint still requires proper authentication

---

## Rollback Plan

### If Something Breaks

1. **Git branch strategy**: Create branch for each stage
   ```bash
   git checkout -b upgrade/stage-1-cleanup
   # Make changes
   git commit -m "Stage 1: Remove unused deps & minor updates"
   git push
   ```

2. **Test before merge**: Deploy to Vercel preview
   ```bash
   git push origin upgrade/stage-1-cleanup
   # Review Vercel preview deployment
   ```

3. **Rollback if needed**:
   ```bash
   git checkout main
   git branch -D upgrade/stage-1-cleanup
   ```

4. **Package.json backup**:
   ```bash
   cp package.json package.json.backup
   cp yarn.lock yarn.lock.backup
   ```

---

## Known Risks

### High Risk Items

1. **Theme UI + React 19**: Theme UI 0.17.4 may not support React 19
   - **Mitigation**: Stop at Stage 5 until confirmed

2. **Custom _document.tsx**: Uses older pattern
   - **Mitigation**: Test thoroughly after Next.js updates

3. **Vercel Analytics 0.x → 1.x**: API may have changed
   - **Mitigation**: Review changelog before updating

### Medium Risk Items

1. **SWR 1.x → 2.x**: Return value changes
   - **Mitigation**: Current code looks compatible

2. **Next.js Link component**: Breaking change
   - **Mitigation**: Only 1 file to update

3. **TypeScript 4 → 5**: May reveal hidden type errors
   - **Mitigation**: Good opportunity to fix them!

---

## Success Metrics

- ✅ Zero critical/high security vulnerabilities
- ✅ Build time maintained or improved
- ✅ No runtime errors
- ✅ All features working
- ✅ Performance scores maintained
- ✅ Clean `yarn audit` report

---

## Next Steps

**Decision Point**: Which path do you want to take?

1. **Conservative Path**: Execute Stages 1-5 over 6-7 weeks
2. **Aggressive Path**: Execute Stages 1-5 in one sprint (~1 week)
3. **Custom Path**: Cherry-pick specific stages

**Recommendation**: Start with Stage 1 (cleanup) regardless of path - it's zero-risk and removes 3 unused dependencies.

Would you like me to:
- [ ] Execute Stage 1 now
- [ ] Create git branches for each stage
- [ ] Run `yarn upgrade-interactive` to see available updates
- [ ] Generate a package.json for a specific stage
