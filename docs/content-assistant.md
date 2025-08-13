---
id: content-assistant
slug: /content-assistant
title: Content Assistant
sidebar_position: 11
---

import caaddon from '/img/content-assistant/ca-addon.png';
import cabulkbutton from '/img/content-assistant/ca-bulk-button.png';
import catemplate from '/img/content-assistant/template.png';
import caai from '/img/content-assistant/ca-ai.png';
import cacontext from '/img/content-assistant/ca-context.png';
import caprompts from '/img/content-assistant/ca-prompts.png';
import caenhance from '/img/content-assistant/ca-enhance.png';
import caeditor from '/img/content-assistant/ca-editor.png';
import caeditorusage from '/img/content-assistant/ca-editor-usage.png';
import caeditoractions from '/img/content-assistant/ca-editor-actions.png';
import cablockeditor from '/img/content-assistant/ca-block-editor.png';

# Content Assistant

The Content Assistant provides a suite of tools to improve existing content directly within your WordPress admin area. You can bulk-enhance posts, generate new titles and excerpts from the posts list, and process text directly within the post editor.

## Activation

The Content Assistant is a free add-on that must be activated first.

1.  Navigate to **AIP > Add-ons**.
2.  Find the **Content Assistant** addon and click **Activate**.

<img src={caaddon}  />

Once activated, three new features become available across your Posts, Pages, and Products list screens and editors.

## Content Assistant

This feature allows you to update multiple posts at once using a configuration tool.

1.  Go to your **Posts**, **Pages**, or **Products** list.
2.  Select the checkboxes next to the items you want to enhance.

<img src={cabulkbutton} />

3.  Click the **Content Assistant** button that appears at the top of the list.

This will open the **Content Assistant** modal, where you can configure the AI enhancements.

-   **Templates**: Save and load your entire enhancement configuration as a template for quick reuse.

<img src={catemplate} />

-   **AI**: Choose the AI Provider and Model for the enhancement tasks. You can also adjust the Temperature and Max Tokens for the generation.

<img src={caai} />

-   **Context**: Enable a Vector Store to provide your knowledge base as context to the AI, ensuring enhancements are aligned with your custom data.

<img src={cacontext} />

-   **Prompts**: Check the box for each field you want the AI to update (Title, Excerpt, Content, Tags, Meta Description, Focus Keyword). For each selected field, a tab will appear where you can write a custom prompt. Use placeholders like `{original_title}`, `{original_content}`, and `{original_focus_keyword}` to provide the AI with the post's existing data.

<img src={caprompts} />

-   Click **Start** to begin the process. The modal will display a log of the progress for each post.

:::tip Available Placeholders
You can use the following placeholders in your prompts:
`{original_title}`, `{original_content}`, `{original_excerpt}`, `{original_meta_description}`, `{original_focus_keyword}`, `{original_tags}`, `{categories}`.

When enhancing Products, you can use additional placeholders like `{price}`, `{sku}`, and `{attributes}`. See the [WooCommerce Product Writer](/docs/woocommerce-product-writer) documentation for a full list.
:::

## Quick Enhancements

For single-post improvements, you can use the "Enhance" link directly from the post list.

1.  Go to your **Posts**, **Pages**, or **Products** list.
2.  Hover over a post to reveal the action links.
3.  Click on **✍️ Enhance**. A dropdown menu will appear.

<img src={caenhance} width="600" />

4.  Select an action, such as **Generate Title**, **Generate Excerpt**, **Generate Tags** or **Generate Meta Desc**.

A modal will appear with several AI-generated suggestions. Click any suggestion to apply it to the post instantly.

## Editor Integration

The Content Assistant can also be used directly inside the WordPress Block and Classic editors. This allows you to select any piece of text and process it with an AI prompt.

### Enabling the Editor Buttons

First, you must enable the feature in the main settings.

1.  Navigate to **AIP > Dashboard** and click the **Integrations** tab.
2.  Open the **Content Assistant** accordion.

<img src={caeditor} width="600" />

3.  Check the box to **Enable Content Assistant in Post Editors**.

### Using the Assistant

Once enabled, a new "Content Assistant" button will appear in the editor's toolbar.

1.  In the post editor, select the text you want to modify.
2.  Click the **Content Assistant** dropdown in the toolbar in Classic Editor.

<img src={caeditorusage} />

3. Click the **gear** icon in the toolbar in Block Editor.

<img src={cablockeditor} />

4.  Choose an action (e.g., Rewrite, Expand, Fix Grammar). The AI will process the selected text and replace it with the result.

### Managing Custom Actions

You can create your own custom actions for the editor dropdown menu.

1.  Go to the **Content Assistant** settings accordion mentioned above.
2.  Use the table to **Add New**, **Edit**, or **Delete** custom actions.

<img src={caeditoractions} width="600"/>

3.  In your prompt, use `%s` as a placeholder for the text a user will select in the editor.