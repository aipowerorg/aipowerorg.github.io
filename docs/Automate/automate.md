---
id: automated-tasks
slug: /automate
title: Automated Tasks
sidebar_position: 1
---

import overview from '/img/automate/automate-task-overview.png';
import addnew from '/img/automate/add-new.png';
import tasklist from '/img/automate/task-list.png';
import taskqueue from '/img/automate/task-queue.png';

# Automated Tasks

The **Automate** module is a scheduling engine that lets you run various AI tasks automatically in the background. You can generate hundreds of articles from a list, improve your existing content, keep your knowledge base up-to-date, or even auto-reply to blog comments — all without manual intervention.

<img src={overview} />

## Navigating the Automate Module

When you go to **AIP > Automate**, you'll see two main sections: the **Task List** and the **Task Queue**.

- **Add New Task**: Click this button to open a multi-step wizard where you can configure a new automated task.
- **Task List**: This is where all your configured tasks live. You can edit, pause, or delete them from here.
- **Task Queue**: This shows the individual items that are being processed by your tasks (e.g., each article to be written or each post to be indexed).

### The Task List

The task list gives you a high-level view of all your automated processes.

<img src={tasklist} />

- **Name, Type, Frequency, Status**: Basic information about each task.
- **Last Run / Next Run**: See when the task last executed and when it's scheduled to run again.
- **Actions**:
    - **Edit**: Modify the task's configuration.
    - **Pause/Resume**: Temporarily stop or restart a task.
    - **Run Now**: Manually trigger the task to run immediately.
    - **Delete**: Permanently remove a task.

### The Task Queue

The queue shows a detailed log of every single item processed by your tasks.

<img src={taskqueue} />

- **Item**: The specific piece of content being processed (e.g., the title of an article or the ID of a post).
- **Status**: See if an item is `pending`, `processing`, `completed`, or `failed`.
- **Actions**:
    - **Delete**: Remove an item from the queue.
    - **Retry**: Re-queue an item that has failed.

## Creating a New Task

Creating a task involves a simple, multi-step wizard.

1.  Click the **Add New Task** button.
2.  Choose a **Category** for your task (e.g., Create New Content, Knowledge Base).
3.  Choose a specific **Task Type** within that category.
4.  Follow the steps in the wizard to configure your task's settings.

<img src={addnew} />

The following pages will explain each task type in detail.