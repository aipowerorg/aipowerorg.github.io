---
id: image-features
slug: /image-features
title: Image
sidebar_position: 5
---

import replicateaddon from '/img/chat/replicate-addon.png';
import imagegenerationsettings from '/img/chat/image-generation-settings.png';
import imagegendemo from '/img/chat/image-gen-demo.png';
import imageupload from '/img/chat/img-upload-enable.png';
import imageuploaddemo from '/img/chat/img-upload-demo.png';
import imageuploaddemoresult from '/img/chat/img-upload-demo-result.png';

# Image Features

Your chatbot can both create images based on user prompts and analyze images that users upload.

## Image Generation

You can enable your chatbot to generate images directly in the chat window by responding to specific text commands from the user.

:::info
**Supported Models for Image Generation**

- **OpenAI**: `gpt-image-1`, `dall-e-3`, `dall-e-2`
- **Google**: `gemini-1.5-flash`, `imagen-3.0`
- **Replicate**: All text-to-image models available on Replicate such as flux, sdxl, stable diffusion etc.

:::

### How to Enable & Configure

1.  In your chatbot's settings, open the **Images** accordion.
2.  **Image Generation Model**: Select the AI model you want to use for creating images (e.g., `dall-e-3` or `imagen-3.0`).

<img src={imagegenerationsettings} width="600"/>

3.  **Image Generation Triggers**: Define one or more text commands that will trigger the image generator. These commands must start with a `/`. Separate multiple triggers with a comma. **Example:** `/image, /generate, /create`

### How It Works

When a user types one of the trigger commands followed by a description, the chatbot sends the description to the image generation model instead of the text model.

-   **User Input**: `/image a blue cat sitting on a red sofa`
-   **Result**: The chatbot will display the generated image in its response.

<img src={imagegendemo} width="600"/>

:::info
To use **Replicate**, follow these steps:
1. Go to **AIP > Addons** and enable the **Replicate** addon.

<img src={replicateaddon} width="600"/>

2. Then go to the **AIP > Dashboard > Integrations** tab.
3. Open the **Replicate** section, enter your Replicate API key, and click **Sync Models**.
4. After syncing, all available models will appear under the **Chatbot > Images** tab.

:::

## Image Upload and Analysis

You can allow users to upload images and ask questions about them. This feature is useful for visual search, image identification, and other interactive tasks. It requires a vision-capable model like GPT-4o or Gemini.

### How to Enable

1.  In your chatbot's settings, open the **General** accordion.
2.  Next to the model selector, click the image icon to enable this feature for the chatbot.

<img src={imageupload} />

3.  When enabled, image icon will appear in the chat input field.

### How It Works

1.  A user clicks the image upload icon in the chat input.
2.  They select an image file from their device.
3.  A thumbnail of the image appears above the input box.

<img src={imageuploaddemo} width="600"/>

4.  The user can then type a question related to the image (e.g., "What is this a picture of?") and send it.

<img src={imageuploaddemoresult} width="600"/>

5.  The AI will analyze the image and the text together to provide a response.
