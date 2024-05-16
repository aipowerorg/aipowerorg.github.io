---
slug: safety-settings-scheduler
title: Safety Settings and Simplified Scheduling
authors: [sensahin]
tags: [autogpt, google, safety]
---

import safety from '/img/blog/1862/safety.png';
import scheduler from '/img/blog/1862/scheduler.png';

# Introducing Enhanced Safety, Simplified Scheduling, and Standardized Pricing in AI Power Plugin

I am excited to announce new features and improvements in the AI Power Plugin. These updates bring more control, flexibility, and ease of use to our users.

## AutoGPT and Embeddings Scheduler

No need to set up server-side cron jobs. Use WordPress standard cron jobs to trigger tasks.

- Go to `AutoGPT` > `Queue` tab or `AI Training` > `AutoScan` tab.
- Select a schedule from the dropdown, ranging from 5 minutes to 1 week.

<img src={scheduler}/>

- For tasks needing more frequent execution, users can set up server-side cron jobs.

## Added Safety Settings for Google Models

Users can now specify safety levels for Google models.

- Go to `Settings` > `AI Engine` tab and select Google from the provider list.
- Click on the "Safety settings" button to see four options: Harassment, Hate Speech, Sexually Explicit, and Dangerous Content.

<img src={safety}/>

- Default setting is "Block None". Users can choose to block content at different levels: Block None, Block Few, Block Some, or Block Most.
- If offensive language is used, the API response depends on the chosen safety level.

## Refactored and Standardized API Cost Pricing

Backend improvements for easier process management.

- Standardized API cost pricing and model retrieving.
- This change is mostly code cleanup and not visible to users.
