---
id: knowledge-base
slug: /knowledge-base
title: Knowledge Base
sidebar_position: 4
---

import kboverview from '/img/automate/kb-overview.png';
import kbsettings from '/img/automate/kb-settings.png';
import vectors from '/img/automate/vectors.png';

# Knowledge Base

This task automates the process of adding your website's content to a vector store, creating a knowledge base that your chatbots and other AI tools can use for context.

## Creating a Content Indexing Task

1.  Navigate to **AIP > Automate** and click **Add New Task**.
2.  Give your task a descriptive **Name** (e.g., "Index Blog Posts").
3.  From the **Category** dropdown, select **Knowledge Base**.

<img src={kboverview} />

4.  The **Type** will automatically be set to **Index WordPress Content**.
5.  Set your desired **Frequency** (e.g., Daily) and ensure the **Status** is **Active**.
6.  Click **Next**.

## Content Selection

In this step, you define what content to index.

- **Post Types to Index**: Select one or more post types (e.g., Posts, Pages, Products) to include in your knowledge base.

<img src={kbsettings} />

- **Queue all existing content for indexing**: Check this box for the first run. The task will process all existing content from your selected post types. This option is automatically disabled after the first successful run.
- **Automatically index new & updated content**: Check this box to keep your knowledge base current. On each scheduled run, the task will only index content that has been published or updated since the last run.

## Vector Selection

Choose where to store your indexed content.

:::info
You must first configure your vector store providers in **AIP > Dashboard** and create the target stores/indexes in **AIP > Train**.
:::

- **Vector Provider**: Select your service (OpenAI, Pinecone, or Qdrant).

<img src={vectors} />

- **Vector Store**: Choose the specific Vector Store, Index, or Collection you created in the Train module.
- **Embedding**: If using Pinecone or Qdrant, you must select the same embedding provider and model that you used when creating the knowledge base. The available providers are **OpenAI**, **Google**, and **Azure**.

Click **Save Task**. The task is now active and will begin queuing content based on your settings.