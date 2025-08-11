---
id: features
slug: /features
title: Features
sidebar_position: 2
---

This page provides an overview of the main features available in AI Power.

## Chatbot

Build and deploy AI chatbots on your website.

-   **AI Providers**: Connect to multiple AI providers, including OpenAI, Google, and Azure.
-   **Context-Aware**: The chatbot can use the content of the current page to answer questions.
-   **File & Image Upload**: Users can upload files (PDF, TXT) and images for context during a conversation.
-   **Knowledge Base**: Integrates with vector databases (OpenAI Vector Store, Pinecone, Qdrant) to answer questions based on your custom data.
-   **Voice Options**: Enable voice input (Speech-to-Text) and voice playback (Text-to-Speech) using services like ElevenLabs, Google, and OpenAI.
-   **Triggers**: Create automated rules to control the chatbot's behavior based on user actions or specific conditions.
-   **Embed Anywhere**: Deploy your chatbots on any external, non-WordPress website using a simple HTML snippet.
-   **Token Management**: Control usage by setting token limits for different user roles.
-   **WooCommerce Integration**: Sell token packages as products in your store.

## Content Creation & Editing

A suite of tools for generating and improving content.

### Write Module

-   **Multiple Providers**: Generate content using your preferred AI service.
-   **Templates**: Save and reuse configurations for AI models, prompts, and post settings.
-   **SEO Optimization**: Automatically generate meta descriptions and focus keywords compatible with major SEO plugins.
-   **Image Integration**: Add images from AI generators (OpenAI, Google, Replicate) or stock photo services (Pexels, Pixabay).
-   **Knowledge Base Context**: Generate articles with context from your custom knowledge base.
-   **Task-Based Generation**: Create content in the background from various sources, including lists, CSV files, RSS feeds, URLs, and Google Sheets.
-   **Smart Scheduling**: Automatically schedule posts to be published at set intervals.

### Content Assistant

-   **Bulk Enhancements**: Select multiple posts or pages and enhance their titles, excerpts, or content at once.
-   **Quick Actions**: Generate new titles, excerpts, and tags directly from the post list screen.
-   **Editor Integration**: Use AI to process text directly within the WordPress Classic and Block editors. Define your own custom actions like "Rewrite," "Summarize," or "Fix Grammar."

### WooCommerce Product Writer

-   **Bulk Product Updates**: Enhance multiple WooCommerce products simultaneously from the products list screen.
-   **WooCommerce Placeholders**: Use product-specific data like `{price}`, `{sku}`, and `{attributes}` in your prompts for generating descriptions.

## Automate

A background task manager for running AI processes on a schedule.

-   **Scheduled Content Creation**: Automatically generate new posts from lists, RSS feeds, URLs, or Google Sheets.
-   **Scheduled Content Updates**: Improve existing posts or WooCommerce products in bulk on a recurring schedule.
-   **Content Indexing**: Automatically add new or updated site content to your knowledge base (OpenAI, Pinecone, or Qdrant).
-   **Community Engagement**: Set up a task to automatically reply to new blog comments.

## AI Forms

Build and deploy custom forms that use AI to generate results.

-   **Form Builder**: A drag-and-drop interface for designing forms.
-   **AI Integration**: Connect forms to any supported AI provider and use custom prompts to process user input.
-   **Themes**: Customize the look and feel of your forms.
-   **Knowledge Base**: Allow forms to use your custom data for context-aware responses.
-   **Token Management**: Control form usage with token limits and sell access with WooCommerce.
-   **Import/Export**: Back up and transfer your form configurations.

## Image Generator

Add a text-to-image generator to the frontend of your website.

-   **Multiple Providers**: Supports OpenAI (DALL-E), Google (Imagen), and a wide range of models via Replicate.
-   **Shortcode Deployment**: Add the generator to any page or post with a simple shortcode.
-   **Token Management**: Control usage with token limits and sell image generation credits via WooCommerce.

## Train (Knowledge Base)

Create and manage a custom knowledge base for your AI.

-   **Vector Database Support**: Integrates with OpenAI Vector Store, Pinecone, and Qdrant.
-   **Multiple Indexing Methods**: Add content by pasting text, uploading files (TXT, PDF), or selecting existing WordPress posts and pages.
-   **Index Management**: Create, view, and delete your vector indexes from the WordPress dashboard.

## User Credits

A centralized system for managing token-based access to AI features.

-   **Token Management**: View and manually adjust the token balances of your users.
-   **WooCommerce Integration**: Create and sell token packages as products. Tokens are automatically granted to users upon order completion.
-   **Usage History**: View a user's token purchase and usage history.

## REST API

Access core AI features programmatically from external applications.

-   **Authentication**: Secure access using a single, site-wide API key.
-   **Endpoints**: Programmatically access key functions:
    -   Generate text and chat with your bots.
    -   Create images.
    -   Generate text embeddings.
    -   Add content to your knowledge base (Pinecone and Qdrant).