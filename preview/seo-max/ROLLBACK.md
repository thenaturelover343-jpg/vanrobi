# Rollback — VanRobi SEO max on-page

## Tag
`pre-seo-max` points to commit `1350ff1` (main before this SEO work). **Do not delete this tag.**

## Revert live site to pre-SEO state

```bash
cd /path/to/vanrobi-site
git fetch origin tag pre-seo-max
git checkout main
git reset --hard pre-seo-max
# or: git revert range if you prefer preserving history
git push --force-with-lease origin main
```

GitHub Pages will redeploy from `main`. After deploy, verify titles no longer match the SEO-max set.

## Softer alternative (revert merge commit only)

```bash
git checkout main
git pull
git revert -m 1 <seo-merge-commit-sha>
git push origin main
```

## Verify tag still intact

```bash
git rev-parse pre-seo-max
# expect: 1350ff1e06e6e0f75de25972c3cb17b02f6cb7ff
```
