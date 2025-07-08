---
id: security-privacy
slug: /security-privacy
title: Security & Privacy
sidebar_position: 7
---

import moderationaddon from '/img/chat/moderation-addon.png';
import openaimoderation from '/img/chat/openai-moderation.png';
import consentaddon from '/img/chat/consent-addon.png';
import consentsettings from '/img/chat/consent-settings.png';
import consentdemo from '/img/chat/consent-demo.png';
import bannedwords from '/img/chat/banned-words.png';
import bannedips from '/img/chat/banned-ips.png';
import ipanon from '/img/chat/ip-anonym.png';

# Security & Privacy

AIP provides several features to help you secure your chatbots, moderate content, and protect user privacy. These settings are configured globally in the main **Dashboard**.

## Moderation

You can automatically filter harmful content from user messages using OpenAI's Moderation API. This helps prevent inappropriate language and abuse.

:::info This is a Pro Feature
To use this feature, you need a Pro plan and the **OpenAI Moderation** addon must be enabled from the **AIP > Add-ons** page.
<img src={moderationaddon} width="600"/>
:::

This feature only works for chatbots that are configured to use **OpenAI** as their provider.

**How to Configure:**
1. Go to **AIP > Dashboard**.
2. Open **Advanced** accordion.
3. Enable the **OpenAI Moderation** toggle under **Content Control & Moderation** tab.

<img src={openaimoderation} width="600"/>

4. Customize the **Notification Message** that is shown to a user whose message is flagged.

## Consent Compliance

You can require users to agree to your terms and policies before they can start a conversation.

:::info This is a Pro Feature
To use this feature, you need a Pro plan and the **Consent Compliance Box** addon must be enabled from the **AIP > Add-ons** page.
<img src={consentaddon} width="600"/>
:::

**How to Configure:**
1. Go to **AIP > Dashboard**.
2. Open **Advanced** accordion.

<img src={consentsettings} width="600"/>

3. Fill in the **Consent Box** fields under **Consent Compliance** tab:
    - **Title**: The heading for the consent box.
    - **Message**: The text explaining what the user is agreeing to. You can use HTML for links (e.g., `<a href="/privacy-policy">Privacy Policy</a>`).
    - **Button**: The text for the agreement button.

When enabled, a consent box will appear over the chat input area. The user must click "I Agree" to proceed.

<img src={consentdemo} width="600"/>

## Banned IPs

This feature allows you to block specific IP addresses from using the chatbots.

**How to Configure:**
1. Go to **AIP > Dashboard**.
2. Open **Advanced** accordion.
3. **Content Control & Moderation** tab, in the **Banned IPs** field, enter the IP addresses you want to block, separated by commas.

<img src={bannedips} width="600"/>

4. Customize the **Notification Message** that is shown to a blocked user.

## Banned Words

This feature allows you to block messages that contain specific words or phrases. The check is not case-sensitive.

**How to Configure:**
1. Go to **AIP > Dashboard**.
2. Open **Advanced** accordion.
3. **Content Control & Moderation** tab, in the **Banned Words** field, enter the words or phrases you want to block, separated by commas.

<img src={bannedwords} width="600"/>

4. Customize the **Notification Message** that is shown to a user whose message contains a banned word.

## IP Anonymization

For increased user privacy, you can enable IP Anonymization. This feature removes the last part of a user's IP address before it is stored in the chat logs.
- For IPv4 addresses (`192.168.1.123`), it becomes `192.168.1.0`.
- For IPv6 addresses, the last block is zeroed out.

:::info This is a Free Addon
IP Anonymization is a free addon and is disabled by default.
To use it, go to the **Addons** page and activate the **IP Anonymization** addon.
<img src={ipanon} width="600"/>
:::