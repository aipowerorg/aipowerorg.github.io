---
id: api-reference
slug: /api-reference
title: API Reference
sidebar_position: 14
---

import publicapi from '/img/rest/rest.png';

# REST API Reference

AIP's REST API provides a way to programmatically access its core AI functionalities from external applications. You can use it to generate text and images, create embeddings, or interact with your chatbots, all without needing to log in to the WordPress dashboard.

## Authentication

All API requests must be authenticated. Access is controlled by a single **Public API Key** that you can set in the plugin's settings.

1.  Navigate to **AIP > Dashboard** in your WordPress admin area.
2.  Open the **Advanced** accordion.
3.  In the **Public API Access** section, enter a strong, unique key. This key will be used to authenticate all of your API requests. Leaving this field blank disables all public API access.

<img src={publicapi} width="600"/>

### Sending the API Key

You can send your API key in one of two ways with each request:

**1. Authorization Header (Recommended)**

Include the key in the `Authorization` header as a Bearer token.

```bash
curl ... -H "Authorization: Bearer YOUR_API_KEY"
```

**2. Request Parameter**

Include the key as a parameter in the request body or query string named `aipkit_api_key`.

```bash
curl ... -d "aipkit_api_key=YOUR_API_KEY&..."
```

## Endpoints

All endpoints are relative to your site's REST API base URL (`/wp-json/`). The namespace for the plugin is `aipkit/v1`.

---

### Text Generation

Generate text content using any of your configured AI providers.

-   **Endpoint**: `POST /wp-json/aipkit/v1/generate`
-   **Method**: `POST`
-   **Content-Type**: `application/json`

#### Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `provider` | string | Yes | The AI provider to use. One of: `openai`, `azure`, `google`, `openrouter`, `deepseek`. |
| `model` | string | Yes | The specific model or deployment ID to use for generation. |
| `messages` | array | Yes | An array of message objects, following the standard chat completions format. The last message must have the role `user`. |
| `system_instruction` | string | No | Optional system instructions to guide the AI's behavior. Overrides the `system` role message in the `messages` array if both are provided. |
| `ai_params` | object | No | An object of AI parameters (e.g., `temperature`, `max_tokens`) to override the global defaults. |

#### Example Request

```bash
curl -X POST https://your-website.com/wp-json/aipkit/v1/generate \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
    "provider": "openai",
    "model": "gpt-4o-mini",
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "Write a short poem about WordPress."
        }
    ],
    "ai_params": {
        "temperature": 0.8
    }
}'
```

#### Example Response

```json
{
    "content": "In fields of code, a platform stands,\nWith plugins vast and themes so grand.\nA simple post, a complex site,\nWordPress shines, a guiding light.",
    "usage": {
        "input_tokens": 28,
        "output_tokens": 35,
        "total_tokens": 63
    },
    "provider": "OpenAI",
    "model": "gpt-4o-mini"
}
```

---

### Image Generation

Create images from a text prompt using your configured image generation providers.

-   **Endpoint**: `POST /wp-json/aipkit/v1/images/generate`
-   **Method**: `POST`
-   **Content-Type**: `application/json`

#### Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `provider` | string | No | The image provider. One of `openai`, `google`. Defaults to `openai`. |
| `prompt` | string | Yes | A text description of the desired image. |
| `model` | string | No | The specific model to use (e.g., `dall-e-3`). Defaults to the one set in your plugin settings. |
| `n` | integer | No | The number of images to generate. Default is `1`. |
| `size` | string | No | The size of the generated images (e.g., `1024x1024`). Defaults to the one set in your plugin settings. |
| `quality` | string | No | (DALL-E 3) The quality of the image. `standard` or `hd`. |
| `style` | string | No | (DALL-E 3) The style of the generated images. `vivid` or `natural`. |
| `response_format` | string | No | The format of the returned image. `url` or `b64_json`. Default is `url`. |

#### Example Request

```bash
curl -X POST https://your-website.com/wp-json/aipkit/v1/images/generate \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
    "prompt": "An astronaut riding a horse on Mars, photorealistic",
    "provider": "openai",
    "model": "dall-e-3",
    "n": 1,
    "size": "1024x1024",
    "quality": "hd"
}'
```

#### Example Response

