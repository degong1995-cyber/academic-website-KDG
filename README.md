# Academic Research Website

This is a lightweight academic website template inspired by modern university and research-group homepages.

It is ready to be uploaded as a static website repository on GitHub and can also be deployed to GitHub Pages, Netlify, or Cloudflare Pages without a build step.

## Files

- `index.html`: Homepage
- `research.html`: Research agenda page
- `publications.html`: Publication archive page
- `people.html`: Team and mentorship page
- `styles.css`: Visual design and responsive layout
- `script.js`: Renders shared navigation and page sections from the data file
- `content/site-data.js`: Main content source for easy editing

## How to edit

Most future edits only require updating `content/site-data.js`.

- Change the site name in `brand.title`
- Change navigation in `navigation`
- Edit the hero section in `hero`
- Replace the biography in `about`
- Add research themes in `researchThemes`
- Update homepage publications in `publications.selected`
- Update the archive in `publications.all`
- Edit news in `news`
- Update homepage team members in `people`
- Update long-form people page content in `peoplePage`
- Update research subpage content in `researchPage`
- Replace contact details in `contact`

## Preview locally

You can open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Upload to GitHub

If you want to turn this into a GitHub repository:

```bash
git init
git add .
git commit -m "Initial academic website"
```

Then create an empty repository on GitHub and connect it:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Publish with GitHub Pages

This project is a plain static site, so GitHub Pages does not need any build command.

After pushing to GitHub:

1. Open the repository on GitHub
2. Go to `Settings`
3. Open `Pages`
4. Under `Build and deployment`, choose `Deploy from a branch`
5. Select branch `main`
6. Select folder `/ (root)`
7. Save

GitHub will then give you a public URL.

Notes:

- `index.html` is the homepage entry file
- `.nojekyll` is included so GitHub Pages serves the site directly as a static project
- All page links use relative paths, so the site is easy to host on GitHub or other static platforms

## Recommended editing workflow

- Update text and structured content in `content/site-data.js`
- Adjust layout or style in `styles.css`
- Edit page structure only when you want to add new sections or pages
- Commit changes regularly so GitHub keeps a clean history

## Customization ideas

- Connect publication data to a CMS or JSON API
- Add bilingual content
- Replace placeholder links with institutional pages, CVs, and Google Scholar links
- Add dedicated pages for teaching, media, datasets, and events
