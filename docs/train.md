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
import trainsettings from '/img/train/train-settings.png';
import generalsettings from '/img/train/general-settings.png';

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

The training page displays all of your existing knowledge bases as a grid of cards. From here, you can add new content or manage existing knowledge bases.

<img src={trainui} />

-   **Add Content**: Opens a form where you can create a new knowledge base or add content to an existing one.
-   **Sync**: Refreshes the list of knowledge bases from all your connected providers (OpenAI, Pinecone, and Qdrant).

## Create a Knowledge Base

A knowledge base is called a "Vector Store" for OpenAI, an "Index" for Pinecone, and a "Collection" for Qdrant.

1.  Click **Add Content** button, select the desired **Vector DB** provider (OpenAI, Pinecone, or Qdrant) from the dropdown.
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

## Embedding Model

When using Pinecone or Qdrant, you must select an **Embedding Model**. This model converts your text into vectors that the database can understand. The available providers are **OpenAI**, **Google**, and **Azure**.

<img src={embedding} />

It is crucial to use the **same model** here as you will later in any Chatbot or AI Form that needs to search this knowledge base.

## Managing a Knowledge Base

When you click on a knowledge base card from the main grid, you are taken to its detail view.

-   **View Content**: This panel shows a log of all content that has been indexed into the knowledge base.
-   **Search**: Click the `...` icon to open a search bar and test queries against your knowledge base.
-   **Delete Knowledge Base**: Click the `...` icon to permanently delete the entire knowledge base. **This action cannot be undone.**

<img src={viewindex} />

The detail view shows records of all content that has been indexed into the knowledge base.

| Column                | Description                                                                                                                                                                                                                                                                                                                        |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Time**              | The date and time the item was indexed.                                                                                                                                                                                                                                                                                            |
| **File ID / Point ID**| The unique identifier for the content within the vector database.                                                                                                                                                                                                                                                                    |
| **Status**            | The current status of the item (e.g., `indexed`, `failed`).                                                                                                                                                                                                                                                                        |
| **Type**              | The source of the content: `Site Content`, `Text`, or `File Upload`. For Pinecone and Qdrant, items uploaded by users from the frontend chatbot will be marked with a person icon <span class="dashicons dashicons-admin-users"></span>, indicating they are stored in a unique, isolated namespace to maintain conversational context. |
| **Message**           | A summary of the indexing operation.                                                                                                                                                                                                                                                                                               |
| **Embedding**         | The provider and model used to create the vector embedding (for Pinecone and Qdrant).                                                                                                                                                                                                                                                |
| **Source**            | The original source of the content, such as a post title or filename.                                                                                                                                                                                                                                                               |
| **Actions**           | - **Re-index**: For `Site Content`, this deletes the old entry and indexes the latest version of the post. <br/> - **View**: Opens a modal to show the exact text snippet that was indexed. <br/> - **Delete**: Deletes the record from both the vector database and the local logs. |


## Settings

The **Settings** tab within the Train module allows you to fine-tune what content gets indexed.

### Content Indexing Controls

This Pro feature provides granular control over how your content is processed for AI training. Instead of indexing all available data by default, you can:

- **Selective Field Indexing**: Choose which custom fields to include or exclude from the AI training dataset for each content type.
- **Taxonomy Management**: Enable or disable specific taxonomies (categories, tags, custom taxonomies) on a per-content-type basis.
- **WooCommerce Product Data**: For product content types, select which product attributes and data fields should be included in the training corpus.

<img src={trainsettings} />

- **Custom AI Context Labels**: Define custom labels for each field that provide better context to the AI about what the data represents.
- **Content Type Configuration**: Set up different indexing rules for posts, pages, custom post types, and WooCommerce products.
- **Basic Label Customization**: Modify how core content elements (title, excerpt, content, source URL) are labeled for AI context.

This is particularly useful for sites with extensive custom fields where you want to train the AI only on relevant data.

### General Settings

- **Hide User-Uploaded Files**: When enabled, Vector Stores created automatically by users via the chatbot file upload feature will be hidden from the main Knowledge Base card grid. This helps keep your main view clean and focused on manually curated knowledge bases.

<img src={generalsettings} />

- **Show Index Button on Post/Product List**: This toggle allows you to show or hide the "Index" button that appears in the admin bar on post and product list screens.

## Using Your Knowledge Base

Once your knowledge base is populated, you can connect it to other AIP modules:
-   **Chatbots**: In the [Chatbot editor](/docs/context), go to the **Context** section to connect your knowledge base.
-   **AI Forms**: In the [AI Form builder](/docs/ai-forms/context), go to the **Context** section to connect your knowledge base.
-   **Content Writer**: In the [Write module](/docs/Write/context), use the **Context** section to generate articles based on your knowledge base.