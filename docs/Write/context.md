---
title: Context
sidebar_position: 6
---

import contextenable from '/img/write/context-enable.png';
import contextproviders from '/img/write/context-providers.png';
import contextsettings from '/img/write/context-settings.png';

# Context

Context (Vector Store) feature allows the AI to access specific information from your website when generating content. This is a good way to create articles that are aware of your products, services, or other specialized topics you have trained the AI on.

## Configuration

To use a knowledge base for content generation, enable it in the **Vectors** accordion.

1.  **Enable Vector Store**: Check this box to activate the feature for the current writing task.

<img src={contextenable} />

2.  **Vector Provider**: Select the service where your knowledge base is stored (**OpenAI**, **Pinecone**, or **Qdrant**).

<img src={contextproviders} />

3.  **Store / Index / Collection**:
    -   For **OpenAI**, you can select one or more Vector Stores to use as context.
    -   For **Pinecone**, select a specific Index.
    -   For **Qdrant**, select a specific Collection.

4.  **Embedding Provider & Model**: If you are using Pinecone or Qdrant, you must select the same embedding provider and model that you used when you created the knowledge base in the **Train** module. This is not required for OpenAI.

<img src={contextsettings} />

5.  **Results Limit**: This sets the maximum number of relevant documents the AI will fetch from your knowledge base to use as context.