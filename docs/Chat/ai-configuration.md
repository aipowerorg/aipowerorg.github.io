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
import parameters0 from '/img/chat/parameters0.png';
import stateful from '/img/chat/stateful.png';
import websearch from '/img/chat/web-search.png';
import websearchdetails from '/img/chat/web-search-details.png';
import websearchdemo from '/img/chat/web-search-demo.png';
import groundingmode from '/img/chat/grounding-mode.png';
import dynamicretrival from '/img/chat/dynamic-retrival.png';
import stream from '/img/chat/stream.png';
import conversationconfigurebutton from '/img/chat/configure.png';
import maxmessages from '/img/chat/max-messages.png';
import reasoning from '/img/chat/reasoning.png';

# AI Configuration

The **Engine & Model** section controls the "brain" of your chatbot—the AI model it uses, its core personality, and its fundamental parameters.

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

You can use placeholders to automatically insert dynamic values into the prompt when a conversation starts. For example:

- [date] will insert the current date.
- [username] will insert the current WordPress username.

## AI Parameters

Click the <span class="dashicons dashicons-admin-generic"></span> icon next to the model selection to reveal the advanced AI parameters. These settings fine-tune how the AI generates its responses.

<img src={parameters0} />

<img src={parameters} />

-   **Temperature**: Controls the creativity of the AI. A higher value (e.g., `1.2`) results in more creative and varied responses. A lower value (e.g., `0.5`) makes the responses more focused and predictable. The default is `1.0`.
-   **Max Tokens**: Sets the maximum length of the AI's response. A higher number allows for longer content but can increase API costs.

## Conversations

### Stream Mode

When enabled, the chatbot's response appears word-by-word, similar to how ChatGPT types. 

<img src={conversationconfigurebutton} />

<img src={stream}  />

This provides a faster perceived response time for the user. When disabled, the chatbot will "think" and then deliver the entire message at once.

### Stateful Conversation

This feature uses OpenAI's stateful conversation capabilities and it is only available when using OpenAI as the provider.

Instead of sending the entire chat history with each message, it only sends the previous message ID.

This reduces token usage and enables continuous conversations that can exceed normal token limits.

<img src={stateful} />
 
The "Store Conversation" setting must be enabled in the main **AIP > Dashboard > OpenAI** settings.

### Max Messages

This setting limits how many previous messages are included in the context sent to the AI with each user message. A higher number provides more context but uses more tokens. The default is `15`.

<img src={maxmessages} />

### Reasoning

When enabled, the AI is prompted to "think step-by-step" before answering. This can improve accuracy for complex questions.

Only available with OpenAI's O and gpt-5 series models.

<img src={reasoning} />

## Web Search

This feature allows the chatbot to access external information to answer questions about recent events or topics outside its training data. The specific settings change depending on whether you are using an OpenAI or Google model.

Web Search can be toggled and configured per provider from the AI tab.

### OpenAI Web Search

Where to find it:

AI tab → Features → Web Search (OpenAI) → toggle on, then click Configure.

<img src={websearch} />

:::info
Most recent OpenAI models support the Web Search. However, **gpt-4.1-nano** is currently not compatible with web search.

:::

When using an OpenAI model, enabling the Web Search tool reveals two additional settings:

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
The following Google Gemini models support **Search Grounding** in the chatbot:

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

<img src={dynamicretrival}  />

-   **Dynamic Retrieval Threshold**: This slider (from `0.0` to `1.0`) appears when "Dynamic Retrieval" is selected. It sets the relevance threshold for including search results. A higher value requires a stronger match between the user's query and the search results.

### Using Web Search in the Chat

Once you have enabled Web Search in the settings, a new icon will appear in the chat input field.

This icon acts as a toggle. By default, it is off (gray). To use the web search feature, the user must click this icon **before** sending their message. When clicked, the icon will turn blue, indicating that web search is active for the next query.

<img src={websearchdemo} width="600" />

For example, if a user enables the toggle and asks, "What is the price of Bitcoin today?", the AI will use web search to find the current information. The toggle resets after each message, so it must be clicked again for subsequent web search queries.