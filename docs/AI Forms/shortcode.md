---
id: shortcode
slug: /ai-forms/shortcode
title: Shortcode
sidebar_position: 5
---

import shortcodes from '/img/ai-forms/shortcodes.png';
import aiformsdemo from '/img/ai-forms/ai-forms-demo.png';
import shortcodeattr from '/img/ai-forms/shortcode-attr.png';
import demowithprovider from '/img/ai-forms/demo.png';

# Shortcode

Once you have created a form, you can display it anywhere on your site—on a page, in a post, or in a widget—using its unique shortcode.

### Getting the Shortcode

1.  Navigate to **AIP > Forms**.
2.  In the list of forms, find the form you want to display.

<img src={shortcodes} />

3.  In the **Shortcode** column, click on the shortcode text (e.g., `[aipkit_ai_form id=123]`) to copy it to your clipboard.

### Using the Shortcode

Paste the copied shortcode directly into the content editor of any post or page, or into a shortcode-compatible widget.

<img src={aiformsdemo} width="600"/>

### Shortcode Attributes

You can customize the appearance and functionality of the frontend form by adding attributes to the shortcode. Click the settings icon next to the shortcode in the list view to open the configurator.

<img src={shortcodeattr} />

The available attributes are:
-   `theme`: Sets the visual theme. Options: `light` (default), `dark`, `custom`.
-   `show_provider`: Whether to show the AI Provider dropdown to the user. Options: `true`, `false` (default).
-   `show_model`: Whether to show the AI Model dropdown to the user. Options: `true`, `false` (default).
-   `copy_button`: Whether to show a "Copy" button below the generated result. Options: `true`, `false` (default).
-   `save_button`: Whether to show a "Save as Post" button (for logged-in users). Options: `true`, `false` (default).
-   `pdf_download`: Whether to show a "Download PDF" button (Pro feature). Options: `true`, `false` (default).

**Example:**
To display a form with a dark theme and a save button, your shortcode would look like this:
`[aipkit_ai_form id=9447 show_provider="true" show_model="true" theme="dark"]`

<img src={demowithprovider} width="600"/>