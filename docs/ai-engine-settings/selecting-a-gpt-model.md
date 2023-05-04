---
sidebar_position: 1
---

# Selecting a GPT Model

**AI Power** supports OpenAI **GPT-3**, **GPT-3.5** and **GPT-4** models.

:::info

GPT-4 is currently in limited beta, which means that access to the GPT-4 API from OpenAI is available only through a waiting list and is not open to everyone yet. You can sign up for the waiting list [here](https://openai.com/waitlist/gpt-4-api). If you don't have GPT-4 API access and if you select GPT-4 as your model then you will get "The model: gpt-4 does not exist" or "The model: gpt-4-32k does not exist" error.

:::

### Supported GPT-4 models:

| Model | Description | Max Tokens | Training Data |
| ----- | ----------- | ---------- | ------------- |
| gpt-4 | More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Still in beta. | 8,192 | Up to Sep 2021 |
| gpt-4-32k | Same capabilities as the base gpt-4 mode but with 4x the context length. | 32,768 | Up to Sep 2021 |

### Supported GPT-3.5 models:

| Model | Description | Max Tokens | Training Data |
| ----- | ----------- | ---------- | ------------- |
| gpt-3.5-turbo | Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. | 4,096 | Up to Sep 2021 |
| text-davinci-003 | Can do any language task with better quality, longer output, and consistent instruction-following. | 4,000 | Up to Jun 2021 |
| text-davinci-002 | Similar capabilities to text-davinci-003 but trained with supervised fine-tuning instead of reinforcement learning. | 4,000 | Up to Jun 2021 |

### Supported GPT-3 models:

| Model | Description | Max Tokens | Training Data |
| ----- | ----------- | ---------- | ------------- |
| text-curie-001 | Very capable, but faster and lower cost than Davinci. | 2,048 | Up to Oct 2019 |
| text-babbage-001 | Capable of straightforward tasks, very fast, and lower cost. | 2,048 | Up to Oct 2019 |
| text-ada-001 | Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost. | 2,048 | Up to Oct 2019 |

> OpenAI recommends using Davinci and Turbo while experimenting since they will yield the best results.

| Model | Good at |
| ----- | ------- |
| Turbo | Conversation and text generation |
| Davinci | Complex intent, cause and effect, summarization for audience |
| Curie | Language translation, complex classification, text sentiment, summarization |
| Babbage | Moderate classification, semantic search classification |
| Ada | Parsing text, simple classification, address correction, keywords |


- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
