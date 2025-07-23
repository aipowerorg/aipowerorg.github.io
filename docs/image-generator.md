---
id: image-generator
slug: /image-generator
title: Image / Video Generator
sidebar_position: 9
---

import mainui from '/img/image-generator/main-ui.png';
import shortcodeconfig from '/img/image-generator/shortcode-config.png';
import shortcodeusage from '/img/image-generator/shortcode-usage.png';
import frontendui from '/img/image-generator/frontend-ui.png';
import history from '/img/image-generator/history.png';
import tokensettings from '/img/image-generator/token-settings.png';
import tokenaddon from '/img/chat/token-addon.png';
import customcss from '/img/image-generator/custom-css.png';
import providerfilter from '/img/image-generator/provider-filter.png';
import replicateaddon from '/img/chat/replicate-addon.png';
import veo3 from '/img/image-generator/veo3.png';
import replicatesafety from '/img/image-generator/replicate-safety.png';

# Image / Video Generator

👉 **[View Live Demo](https://aipower.org/image-generator/)**

The **Image Generator** module allows you to add a text-to-media tool directly to your website using a simple shortcode. Users can generate unique images and videos from text prompts, and logged-in users can view their creation history.

To get started, go to **AIP > Images**. This screen contains a live preview of the frontend generator and the tools to configure its shortcode.

<img src={mainui} />

### Shortcode

At the top of the generator preview, you'll find the shortcode and its configuration options.

<img src={shortcodeconfig} />

1.  **Copy Shortcode**: Click the shortcode text (e.g., `[aipkit_image_generator]`) to copy it to your clipboard.
2.  **Configure**: Click the settings icon <span class="dashicons dashicons-admin-settings"></span> to open the attribute configurator.

#### Shortcode Attributes

-   `theme`: Sets the visual theme. Options: `light`, `dark` (default), `custom`.
-   `show_provider`: Whether to show the AI Provider dropdown to the user. Options: `true` (default), `false`.
-   `show_model`: Whether to show the AI Model dropdown to the user. Options: `true` (default), `false`.
-   `history`: Whether to show the image history for logged-in users. Options: `true`, `false` (default).

**Example:**
`[aipkit_image_generator theme="light" show_provider="false" history="true"]`

## Usage

Paste the shortcode into any page, post, or shortcode-compatible widget.

<img src={shortcodeusage} />

On the frontend, users can:
1.  Enter a descriptive prompt.
2.  Select an AI Provider and Model (if enabled).
3.  Click "Generate" to create the image or video.

<img src={frontendui} width="600"/>

The generated media will appear in the results area below the prompt.

:::info Video Generation is Asynchronous
When a video model (like Google's Veo 3) is selected, the generation process is asynchronous and may take a few minutes. The UI will show a progress indicator while the video is being created.
:::

## Image & Video History

When you enable `history="true"` in the shortcode, logged-in users will see a "Your Media" section below the generator.

This section displays a grid of their previously generated images and videos.
-   **Delete**: Users can click the trash icon on an item to permanently delete it from their history and the Media Library.

<img src={history} width="600"/>

-   **Load More**: If there are more items than initially shown, a "Load More" button will appear.

## Providers

You can generate media from several AI providers.

### OpenAI
OpenAI provides popular image generation models like DALL-E 3 and GPT Image 1.

### Google (Image & Video)
Google's models offer high-quality image and video generation.
- **Imagen 3**: Generates photorealistic images.
- **Veo 3**: Generates high-definition video clips from a text prompt.

<img src={veo3} width="600"/>

### Replicate
Replicate provides access to a wide variety of open-source models, including Stable Diffusion and more.

:::info Replicate is a Free Addon
To use Replicate models, you must first enable the **Replicate** addon from the **AIP > Add-ons** page.
<img src={replicateaddon} width="600"/>
:::

## Settings

Global settings for the Image Generator are managed from the **Settings** tab on the **AIP > Images** page.

### Token Management

Token Management is a free add-on. To use it, you must first enable it from **AIP > Add-ons**.

<img src={tokenaddon} />

Once active, you can configure token limits for the Image Generator:

<img src={tokensettings} />

1.  **Guest Limit**: Set a token limit for users who are not logged in.
    -   Leave this field **blank** for unlimited tokens.
    -   Enter `0` to completely disable the image generator for guests.
2.  **Limit Type**: For logged-in users, choose one of two modes:
    -   **General Limit**: A single limit that applies to all logged-in users.
    -   **Role-Based Limits**: Set different token limits for different WordPress user roles.
3.  **Reset Period**: Choose how often the token usage count resets to zero (`Daily`, `Weekly`, `Monthly`, `Never`).
4.  **Token Limit Message**: The message displayed to a user when they have reached their token limit.

You can sell token packages with our WooCommerce integration. Learn more at [User Credits](/docs/user-credits/intro).

### Replicate Settings

This section appears when the Replicate addon is active.

- **Disable Safety Checker**: When checked, this disables Replicate's built-in safety checker.

<img src={replicatesafety} width="600"/>

This can help prevent false positives that might block legitimate image generation prompts. Only disable this if you have other content moderation measures in place.

### Frontend Filtering

Restrict which AI providers and models are available on the frontend shortcode. Leave the fields blank to allow all options.

-   **Allowed Providers**: A comma-separated list of provider names to show (e.g., `OpenAI, Google`).

<img src={providerfilter} />

-   **Allowed Models**: A comma-separated list of specific model IDs to show (e.g., `dall-e-3, imagen-3.0-generate-002`).

### Custom CSS

If you set `theme="custom"` in the shortcode, you can use this section to add your own CSS rules to fully control the generator's appearance.

<img src={customcss} />