---
id: content-enhancement
slug: /content-enhancement
title: Content Enhancement
sidebar_position: 3
---

import updatecc from '/img/automate/update.png';
import setupce from '/img/automate/setupce.png';
import enablevector from '/img/automate/enable-vector.png';
import aiprompts from '/img/automate/ai-prompts.png';

# Content Enhancement

This task allows you to automatically improve existing content on your site. You can set it to run on a schedule to rewrite titles, excerpts, or even the full content of posts that meet specific criteria. This is a Pro feature.

## Creating a Content Enhancement Task

1.  Navigate to **AIP > Automate** and click **Add New Task**.
2.  Give your task a **Name** (e.g., "Refresh Old Blog Posts").
3.  From the **Category** dropdown, select **Update Existing Content**. The type will be set automatically.

<img src={updatecc} />

4.  Set your desired **Frequency** and **Status**.
5.  Click **Next**.

## Content Selection

Define which posts you want the task to enhance.

- **Post Types**: Select the post types to target (e.g., Posts, Pages).
- **Categories & Authors**: Optionally narrow down the selection by post category or author.

<img src={setupce} />

- **Post Statuses**: Choose which post statuses to enhance (e.g., only `Published` posts).
- **Fields to Enhance**: Check the box for each field you want the AI to update (e.g., `Title`, `Excerpt`, `Content`, `Meta Description`).
- **Queue all existing content**: Check this to run the enhancement on all existing posts that match your criteria one time. Scheduled runs after this will only process newly modified content.

## Context

Connect a vector store to provide the AI with additional context. This is useful if you want to rewrite content to include information from your knowledge base. The settings are the same as in the [Write](/docs/Write/context) module.

<img src={enablevector} width="600" />

## AI & Prompts

Configure the AI and provide instructions for each field you selected to enhance.

- **AI Settings**: Choose your AI provider, model, and set the temperature and max tokens.

<img src={aiprompts} width="600"/>

- **Prompts**: A separate prompt box will appear for each field you chose to enhance (Title, Excerpt, etc.).
- **Placeholders**: Use placeholders in your prompts to provide the AI with the original content.
    - `{original_title}`
    - `{original_content}`
    - `{original_excerpt}`
    - `{original_meta_description}`
    - For WooCommerce products, you can also use placeholders like `{price}`, `{regular_price}`, `{sku}`, `{attributes}`, `{stock_quantity}`,`{stock_status}`, `{weight}`, `{length}`, `{width}`, `{height}`.

Click **Save Task**. The task will queue the matching posts and begin the enhancement process according to your schedule.