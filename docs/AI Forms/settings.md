---
id: ai-forms-settings
slug: /ai-forms/settings
title: Settings
sidebar_position: 7
---

import customcss from '/img/ai-forms/custom-css.png';
import providerfilter from '/img/ai-forms/provider-filter.png';

# Settings

The global settings for the AI Forms module allow you to control token usage, create a custom theme, and filter which AI models are available on the frontend.

To access these settings, navigate to **AIP > Forms** and click the **Settings** tab.

### Custom CSS

This section allows you to define custom CSS rules that will apply to any form using `theme="custom"` in its shortcode. This gives you full control over the form's appearance to match your site's branding.

<img src={customcss} width="600"/>

### Provider & Model Filtering

By default, any AI provider and model you have enabled in the main **AIP > Dashboard** will be available for users to select on the frontend (if you have `show_provider="true"` or `show_model="true"` enabled in the shortcode).

<img src={providerfilter} width="600"/>

These settings allow you to restrict which options are available.

-   **Allowed Providers**: Enter a comma-separated list of providers to show (e.g., `OpenAI, Google`). Leave blank to allow all.
-   **Allowed Models**: Enter a comma-separated list of specific model IDs to show (e.g., `gpt-4o-mini, gemini-1.5-flash`). Leave blank to allow all models from the allowed providers.