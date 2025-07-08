---
id: create-manage-ai-forms
slug: /ai-forms/create-manage-forms
title: Create & Manage Forms
sidebar_position: 1
---

import aiforms from '/img/ai-forms/ai-forms.png';
import aiformsactions from '/img/ai-forms/aiforms-actions.png';
import aiformsdelexp from '/img/ai-forms/aiforms-delete-export.png';

# Create & Manage Forms

The **AI Forms** module allows you to build custom tools directly on your website. You can create forms with various input fields (text, dropdowns, checkboxes), connect them to AI prompt, and let your users generate content based on their input.

👉 Check out the live demo here: [aipower.org/demo](https://aipower.org/ai-form-generator/)

### Creating a New Form

To start building a new form, click the **Create New Form** button in the top-right corner. This will take you to the [Form Builder](./form-builder.md), where you can design the form's layout and configure its AI prompt.

<img src={aiforms} />

### Managing Existing Forms

The main list shows all your forms and provides several actions for each one:

-   **Edit**: Click the pencil icon to open an existing form in the Form Builder to modify its fields, layout, or prompts.
-   **Duplicate**: Click the page icon to create an exact copy of a form. This is useful for creating variations of a complex form without starting from scratch.

<img src={aiformsactions} />

-   **Export**: Click the download icon to save a single form's entire configuration as a JSON file. This file can be used as a backup or imported into another site.
-   **Delete**: Click the trash icon to permanently delete a form. This action cannot be undone.
-   **More Actions Menu**: For managing multiple forms at once, click the ellipsis icon (`...`).

<img src={aiformsdelexp} />

    -   `Export All`: Downloads a single JSON file containing all your forms.
    -   `Delete All`: Permanently deletes every form. **Use with caution.**
-   **Search and Filter**: Use the search box and provider dropdown to quickly find specific forms in a long list.