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
import careset from '/img/content-assistant/reset.png';
import caposition from '/img/content-assistant/position.png';

# Content Assistant
The Content Assistant provides a suite of tools to improve existing content directly within your WordPress admin area. You can bulk update posts, generate new titles and excerpts from the posts list, and process text directly within the post editor.

## Activation
The Content Assistant is a free add-on that must be activated first.

1. Navigate to **AIP > Add-ons**.  
2. Find the Content Assistant addon and click **Activate**.  
   <img src={caaddon} />  

Once activated, three new features become available across your Posts, Pages, and Products list screens and editors.

## Content Assistant
This feature allows you to update multiple posts at once using a configuration tool.

1. Go to your Posts, Pages, or Products list.  
2. Select the checkboxes next to the items you want to update.  
   <img src={cabulkbutton} />  
3. Click the **Content Assistant** button at the top of the list.  

This opens the Content Assistant modal to configure AI updates.

- **Templates**: Save and load your entire configuration as a template for quick reuse.  
  <img src={catemplate} />  
- **AI**: Choose the AI Provider and Model, and adjust Temperature and Max Tokens.  
  <img src={caai} />  
- **Context**: Optionally use a Vector Store to provide your knowledge base as context.  
  <img src={cacontext} />  
- **Prompts**: Check each field to update (Title, Excerpt, Content, Tags, Meta Description, Focus Keyword). For each, write a custom prompt. Use placeholders like `{original_title}`, `{original_content}`, and `{original_focus_keyword}` to reference existing data.  
  <img src={caprompts} />  

Click **Start** to begin. The modal displays a live log for each post.

**Tip:** Available placeholders include `{original_title}`, `{original_content}`, `{original_excerpt}`, `{original_meta_description}`, `{original_focus_keyword}`, `{original_tags}`, `{categories}`.  
For Products, see the WooCommerce Product Writer docs for product placeholders.

## Quick Assistant Actions
For single-post improvements, use the “✍️ Assistant” link directly from the post list.

1. Go to your Posts, Pages, or Products list.  
2. Hover a post to reveal action links.  
3. Click ✍️ Assistant to open a dropdown.  
   <img src={caenhance} />  
4. Choose an action like **Generate Title**, **Generate Excerpt**, **Generate Tags**, or **Generate Meta Desc**.  

A modal shows multiple AI suggestions — click to apply.

## Editor Integration
Use the Content Assistant directly inside the WordPress Block and Classic editors to process selected text with AI.

1. Go to **AIP > Dashboard** and open the **Integrations** tab.  
2. Open the Content Assistant accordion.  
   <img src={caeditor} width="600" />  
3. Check **Enable Content Assistant in Post Editors**.  

### Block Editor (Gutenberg)

1. Select text in a paragraph/heading block.  
2. Click the ✍️ AIP Content Assistant dropdown in the block toolbar (top of editor or inline toolbar).  
   <img src={cablockeditor} />  
3. Pick an action (e.g., Rewrite, Expand, Fix Grammar, Summarize, Create Outline, Generate FAQs, Simplify Tone). 

**Recent actions** and **Undo** are available for quick reuse and reverting.

### Classic Editor

1. Select text in the editor.  
2. Click the ✍️ AIP Content Assistant dropdown in the TinyMCE toolbar.  
   <img src={caeditorusage} />  
3. Choose an action.  

## Managing Custom Actions
You can create your own actions for the editor menus.

1. Go to **AIP > Dashboard > Integrations > Content Assistant**.  
2. Add, Edit, or Delete actions.  

<img src={caeditoractions} width="600"/>  

**Prompts**

Use `%s` in the prompt where the selected text should be inserted.

Example:  Rewrite this to improve clarity and engagement: “%s”

**Insert position**

- Replace selection (default)  
- Insert after  
- Insert before

<img src={caposition} width="600" />

**Defaults and Reset**

The assistant ships with seven built-in actions:  
- Rewrite  
- Expand  
- Fix Grammar & Spelling  
- Summarize  
- Create Outline (H2/H3)  
- Generate FAQs  
- Simplify Tone  

Click **Reset to Defaults** anytime to restore.

<img src={careset} width="600" />