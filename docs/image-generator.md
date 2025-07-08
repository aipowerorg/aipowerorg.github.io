---
id: image-generator
slug: /image-generator
title: Image Generator
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

# Image Generator

The **Image Generator** module allows you to add a text-to-image tool directly to your website using a simple shortcode. Users can generate unique images from text prompts, and logged-in users can view their creation history.

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
3.  Click "Generate" to create the image.

<img src={frontendui} width="600"/>

The generated image will appear in the results area below the prompt.

## Image History

When you enable `history="true"` in the shortcode, logged-in users will see a "Your Images" section below the generator.

This section displays a grid of their previously generated images.
-   **Delete**: Users can click the trash icon on an image to permanently delete it from their history and the Media Library.

<img src={history} width="600"/>

-   **Load More**: If there are more images than initially shown, a "Load More" button will appear.

## Token Management

Token Management is a free add-on. To use it, you must first enable it:

1.  Go to **AIP > Add-ons**.
2.  Activate the **Token Management** add-on.

<img src={tokenaddon} />

To configure token settings for the Image Generator, go to the **Settings** tab.

<img src={tokensettings} />

1.  **Guest Limit**: Set a token limit for users who are not logged in.
    -   Leave this field **blank** for unlimited tokens.
    -   Enter `0` to completely disable the image generator for guests.
2.  **Limit Type**: For logged-in users, choose one of two modes:
    -   **General Limit**: A single limit that applies to all logged-in users, regardless of their role. Set the value in the **User Limit** field that appears.
    -   **Role-Based Limits**: Set different token limits for different WordPress user roles (e.g., Subscriber, Contributor, Author). This allows you to give more access to specific user groups.

<img src={tokensettings} />

3.  **Reset Period**: Choose how often the token usage count resets to zero.
    -   **Daily**: Resets every day at midnight (based on your WordPress timezone setting).
    -   **Weekly**: Resets at the beginning of the week (as defined in your WordPress settings).
    -   **Monthly**: Resets on the first day of the month.
    -   **Never**: The limit is a one-time total and does not reset.
4.  **Token Limit Message**: The message displayed to a user when they have reached their token limit for the current period.

You can charge your users for their use of your image generator.

Our integration with WooCommerce allows you to sell tokens, which users can purchase and utilize to access the image generator features on your site.

Learn more about it here: [User Credits](/docs/user-credits.md)

## Custom CSS

If you set `theme="custom"` in the shortcode, you can use this section to add your own CSS rules to fully control the generator's appearance.

<img src={customcss} />

## Provider & Model Filtering

Restrict which AI providers and models are available for users to select on the frontend shortcode. Leave the fields blank to allow all options.

-   **Allowed Providers**: A comma-separated list of provider names to show (e.g., `OpenAI, Google`).

<img src={providerfilter} />

-   **Allowed Models**: A comma-separated list of specific model IDs to show (e.g., `dall-e-3, imagen-3.0-generate-002`).