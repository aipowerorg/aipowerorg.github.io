---
title: AI & Prompts
sidebar_position: 3
---

import aiprovidermodel from '/img/write/ai-provider-model.png';
import aiparameters from '/img/write/ai-parameters.png';
import prompts from '/img/write/prompts.png';
import contentprompt from '/img/write/content-prompt.png';
import titleprompt from '/img/write/title-prompt.png';

# AI & Prompts

This section controls the "brain" of the Content Writer—the AI engine it uses and the core instructions it receives for generating content.

## AI Settings

These settings determine which AI service to use and how it should behave.

### Provider & Model

-   **Provider**: Choose the AI service you want to use (e.g., OpenAI, Google, OpenRouter). The available providers are configured in the main [Dashboard](/docs/ai-providers).

<img src={aiprovidermodel} />

-   **Model**: Select the specific model from the chosen provider (e.g., `gpt-4o-mini`, `gemini-1.5-flash`). This list is populated based on the models you have synced in the Dashboard.

### AI Parameters

Click the gear icon next to the model selection to reveal advanced parameters.

-   **Temperature**: Controls the creativity of the AI. A higher value (e.g., `1.2`) results in more creative and varied text. A lower value (e.g., `0.5`) makes the output more focused and predictable. The default is `1.0`.

<img src={aiparameters} />

-   **Max Tokens**: Sets the maximum length (in tokens) for the AI's response. A higher number allows for longer articles but may increase API costs.

## Prompts

Prompts are the instructions you give to the AI. You can use placeholders to dynamically insert information based on your topic.

<img src={prompts} />

### Content Prompt

This is the primary instruction for generating the body of the article. A well-crafted prompt is key to getting high-quality content.

<img src={contentprompt} />

**Example:**
> Write a comprehensive, well-structured article about the topic: <code>{`{topic}`}</code>. Start directly with the first paragraph. Please incorporate the following keywords naturally: <code>{`{keywords}`}</code>.

- <code>{`{topic}`}</code>: Replaced by the main topic you enter.
- <code>{`{keywords}`}</code>: Replaced by the keywords you enter.

### Title Prompt

This prompt is used to generate the post title. It is optional.

<img src={titleprompt} />

-   **If you provide a prompt**: The AI will generate a title based on your instructions.
-   **If you leave it blank**: The topic you entered will be used as the post title.