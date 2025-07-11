---
id: create-chatbot
slug: /chat
title: Create & Manage Chatbots
sidebar_position: 1
---

import createbot from '/img/chat/create-new.png';
import createbotscreen from '/img/chat/create-new2.png';
import switchbot from '/img/chat/switch-bots.png';
import renamebot from '/img/chat/rename-bot.png';
import chatbotsettings from '/img/chat/chatbot-settings.png';
import savedeletereset from '/img/chat/save-delete-reset.png';
import shortcodepill from '/img/chat/shortcode-pill.png';
import shortcodeinsert from '/img/chat/shortcode-insert.png';
import popupenable from '/img/chat/popup-enable.png';
import popupsettings from '/img/chat/popup-settings.png';
import popupurl from '/img/chat/popup-url.png';

# Create & Manage Chatbots

You can add chatbots to your site in two ways:
- **As a shortcode**: Embed the chat window directly into the content of a page, post, or widget.
- **As a popup**: Display a chat icon that opens a chat window when clicked. This can be enabled on specific pages or across your entire site.

This guide will walk you through the basics of creating, editing, and managing your chatbots.

👉 Check out the live demo here: [aipower.org/demo](https://aipower.org/demo)

## Creating a New Bot

1.  Navigate to **AIP > Chat** from your WordPress dashboard.
2.  Click the **+ New Bot** button at the top of the page.

<img src={createbot} />

3.  The chatbot editor will switch to the "Create New" view.

<img src={createbotscreen} />

4.  Enter a name for your new chatbot (e.g., "Customer Support Bot") and click the **Start Creating** button.

The page will reload, and your new chatbot will be ready for you to configure.

## Managing Chatbots

Our plugin comes with a **Default Bot** to help you get started.

This bot functions just like any other chatbot and can be deployed on your site.

All of your chatbots, including the default one, are accessible from the main selection menu located next to the **+ New Bot** button.

- **Switching Bots**: Simply click on the dropdown menu (which shows the name of the currently selected bot) and click on the chatbot you wish to edit.

<img src={switchbot} />

- **Renaming a Bot**: To rename a chatbot, open the selection menu and hover your mouse over the bot you want to rename. A <span class="dashicons dashicons-edit"></span> pencil icon will appear. Click it, type the new name, and press Enter or click the checkmark to save.

<img src={renamebot} />

## Deploying Your Chatbot

There are two primary ways to deploy your chatbot on your website: as a popup or embedded directly into a page's content using a shortcode.

### Shortcode Mode

The shortcode allows you to embed the chat window directly into the content of any post, page, or widget.

#### How to Get the Shortcode

1.  In the chatbot editor, select the tab for the bot you want to deploy.
2.  At the top of the settings area, you will see a gray "pill" containing the shortcode.

<img src={shortcodepill} />

3.  Click on the shortcode to instantly copy it to your clipboard.

#### How to Use the Shortcode

Paste the copied shortcode (e.g., `[aipkit_chatbot id=9453]`) directly into the content editor of any page, post, or a text/shortcode widget where you want the chatbot to appear.

<img src={shortcodeinsert} />

### Popup Mode

A popup chatbot appears as a small, clickable icon in a corner of the screen. When a user clicks the icon, the chat window opens.

To enable popup mode:

1.  In your chatbot's settings, go to the **Appearance** section.
2.  Check the **Popup** box.

<img src={popupenable} />

3.  New settings for the popup will appear in the **Popup** accordion.

#### Popup Settings

-   **Popup Position**: Choose which corner of the screen the popup icon and window will appear in (e.g., Bottom Right).
-   **Popup Delay (sec)**: Set a delay in seconds before the chat window automatically opens for the first time for a visitor. Set to `0` to disable auto-opening.

<img src={popupsettings} width="600" />

-   **Site-wide**: If enabled, this chatbot popup will appear on every page of your website. **Only one chatbot can be set to site-wide at a time.**
-   **Popup Icon**: Customize the appearance of the popup trigger button. You can choose from one of three default icons or provide a URL to your own custom image.

<img src={popupurl} width="600" />

## The Chatbot Editor

The editor is split into two main columns:

*   **Left Column (Settings)**: This is where you configure everything about your chatbot. The settings are organized into collapsible sections called accordions (e.g., General, Appearance, Context).

<img src={chatbotsettings} />

*   **Right Column (Preview)**: This area shows a live preview of your chatbot. As you change settings and click the **Save** button, the preview will update to reflect your changes.

## Saving, Deleting, and Resetting

At the bottom of the settings area for each chatbot, you will find three action buttons:

*   **Save**: Saves your current configuration for the chatbot.
*   **Delete**: Permanently deletes the chatbot. This action cannot be undone. You will be asked for confirmation. The "Default Bot" cannot be deleted.

<img src={savedeletereset} />

*   **Reset**: Reverts all settings for the selected chatbot back to their original default values. This is useful if you want to start over with a clean configuration.