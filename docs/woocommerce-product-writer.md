---
id: woocommerce-product-writer
slug: /woocommerce-product-writer
title: WooCommerce Product Writer
sidebar_position: 12
---

import caaddon from '/img/content-assistant/ca-addon.png';
import caproductui from '/img/content-assistant/ca-product-ui.png';
import catemplate from '/img/content-assistant/product-template.png';
import caai from '/img/content-assistant/product-ai.png';
import cacontext from '/img/content-assistant/product-context.png';
import caprompts from '/img/content-assistant/product-prompts.png';
import updatecc from '/img/automate/update.png';
import setupce from '/img/content-assistant/product-task.png';
import enablevector from '/img/automate/enable-vector.png';
import aiprompts from '/img/content-assistant/product-prompt.png';

# WooCommerce Product Writer

The WooCommerce Product Writer helps you create and improve your product listings. You can use it to bulk-update existing products or set up automated tasks to refresh your product details on a schedule.

## Activation

The Product Writer is part of the **Content Assistant**, which is a free add-on. You must activate it first.

1.  Navigate to **AIP > Add-ons**.
2.  Find the **Content Assistant** addon and click **Activate**.

<img src={caaddon}  />

Once activated, you can access its features on your **Products** list screen.

## Updating Multiple Products at Once

This feature allows you to update multiple products at once using the **Content Assistant** modal.

1.  Go to your **Products** list in WordPress.
2.  Select the checkboxes next to the products you want to enhance.
3.  Click the **Content Assistant** button that appears at the top of the list.

<img src={caproductui} />

This will open the modal where you can configure the AI enhancements.

-   **Templates**: Save and load your entire enhancement configuration as a template for quick reuse.
<img src={catemplate} />

-   **AI**: Choose the AI Provider and Model for the enhancement tasks.
<img src={caai} />

-   **Context**: Enable a Vector Store to provide your knowledge base as context to the AI, ensuring enhancements are aligned with your brand voice or technical data.
<img src={cacontext} />

-   **Prompts**: Check the box for each field you want the AI to update (Title, Excerpt, Content, Meta Description, Focus Keyword). For each selected field, a tab will appear where you can write a custom prompt using the available placeholders.
<img src={caprompts} />

-   Click **Start** to begin the process. The modal will display a log of the progress for each product.

## WooCommerce Placeholders

When writing prompts for your products, you can use the following placeholders to give the AI with specific data to work with.

| Placeholder             | Description                                          |
|-------------------------|------------------------------------------------------|
| `{original_title}`      | The current title of the product.                    |
| `{original_content}`    | The main product description.                        |
| `{original_excerpt}`    | The product short description.                       |
| `{original_meta_description}` | The current meta description.               |
| `{original_focus_keyword}` | The product's current focus keyword from your SEO plugin. |
| `{original_tags}`       | A comma-separated list of the product's current tags. |
| `{categories}`          | A comma-separated list of the product's categories. (Same as `{product_categories}`) |
| `{price}`               | The product's current price.                         |
| `{regular_price}`       | The product's regular (non-sale) price.              |
| `{sale_price}`          | The product's sale price (if on sale).               |
| `{sku}`                 | The product's Stock Keeping Unit (SKU).              |
| `{attributes}`          | A semicolon-separated list of product attributes (e.g., "Color: Blue; Size: Large"). |
| `{stock_quantity}`      | The number of items in stock.                        |
| `{stock_status}`        | The stock status (e.g., `instock`, `outofstock`).    |
| `{weight}`              | The product's weight.                                |
| `{length}`              | The product's length.                                |
| `{width}`               | The product's width.                                 |
| `{height}`              | The product's height.                                |
| `{short_description}`   | The product's short description.                     |
| `{purchase_note}`       | The note sent to customers after purchase.           |
| `{total_sales}`         | The total number of times the product has been sold. |
| `{product_categories}`  | A comma-separated list of the product's categories.  |

**Example Prompt for a Short Description:**
> Rewrite this short description for a product named `{original_title}` to be more exciting and focus on its key benefits. The product's key attributes are: `{attributes}`. The current price is `{price}`. Here is the original content to use for context: `{original_content}`.

## Automating Product Updates

You can automatically update your products on a schedule using the **Automate** module.

1.  Navigate to **AIP > Automate** and click **Add New Task**.
2.  Give your task a name (e.g., "Monthly Product Description Refresh").
3.  From the **Category** dropdown, select **Update Existing Content**.

<img src={updatecc} />

4.  Set your desired **Frequency** (e.g., Monthly) and **Status** (Active).
5.  Click **Next**.

### Content Selection

Define which products you want the task to enhance.

-   **Post Types**: Select **Products**.
-   **Categories & Authors**: Optionally narrow down the selection by product category or author.

<img src={setupce} />

-   **Fields to Enhance**: Check the box for each field you want the AI to update (e.g., `Title`, `Excerpt`, `Content`, `Meta Description`).
-   **Queue all existing content**: Check this to run the enhancement on all existing products that match your criteria one time. Scheduled runs after this will only process newly modified content.

### Context
Connect a vector store to provide the AI with additional context.

<img src={enablevector}  />

### AI & Prompts
Configure the AI and provide instructions for each field you selected to enhance.

<img src={aiprompts} />

-   **AI Settings**: Choose your AI provider and model.
-   **Prompts**: Write your prompts using the WooCommerce placeholders listed above.

Click **Save Task**. The task will now queue the matching products and begin the enhancement process according to your schedule.