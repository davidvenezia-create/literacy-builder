# Literacy Builder

A free, immersive phonics and literacy site for language learners. No translations — learners build the English literacy system directly through sound, pattern, and meaning.

## Structure

```
literacy-builder/
├── index.html               ← Homepage / navigation hub
├── css/
│   └── style.css            ← Shared styles
├── js/
│   └── nav.js               ← Shared nav, speech helper
└── activities/
    ├── sounds.html          ← Step 1: Sound–Letter Correspondence
    ├── blending.html        ← Step 2: Blending
    ├── syllables.html       ← Step 3: Syllable awareness
    ├── patterns.html        ← Step 4: Word patterns (short/long vowels, digraphs)
    └── reading.html         ← Step 5: Reading in context
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `literacy-builder`)
2. Upload this entire folder to the repo (drag and drop, or use `git push`)
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click Save — your site will be live at:
   `https://YOUR-USERNAME.github.io/literacy-builder/`

## Features

- **No translations** — English literacy built directly through sound and image
- **Web Speech API** — all audio uses the browser's built-in text-to-speech (no audio files needed)
- **Show-before-ask** — every activity demonstrates before the learner practices
- **Progress bars** — learners always see how far they've come
- **Fully offline-capable** after first load (no API calls)

## Activities at a glance

| Step | Page | Activities |
|------|------|------------|
| 1 | Sounds | Tap letter → hear sound + keyword + examples · Hear sound → find letter (quiz) |
| 2 | Blending | Watch animated sound merge · Build words by tapping sounds in order |
| 3 | Syllables | Watch syllable-by-syllable playback · Tap beats → count beats |
| 4 | Patterns | Study short/long vowels + digraphs with examples · Sort words into pattern bins |
| 5 | Reading | Tap-to-hear sentence + picture match · Tap-any-word passage reader |

## Adding content

To add more words to any activity, edit the data arrays at the top of each activity's `<script>` block. Each item follows the same object format shown in the existing data.

---

Built for multilingual learners by David Venezia · Somerset Hills School District
