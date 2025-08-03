---
title: Images
sidebar_position: 5
---

import imagesenable from '/img/write/images-enable.png';
import replicateaddon from '/img/chat/replicate-addon.png';
import stockimagesaddon from '/img/write/stock-images-addon.png';
import pexelssettings from '/img/write/pexels-settings.png';
import pixabaysettings from '/img/write/pixabay-settings.png';
import replicateapi from '/img/write/replicate-api.png';
import stockimagesapi from '/img/write/stock-images-api.png';
import imageprompt from '/img/write/image-prompt.png';

# Images

AIP can automatically find or generate relevant images and insert them into your articles, including a featured image. This saves time and makes your content more visually appealing.

## Enabling Image Generation

You can enable image generation for two separate areas:

<img src={imagesenable} />

-   **In-Content Images**: Adds one or more images directly within the body of the article.
-   **Featured Image**: Creates and sets the post's featured image.

## Image Providers

You can choose between generating new, unique images with an AI or searching for free stock photos.

### OpenAI

OpenAI offers high-quality image generation with models like DALL-E 3 and GPT-4o.

- **Setup**: To use OpenAI, simply enter your API key in the main dashboard under **AIP > Dashboard > Providers > OpenAI**. The Content Writer will automatically use this key.
- **Usage**: In the **Images** accordion, select **OpenAI** as the provider and choose your desired model (e.g., `dall-e-3`).

### Google

Google's models, like Imagen, offer another option for AI image generation.

- **Setup**: To use Google, enter your API key in the main dashboard under **AIP > Dashboard > Providers > Google**.
- **Usage**: Select **Google** as the provider in the **Images** accordion and choose a model (e.g., `imagen-3.0-generate-002`, `imagen-4.0-ultra-generate-preview-06-06`).

### Azure

Use your deployed DALL-E 2 and DALL-E 3 models from your Azure OpenAI service.

- **Setup**: Configure your Azure API Key and Endpoint in the main dashboard under **AIP > Dashboard > Providers > Azure**.
- **Usage**: Sync your deployments, then select **Azure** as the provider in the **Images** accordion. Your available DALL-E deployments will appear in the **Model** dropdown.

### Replicate

Replicate provides access to a wide variety of open-source models, including Stable Diffusion and more.

1. Go to **AIP > Add-ons** and enable the **Replicate** addon.

<img src={replicateaddon} width="600"/>

2. Go to **AIP > Dashboard > Integrations** and enter your Replicate API key.

<img src={replicateapi} width="600"/>

3. Click **Sync Models** to fetch the latest list of available models.

Select **Replicate** as the provider. The **Model** dropdown will now be populated with all the text-to-image models from your Replicate account.

### Pexels

Pexels allows you to automatically search and insert high-quality, free stock photos into your content.

1. Go to **AIP > Add-ons** and enable the **Stock Images** addon.

<img src={stockimagesaddon} />

2. Go to **AIP > Dashboard > Integrations** and enter your Pexels API key.

<img src={stockimagesapi} width="600"/>

When you select **Pexels** as the provider, a new set of options appears:

<img src={pexelssettings} />

- **Orientation**: Filter images by layout (Landscape, Portrait, Square).
- **Size**: Filter images by general size (Large, Medium, Small).
- **Color**: Select a dominant color to filter the search results.

### Pixabay

Pixabay is another excellent source for free stock photos that can be integrated directly into your workflow.

1. Go to **AIP > Add-ons** and enable the **Stock Images** addon (if not already enabled).

<img src={stockimagesaddon} width="600"/>

2. Go to **AIP > Dashboard > Integrations** and enter your Pixabay API key.

<img src={stockimagesapi} width="600"/>

When you select **Pixabay** as the provider, you can use the following filters:

<img src={pixabaysettings} width="600"/>

- **Orientation**: Choose between `horizontal` or `vertical` layouts.
- **Image Type**: Filter by `photo`, `illustration`, or `vector`.
- **Category**: Narrow your search to a specific category, such as `nature`, `business`, or `travel`.

## Prompts

**Image Prompt**: This is the instruction used to generate for your in-content images. You can use `{topic}` and `{keywords}` placeholders.

<img src={imageprompt} width="600"/>

-   **Featured Image Prompt**: A separate prompt specifically for the featured image. If left blank, the main Image Prompt will be used.

## Image Settings

-   **Number of Images**: The number of in-content images to generate and insert.
-   **Placement**: Where to insert the images (e.g., after the first H2 heading, after every 3 paragraphs).
-   **Size**: The WordPress image size to use (e.g., Thumbnail, Medium, Large, Full).
-   **Alignment**: How to align the image in the content (None, Left, Center, Right).