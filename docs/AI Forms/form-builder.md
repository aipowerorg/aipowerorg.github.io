---
id: the-form-builder
slug: /ai-forms/form-builder
title: Form Builder
sidebar_position: 2
---

import formbuilder from '/img/ai-forms/form-builder.png';
import formelements from '/img/ai-forms/form-elements.png';
import designer from '/img/ai-forms/designer.png';
import rightpanel from '/img/ai-forms/right-panel.png';
import formtitle from '/img/ai-forms/title.png';
import prompt from '/img/ai-forms/prompt.png';
import formlayout from '/img/ai-forms/layout.png';
import elements from '/img/ai-forms/elements.png';
import savepreview from '/img/ai-forms/save-preview.png';

# Form Builder

The Form Builder is where you bring your AI-powered tool to life. It's a drag-and-drop interface for designing the form's layout, adding input fields, and writing the AI prompt that processes the user's input.

<img src={formbuilder} />

## The Builder Interface

The builder is organized into three main columns:

-   **Left Column (The Palette)**: Contains all the building blocks for your form, including layouts, input fields, and label settings. When you select an element in the designer, this column switches to show the **Settings Panel** for that element.

<img src={formelements} />

-   **Center Column (The Designer)**: This is your canvas. You drag blocks from the palette and drop them here to build the visual structure of your form.

<img src={designer} />

-   **Right Column (Configuration)**: This is where you set the form's title, write the core AI prompt, and configure the AI model and context settings.

<img src={rightpanel} />

## Building a Form: Step-by-Step

### Set the Title and Prompt

It's best to start in the right-hand column to define what your form will do.

1.  **Form Title**: Give your form a descriptive name (e.g., "Blog Post Generator").

<img src={formtitle} />

2.  **Prompt Template**: Write the instructions for the AI. This is the most crucial step. Think of it as a set of directions that the AI will follow, using the user's input as variables.

<img src={prompt} />

3.  **Placeholders**: In your prompt, use placeholders like `{your_variable_name}`. These variables will be replaced by the user's input from the form fields you create. For example: `Write a social media post about {topic} for the {platform} platform.`

### Add a Layout

Before you can add input fields, you must add a layout block to the designer.

1.  In the left-hand palette, open the **Layouts** accordion.

<img src={formlayout} />

2.  Drag a layout block (e.g., "Single Column") and drop it into the empty designer area in the center.

### Add Form Elements

Now you can add the input fields that will capture the user's data.

1.  In the left-hand palette, open the **Form Elements** accordion.

<img src={elements} />

2.  Drag an element (e.g., "Text Input") and drop it inside a column in the designer. Add one element for each placeholder in your prompt.
    -   **Text Input**: A single-line text field.
    -   **Text Area**: A multi-line text field.
    -   **Dropdown**: A menu of choices.
    -   **Checkbox**: A single on/off choice.
    -   **Radio Buttons**: A group of choices where only one can be selected.
    -   **File Upload (Pro)**: Allows users to upload a `.txt` or `.pdf` file. The text content of the file will be used to replace the placeholder.

### Configure Each Element

Click on any element in the designer to open its **Settings Panel** in the left column.

For each element, you must configure:

-   **Field Variable Name**: This is the most important setting. It **must** match the name you used in your prompt's placeholder. For a `{topic}` placeholder, the variable name must be `topic`. It can only contain letters, numbers, and underscores.
-   **Label Text**: The user-friendly label that appears above the field.
-   **Placeholder Text**: The example text inside the field.
-   **Required Field**: Mark the field as mandatory.
-   **Options**: For dropdowns and radio buttons, define the available choices here.

### Save and Preview

Once you've configured your fields and prompt, use the buttons at the bottom of the editor.

<img src={savepreview} />

-   **Save Form**: Saves your entire form configuration. You must save before you can preview.
-   **Preview**: After saving, this button becomes active. Click it to see a live, functional preview of your form directly below the editor. You can test the AI generation without leaving the page.
-   **Cancel**: Discards all changes and returns to the form list.