```json
{
    "images": [
        {
            "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/...",
            "revised_prompt": "A photorealistic image of an astronaut in a full spacesuit, gracefully riding a majestic horse across the dusty, red landscape of Mars. The Martian sky is a pale pink, and Earth is a small blue dot in the distance."
        }
    ],
    "usage": null,
    "message": "1 image generated successfully."
}
```

---

### Embeddings Generation

Convert text into numerical vector representations (embeddings).

-   **Endpoint**: `POST /wp-json/aipkit/v1/embeddings`
-   **Method**: `POST`
-   **Content-Type**: `application/json`

#### Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `provider` | string | Yes | The embedding provider. One of `openai`, `google`, `azure`. |
| `model` | string | Yes | The specific embedding model or Azure deployment ID. |
| `input` | string or array | Yes | The text string or array of strings to embed. |
| `dimensions` | integer | No | (OpenAI `text-embedding-3`, Azure) The desired number of output dimensions. |
| `encoding_format`| string | No | (OpenAI) `float` or `base64`. Default is `float`. |
| `task_type`| string | No | (Google Gemini) The intended task for the embedding. |
| `output_dimensionality`| integer| No | (Google Gemini) Reduce the embedding dimensions. |
| `user`| string| No | (OpenAI, Azure) A unique identifier for the end-user for monitoring purposes. |

#### Example Request

```bash
curl -X POST https://your-website.com/wp-json/aipkit/v1/embeddings \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
    "provider": "openai",
    "model": "text-embedding-3-small",
    "input": "This is the text to embed."
}'
```

#### Example Response

```json
{
    "embeddings": [
        [ -0.006929283495992422, -0.005336422473192215, ... ]
    ],
    "usage": {
        "input_tokens": 6,
        "total_tokens": 6
    },
    "provider": "OpenAI",
    "model": "text-embedding-3-small"
}
```

---

### Chat Interaction

Send a message to a specific chatbot and receive a reply.

-   **Endpoint**: `POST /wp-json/aipkit/v1/chat/{bot_id}/message`
-   **Method**: `POST`
-   **Content-Type**: `application/json`

#### Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `bot_id` | integer | Yes | (in URL) The ID of the chatbot you want to interact with. |
| `messages` | array | Yes | An array of message objects representing the conversation history. The last message must have the role `user`. |

#### Example Request

```bash
curl -X POST https://your-website.com/wp-json/aipkit/v1/chat/9453/message \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
    "messages": [
        { "role": "user", "content": "Hello, what can you do?" }
    ]
}'
```

#### Example Response

```json
{
    "reply": "I am a helpful AI assistant. I can answer your questions, help you write content, and much more!",
    "usage": {
        "input_tokens": 15,
        "output_tokens": 21,
        "total_tokens": 36
    },
    "bot_id": 9453,
    "model": "gpt-4o-mini"
}
```

---

### Upsert to Vector Store

Add content to a Pinecone or Qdrant knowledge base. This endpoint will automatically create embeddings for your content and upsert the resulting vectors into your specified index or collection.

-   **Endpoint**: `POST /wp-json/aipkit/v1/vector-stores/upsert`
-   **Method**: `POST`
-   **Content-Type**: `application/json`

#### Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `provider` | string | Yes | The vector database provider. One of `pinecone`, `qdrant`. |
| `target_id` | string | Yes | The name of the target index (for Pinecone) or collection (for Qdrant). |
| `vectors` | array | Yes | An array of objects to embed and upsert. Each object must have a `content` key. An `id` and `metadata` are optional. |
| `embedding_provider`| string | Yes | The provider to use for generating embeddings (`openai`, `google`, `azure`). |
| `embedding_model` | string | Yes | The specific model to use for generating embeddings. |
| `namespace` | string | No | (Pinecone only) The namespace within the index to upsert to. |

#### Example Request

```bash
curl -X POST https://your-website.com/wp-json/aipkit/v1/vector-stores/upsert \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
    "provider": "pinecone",
    "target_id": "my-knowledge-base",
    "embedding_provider": "openai",
    "embedding_model": "text-embedding-3-small",
    "vectors": [
        {
            "id": "doc1",
            "content": "AI Power is a WordPress plugin.",
            "metadata": { "source": "manual" }
        },
        {
            "id": "doc2",
            "content": "It allows you to build chatbots and generate content.",
            "metadata": { "source": "manual" }
        }
    ]
}'
```

#### Example Response

```json
{
    "upserted_count": 2,
    "status": "success"
}