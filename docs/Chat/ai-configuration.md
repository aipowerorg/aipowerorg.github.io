---
id: ai-configuration
slug: /ai-configuration
title: AI Configuration
sidebar_position: 2
---

import aiconfig from '/img/chat/ai-config.png';
import enginemodel from '/img/chat/engine-model.png';
import instructions from '/img/chat/instructions.png';
import parameters from '/img/chat/parameters.png';
import stateful from '/img/chat/stateful.png';
import websearch from '/img/chat/web-search.png';
import websearchdetails from '/img/chat/web-search-details.png';
import websearchdemo from '/img/chat/web-search-demo.png';
import groundingmode from '/img/chat/grounding-mode.png';
import dynamicretrival from '/img/chat/dynamic-retrival.png';
import stream from '/img/chat/stream.png';

# AI Configuration

The **General** section controls the "brain" of your chatbot—the AI model it uses, its core personality, and its fundamental parameters.
<img src={aiconfig} width="600" />

## Engine and Model

This is where you select the AI engine and the specific model that will power your chatbot.

<img src={enginemodel} width="600" />

-   **Engine**: Choose the AI provider you want to use for this chatbot (e.g., OpenAI, Google, Azure). This can be different from the global default you set in the main [Dashboard](/docs/ai-providers).
-   **Model**: Select the specific AI model. The options here depend on the **Engine** you selected and the models you have synced from your provider's account.

## Instructions

This field defines your chatbot's personality and purpose. It's a set of instructions that guides the AI's behavior in every conversation. A good instruction prompt is clear and direct.

<img src={instructions} width="600" />

**Example:**
> You are a friendly and helpful customer support agent for a company named "AIP." Your goal is to answer questions about our products and help users troubleshoot common issues. Be polite and concise in your responses.

You can use the placeholder `[date]` to automatically insert the current date into the prompt each time a conversation starts.

## Stream Mode

When enabled, the chatbot's response appears word-by-word, similar to how ChatGPT types. 

<img src={stream} width="600" />

This provides a faster perceived response time for the user. When disabled, the chatbot will "think" and then deliver the entire message at once.

## AI Parameters

Click the <span class="dashicons dashicons-admin-generic"></span> icon next to the model selection to reveal the advanced AI parameters. These settings fine-tune how the AI generates its responses.

<img src={parameters} width="600" />

-   **Temperature**: Controls the creativity of the AI. A higher value (e.g., `1.2`) results in more creative and varied responses. A lower value (e.g., `0.5`) makes the responses more focused and predictable. The default is `1.0`.
-   **Max Tokens**: Sets the maximum length of the AI's response. A higher number allows for longer content but can increase API costs.
-   **Max Messages**: The number of previous messages from the current conversation to include as context for the AI. A higher number provides more context but uses more tokens.

## Stateful Conversation

This feature uses OpenAI's stateful conversation capabilities and it is only available when using OpenAI as the provider.

Instead of sending the entire chat history with each message, it only sends the previous message ID.

This reduces token usage and enables continuous conversations that can exceed normal token limits.

<img src={stateful} width="600" />
 
The "Store Conversation" setting must be enabled in the main **AIP > Dashboard > OpenAI** settings.

## Web Search

This feature allows the chatbot to access external information to answer questions about recent events or topics outside its training data. The specific settings change depending on whether you are using an OpenAI or Google model.

### OpenAI Web Search

When using an OpenAI model, enabling the Web Search tool <span class="dashicons dashicons-admin-site-alt3"></span> reveals two additional settings in the General tab:

<img src={websearch} width="600" />

-   **Search Context Size**: Controls how much information the AI considers from its search results. It has three levels: Low, Medium (default), and High.
-   **User Location**: Helps the AI provide more relevant local results.
    -   **None**: The AI does not consider the user's location.
    -   **Approximate**: When selected, you can provide location details to narrow down search results.

<img src={websearchdetails} width="600" />

        -   **Country (ISO Code)**: A two-letter country code (e.g., `US` for United States).
        -   **City**: The name of a city (e.g., `London`).
        -   **Region/State**: The name of a state or region (e.g., `California`).
        -   **Timezone (IANA)**: The standard timezone name (e.g., `America/Chicago`).

### Google Search Grounding

When using a compatible Google model, enabling web search adds grounding capabilities.

<img src={groundingmode} width="600" />

The following settings will appear:

-   **Grounding Mode**:
    -   **Model Decides (Default)**: The AI determines when to use search as a tool to answer a query.
    -   **Dynamic Retrieval (Gemini 1.5 Flash only)**: The model dynamically grounds its response in search results based on a relevance score.

<img src={dynamicretrival} width="600" />

-   **Dynamic Retrieval Threshold**: This slider (from `0.0` to `1.0`) appears when "Dynamic Retrieval" is selected. It sets the relevance threshold for including search results. A higher value requires a stronger match between the user's query and the search results.

### Using Web Search in the Chat

Once you have enabled Web Search in the settings, a new icon will appear in the chat input field.

This icon acts as a toggle. By default, it is off (gray). To use the web search feature, the user must click this icon **before** sending their message. When clicked, the icon will turn blue, indicating that web search is active for the next query.

<img src={websearchdemo} width="600" />

For example, if a user enables the toggle and asks, "What is the price of Bitcoin today?", the AI will use web search to find the current information. The toggle resets after each message, so it must be clicked again for subsequent web search queries.