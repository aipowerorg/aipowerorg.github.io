---
id: semantic-search
slug: /semantic-search
title: Semantic Search
sidebar_position: 13
---

import semanticaddon from '/img/semantic-search/semantic-addon.png';
import semanticenable from '/img/semantic-search/semantic-enable.png';
import semanticshortcode from '/img/semantic-search/semantic-shortcode.png';
import semanticdemo from '/img/semantic-search/semantic-demo.png';

# Semantic Search

Semantic Search adds a search tool to your website's frontend. Unlike traditional keyword search, it understands the *meaning* and *context* of a user's query.

This feature connects directly to a knowledge base you've created in the **[Train](/docs/train.md)** module, allowing your visitors to find the most relevant content from your custom data.

## How to Enable

Semantic Search is a free add-on that you must activate first.

1.  Navigate to **AIP > Add-ons**.
2.  Find the **Semantic Search** add-on and click **Activate**.

<img src={semanticaddon} />

## Configuration

All settings for the search feature are managed globally.

1.  Go to **AIP > Dashboard** and open the **Integrations** tab.
2.  Find and expand the **Semantic Search** accordion.

<img src={semanticenable} />

3.  **Vector DB**: Choose which vector database provider your knowledge base uses. Options are `Pinecone` and `Qdrant`.
4.  **Index / Collection**: Select the specific knowledge base you want the shortcode to search. This dropdown is populated with the indexes/collections you've created in the **Train** module.
5.  **Embedding**: Select the embedding model that was used to create the data in your knowledge base. It is very important that this matches, otherwise the search will not work correctly.
6.  **Number of Results**: Set the maximum number of results to display for each search.
7.  **No Results Text**: Customize the message that appears when a user's search returns no matches.

## Using the Shortcode

To add the search form to your site, place the following shortcode on any page, post, or widget:

`[aipkit_semantic_search]`

<img src={semanticshortcode} />

This will render a simple search box on the frontend. When a user enters a query and clicks "Search," the results will appear below the form.

<img src={semanticdemo} />