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
import download0 from '/img/chat/download0.png';
import copybutton from '/img/chat/copy.png';
import feedback from '/img/chat/feedback.png';
import starteraddon from '/img/chat/starter-addon.png';
import starterdemo from '/img/chat/starter-demo.png';
import sidebar0 from '/img/chat/sidebar0.png';
import sidebartoggle from '/img/chat/sidebar-toggle.png';
import sidebardelete from '/img/chat/sidebar-delete.png';
import customtheme from '/img/chat/custom-theme.png';
import customtheme1 from '/img/chat/custom-theme1.png';
import customtheme2 from '/img/chat/custom-theme2.png';
import popupenable from '/img/chat/popup-enable.png';
import popupsettings from '/img/chat/popup-settings.png';
import popuphint from '/img/chat/popup-hint.png';
import popuptrigger from '/img/chat/popup-trigger.png';

# Appearance

Customize the chatbot’s theme, text labels, and user interface features.

## Theme
Choose a visual theme for the chat window. Options include Light, Dark, ChatGPT, and Custom.

<img src={chatbottheme} />
When you select the Custom theme, click Configure to open the full theme editor.

<img src={customtheme} />

- **General Appearance**: Set the font and bubble roundness.  
- **Dimensions**: Adjust chat container width/height (for inline and popup).

<img src={customtheme1} />

- **Colors**: Customize container, header, footer, message bubbles, sidebar, and buttons.

<img src={customtheme2} />

You can reset all custom theme settings using the **Reset** button in the theme editor.

## Custom Text
- **Greeting**: The first message users see from the bot when chat opens.  
- **Placeholder**: The text shown in the input before typing.  
- **Footer**: A small line of text at the bottom of the chat window (e.g., “Powered by AI”).  
- **Typing text**: Optional text label for the typing indicator (leave empty to use animated dots).  

<img src={customtext} />

## Popup
Configure the floating trigger button and popup behavior. These settings are available when Popup is enabled.

<img src={popupenable} />

<img src={popupsettings} />

- **Position**: Bottom Right, Bottom Left, Top Right, or Top Left.  
- **Auto-open Delay (sec)**: Automatically open the chat after a delay; set 0 to disable.  

### Popup Icon

<img src={popuptrigger} />

- **Icon Style**: Circle, Square, or None (uses your image without a background).  
- **Icon Type**: Default icon, Emoji, or Custom URL.  
- **Icons**: Choose Chat Bubble, Plus, or Question Mark (for the Default icon type).  
- **Custom URL**: Link to your image (e.g., PNG/SVG). Recommended size ~32×32.  
- **Size**: Adjust trigger size.  
- **Colors**: Adapts to the selected theme, including custom themes.  

### Popup Hint

<img src={popuphint} width="400" />

- **Enable Popup Hint**: Show a small hint above the trigger.  
- **Hint Text**: Short, plain text (default: “Need help? Ask me!”).  
- **Show Mode**: On delay (once), Until chat opened, Until dismissed, Always.  
- **Delay (sec)**: Time to wait before showing; 0 shows immediately.  
- **Auto-hide (sec)**: Time until it hides itself; 0 keeps it visible until opened/dismissed.  
- **Dismissible**: Adds a close (×) button.  
- **Frequency**: Once per visitor, Once per session, or Always.  
- **Device Visibility**: Show on Desktop and/or Mobile.  
- **Label Version**: Increment to re-show the hint for all visitors after changes.  

## Fullscreen
Adds a header button to expand the chat to full screen.

<img src={fullscreen} />

## Download
Adds a button to download a transcript of the conversation.

<img src={download0} />

- **Text (.txt)**: Available for all sites when enabled.  
- **PDF (.pdf)**: Available on Pro when the PDF Download addon is active.  

:::info
Enable the PDF Download addon from the Add-ons page to show the PDF button in the chat header alongside the text option.

<img src={pdfpro} /> 

<img src={downloadpdf} width="600" />
:::

## Copy
Adds a copy button to each bot message for easy copying.

<img src={copybutton} />

## Feedback
Adds “like” and “dislike” buttons to each bot message to collect feedback.

<img src={feedback} />

## Conversation Starters
Show predefined prompts users can click to begin a conversation.

<img src={starterdemo} />  

- Click **Configure** to edit prompts.  
- Enter one prompt per line (maximum 6).  

:::info
Enable the Conversation Starters addon from the Add-ons page to use this feature.  

<img src={starteraddon} width="600"/>  
:::

## Sidebar
Adds a conversation history sidebar within the chat window.

<img src={sidebar0} width="600"/>

Users can toggle it open/closed, start a new chat, and delete past conversations.

<img src={sidebartoggle} width="600"/>  

To delete a conversation, hover over it in the list and click the ✕ icon.  

<img src={sidebardelete} width="600" />  

**Note**: The sidebar is available for inline chat. It isn’t available when Popup is enabled.