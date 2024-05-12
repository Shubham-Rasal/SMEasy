
<div align="center">

<img src="https://github.com/ayush4345/Deano/blob/content/client/public/assets/logo.jpeg" alt="deano_logo" border="1" width="100"/>


  <p align="center">
    Shaping the world with Decentralised Annotations!
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
  - [Workflow](#workflow)
  - [How Accuracy is maintained](#how-accuracy-is-maintained)
  - [How Annotators are rewarded](#how-annotators-are-rewarded)
  - [Summary](#summary)
- [Challenges We Faced](#challenges-we-faced)
- [Technologies We Used](#technologies-we-used)
 
- [Architecture](#architecture)
- [Installation and Setup Guide](#installation-and-setup-guide)
  - [Install the Next.js Frontend](#install-the-nextjs-frontend)
- [Team Members](#team-members)

<br/>


## Project Idea

* Loan eligibility is largely determined by credit scores.

This means that you need to be part of the financial system to avail such benefits.

There's a need to develop a new type of score that universally profiles the majority of the population. 

The parameters can include - regular rent payments, utility payments, daily collection for a shop, assets, business type, customer types served by the user, etc.

Small businesses can get loan offers based on their transaction history. Considering all these factors we develop a comprehensive profile and decide the amount of loan.

<br/>

## Our Approach



### Actors 

- **Vendors** - Vendors are the people who upload their data to the platform and request for annotations. 
- **Annotators** - Annotators are the people who annotate the data uploaded by the vendors.

### Workflow

- Vendors upload their data to the platform and request for annotations.
- Annotators verify the authenticity of the data and annotate the data.
- Annotators are rewarded for their contribution to the platform based on a reputation metric for each individual.

### How Accuracy is maintained

The accuracy of the annotations is maintained by a reputation aggregation system. Each annotator has a reputation score which is calculated based on the accuracy of the annotations done by the annotator.

Multiple annotators annotate the same data. These annotations are aggregated and checkout for majority vote. The annotators who have the same annotations as the majority are rewarded with a reputation score. The annotators who have different annotations are penalized with a negative reputation score.

By Game Theory, we can prove that we can go forward with this optimistic assumption that the majority of the annotators will be honest and will annotate the data correctly and there will be a few annotators who will try to cheat the system due to the design of the reputation system.

### How Annotators are rewarded

Each annotator will be rewarded based on the reputation score. The reputation score is calculated based on the accuracy of the annotations done by the annotator. The reputation score is calculated using the following formula.

```
Reputation Score = (Number of correct annotations - Number of incorrect annotations) / (Number of correct annotations + Number of incorrect annotations)
```

This score is continuously updated as the annotator annotates more data. The reputation score is used to calculate the payout for each annotator. The payout is calculated using the following formula.

```
Payout = Reputation Score * Base Payout
```

### Summary
* Vendors entrust their data to Deano for accurate annotations.
* Annotators, who play a critical role, meticulously label datasets within specific timeframes.
* 'DAN' tokens, Deano's proprietary cryptocurrency, are used by vendors to create job listings with enticing bounties.
* Annotators receive rewards in DAN tokens, redeemable through weekly payouts.
* The platform employs a sophisticated reputation system, overseen by Sismo, where the accuracy of annotations is paramount. Incorrect annotations may result in reputation deductions and potential reductions in payouts.
* To facilitate seamless communication, Deano offers a chat function powered by XMTP-JS, aiding discussions between annotators and vendors, especially concerning job-related inquiries.
* In future developments, Deano plans to integrate a feature for DAN token transfers through a bridge accessible within the chat interface.
* Data management is efficiently handled with the assistance of Tableland, serving as a central repository for vendor job listings. Secure dataset storage is ensured through the utilization of the IPFS service web3.storage, enhancing the overall robustness and security of the platform.
<br/>


## Challenges We Faced

* Implementing onchain testing for Sismo proved to be a challenging task, as tracking onchain changes was intricate.
* While working with XMTP Chat, we faced difficulties adapting to the latest features due to breaking changes in the latest versions. Fortunately, we received valuable support from the community in resolving these conflicts.
* Configuring and setting up the workflow for Tableland initially presented challenges. However, with substantial community assistance, we successfully addressed these issues, ensuring its smooth operation.

<br/>

## Technologies We Used

![Nextjs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### HuggingFace
* Used it for the ML model inference


### Kaggle
* Used for dataset, and preliminary exploration

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

