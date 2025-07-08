---
id: appearance
slug: /Appearance
title: Appearance
sidebar_position: 3
---

import chatbottheme from '/img/chat/theme.png';
import customtext from '/img/chat/custom-text.png';
import fullscreen from '/img/chat/fullscreen.png';
import pdfpro from '/img/chat/pdf-pro.png';
import downloadpdf from '/img/chat/download-pdf.png';
import copybutton from '/img/chat/copy.png';
import feedback from '/img/chat/feedback.png';
import starteraddon from '/img/chat/starter-addon.png';
import starterdemo from '/img/chat/starter-demo.png';
import sidebartoggle from '/img/chat/sidebar-toggle.png';
import sidebardelete from '/img/chat/sidebar-delete.png';
import customtheme from '/img/chat/custom-theme.png';

# Appearance

The **Appearance** section allows you to customize the chatbot's visual theme, text labels, and user interface features.

## Theme

Choose a visual theme for the chat window. Options include Light, Dark, ChatGPT, and Custom. Selecting "Custom" will reveal a detailed theme editor.

<img src={chatbottheme} />

When you select the **Custom** theme, a comprehensive editor appears, allowing you to control every aspect of the chatbot's appearance.

<img src={customtheme} width="600"/>

- **General Appearance**: Set the font and the roundness (border-radius) of chat bubbles.
- **Dimensions**: Adjust the width and height of the chat container (for both inline and popup modes).
- **Colors**: Customize colors for the main container, header, footer, messages, sidebar, and all buttons.

You can reset all custom theme settings by clicking the **Reset** button at the top of the theme editor.

## Custom Text

- **Greeting**: The first message the user sees from the bot when the chat window opens.

<img src={customtext} />

- **Placeholder**: The text that appears in the input box before the user starts typing.

- **Footer**: A small line of text displayed at the very bottom of the chat window (e.g., "Powered by AI").

## Fullscreen

Adds a button to the chat header allowing users to expand the chat to fill the screen.

<img src={fullscreen} />

## Download

This toggle adds a button to the chat window that allows users to download a transcript of their conversation.

<img src={downloadpdf} width="600" />

By default, all users—regardless of plan—can download conversations as plain text (.txt).

Users on the Pro plan can also download transcripts as PDF (.pdf).

:::info PDF Download is a Pro Addon
To enable PDF downloads, go to the Addons page and activate the PDF Download addon. Once activated, a PDF download button will appear in the chat window header alongside the text option.

<img src={pdfpro} />
:::

## Copy

Adds a copy button to each bot message, allowing users to easily copy the response text.

<img src={copybutton} />

## Feedback

Adds "like" and "dislike" buttons to each bot message for collecting user feedback.

<img src={feedback} />

## Starters

Displays pre-defined conversation starters to guide users into beginning a conversation.

<img src={starterdemo} />

When enabled, a text area appears to define the starter prompts.

:::info Starters is a Free Addon  
This feature is disabled by default.  
To use it, go to the **Addons** page and enable the **Starters** addon first.
<img src={starteraddon} width="600"/>
:::

## Sidebar

Adds a conversation history sidebar to the chatbot.

Once enabled, a sidebar will appear directly inside the chat window. Users can toggle it open or closed using the sidebar button.
Their previous conversations will be listed there.

<img src={sidebartoggle} width="600"/>

A New Chat button is located at the top of the sidebar. Clicking it will start a fresh conversation.

To delete a conversation, users can hover over a conversation item and click the ✕ symbol.

<img src={sidebardelete} width="600" />

:::note

The sidebar is only available in inline mode. It does not work with popup chatbots.

:::