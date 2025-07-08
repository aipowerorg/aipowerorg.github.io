---
id: user-credits-intro
slug: /user-credits/intro
title:  User Credits
sidebar_position: 10
---

import tokenaddon from '/img/chat/token-addon.png';
import productmetabox from '/img/user-credits/product-metabox.png';
import creditsadmin from '/img/user-credits/credits-admin.png';
import shortcodeatt from '/img/user-credits/shortcode-att.png';
import tokenusage from '/img/user-credits/token-usage.png';
import tokenfrontend from '/img/user-credits/token-frontend.png';


# User Credits

The User Credits system, powered by the **Token Management** add-on, allows you to control and monetize the use of AI features on your site. You can set usage limits for different user roles and sell "token packages" through WooCommerce, giving your users a way to pay for their AI consumption.

This system works with the following modules:
-   [Chat](/docs/chat)
-   [AI Forms](/docs/ai-forms/create-manage-forms)
-   [Image Generator](/docs/image-generator)

## How It Works

1.  **Activate the Add-on**: Token management is a free add-on that you must activate first from the **AIP > Add-ons** page.
<img src={tokenaddon} />
2.  **Set Usage Limits**: For each module (Chat, AI Forms, Image Generator), you can define periodic usage limits (e.g., 10,000 tokens per day) for guests and different user roles. This is your "free tier".
3.  **Sell Token Packages**: Using our WooCommerce integration, you can create products that grant a specific number of tokens upon purchase. When a user buys a package, these tokens are added to their personal, non-expiring "token balance".
4.  **Token Deduction**: When a user interacts with an AI feature, the plugin first checks if they have a token balance. If they do, tokens are deducted from that balance. If their balance is zero, the plugin then checks their periodic usage limits. If they have exceeded both, they cannot use the feature until their periodic limit resets or they purchase more tokens.

## Selling Tokens with WooCommerce

You can sell tokens by creating special products in WooCommerce.

### Create a Token Product

1.  Navigate to **Products > Add New** in your WordPress dashboard.
2.  Create a product as you normally would (e.g., a Simple product). Set a price for it.
3.  In the product data section, find the **AI Power: Token Package** meta box on the right-hand side.

<img src={productmetabox} />

4.  Check the box labeled **This is a token package product**.
5.  In the **Tokens Granted** field that appears, enter the number of tokens this product should give the user upon purchase (e.g., `100000`).
6.  Publish or update the product.

### How Tokens are Granted

Once a customer purchases this product and the WooCommerce order is marked as **Completed**, the tokens are automatically added to their account balance. The plugin keeps a record of all purchases.

## Managing User Credits

As a site administrator, you can view and manage all user token data from one central screen.

1.  Navigate to **AIP > Credits** from your WordPress dashboard.
2.  This screen displays a comprehensive overview of your users' token status.

<img src={creditsadmin} />

**Key Features:**

-   **User List**: A searchable and sortable list of all registered users who have used tokens or have a token balance.
-   **Token Balance**: View and **manually edit** any user's token balance directly from this table. Click the number, change it, and press Enter to save.
-   **Usage Details**: See a breakdown of how many tokens each user has consumed in the current period for each module (Chatbots, AI Forms, Image Generator).
-   **Purchase History**: Click the cart icon <span class="dashicons dashicons-cart"></span> in the "Actions" column to view a detailed history of a user's token package purchases.
-   **Usage Chart**: A visual chart at the top shows the total daily token consumption across your entire site, helping you monitor overall API usage.

## Frontend Usage Display

You can allow your logged-in users to see their own token balance, purchase history, and periodic usage on any page of your site.

1.  Navigate to **AIP > Credits**.
2.  At the top of the page, copy the `[aipkit_token_usage]` shortcode.

3.  Click the settings icon <span class="dashicons dashicons-admin-settings"></span> to configure which modules are displayed in the usage table (Chatbot, AI Forms, Image Generator).

<img src={shortcodeatt} />

4.  Paste the shortcode into any page, post, or widget.

<img src={tokenusage} />

When a logged-in user visits that page, they will see a dashboard showing:
-   Their current non-expiring token balance.
-   A button to view their complete purchase history.

<img src={tokenfrontend} width="600"/>

-   A breakdown of their usage for the current period for each module.

## Setting Usage Limits

While this module manages the token *balance* from purchases, the *free periodic limits* (e.g., daily or monthly allowances) are configured within each specific module's settings. This allows you to set different free tiers for your Chatbots versus your AI Forms, for example.

-   **Chatbot Limits**: See the [Chat > Token Management](/docs/Chat/token-management) documentation.
-   **AI Forms Limits**: See the [AI Forms > Token Management](/docs/AI-Forms/token-management) documentation.
-   **Image Generator Limits**: See the [Image Generator > Token Management](/docs/image-generator#token-management) documentation.