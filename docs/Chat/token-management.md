---
id: token-management
slug: /token-management
title: Token Management
sidebar_position: 8
---

import tokenaddon from '/img/chat/token-addon.png';
import tokensettings from '/img/chat/token-settings.png';

# Token Management

Token management allows you to control how many tokens users can consume within a specific period. This is essential for managing your API costs, especially on high-traffic sites.

### How to Enable

Token Management is a free add-on. To use it, you must first enable it:
1.  Go to **AIP > Add-ons**.
2.  Activate the **Token Management** add-on.

<img src={tokenaddon} />

### Configuration

Once the add-on is active, a **Token Management** accordion will appear in your chatbot's settings.

1.  **Guest Limit**: Set a token limit for users who are not logged in.
    -   Leave this field **blank** for unlimited tokens.
    -   Enter `0` to completely disable the chatbot for guests.
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

## Selling Tokens

You can charge your users for their use of your chat bots.

Our integration with WooCommerce allows you to sell tokens, which users can purchase and utilize to access the chat bot features on your site.

Learn more about it here: [User Credits](/docs/user-credits.md)