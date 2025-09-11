---
id: context
slug: /context
title: Context
sidebar_position: 4
---

import contentaware from '/img/chat/content-aware.png';
import vectorenable from '/img/chat/vector-enable.png';
import vectorproviders from '/img/chat/vector-providers.png';
import vectorsettings from '/img/chat/vector-settings.png';
import fileuploadaddon from '/img/chat/file-upload-addon.png';
import fileuploadenable from '/img/chat/file-upload-enable.png';
import fileuploaddemo from '/img/chat/file-upload-demo.png';
import vectordbaddon from '/img/chat/vector-db-addon.png';
import expresssetup from '/img/chat/express-setup.png';
import vectorscore from '/img/chat/vector-score.png';
import contextenable from '/img/chat/context-enable.png';

# Context

The **Context** section is where you give your chatbot access to external information, turning it from a general-purpose AI into a specialized assistant that knows about your content.

<img src={contextenable} />

## Vector Store

It allows you to connect your chatbot to a knowledge base you've created in the [Train](/docs/train.md) module.

:::info 
Before using this feature, you must first create and configure your Vector Stores in the Train module. The chatbot cannot access any knowledge base unless it’s been set up there.
:::

:::info
Pinecone and Qdrant are available as free addons, but they are disabled by default.
To use them, go to the Addons page and activate the Vector DB addon first.

<img src={vectordbaddon} />
:::

- **Enable Vector Store**: This must be checked to use your knowledge base.

<img src={vectorenable} />

- **Vector Provider**: Select the service where your knowledge base is stored (**OpenAI**, **Pinecone**, or **Qdrant**).

<img src={vectorproviders} />

- **Store/Index/Collection**:
    -   For **OpenAI**, you can select one or more Vector Stores to use.
    -   For **Pinecone**, you must select a specific Index.
    -   For **Qdrant**, you must select a specific Collection.
- **Embedding Provider & Model**: If using Pinecone or Qdrant, you must select the same embedding provider and model that you used when creating the knowledge base. The available providers are **OpenAI**, **Google**, and **Azure**.

<img src={vectorsettings} />

- **Limit**: This sets the maximum number of relevant documents to fetch from the knowledge base to answer a user's question.
- **Score Threshold**: This slider (from 0% to 100%) sets a minimum relevance score for the search results. Only documents that meet this threshold will be provided to the AI as context, helping to filter out less relevant information and improve response accuracy.

<img src={vectorscore} width="600"/>

## Add Content

The easiest way to create a knowledge base for a specific chatbot is by using the **Add Content** button, located in the **AI** tab.

<img src={expresssetup} />

This button launches a streamlined wizard that will:
1.  Analyze your site and suggest an appropriate vector database provider (e.g., OpenAI Vector Store).
2.  Allow you to select which content types (e.g., Posts, Pages) you want to index.
3.  Create a new, dedicated knowledge base for this chatbot.
4.  Index all selected content in the background.
5.  Automatically configure the **Vector Store** settings below to use the newly created knowledge base.

This is the recommended one-click method for making a chatbot knowledgeable about your site's content.

## File Upload

When File Upload is enabled, a paperclip icon appears in the chat input area, allowing users to upload a file—such as a PDF or TXT document. The content of the uploaded file is then used as context for the current conversation.

This feature requires the Pro plan, the File Upload add-on to be active, and the Enable Vector Store option to be turned on for the chatbot.

<img src={fileuploadaddon} />

The plugin uses these settings to create a temporary, single-use knowledge base from the uploaded file, which the chatbot references during the session.

<img src={fileuploadenable} />

Behavior depends on the selected vector provider:

- For Pinecone, the plugin uses namespaces to separate each user's uploaded files.
- For Qdrant, uploaded files are stored under isolated points, ensuring context is kept distinct.

<img src={fileuploaddemo} />

- For OpenAI, uploaded files are stored with an expiration date. By default, files expire after 7 days, but you can change this in the main dashboard → OpenAI Settings.

## Content Aware

When this feature is enabled, the chatbot will use the current page's content as part of its contextual understanding.

<img src={contentaware} />

If the page has an excerpt, that excerpt will be used directly as the bot’s context.

If no excerpt is available, the plugin will automatically generate a short summary of the page content and feed that to the bot instead.

This is ideal for creating page-specific chatbots.

For example, placing a Content Aware chatbot on a product page allows users to ask things like: "What’s included in the box?" — and get answers directly based on that product’s content.