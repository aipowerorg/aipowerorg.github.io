---
id: voice-features
slug: /voice-features
title: Voice Agents
sidebar_position: 6
---

import realtimeaddon from '/img/chat/realtime-voice-addon.png';
import realtimesettings from '/img/chat/realtime-voice-settings.png';
import realtimebutton from '/img/chat/realtime-voice-button.png';
import voiceinputenable from '/img/chat/voice-input-enable.png';
import voiceplaybackaddon from '/img/chat/voice-playback-addon.png';
import elevenlabssettings from '/img/chat/elevenlabs-settings.png';
import ttsenable from '/img/chat/tts-enable.png';

# Voice Features

AIP brings your chatbot to life with two distinct voice functionalities: the new **Realtime Voice Agent** for live, spoken conversations, and the classic **Voice Input/Playback** for transcribing user speech and reading bot responses aloud.

## Realtime Voice Agent

This feature enables low-latency, speech-to-speech conversational experiences using OpenAI's Realtime API. When activated, users can talk to your chatbot and receive spoken replies in near real-time, creating a fluid and natural voice agent.

:::info This is a Pro Feature
To use this feature, you need a Pro plan and the **Realtime Voice** addon must be enabled from the **AIP > Add-ons** page.
<img src={realtimeaddon} />
:::

:::info
This feature only works with OpenAI's Realtime models (`gpt-4o-realtime-preview` and `gpt-4o-mini-realtime`). Ensure your OpenAI API key is configured in the main dashboard.
:::

### How to Enable

1.  Navigate to your chatbot's settings in **AIP > Chat**.
2.  Open the **Voice Agent** accordion and check the **Enable Realtime Voice Agent** box.

<img src={realtimesettings} />

### Configuration

-   **Realtime Model**: Choose between `gpt-4o-realtime-preview` or the mini version.
-   **Voice**: Select the OpenAI voice you want the agent to use (e.g., Alloy, Shimmer).
-   **Turn Detection**:
    -   **None (Push-to-Talk)**: The user must click the button to start and stop speaking.
    -   **Server VAD**: OpenAI's server detects when the user stops speaking based on silence.
    -   **Semantic VAD**: A more advanced detection that understands the context of the speech to determine when a turn is complete.
-   **Response Speed**: Control how quickly the AI speaks, from `0.25` (slowest) to `1.5` (fastest).
-   **Enable Direct Voice Mode**: This transforms the popup trigger button into the main controller for the voice session. It requires **Popup Enabled** (in the Appearance accordion) to be active.
-   **Advanced Settings**: Configure technical details like audio formats and noise reduction. The defaults are recommended for most use cases.

### How It Works

The Realtime Voice Agent has two modes of operation, depending on whether "Direct Voice Mode" is enabled.

#### Standard Mode

In this mode, the voice session is initiated from within the chat window.

1.  The user clicks the popup icon to open the chat window.
2.  Inside the window, a new voice button appears in the input area.
3.  The user clicks this internal voice button to start the session. The button will indicate it's "Connecting...".
4.  Once connected, the button changes to a "Listening" state, and the conversation begins.

<img src={realtimebutton} />

#### Direct Voice Mode (Popup Only)

For a truly voice-first experience, you can enable **Direct Voice Mode**. This is ideal for scenarios where you want to offer an immediate voice assistant without requiring the user to interact with the text chat first.

1.  The user clicks the main popup icon on your website.
2.  The voice session starts **immediately**. The chat window does not open.
3.  The popup icon itself animates to show the status (Connecting, Listening, Speaking).
4.  The user talks directly to the agent, and the conversation happens entirely through voice.

---

## Classic Voice Features

These features add basic voice functionality to the standard text-based chat experience.

### Voice Input (Speech-to-Text)

This feature adds a microphone icon to the chat input field, allowing users to speak their messages, which are then transcribed into text and sent.

:::info
This feature uses **OpenAI's Whisper model** for transcription. Ensure your OpenAI API key is configured in the main dashboard.
:::

#### How to Enable

1.  Navigate to your chatbot's settings in **AIP > Chat**.
2.  Open the **General** accordion.
3.  Click the microphone icon next to the model selector to enable voice input for the chatbot.

<img src={voiceinputenable} />

### Voice Playback (Text-to-Speech)

:::info
AIP supports three TTS providers: **OpenAI**, **Google**, and **ElevenLabs**.

- For **OpenAI** and **Google**, the plugin uses the API keys you entered under **Main Dashboard > Providers**.
- For **ElevenLabs**, once the **Voice Playback (TTS)** add-on is activated, go to **Main Dashboard > Integrations** to enter your ElevenLabs API key and sync available models and voices.
<img src={elevenlabssettings} width="600"/>
:::

This feature adds a "play" button to each of the chatbot's responses, allowing users to listen to the message.

#### How to Enable

1.  Go to **AIP > Add-ons** and activate the **Voice Playback (TTS)** add-on. This is a free add-on.

<img src={voiceplaybackaddon} width="600"/>

2.  Return to your chatbot's settings in **AIP > Chat**.
3.  Open the **Voice Playback** accordion and check the **Enable Voice Playback** box.

#### Configuration

- **TTS Provider**: Choose the service to generate the audio. Options include Google, OpenAI, and ElevenLabs.

<img src={ttsenable} width="600"/>

- **Voice**: Select a specific voice.
    - For **Google** and **ElevenLabs**, you can click the **Sync** button to fetch the voices available in your account.
    - For **OpenAI**, a list of standard voices is available.
- **Auto Play**: Check this box if you want the chatbot's responses to be read aloud automatically as soon as they are generated.

:::note
**Auto Play is not compatible with Stream Mode.** If streaming is enabled, the voice will not play automatically.
:::