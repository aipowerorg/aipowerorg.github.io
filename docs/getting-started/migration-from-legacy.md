---
sidebar_position: 4
title: Migration from Legacy
---

import migrationui from '/img/migration/migration-ui.png';
import migrate from '/img/migration/migrate.png';

# Migrating from Legacy Plugin

Version 2.3 of AI Power is a complete rewrite from the ground up, featuring a more robust and modular architecture. Due to these significant changes, data from versions prior to 2.3 is not automatically compatible.


:::tip 🚨 We Highly Recommend Starting Fresh

While a Migration Tool is available, we strongly recommend **not migrating old data** and instead starting with a fresh setup. The new version includes powerful features like **OpenAI Vector Store** support, which is significantly faster and easier to manage.

If you were previously using external services like **Pinecone** or **Qdrant**, you might not need them anymore. The new built-in OpenAI Vector Store is optimized for performance and fully integrated with AI Power 2.3+.

:::

To help you transition, we have built a dedicated **Migration Tool**. This tool will guide you through the process of analyzing your old data and moving it to the new plugin structure.

<img src={migrationui} />

:::danger IMPORTANT: Backup Your Site First!
Before you begin the migration process, it is **absolutely essential** to create a full backup of your WordPress website (both files and database). While the migration tool is designed to be safe, having a backup ensures you can restore your site if any issues occur.
:::

## How the Migration Tool Works

The migration is a two-phase process: Analysis and Action.

1.  **Analysis Phase**: The tool first scans your database for any data related to older versions of AI Power. This includes settings, custom post types (like Chatbots, AI Forms, and Indexed Data), and old database tables. It then presents a summary of what it found.
2.  **Action Phase**: After the analysis, you will see a dashboard listing each category of legacy data. For each category, you have two choices:
    *   **Migrate**: This will convert the old data into the new format used by version 2.0+.
    *   **Delete**: This will permanently remove the old data from your database.

## Step-by-Step Migration Guide

### 1. The Migration Notice

After updating to version 2.3, if you have legacy data, you will see a notification bar at the top of the AI Power dashboard.

Click the **Go to Migration Tool** button to begin. You can also access the tool directly from the WordPress admin menu under **AIP > Migration Tool**.

### 2. Analyze Your Data

On your first visit to the Migration Tool, you will be prompted to analyze your site for legacy data.

-   **Analyze Legacy Data**: Click this to start the scan. The tool will check for old settings, chatbots, forms, and indexed knowledge base content.
-   **Start Fresh**: If you do not want to import any of your old data and prefer to start with a clean slate, you can choose this option. Your old data will be ignored but not deleted, allowing you to delete it later if you wish.

### 3. Review and Take Action

After the analysis is complete, the page will reload to show a dashboard of all the legacy data categories that were found.

For each category, you will see a summary of the data found and two action buttons:

-   **Migrate**: Click this to import the data from this category into the new plugin structure.

<img src={migrate} />

-   **Delete**: Click this to permanently remove the old data for this category. **This action cannot be undone.**

We recommend migrating data in the following order:
1.  Global, Provider & API Settings
2.  Chatbots
3.  AI Forms & Other Legacy Data
4.  Indexed Data (Knowledge Base)

### 4. Complete the Process

After you have migrated or deleted each category, the status will update to "Migrated" or "Data Deleted".

Once all categories are processed, the migration is complete! The Migration Tool menu item will disappear from the admin panel, and your AI Power plugin will be fully operational with your migrated data.

## Data Categories Explained

-   **Global, Provider & API Settings**: Migrates your saved API keys for OpenAI, Google, etc., as well as your default model selections and other global settings.
-   **Chatbots**: Converts your old `wpaicg_chatbot` posts into the new format. This includes all bot settings like instructions, theme, and context awareness. **Note**: Old chat logs are **not** migrated to keep the database clean and efficient.
-   **AI Forms & Other Legacy Data**: Migrates your old `wpaicg_form` posts and their settings to the new AI Forms module. Other unused legacy post types (like `wpaicg_mtemplate`) will be removed if you choose "Delete".
-   **Indexed Data (Knowledge Base)**: This migrates the *records* of your old indexed content from `wpaicg_embeddings`, `wpaicg_pdfadmin`, and `wpaicg_builder` posts.
    -   **Important**: This process does **not** re-index the content or touch your Pinecone/Qdrant account. It simply creates a new log entry in the `wp_aipkit_vector_data_source` table with the original Post ID, ensuring that the new plugin knows about the data you have already indexed. This preserves the link between your local content and the vectors in your database.