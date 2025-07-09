---
title: Generation Modes
sidebar_position: 1
---

import write from '/img/write/write.png';
import singlemode from '/img/write/single-mode.png';
import bulk from '/img/write/bulk.png';
import usage from '/img/write/usage.png';
import csvupload from '/img/write/csv.png';
import csvsample from '/img/write/csv-sample.png';
import rsssettings from '/img/write/rss.png';
import urlsettings from '/img/write/url.png';
import sheetssettings from '/img/write/google.png';
import sheetid from '/img/write/sheet-id.png';
import googletaskok from '/img/write/google-task-ok.png';
import makecopy from '/img/write/make-copy.png';
import ShareSheet from '/img/write/share.png';
import ShareScreen from '/img/write/share-service.png';
import NewProject from '/img/write/new-project.png';
import NameProject from '/img/write/name-project.png';
import SelectProject from '/img/write/select-project.png';
import CloudDashboard from '/img/write/dashboard.png';
import APIOverview from '/img/write/api-overview.png';
import EnableAPI from '/img/write/enable-api.png';
import TypeSheet from '/img/write/type-sheet.png';
import SelectSheet from '/img/write/select-sheet.png';
import EnableSheet from '/img/write/enable.png';
import Credentials from '/img/write/credentials.png';
import CreateCredentials from '/img/write/create-credentials.png';
import Done from '/img/write/done.png';
import SelectAccount from '/img/write/select-account.png';
import Keys from '/img/write/keys.png';
import CreateKeys from '/img/write/create-keys.png';
import JSON from '/img/write/json.png';
import Download from '/img/write/download.png';
import DownloadFolder from '/img/write/download-folder.png';
import UploadSample from '/img/write/upload-sample.png';
import ShareAccount from '/img/write/share-account.png';

# Generation Modes

The Write module provides multiple ways to generate content, from a single article to hundreds at once. These methods are organized into different modes, accessible via tabs.

- **Single**: Generates one article at a time directly in the interface.
- **Bulk, CSV, RSS, URL, Google Sheets**: These modes create automated tasks for generating content in the background.

<img src={write} />

## Single

This is the most straightforward way to create content. Simply enter your topic (and optionally, keywords separated by a `|`) into the text box and click **Generate**.

The AI will generate a title and the full article, which will appear in the output panel on the right. This allows you to review, copy, or save the content as a post immediately.

**Example Input:**
> How to train a puppy | puppy training, housebreaking, new dog

<img src={singlemode} />

## List

For generating multiple articles, you can use one of the task-based modes. When you use these modes, instead of generating content immediately, AIP creates a task that runs in the background.

:::info

Task-based generation is managed by the **Automate** module. This section provides a brief overview. For detailed information on managing, monitoring, and scheduling, please see the [Automate](/docs/automate) documentation.

:::

The Bulk mode allows you to enter a list of topics directly.

-   **Format**: Enter one topic per line. You can also include keywords, a category ID, author username, and post type slug, separated by `|`.
-   **Example**:

    ```
    How to bake a cake | frosting, flour | 15 | mary | post
    About our services | web design | 12 | john | page
    The future of AI in marketing
    ```

<img src={bulk} />

## CSV

This mode lets you generate articles by importing topics from a CSV file.

<img src={csvupload} />

-   **Format**: The columns in your CSV file must be in the following order: `Topic`, `Keywords`, `Category ID`, `Author Username`, `Post Type Slug`.
-   **Usage**: Click "Choose File" to upload your CSV. The system will parse the file and prepare the topics for the task.

:::tip

