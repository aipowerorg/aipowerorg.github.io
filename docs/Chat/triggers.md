---
id: triggers
slug: /triggers
title: Triggers
sidebar_position: 9
---

import triggeraddon from '/img/chat/triggers-addon.png';
import triggerenable from '/img/chat/triggers-enable.png';
import triggerevents from '/img/chat/triggers-events.png';
import triggerconds from '/img/chat/triggers-conds.png';
import triggeractions from '/img/chat/triggers-actions.png';
import usecasestep1 from '/img/chat/use-case-step1.png';
import usecasestep2 from '/img/chat/use-case-step2.png';
import usecasestep3 from '/img/chat/use-case-step3.png';
import usecasestep4 from '/img/chat/use-case-step4.png';
import usecasestep5 from '/img/chat/use-case-step5.png';

# Triggers

The Triggers feature is an automation engine that allows you to create event-based rules to control your chatbot's behavior. 

This is a **Pro** feature and requires the "Chatbot Triggers (Beta)" add-on to be activated.

<img src={triggeraddon} width="600"/>

You can configure triggers in the **Triggers** accordion of your chatbot's settings.

## How It Works

The system follows a simple logic:
> **When an `Event` occurs, if all `Conditions` are met, then perform an `Action`**

### Creating a Trigger

Click the **Add New Trigger** button to create a new rule. Each trigger has the following settings:

<img src={triggerenable} width="600"/>

- **Trigger Name & Description**: For your own reference.
- **Priority**: A number that determines the order in which triggers are checked. Lower numbers run first (e.g., priority `10` runs before priority `20`).
- **Active**: A toggle to enable or disable the trigger.

## Events

An event is what starts a trigger. You select one event per trigger.

- **User Message Received**: Fires every time a user sends a message, before the AI processes it.
- **Session Started**: Fires only on the very first message of a new conversation.

<img src={triggerevents} width="600"/>

- **Form Submitted**: Fires when a user submits a form that was displayed by a `display_form` action.
- **System Error Occurred**: Fires when the AI call or another internal process fails.

## Conditions

Conditions are rules that must all be true for the action to run. If you don't add any conditions, the action will run every time the event occurs.

1.  **Condition Type**: The category of data you want to check (e.g., User Context, Text Content).
2.  **Field**: The specific piece of data to check (e.g., `user_role`, `user_message_text`).

<img src={triggerconds} width="600"/>

3.  **Operator**: The comparison to perform (e.g., `equals`, `contains`, `greater_than`).
4.  **Value**: The value to compare against.

**Example Condition**:
- **Type**: `User Context`
- **Field**: `user_role`
- **Operator**: `is_one_of`
- **Value**: `subscriber, customer`

This condition would be true if the current user has either the "Subscriber" or "Customer" role.

## Actions

An action is what the trigger does if its conditions are met.

-   **Bot Reply**: The chatbot sends a predefined message. You can use placeholders like `{{user_name}}`. You can also choose to stop the AI from processing the user's original message after the reply is sent.
-   **Inject Context**: Silently adds extra information to the AI's instructions or history before it generates a response. This is useful for dynamically changing the bot's behavior.

<img src={triggeractions} width="600"/>

-   **Block Message**: Prevents the user's message from being processed and can display a custom reason to the user.
-   **Call Webhook**: Sends the chat context data to an external URL, allowing you to integrate with other services like a CRM or a Zapier workflow.
-   **Display Form**: Renders a form inside the chat window for the user to fill out. You can build the form with text fields, dropdowns, and checkboxes directly in the trigger editor.
-   **Store Form Submission**: Logs the data from a submitted form to the chat history for a permanent record. This action is only used in **form-submitted** triggers.

## Example Usage

Let’s walk through a real-world use case involving two triggers.

> **Goal**: When a user sends a message containing “help”, display a contact form. When they submit the form, store the submission to the chat history.

### ✅ Trigger 1: Show Contact Form

#### 1. Trigger Settings

- **Name**: `Show Contact Form`
- **Priority**: `10`
- **Active**: ✅ Enabled

<img src={usecasestep1} width="600"/>

#### 2. Event

- **Event**: `User Message Received`

#### 3. Condition

| Type         | Field              | Operator | Value |
|--------------|--------------------|----------|-------|
| Text Content | user_message_text  | contains | help  |

<img src={usecasestep2} width="600"/>

> This ensures the form only shows when the user mentions "help".

#### 4. Action

- **Action Type**: `Display Form`

**Form Settings**:

- **Form ID**: `help_request_form`
- **Form Title**: `Need Help? Contact Us Below`
- **Submit Button Text**: `Send Request`

**Form Fields**:

| Field Type | Label   | Field ID      |
|------------|---------|---------------|
| Text       | Name    | `user_name`   |
| Text       | Email   | `user_email`  |
| Textarea   | Message | `user_message`|

<img src={usecasestep3} width="600"/>

> ℹ️ Field IDs must be unique and are used for data storage and formatting.

### ✅ Trigger 2: Store Form Submission

This second trigger handles storing the data once the form is submitted.

#### 1. Trigger Settings

- **Name**: `Log Help Form Submission`
- **Priority**: `20`
- **Active**: ✅ Enabled

#### 2. Event

- **Event**: `Form Submitted`

#### 3. Conditions

- No conditions required (leave empty)

#### 4. Action

- **Action Type**: `Store Form Submission`

**Optional Log Format** (supports placeholders):

<img src={usecasestep4} width="600"/>

> Placeholders will be replaced with submitted values and stored in chat logs.

## 🧪 Final Result

<img src={usecasestep5} width="600"/>

When a user types:

> _"I need help"_

1. Trigger 1 runs → displays the contact form
2. User fills out name, email, and message
3. Trigger 2 runs → logs the form data to chat history