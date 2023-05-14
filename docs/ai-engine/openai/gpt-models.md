---
sidebar_position: 2
---

# Models

**AI Power** supports OpenAI **GPT-3**, **GPT-3.5** and **GPT-4** models.

### List of GPT-4 Models

| Model | Description | Max Tokens | Training Data |
| ----- | ----------- | ---------- | ------------- |
| gpt-4 | More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Still in beta. | 8,192 | Up to Sep 2021 |
| gpt-4-32k | Same capabilities as the base gpt-4 mode but with 4x the context length. | 32,768 | Up to Sep 2021 |

:::info

GPT-4 is currently in limited beta, which means that access to the GPT-4 API from OpenAI is available only through a waiting list and is not open to everyone yet. You can sign up for the waiting list [here](https://openai.com/waitlist/gpt-4-api).

:::

:::caution

If you don't have GPT-4 API access and if you select GPT-4 or GPT-4K-32K as your model then you will get *"The model: gpt-4 does not exist"* or *"The model: gpt-4-32k does not exist"* error.

:::

### List of GPT-3.5 Models

| Model | Description | Max Tokens | Training Data |
| ----- | ----------- | ---------- | ------------- |
| gpt-3.5-turbo | Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. | 4,096 | Up to Sep 2021 |
| text-davinci-003 | Can do any language task with better quality, longer output, and consistent instruction-following. | 4,000 | Up to Jun 2021 |
| text-davinci-002 | Similar capabilities to text-davinci-003 but trained with supervised fine-tuning instead of reinforcement learning. | 4,000 | Up to Jun 2021 |

### List of GPT-3 Models

| Model | Description | Max Tokens | Training Data |
| ----- | ----------- | ---------- | ------------- |
| text-curie-001 | Very capable, but faster and lower cost than Davinci. | 2,048 | Up to Oct 2019 |
| text-babbage-001 | Capable of straightforward tasks, very fast, and lower cost. | 2,048 | Up to Oct 2019 |
| text-ada-001 | Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost. | 2,048 | Up to Oct 2019 |

### Model Comparison

| Model | Good at |
| ----- | ------- |
| Turbo | Conversation and text generation |
| Davinci | Complex intent, cause and effect, summarization for audience |
| Curie | Language translation, complex classification, text sentiment, summarization |
| Babbage | Moderate classification, semantic search classification |
| Ada | Parsing text, simple classification, address correction, keywords |

You can use our [Comparison Tool](comparison-tool) to compare different models.

### Best Practices and Recommendations

For different tasks and requirements, different GPT models may be more suitable. Here are some recommendations based on common use cases:

#### Content Writing
For content writing purposes, the following models are recommended:

- **GPT-3.5 Turbo**: Most capable GPT-3.5 model, cost-effective.
- **GPT-4**: More capable than any GPT-3.5 model, able to do more complex tasks.
- **Text-Davinci-003**: Can do any language task with better quality, longer output, and consistent instruction-following. This GPT-3 model is a good alternative when GPT-4 is not available or GPT-3.5 Turbo doesn't meet your requirements.

#### Chat Bots
For chat bot development, consider using these models:

- **GPT-3.5 Turbo**: Most capable GPT-3.5 model, optimized for chat, and cost-effective.
- **GPT-4**: More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat.

Always keep in mind the specific requirements of your website, and choose the model that best fits your needs in terms of capabilities, cost, and availability.
