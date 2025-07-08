---
id: ai-forms-context
slug: /ai-forms/context
title: Context
sidebar_position: 4
---

import contextform from '/img/ai-forms/context.png';
import vectordbaddon from '/img/chat/vector-db-addon.png';

# Context

The **Context** feature allows your AI Form to generate responses based on your own custom data. By connecting a form to a knowledge base (a Vector Store), the AI can access specific information about your products, services, or documentation to provide more accurate and relevant answers.

This turns a general-purpose AI into a specialized expert on your content.

## How it Works

When a user submits a form, the system takes their input and uses it to search your selected knowledge base for the most relevant information. This information is then automatically passed to the AI along with your prompt template, giving it the necessary context to generate a high-quality response.

## Configuring the Vector Store

The configuration is done in the **Vector Configuration** accordion within the form builder's right-hand column.

1.  **Enable Vector Store**: Check this box to activate the feature for this form.

<img src={contextform} />

2.  **Vector Provider**: Select the service where your knowledge base is stored. Options are `OpenAI`, `Pinecone`, or `Qdrant`.

    :::info Pinecone and Qdrant require activation
    Pinecone and Qdrant are available as free addons, but they are disabled by default.
    To use them, go to the Addons page and activate the Vector DB addon first.

    <img src={vectordbaddon} width="600"/>
    :::

3.  **Store / Index / Collection**: Choose the specific knowledge base you want this form to use. This list is populated from the knowledge bases you have created in the **[Train](/docs/train.md)** module.
    -   For **OpenAI**, you can select one or more Vector Stores.
    -   For **Pinecone**, you must select a specific Index.
    -   For **Qdrant**, you must select a specific Collection.

4.  **Embedding Provider & Model**: This is required only for **Pinecone** and **Qdrant**. You must select the exact same embedding provider and model that you used when you created the knowledge base. This ensures compatibility.

5.  **Results Limit**: This sets the maximum number of relevant documents the AI will fetch from your knowledge base to use as context for generating its response.

Once saved, the form will automatically use this knowledge base for all future generations.