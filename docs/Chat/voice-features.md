---
id: voice-features
slug: /voice-features
title: Voice
sidebar_position: 6
---

import voiceinputenable from '/img/chat/voice-input-enable.png';
import voiceplaybackaddon from '/img/chat/voice-playback-addon.png';
import elevenlabssettings from '/img/chat/elevenlabs-settings.png';
import ttsenable from '/img/chat/tts-enable.png';

# Voice Features

AIP allows your chatbot to interact with users through voice. You can enable voice input (Speech-to-Text) and voice playback (Text-to-Speech) to create a more engaging experience.

## Voice Input (Speech-to-Text)

This feature adds a microphone icon to the chat input field, allowing users to speak their messages instead of typing.

:::info
This feature **only works with OpenAI's Whisper model**. Make sure to enter your **OpenAI API key** under the **Main Dashboard > API Keys** section for it to work properly.
:::

### How to Enable

1.  Navigate to your chatbot's settings in **AIP > Chat**.
2.  Open the **General** accordion.
3.  Check the **Voice Input** box.

<img src={voiceinputenable} />

## Voice Playback (Text-to-Speech)

:::info
AIP supports three TTS providers: **OpenAI**, **Google**, and **ElevenLabs**.

- For **OpenAI** and **Google**, the plugin uses the API keys you entered under **Main Dashboard > Providers**.
- For **ElevenLabs**, once the **Voice Playback (TTS)** add-on is activated, go to **Main Dashboard > Integrations** to enter your ElevenLabs API key and sync available models and voices.
<img src={elevenlabssettings} width="600"/>
:::

This feature adds a "play" button to each of the chatbot's responses, allowing users to listen to the message.

### How to Enable

1.  Go to **AIP > Add-ons** and activate the **Voice Playback (TTS)** add-on. This is a free add-on.

<img src={voiceplaybackaddon} width="600"/>

2.  Return to your chatbot's settings in **AIP > Chat**.
3.  Open the **Voice Playback** accordion and check the **Enable Voice Playback** box.

### Configuration

- **TTS Provider**: Choose the service to generate the audio. Options include Google, OpenAI, and ElevenLabs.

<img src={ttsenable} width="600"/>

- **Voice**: Select a specific voice.
    - For **Google** and **ElevenLabs**, you can click the **Sync** button to fetch the voices available in your account.
    - For **OpenAI**, a list of standard voices is available.
- **Auto Play**: Check this box if you want the chatbot's responses to be read aloud automatically as soon as they are generated.

:::info
**Auto Play is not compatible with Stream Mode.** If streaming is enabled, the voice will not play automatically.
:::
