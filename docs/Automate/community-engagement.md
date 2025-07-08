---
id: community-engagement
slug: /community-engagement
title: Community Engagement
sidebar_position: 5
---

import engagement from '/img/automate/engagement.png';
import contenteng from '/img/automate/contenteng.png';
import filtersce from '/img/automate/filters.png';
import aicomments from '/img/automate/ai-comments.png';

# Community Engagement

This task helps you manage your community by automatically replying to new comments on your website.

## Creating an Auto-Reply Task

1.  Navigate to **AIP > Automate** and click **Add New Task**.
2.  Give your task a **Name** (e.g., "Blog Comment Replies").
3.  From the **Category** dropdown, select **Engagement**. The type will be set to **Auto-Reply to Comments**.

<img src={engagement} />

4.  Set your desired **Frequency** and **Status**.
5.  Click **Next**.

## Content Selection

Select the post types where you want the AI to monitor and reply to comments (e.g., Posts).

<img src={contenteng} />

## Filters

Configure the rules for when the AI should reply.

- **Action on Reply**: Choose whether to `Approve Immediately` or `Hold for Moderation`.

<img src={filtersce} />

- **Do not reply to other replies**: Check this to prevent the AI from replying to nested comments, ensuring it only responds to top-level comments.
- **Include/Exclude Keywords**: Control which comments get a reply.
    - **Include**: The AI will only reply if the comment contains one of these comma-separated words/phrases.
    - **Exclude**: The AI will ignore any comment containing one of these words/phrases.

## AI & Prompt

Define the AI's instructions for writing the reply.

- **AI Settings**: Select your AI provider, model, and other parameters. A smaller `Max Tokens` (e.g., 250) is usually sufficient for comment replies.
- **Reply Prompt**: Write the instructions for the AI.

<img src={aicomments} />

- **Placeholders**: 
    - <code>{`{comment_content}`}</code>: The text of the user's comment.
    - <code>{`{comment_author}`}</code>: The name of the person who left the comment.
    - <code>{`{post_title}`}</code>: The title of the post where the comment was made.

Click **Save Task**. The task will now check for new comments on the schedule you set.