---
id: ai-forms-context
slug: /ai-forms/context
title: Context
sidebar_position: 4
---

import contextform from '/img/ai-forms/context.png';
import vectordbaddon from '/img/chat/vector-db-addon.png';
import aiformwebsearch from '/img/ai-forms/ai-form-web-search.png';
import websearch from '/img/ai-forms/ai-form-openai-web.png';
import websearchdetails from '/img/ai-forms/ai-form-openai-web-settings.png';
import groundingmode from '/img/ai-forms/ai-form-web-search.png';
import dynamicretrival from '/img/ai-forms/dynamic-retrieval.png';

# Context

The **Context** features allow your AI Form to generate responses based on external information, such as your own custom data or live web search results. This turns a general-purpose AI into a specialized expert.

## Vector Store

This feature allows you to connect your AI Form to a knowledge base you've created in the **[Train](/docs/train.md)** module. When a user submits a form, the system takes their input, searches your knowledge base for the most relevant information, and automatically passes it to the AI along with your prompt template.

### Configuring the Vector Store

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

4.  **Embedding Provider & Model**: This is required only for **Pinecone** and **Qdrant**. You must select the exact same embedding provider and model that you used when you created the knowledge base. The available providers are **OpenAI**, **Google**, and **Azure**.

5.  **Results Limit**: This sets the maximum number of relevant documents the AI will fetch from your knowledge base to use as context for generating its response.

6.  **Score Threshold**: This slider (from 0% to 100%) sets a minimum relevance score for the search results. Only documents that meet this threshold will be provided to the AI as context, helping to filter out less relevant information and improve response accuracy.

Once saved, the form will automatically use this knowledge base for all future generations.


## Web Search

This feature allows your ai forms to access external information to answer questions about recent events or topics outside its training data. The specific settings change depending on whether you are using an OpenAI or Google model.

### OpenAI Web Search

When using an OpenAI model, enabling the Web Search tool <span class="dashicons dashicons-admin-site-alt3"></span> reveals two additional settings in the Context tab:

<img src={websearch} />

:::info Supported OpenAI Models
Most recent OpenAI models support the Web Search. However, **gpt-4.1-nano** is currently not compatible with web search.

:::

-   **Search Context Size**: Controls how much information the AI considers from its search results. It has three levels: Low, Medium (default), and High.
-   **User Location**: Helps the AI provide more relevant local results.
    -   **None**: The AI does not consider the user's location.
    -   **Approximate**: When selected, you can provide location details to narrow down search results.

<img src={websearchdetails} />

        -   **Country (ISO Code)**: A two-letter country code (e.g., `US` for United States).
        -   **City**: The name of a city (e.g., `London`).
        -   **Region/State**: The name of a state or region (e.g., `California`).
        -   **Timezone (IANA)**: The standard timezone name (e.g., `America/Chicago`).

### Google Search Grounding

When using a compatible Google model, enabling web search adds grounding capabilities.

<img src={groundingmode} />

:::info Supported Google Models
The following Google Gemini models support **Search Grounding** in AI Forms:

- Gemini 2.5 Pro
- Gemini 2.5 Flash
- Gemini 2.0 Flash
- Gemini 1.5 Pro
- Gemini 1.5 Flash

Only **Gemini 1.5 Flash** supports **Dynamic Retrieval** mode.
:::

The following settings will appear:

-   **Grounding Mode**:
    -   **Model Decides (Default)**: The AI determines when to use search as a tool to answer a query.
    -   **Dynamic Retrieval (Gemini 1.5 Flash only)**: The model dynamically grounds its response in search results based on a relevance score.

<img src={dynamicretrival} />

-   **Dynamic Retrieval Threshold**: This slider (from `0.0` to `1.0`) appears when "Dynamic Retrieval" is selected. It sets the relevance threshold for including search results. A higher value requires a stronger match between the user's query and the search results.

Unlike the chatbot, there is no frontend toggle for the user. If you enable Web Search for an AI Form, it will be active for every submission of that form.