---
id: ai-training-intro
slug: /ai-training/intro
title: Knowledge Base / Training
sidebar_position: 10
---

import vectordbaddon from '/img/chat/vector-db-addon.png';
import trainui from '/img/train/train.png';
import vectorapi from '/img/train/vector-api.png';
import newstore from '/img/train/create-new-store.png';
import addcontenttext from '/img/train/add-content-text.png';
import addcontentfile from '/img/train/add-content-file.png';
import addcontentwp from '/img/train/add-content-wp.png';
import embedding from '/img/train/embedding.png';
import viewindex from '/img/train/view-index.png';

# Knowledge Base / Training

The **Train** module is where you create a custom knowledge base by "training" the AI on your own content. This content can be text, files, or existing WordPress posts and pages.

The resulting knowledge base can then be used by other modules like the [Chatbot](/docs/chat) or [AI Forms](/docs/ai-forms/create-manage-forms) to provide contextually-aware responses based on your data.

## Provider Setup

Before creating a knowledge base, you must configure your vector database provider in the main dashboard.

-   **OpenAI**: Go to **AIP > Dashboard > Providers** and enter your OpenAI API Key. Vector Stores are available by default.
-   **Pinecone & Qdrant**: These are available via a free add-on. First, go to **AIP > Add-ons** and activate the **Vector DB Integrations** add-on.

<img src={vectordbaddon} width="600"/>

- Then, go to **AIP > Dashboard > Integrations** to enter your API keys and other required credentials for Pinecone or Qdrant.

<img src={vectorapi} width="600"/>

## The Training Interface

The training page has a simple two-column layout:

<img src={trainui} />

-   **Left Column (Add Content):** This is where you choose your content source and target knowledge base.
-   **Right Column (Management):** This is where you view and manage the content of a selected knowledge base.

## Create a Knowledge Base

A knowledge base is called a "Vector Store" for OpenAI, an "Index" for Pinecone, and a "Collection" for Qdrant.

1.  In the left column, select the desired **Vector DB** provider (OpenAI, Pinecone, or Qdrant) from the dropdown.
2.  Click the **+** icon next to the "Target" dropdown.
3.  An inline form will appear. Enter a descriptive name for your new knowledge base.

<img src={newstore} />

4.  For Pinecone or Qdrant, you must also specify the **Dimension**. This should match the embedding model you plan to use (e.g., 1536 for OpenAI's `text-embedding-3-small`).
5.  Click **Create**. The new knowledge base will be created and automatically selected in the target dropdown.

## Add Content to Your Knowledge Base

Once you have a knowledge base created and selected, you can add content to it using one of three sources.

### Using Text

1.  Select "Text" from the **Source** dropdown.
2.  Paste your content into the textarea.

<img src={addcontenttext} />

3.  Click **Add Content**.

### Using File Upload

This is a Pro feature.

1.  Select "Files" from the **Source** dropdown.
2.  Click "Choose File" and select a `.txt` or `.pdf` file. The plugin will automatically extract the text.

<img src={addcontentfile} />

3.  Click **Add Content**.

### Using Site Content

1.  Select "Site Content" from the **Source** dropdown.
2.  Use the filters to select one or more Post Types and a Status.
3.  Click **Load Content**.

<img src={addcontentwp} />

4.  Check the boxes next to the posts/pages you want to index.
5.  Click **Add Content**.

### Embedding Model

When using Pinecone or Qdrant, you must select an **Embedding Model**. This model converts your text into vectors that the database can understand.

<img src={embedding} />

It is crucial to use the **same model** here as you will later in any Chatbot or AI Form that needs to search this knowledge base.

## Manage Your Knowledge Base

When you select a knowledge base from the "Target" dropdown, its details and management options will appear in the right-hand panel.

-   **View Content**: For OpenAI, this panel lists all the files in your Vector Store. For Pinecone and Qdrant, it shows a log of recent indexing activity.

<img src={viewindex} />

-   **Search**: Click the magnifying glass icon to open a search bar and test queries against your knowledge base.
-   **Delete Content**: For OpenAI, you can delete individual files from a Vector Store.
-   **Delete Knowledge Base**: Click the trash can icon to permanently delete the entire knowledge base. **This action cannot be undone.**

## Use Your Knowledge Base

Once your knowledge base is populated, you can connect it to other AIP modules:
-   **Chatbots**: In the [Chatbot editor](/docs/context), go to the **Context** section to connect your knowledge base.
-   **AI Forms**: In the [AI Form builder](/docs/ai-forms/context), go to the **Context** section to connect your knowledge base.
-   **Content Writer**: In the [Write module](/docs/Write/context), use the **Context** section to generate articles based on your knowledge base.