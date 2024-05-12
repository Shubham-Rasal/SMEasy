<div align="center">

  <p align="center">
    Shaping the world lending with SMEasy
  </p>
</div>

---

<br/>

![image](https://github.com/Shubham-Rasal/SMEasy/assets/95695273/90d6fd28-5d8c-4c50-a39b-1d404008a579)

![image](https://github.com/Shubham-Rasal/SMEasy/assets/95695273/bc19b7a8-d8ba-4e18-9913-ce3eff11bac0)

![image](https://github.com/Shubham-Rasal/SMEasy/assets/95695273/b023c313-c839-4215-b65b-d4b8b763905d)

![image](https://github.com/Shubham-Rasal/SMEasy/assets/95695273/6af229da-c8ad-42f0-9571-a8b1ecc7626e)

![image](https://github.com/Shubham-Rasal/SMEasy/assets/95695273/208f190d-27a7-4dc5-9eb6-9b6e98692847)

![image](https://github.com/Shubham-Rasal/SMEasy/assets/95695273/fef6a7e9-6a86-4a59-8497-2037c9f2c13b)

<br/>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Project Idea](#project-idea)
- [Our Approach](#our-approach)
  - [Actors](#actors)
  - [How System Works](#how-system-works)
    - [1. Finding Useful Govenment Schemes](#1-finding-useful-govenment-schemes)
  - [2. Analysis and Detailed View to the Bank Manager](#2-analysis-and-detailed-view-to-the-bank-manager)
- [Challenges I Faced](#challenges-i-faced)
- [Technologies We Used](#technologies-we-used)
  - [HuggingFace](#huggingface)
  - [Kaggle](#kaggle)
- [Installation and Setup Guide](#installation-and-setup-guide)
  - [Install the Next.js Frontend](#install-the-nextjs-frontend)
- [Team Members](#team-members)

<br/>

## Project Idea

- Loan eligibility is largely determined by credit scores.

This means that you need to be part of the financial system to avail such benefits.

There's a need to develop a new type of score that universally profiles the majority of the population.

The parameters can include - regular rent payments, utility payments, daily collection for a shop, assets, business type, customer types served by the user, etc.

Small businesses can get loan offers based on their transaction history. Considering all these factors we develop a comprehensive profile and decide the amount of loan.

<br/>

## Our Approach

### Actors

- **Applicants** - SME owners who apply for small loans.
- **Bank Manager** - Approver of the loans


### How System Works

The system works as follows:

- The applicant fills in a detailed application form that has fields on which our ml models are trained.
- This application and profile of the applicant is used in two ways - 

#### 1. Finding Useful Govenment Schemes

Each applicant is semantically checked with the existing database of schemes that is found from public sources. These are then shown to the applicants.


### 2. Analysis and Detailed View to the Bank Manager

  - All the details given by the applicant are analysis beforehand automatically by our AI.
  - This ensure the manager spends less time doing the tedius work.
  - The application is annotated by the AI to give it's insights to help the manager decide whether to approve the project or not.
  - Long text documents like financial statements, bank statemnets, request letters are summarised by the AI and insights are given to the approver.
  - Final Approval is done by the manager.

  <br/>

## Challenges I Faced

- Hacking Solo was a challenge with so little time available
- UI took up most of my time.


<br/>

## Technologies We Used

![Nextjs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### HuggingFace

- Used it for the ML model inference

### Kaggle

- Used for dataset, and preliminary exploration

<br/>

<br/>

## Installation and Setup Guide

To get started with Deano, follow these steps:

1. Clone the repo: `git clone <this repo>`
2. `cd SMEasy`

### Install the Next.js Frontend

1. Change directory to client by `cd client`
2. Install npm packages by running `npm i`
3. Start the dev server by running `npm run dev`

<br/>

## Team Members

[Shubham Rasaal](https://devfolio.co/@bluequbits)
