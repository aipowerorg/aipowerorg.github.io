---
id: ai-forms-configuration
slug: /ai-forms/configuration
title: Prompt & AI Configuration
sidebar_position: 3
---

import promptbuilder from '/img/ai-forms/prompt-builder.png';
import aisettings from '/img/ai-forms/ai-settings.png';

# Prompt & AI Configuration

The right-hand column of the form builder is where you define the core logic of your AI Form. It controls the instructions sent to the AI and which AI model is used.

### Prompt Template

This is the most important part of your form. It's the set of instructions you give to the AI.

-   **Using Placeholders**: In your prompt, you must use placeholders that correspond to the **Field Variable Name** of each element in your form. For example, if you have a "Text Input" element with the variable name `blog_topic`, you would use `{blog_topic}` in your prompt. When a user fills out the form, this placeholder will be replaced with their input.

<img src={promptbuilder} />

-   **Available Snippets**: As you add fields to the designer, their placeholders will appear as clickable snippets below the prompt template textarea for easy insertion.
-   **Validate Prompt**: Click this button to check your prompt for common errors, such as using a placeholder for a field that doesn't exist.

### AI Configuration

This section controls the AI engine and its parameters, overriding the global settings in the main dashboard.

-   **AI Provider & Model**: Choose the AI service and specific model for this form.

<img src={aisettings} />

-   **Temperature & Max Tokens**: Adjust the creativity and maximum response length for the AI's output.