To ensure you have the correct format, you can [download a sample CSV file here](https://docs.google.com/spreadsheets/d/1WOnO_UKkbRCoyjRxQnDDTy0i-RsnrY_MDKD3Ks09JJk/edit?usp=sharing).

<img src={csvsample} width="600" />

:::

## RSS

This mode automatically creates articles from new items in one or more RSS feeds.

<img src={rsssettings} />

-   **Format**: Enter one RSS feed URL per line in the provided text area.
-   **Filtering**: You can use the **Include Keywords** and **Exclude Keywords** fields to control which feed items are used to generate content.
-   **Prompting**: Use the `{description}` placeholder in your prompt to include the item's description from the RSS feed as context.

## URL

This mode generates articles by fetching content from a list of URLs. This is useful for summarizing or rewriting existing web pages.

<img src={urlsettings} />

-   **Format**: Enter one website URL per line.
-   **Prompting**: The content from each URL will be fetched and made available in your prompt using the `{url_content}` placeholder.
-   **Testing**: You can use the **Test First URL** button to preview the content that will be fetched from the first URL in your list.

## Google Sheets

Connect a Google Sheet to manage a large content calendar. The task will generate articles from the topics listed in your sheet.

<img src={sheetssettings} />

-   **Format**: Your sheet must have columns in the following order:
    -   Column A: Topic
    -   Column B: Keywords
    -   Column C: Category ID
    -   Column D: Author Username
    -   Column E: Post Type Slug
    -   **Column F: Status (Optional)**. The plugin will write "Processed on [Date]" to this column after successfully generating an article. Rows with any value in the Status column will be skipped in future runs.

<img src={sheetid} />

-   **Authentication**: You will need to provide your Google Sheet ID and Service Account credentials. Ensure you have shared your Google Sheet with the `client_email` found in your credentials file.

### Creating Google Service Account

To use the Google Sheets feature, create a service account in your Google Cloud Console and upload your credentials to the plugin.

Follow these steps:

- Visit your [Google Cloud Console](https://console.cloud.google.com/) dashboard.

- Click the dropdown menu in the top left corner and select **Create new project**.

<img src={NewProject} width="600" />

- Name your project or use the default name, then click **Create**.

<img src={NameProject} width="600" />

- Select your project.

<img src={SelectProject} width="400" />

- Click on the **Dashboard** link.

<img src={CloudDashboard} width="600" />

- Click on **Go to APIs Overview**.

<img src={APIOverview} width="500" />

- Click on **Enable APIs and Services**.

<img src={EnableAPI} width="500" />

- Type **Sheet** and press enter.

<img src={TypeSheet} width="600" />

- Click on **Google Sheets API**.

<img src={SelectSheet} width="600" />

- Click the **Enable** button.

<img src={EnableSheet} width="600" />

- Navigate to **Credentials**.

<img src={Credentials} width="600" />

- Click on **Create credentials** and choose **Service Account**.

<img src={CreateCredentials} width="600" />

- Assign a name to your service account and click the **Done** button at the bottom.

<img src={Done} width="600" />

- Click on your service account.

<img src={SelectAccount} />

- Go to the **Keys** tab.

<img src={Keys} width="600" />

- Click on **Add Key** and select **Create new key**.

<img src={CreateKeys} width="600" />

- Choose **JSON** and click **Create**.

<img src={JSON} width="600" />

- This action will save your private key to your computer, likely in the Downloads folder.

<img src={Download} width="600" />

- Locate the downloaded credentials file (JSON) in your download folder; this file grants access to the Google Sheets API.

<img src={DownloadFolder} width="400" />

- In the plugin's “Write” page, go to the **Google Sheets** tab and click **Choose** to upload your JSON file. Make sure to enter your Google Sheet ID too.

<img src={sheetssettings} />

- Click the **Create Task** button.

- A success message should appear, indicating that the file has been successfully uploaded.

<img src={googletaskok} />

Congratulations! You’ve successfully created and uploaded your credentials.

### Setting Up Google Sheets

It's time to create a Google Sheet, grant write permissions to the service account we just set up, and enter the Google Sheet URL in the designated field.

- Visit your [Google Drive](https://drive.google.com).
- Create a new folder.
- Download the sample file found under the Google Sheets tab or you can download it from [here](https://docs.google.com/spreadsheets/d/18QIWggMmbTVTb-nztTo7SFdGJTUC6kwRxgc841xq4x0/edit?usp=sharing).

<img src={makecopy} width="400" />

- Upload the sample file to your folder.

<img src={UploadSample} />

- Open the sample file by double-clicking on it.

- Click the **Share** button in the top right corner.

<img src={ShareSheet} />

- Return to your Google Console and copy the service account address.

<img src={ShareAccount} width="600" />

- Go back to Google Sheets and add this address in the share window. Ensure you select **Editor** and click the **Share** button.

<img src={ShareScreen} />

- This action shares your Google Sheet with your service account, allowing it to update the sheet.

- You can now enter your titles, keywords, and other details per row.


#### Column Definitions

| Column | Field Name       | Description                               |
|--------|------------------|-------------------------------------------|
| A      | Topic            | Mandatory. The main subject of the article. |
| B      | Keywords         | Optional. Comma-separated keywords to guide the AI. |
| C      | Category ID      | Optional. WordPress numeric category ID.  |
| D      | Author Login     | Optional. WordPress username of the author. |
| E      | Post Type Slug   | Optional. Slug for post type (e.g., `post`, `page`). |
| F      | Status           | Optional. The plugin writes "Processed" here and skips rows with a value in this column. |

> One topic per row is required.