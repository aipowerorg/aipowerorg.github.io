---
title: Post Settings
sidebar_position: 7
---

import postsettings from '/img/write/post-settings.png';
import schedulesettings from '/img/write/schedule.png';

# Post Settings

The Post settings control how the generated content is saved in your WordPress site.

<img src={postsettings} />

## Post Attributes

-   **Type**: Choose whether to save the content as a `Post`, `Page`, or any other public custom post type available on your site.
-   **Author**: Select the WordPress user who will be assigned as the author of the post.
-   **Categories**: Assign one or more categories to the post. This option is available for post types that support categories.

## Status & Publishing Schedule

These settings determine the visibility and publication time of the post.

-   **Status**:
    -   **Draft**: Saves the post as a draft for you to review later.
    -   **Publish**: Publishes the post immediately or schedules it for a future date.
    -   **Pending Review**: Saves the post with "Pending Review" status.
    -   **Private**: Saves the post as private, visible only to logged-in users with sufficient permissions.
-   **Publishing Schedule**: If you select `Publish` as the status, you can choose a scheduling strategy:

<img src={schedulesettings} />

    -   **Publish Immediately**: The default behavior. The post will be published as soon as it's saved.
    -   **Smart Schedule**: This option is for task-based modes (Bulk, CSV, etc.). It automatically staggers the publication of multiple posts. Set a **Start Date/Time** and an **Interval** (e.g., publish one post every 2 hours).
    -   **Use Dates from Input**: This option is also for task-based modes. It uses a specific date and time provided in your input source (List, CSV, or Google Sheets), allowing for precise scheduling of each individual article.
    -   **Manual Schedule**: For single articles, you can manually set a future date and time to schedule the post.