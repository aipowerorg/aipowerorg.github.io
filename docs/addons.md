---
id: addons
slug: /addons
title: Add-ons
sidebar_position: 3
---

import addonspage from '/img/addons/addons-ui.png';

# Add-ons

The Add-ons system allows you to enable only the features you need, keeping your WordPress dashboard clean. Add-ons can be free or part of the Pro plan, and they integrate into the plugin's interface when activated.

## How to Manage Add-ons

You can activate or deactivate any add-on from a single screen.

1.  Go to **AIP > Add-ons** from your WordPress dashboard.
2.  You will see a grid of all available add-ons.

<img src={addonspage} />

-   **Activate/Deactivate**: Simply click the button on each card to toggle an add-on on or off. The interface will update instantly.
-   **Pro Add-ons**: Features marked with a "Pro" tag require an [active Pro license](/docs/getting-started/activating-pro.md) to be activated.

## Available Add-ons

### Core

These add-ons provide core integrations with third-party services.

-   **Ollama Integration**
    -   Run large language models locally on your own hardware for enhanced privacy and cost control.
    -   :::info
        **Type**: Pro
        **Learn More**: [AI Providers > Ollama](/docs/ai-providers#ollama-local-ai)
        :::

-   **DeepSeek Integration**
    -   Enable DeepSeek models for text generation in various modules.
    -   :::info
        **Type**: Free  
        **Learn More**: [AI Providers > DeepSeek](/docs/ai-providers#deepseek)
        :::

-   **Replicate Integration**
    -   Enable image generation using a wide variety of models hosted on Replicate.
    -   :::info
        **Type**: Free  
        **Learn More**: [Write > Images](/docs/Write/images#replicate), [Chat > Image](/docs/image-features#image-generation)
        :::

-   **Token Management**
    -   Set token usage limits per user or role for Chatbots, AI Forms, and the Image Generator. This is the foundation for monetizing your AI tools.
    -   :::info
        **Type**: Free  
        **Learn More**: [User Credits](/docs/user-credits/intro)
        :::

### Chat

These add-ons extend the functionality of the [Chatbot](/docs/chat) module.

-   **Chatbot Triggers**
    -   Automate chatbot interactions with an event-based engine that uses triggers, conditions, and actions.
    -   :::info
        **Type**: Pro  
        **Learn More**: [Chat > Triggers](/docs/triggers)
        :::

-   **Conversation Starters**
    -   Display predefined prompts to help guide users into starting a conversation with your chatbots.
    -   :::info
        **Type**: Free  
        **Learn More**: [Chat > Appearance](/docs/Appearance#conversation-starters)
        :::

-   **File Upload**
    -   Allow users to upload files (PDF, TXT) for context in OpenAI chatbots. Also enables file management in the Train module.
    -   :::info
        **Type**: Pro  
        **Learn More**: [Chat > Context](/docs/context#file-upload)
        :::

-   **PDF Download**
    -   Allow users to download chat transcripts and AI Form results as high-quality PDF files.
    -   :::info
        **Type**: Pro  
        **Learn More**: [Chat > Appearance](/docs/Appearance#download)
        :::

-   **Realtime Voice Agent**
    -   Enable low-latency, speech-to-speech conversational experiences using OpenAI's Realtime API.
    -   :::info
        **Type**: Pro  
        **Learn More**: [Chat > Voice Features](/docs/voice-features#realtime-voice-agent)
        :::

-   **Voice Playback (TTS)**
    -   Enable Text-to-Speech for chatbot responses using Google, OpenAI, or ElevenLabs voices.
    -   :::info
        **Type**: Free  
        **Learn More**: [Chat > Voice Features](/docs/voice-features#voice-playback-text-to-speech)
        :::

### Content

These add-ons provide tools for content creation, enhancement, and search.

-   **Content Assistant**
    -   A suite of tools to improve existing content. Bulk-enhance posts from the list screen or process text directly within the Classic and Block Editor toolbars.
    -   :::info
        **Type**: Free  
        **Learn More**: [Content Assistant](/docs/content-assistant)
        :::

-   **Semantic Search**
    -   Adds a frontend shortcode that allows users to perform a semantic search on your custom knowledge base.
    -   :::info
        **Type**: Free  
        **Learn More**: [Semantic Search](/docs/semantic-search)
        :::

-   **Stock Images**
    -   Search and insert free, high-quality stock photos from services like Pexels and Pixabay directly within the Content Writer.
    -   :::info
        **Type**: Free  
        **Learn More**: [Write > Images](/docs/Write/images#pexels)
        :::

### AI Training & Data

These add-ons enhance your ability to create and manage custom knowledge bases.

-   **Vector Database Integrations**
    -   Connect to external vector databases like Pinecone and Qdrant for advanced AI training and retrieval-augmented generation (RAG).
    -   :::info
        **Type**: Free  
        **Learn More**: [Knowledge Base / Training](/docs/ai-training/intro#provider-setup)
        :::

### Security & Moderation

-   **OpenAI Moderation**
    -   Automatically filter harmful or inappropriate content from chat messages using OpenAI's powerful Moderation API.
    -   :::info
        **Type**: Pro  
        **Learn More**: [Chat > Security & Privacy](/docs/security-privacy#moderation)
        :::

### Privacy & Compliance

-   **Consent Compliance**
    -   Require users to agree to your terms and policies by displaying a consent box before they can interact with chatbots.
    -   :::info
        **Type**: Pro  
        **Learn More**: [Chat > Security & Privacy](/docs/security-privacy#consent-compliance)
        :::

-   **IP Anonymization**
    -   Enhance user privacy by automatically anonymizing user IP addresses in the chat logs, helping with GDPR and other privacy compliance.
    -   :::info
        **Type**: Free  
        **Learn More**: [Chat > Security & Privacy](/docs/security-privacy#ip-anonymization)
        :::