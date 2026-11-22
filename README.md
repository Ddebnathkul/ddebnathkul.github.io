# Dwaipayan Debnath — academic website

A static, responsive website for GitHub Pages. No npm, frameworks, or build step required.

## Preview locally

Extract the ZIP, change into the folder containing `index.html`, and run:

```bash
python3 -m http.server 8000
```

Visit <http://localhost:8000/>. The existing locally hosted simulation and figures work offline; YouTube previews and the two optional animations hosted by KU Leuven require Internet access. The videos themselves open on YouTube. The page has fallback links if a remote image fails.

## Publish

Copy the files and folders in this directory into the existing GitHub Pages repository (`ddebnathkul.github.io`), overwriting the corresponding HTML, CSS, JS and metadata. Do **not** replace or delete your existing `.git` folder. Run `git status`, review the edits, then:

```bash
git add index.html cv.html plants.html assets robots.txt sitemap.xml README.md .nojekyll
git commit -m "Refresh academic research website and simulation gallery"
git push origin main
```

This update uses the repository URL confirmed in the old Git config and KU Leuven profile.

## Editing

- `index.html`: biography, current research, media gallery, selected publications and contact. Each publication is a static `<article class="pub-row">` with `data-kind="first"`, `collab`, or `first preprint` used by filter buttons. Update matching entries in `cv.html` when appropriate.
- `assets/css/site.css`: colours, typography, responsive layouts. Main palette is declared at the start of the file; additional Muted botanical green theme rules are at the end.
- `assets/js/site.js`: responsive navigation, publication filtering, simulation playback, remote GIF loading and image enlargement.
- `cv.html`: academic CV in website style. `cv.pdf` is the original supplied PDF; replace it with a current version when available. The site still identifies the researcher as a PhD researcher, not as a doctorate holder. Change this after the defence if appropriate.
- `plants.html`: greenhouse collection and Instagram link.

## Homepage cover artwork

Copy the artwork by Dr. Danny Gasman into `assets/img/cover_1.png`. If your file has a different extension (e.g. `.jpg`), edit the `cover_1.png` path in the `.hero:before` rule in `assets/css/site.css` accordingly, or convert it to PNG. The hero has a solid forest-green background until the artwork is provided. The visible credit is in `index.html` and should remain with the artwork. Confirm permission to publish the artwork.

## STARFRUIT opacity comparison

Copy your figure into `assets/img/opacity_comparison.png`. The new STARFRUIT card in **Models, tools, and data** will show it automatically and allow visitors to enlarge it. Until the file is added, a neutral placeholder appears instead. The card describes ongoing development of full-continuum and line-blocking radiative transfer; update the wording as the work progresses.

## Add your own new GIF or MP4

Place the real output in `assets/img/` (e.g. `bsg_surface.mp4`, `bsg_surface.gif`) and a still poster image alongside it. Replace the existing YouTube preview card or add a new simulation card by copying the O-star card markup. Prefer MP4 with `muted loop playsinline controls` and `data-autoplay` (which respects reduced motion). Link the original GIF for users who need it. Convert a GIF without changing the scientific frames using `ffmpeg -i input.gif -c:v libx264 -pix_fmt yuv420p -movflags +faststart output.mp4`.

The ZIP contained one real GIF: `Ostar_surface.gif`. The included MP4 and poster are derived from that GIF. New B-supergiant footage is linked via the published paper's YouTube link, not re-created or substituted with artificial simulation data. Two further animations are linked to the university project page and loaded only when requested. To make them self-hosted, download the originals (with permission as needed), place them in `assets/img`, and change the button's `data-remote-gif` and direct link URLs. The project requests credit to SUPERSTARS-3D and a paper/video link. The group playlist is used in place of an unverified personal YouTube channel.

## Content verification / review

- BSG preprint, 13 Nov 2026: https://arxiv.org/abs/2611.18162
- Approximate NLTE paper: https://arxiv.org/abs/2604.07317 and https://doi.org/10.1051/0004-6361/202660303
- KU Leuven profile and publication record: https://www.kuleuven.be/wieiswie/en/person/00141604
- Project papers: https://fys.kuleuven.be/ster/research-projects/superstars-3d/superstars3d-publications
- Project media and attribution: https://fys.kuleuven.be/ster/research-projects/superstars-3d

The homepage includes selected publicly documented papers, not unpublished proposals or a claimed exhaustive bibliography. Review affiliation, contact, portrait, supplied PDF and publication details before deploying publicly. The web CV no longer displays the old telephone numbers. The existing PDF was left unchanged, so check it for personal contact information. The original high-resolution Pleiades background was replaced in the delivery by a compressed web version; the original remains in your old ZIP. High-resolution scientific figures and the original simulation GIF are retained.
