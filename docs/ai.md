---
id: ai-providers
slug: /ai-providers
title: AI Providers
sidebar_position: 4
---

import OpenAISetup from '/img/providers/openai.png';
import Dashboard from '/img/providers/dashboard.png';
import finetune from '/img/providers/finetune.png';
import openaisettings from '/img/providers/openai-settings.png';

import googleapi from '/img/providers/google.png';
import googlesafety from '/img/providers/safety.png';

import openrouterapi from '/img/providers/openrouter.png';

import azureapi from '/img/providers/azure.png';

import deepseekaddon from '/img/providers/deepseek-addon.png';
import deepseek from '/img/providers/deepseek.png';

import parameters from '/img/providers/parameters.png';

# Overview

`AIP > Dashboard` is the central area for managing your connections to different AI services and setting the default behavior for all of AIP's modules.

:::info AIP uses a Bring Your Own API Key model
To use the plugin, you must have a valid API key from your preferred AI provider (e.g., OpenAI, Google, Azure).  
**Purchasing the plugin does not include any API credits.**

:::

You must configure at least one provider here for the plugin to work.

<img src={Dashboard} />

## OpenAI

OpenAI provides popular gpt and image generation models.

**Configuration Steps**

- **Select the Provider**: From the **Engine** dropdown menu, choose **OpenAI**. The provider selected here will also be the default for all modules.
- **Enter API Key**: In the API Key field, enter your secret key from OpenAI. You can click the **Get Key** button to go directly to the [OpenAI API Keys page](https://platform.openai.com/).

<img src={OpenAISetup} width="600" />

- **Sync Models**: Click the **Sync** button. AIP will connect to OpenAI and download a list of all AI models available to your account, including any custom fine-tuned models you have.

<img src={finetune} width="600" />

- **Select a Default Model**: Once the sync is complete, the **Model** dropdown will be populated. Select a default model for the plugin to use (e.g., `gpt-4o-mini`).

**OpenAI-Specific Settings**

These settings are found in the **Parameters** accordion when OpenAI is the selected provider.

- **Base URL:** This setting allows you to use a proxy service instead of the default `https://api.openai.com` endpoint.
- **Store Conversation:** When enabled, OpenAI will store conversations for 30 days. You can view them [OpenAI Logs page](https://platform.openai.com/logs). This must be enabled if you wish to use the **stateful conversation** feature in the Chatbot module.
- **Vector Store File Expiration:** Sets the default number of days (1-365) that files uploaded to an OpenAI Vector Store will be kept before being automatically deleted. The default is 7 days. This setting only applies to files uploaded by users via the frontend Chatbot and AI Forms modules.
It's a good idea to keep this value low to ensure temporary uploads are cleaned up regularly, reducing storage load and privacy risks.

<img src={openaisettings} width="600" />

## Google

Google provides the Gemini family of models.

**Configuration Steps**

- **Select the Provider**: From the **Engine** dropdown menu, choose **Google**.
- **Enter API Key**: Enter your API key from the Google AI Studio.

<img src={googleapi} width="600" />

- **Sync Models**: Click the **Sync** button to fetch available Gemini models.
- **Select a Default Model**: Choose a default model, such as `gemini-1.5-pro-latest`.

**Google-Specific Settings**

- **Base URL:** This setting allows you to use a proxy service instead of the default `https://generativelanguage.googleapis.com` endpoint.
- **Safety Settings**: Found in the **Parameters** accordion, this allows you to configure Google's content safety filters. You can set a blocking threshold (from Block None to Block Most) for categories like Harassment, Hate Speech, Sexually Explicit, and Dangerous Content.

<img src={googlesafety} width="600" />

## Azure

Azure allows you to use ai models hosted on the Microsoft Azure platform.

**Configuration Steps**

1.  **Select the Provider**: From the **Engine** dropdown menu, choose **Azure**.
2.  **Enter API Key and Endpoint**: You must provide both your **API Key** and your unique **Endpoint URL** from your Azure AI Studio resource.

<img src={azureapi} width="600" />

3.  **Sync Deployments**: For Azure, the "Sync" button fetches your **Deployments**, not the base models. You must first deploy a model (e.g., gpt-4o) in Azure to have it appear in the list.
4.  **Select a Default Deployment**: Choose one of your synced deployments as the default.

**Azure-Specific Settings**

- **Endpoint URL:** This is the endpoint URL for your specific Azure AI resource. It is a required field.

## OpenRouter

OpenRouter is a service that gives you access to a wide variety of models from different companies (like Anthropic's Claude, Mistral, and Meta's Llama) using a single API key.

**Configuration Steps**

- **Select the Provider**: From the **Engine** dropdown menu, choose **OpenRouter**.
- **Enter API Key**: Enter your API key from OpenRouter.

<img src={openrouterapi} width="600" />

- **Sync Models**: Click the **Sync** button. This will fetch a large list of available models.
- **Select a Default Model**: Choose a default model from the list, such as `anthropic/claude-3.7-sonnet`.

**OpenRouter-Specific Settings**

- **Base URL:** This setting allows you to use a proxy service instead of the default `https://openrouter.ai/api` endpoint.

## DeepSeek

DeepSeek is an AI provider known for its powerful free chat and coding models.

DeepSeek is a free add-on.

Unlike other providers, DeepSeek is not available by default. You must enable it first from Add-ons page.

**Configuration Steps**

- **Enable the Addon**: Go to the **AIP > Addons** page and enable the **DeepSeek** addon.

<img src={deepseekaddon} width="600" />

- **Select the Provider**: After enabling, go to the **Engine** dropdown menu and choose **DeepSeek**.
- **Enter API Key**: Enter your API key from the DeepSeek platform.

<img src={deepseek} width="600" />

- **Sync Models**: Click the **Sync** button to fetch the available models.
- **Select a Default Model**: Choose a default model, such as `deepseek-chat`.

## Global AI Parameters

This section, found in the **Parameters** accordion, controls the default behavior of the AI across all modules. These settings can usually be overridden in specific modules (like the content enhancer tools).

*   **Max Tokens:** Sets the maximum length of the AI's response. A higher number allows for longer content but may increase costs.
*   **Temperature:** Controls the creativity of the AI. A higher value (e.g., `1.2`) makes the output more random and creative. A lower value (e.g., `0.5`) makes it more focused and predictable.

<img src={parameters} width="600" />

*   **Top P:** An alternative method to Temperature for controlling randomness. It is recommended to alter only one of these, not both.