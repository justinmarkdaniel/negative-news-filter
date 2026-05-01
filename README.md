# Negative News Filter

Chrome extension that transforms negative news headlines into positive alternatives using AI.

## Installation

1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select this folder

## Setup

1. Get an API key from [OpenAI](https://platform.openai.com/api-keys)
2. Click the extension icon and paste your key
3. The filter runs automatically on news sites

> **Note on costs**: The extension uses `gpt-4o-mini` which is cheap (around $0.15 / 1M input tokens at time of writing). A typical browsing session of ~50 headlines costs less than a cent. Hard-coded replacements run first to minimise API calls.

## Files

```
negativenewsfilter/
  manifest.json    # Extension config
  background.js    # Service worker for API calls
  content.js       # DOM manipulation and filtering
  content.css      # Headline hiding styles
  popup.html/js/css # Settings popup
  icon*.png        # Extension icons
```

## How It Works

1. Headlines are hidden on page load
2. Hard-coded replacements run instantly (40+ common terms)
3. Remaining headlines sent to GPT-4o-mini for transformation
4. Headlines fade in with positive alternatives

## Supported Sites

<details>
<summary>Click to expand full list of 100+ supported news sites</summary>

### US National News
- nytimes.com, washingtonpost.com, cnn.com, foxnews.com, msnbc.com
- nbcnews.com, abcnews.go.com, cbsnews.com, usatoday.com, apnews.com
- reuters.com, bloomberg.com, wsj.com, time.com, newsweek.com
- theatlantic.com, newyorker.com, politico.com, thehill.com, huffpost.com
- axios.com, vox.com, slate.com, salon.com, thedailybeast.com
- npr.org, pbs.org, c-span.org, propublica.org, vice.com

### US Regional News
- latimes.com, chicagotribune.com, sfchronicle.com, bostonglobe.com
- miamiherald.com, seattletimes.com, denverpost.com, dallasnews.com
- houstonchronicle.com, ajc.com, philly.com, detroitnews.com
- startribune.com, tampabay.com, oregonlive.com, cleveland.com
- nola.com, baltimoresun.com, post-gazette.com, dispatch.com

### Business & Finance
- cnbc.com, forbes.com, businessinsider.com, marketwatch.com
- ft.com, economist.com, fortune.com, barrons.com, investors.com

### UK News
- bbc.com, bbc.co.uk, theguardian.com, independent.co.uk
- telegraph.co.uk, thetimes.co.uk, dailymail.co.uk, thesun.co.uk
- mirror.co.uk, express.co.uk, standard.co.uk, metro.co.uk
- sky.com, channel4.com, itv.com

### International News
- aljazeera.com, aljazeera.net, france24.com, dw.com, euronews.com
- spiegel.de, lemonde.fr, elpais.com, corriere.it, nrc.nl

### Canadian News
- cbc.ca, globeandmail.com, thestar.com, nationalpost.com, torontosun.com
- montrealgazette.com, ottawacitizen.com, vancouversun.com

### Australian/NZ News
- abc.net.au, news.com.au, smh.com.au, theage.com.au, theaustralian.com.au
- theguardian.com.au, nzherald.co.nz, stuff.co.nz

### Asian News
- scmp.com, japantimes.co.jp, asahi.com, koreatimes.co.kr
- straitstimes.com, bangkokpost.com, thehindu.com, timesofindia.com
- hindustantimes.com, indianexpress.com, dawn.com

### Tech & Science News
- wired.com, arstechnica.com, theverge.com, techcrunch.com
- engadget.com, cnet.com, zdnet.com, scientificamerican.com
- newscientist.com, nature.com, science.org

</details>

## License

Personal, non-commercial use only. See [LICENSE](LICENSE).
