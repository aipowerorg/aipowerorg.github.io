---
id: logs
slug: /logs
title: Logs
sidebar_position: 14
---

import logviewer from '/img/logs/log-viewer.png';
import logdetails from '/img/logs/log-details.png';
import logfilters from '/img/logs/log-filters.png';
import logactions from '/img/logs/log-actions.png';
import logsettings from '/img/logs/log-settings.png';
import logprune from '/img/logs/log-prune.png';
import vectorscore from '/img/chat/vector-score.png';

# Logs

The **Logs** module is a centralized hub for administrators to review all interactions that occur with the AI across different modules, including the Chatbot, AI Forms, and Content Assistant. It provides tools for filtering, exporting, and managing your log data to monitor usage and ensure compliance.

## Navigating the Logs Module

To access the logs, go to **AIP > Logs**. The module is divided into two main sections:

-   **Log Viewer**: The default view for browsing and interacting with conversation logs.
-   **Settings**: Tools for managing log retention and auto-deletion policies.

## The Log Viewer

The Log Viewer features a two-pane layout, designed for efficient review of your AI interactions.

<img src={logviewer} />

-   The **left pane** displays a list of all conversations, showing the user, the source (e.g., a specific chatbot or module), and a snippet of the last message.
-   The **right pane** shows the detailed transcript of the conversation selected from the list.

### Filtering Logs

You can narrow down the conversation list using the filters at the top of each column.

<img src={logfilters} />

-   **Filter by Source**: Click the filter icon <span class="dashicons dashicons-filter"></span> in the **Chatbot / Module** column to select a specific chatbot or module (e.g., AI Forms, Content Assistant).
-   **Filter by User**: Use the filter in the **User** column to search for logs from a specific user by name or email.
-   **Filter by Message Content**: Use the filter in the **Last Message** column to find conversations containing a specific word or phrase.

### Viewing Conversation Details

Clicking on any conversation in the list on the left will load its full transcript in the right-hand detail pane.

<img src={logdetails} />

This view includes:
-   A complete, timestamped record of the conversation.
-   Metadata such as the user's IP address and a **one-click block button** to instantly add the IP to your banned list.
-   The AI provider, model, and total tokens consumed for each AI response.
-   The raw API request payload sent to the AI, which is useful for debugging.
-   Any feedback (like/dislike) that the user provided on a chatbot message.
-   For interactions that used a knowledge base, a **Vector Search Scores** section will appear under each bot message showing the relevance scores of the documents retrieved. You can click on a score to see more details about the matched content.
-   **Content Writer & Assistant Logs**: These logs provide a detailed breakdown of each step in the generation process, including the prompts and token usage for the title, content, excerpt, meta description, and other generated fields.

<img src={vectorscore} width="600"/>

### Bulk Actions

The ellipsis icon (`...`) in the header of the conversation list opens the Bulk Actions menu, which applies to the currently filtered set of logs.

<img src={logactions} />

-   **Export All**: Downloads a CSV file of all conversations that match your current filters. This is useful for external analysis or record-keeping.
-   **Delete All**: Permanently deletes all conversations that match your current filters. **This action cannot be undone.**

## Settings

The **Settings** tab allows you to configure automatic log deletion to keep your database clean and manage data retention policies.

<img src={logsettings} />

### Auto-Delete Logs (Pruning)

This feature automatically deletes log entries that are older than a specified period.

:::info This is a Pro Feature
To use the Auto-Delete feature, you must have an active Pro license.
:::

<img src={logprune} />

-   **Enable Auto-Delete**: This toggle activates or deactivates the daily log pruning task.
-   **Retention Period**: Choose how long to keep logs before they are deleted (e.g., 7 Days, 30 Days, 90 Days).
-   **Delete Logs Now**: This button allows you to manually run the pruning process immediately using the currently selected retention period, without waiting for the scheduled daily task.
-   **Status**: This indicator shows whether the daily WP-Cron task for auto-deletion is currently scheduled to run. It will show "Scheduled" when enabled and "Disabled" otherwise.