---
title: SEO
sidebar_position: 4
---

import seo from '/img/write/seo.png';
import meta from '/img/write/meta.png';
import focus from '/img/write/focus.png';
import excerpt from '/img/write/excerpt.png';
import tocsettings from '/img/write/toc.png';

# SEO

AIP helps you optimize your content for search engines by automatically generating SEO elements like meta descriptions and focus keywords. You can also add a Table of Contents to improve readability.

:::info Supported SEO Plugins
AIP automatically detects and saves the generated Meta Description and Focus Keyword to the following SEO plugins:

-   Yoast SEO
-   Rank Math
-   All in One SEO
-   The SEO Framework

:::

## SEO Options

These settings control the generation of common SEO fields. For each option, you can provide a custom prompt to guide the AI.

<img src={seo} />

### Meta Description

When checked, the AI generates a meta description for your article. This is the short text snippet that often appears under your page title in search engine results.

-   **Custom Prompt**: You can provide specific instructions for the meta description.

<img src={meta} />

-   **Available Placeholders**:
    -   `{topic}`: The main topic of the article.
    -   `{keywords}`: The keywords provided for the article.
    -   `{content_summary}`: A brief summary of the generated article content, giving the AI context.

### Focus Keyword

When checked, the AI will set a focus keyword for your post, which is used by SEO plugins like Yoast and Rank Math.

<img src={focus} />

-   **Automatic**: If you provide keywords in the main topic input (e.g., `Topic | keyword1, keyword2`), the first keyword will be used automatically.
-   **AI Generated**: If no keywords are provided in the main input, the AI will generate one based on your custom prompt and the article content.
-   **Custom Prompt**: You can customize the instructions for generating the focus keyword.
-   **Available Placeholders**: `{topic}`, `{content_summary}`

### Excerpt

When checked, the AI will generate a custom post excerpt. This is separate from the meta description and is used by your WordPress theme to display a short summary on archive pages or blog rolls.

<img src={excerpt} />

-   **Custom Prompt**: Provide instructions for how the excerpt should be written.
-   **Available Placeholders**: `{topic}`, `{content_summary}`

## Structure

### Table of Contents

When checked, a Table of Contents block will be automatically inserted at the beginning of your article.

<img src={tocsettings} />

It creates links based on the `<h2>` and `<h3>` headings in the generated content, improving readability and navigation for long articles.