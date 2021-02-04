---
title: "How to Build a Node.Js Api for Ethereum Blockchain"
categories: ["API", "Node.js", "Javascript"]
authors: ["Avinash Murmu"]
description: "In this article, John Agbanusi explains how you can build a Node.js API from scratch by building and deploying an Ethereum Blockchain for decentralization. He also shows you a step-by-step process of integrating both the API and blockchain into a single API called a decentralized application API."
date: 2021-01-25T11:40:07+05:30
draft: false
---


**Blockchain technology has been on the rise in the past ten years**, and has brought a good number of products and platforms to life such as [Chainalysis](https://www.chainalysis.com/) (finance tech), [Burstiq](https://www.burstiq.com/technology/) (health-tech), [Filament](http://www.iotevolutionworld.com/iot/articles/441809-filament-launches-new-blockcha-development-kit-iot-developers.htm) (IoT), [Opus](https://opus.audio/) (music streaming) and [Ocular](https://ocular.biz/cybersecurity/) (cybersecurity).

From these examples, we can see that blockchain cuts across many products and use cases — making it very essential and useful. In fintech (finance tech), it’s used as decentralized ledgers for security and transparency in places like Chain, Chainalysis, and is also useful in health tech for the security of sensitive health data in Burstiq and Robomed — not to forget media tech such as Opus and Audius that also use blockchain for royalties transparency and thus get full royalties.

Ocular uses security that comes with blockchain for identity management for biometric systems, while Filament uses blockchain ledgers for real-time encrypted communication. This goes to show how essential blockchain has become to us by making our lives better. But what exactly is a blockchain?

A blockchain is a **database** that is shared across a network of computers. Once a record has been added to the chain, it is quite difficult to change. To ensure that all the copies of the database are the same, the network makes constant checks.

So why do we need blockchain? Blockchain is a **safe way to record activities** and keep data fresh while maintaining a record of its history compared to the traditional records or databases where hacks, errors, and downtimes are very possible. The data can’t be corrupted by anyone or accidentally deleted, and you benefit from both a historical trail of data and an instantly up-to-date record that can’t be erased or become inaccessible due to downtime of a server.

Because the whole blockchain is duplicated across many computers, any user can view the entire blockchain. Transactions or records are processed not by one central administrator, but by a network of users who work to verify the data and achieve a consensus.

Applications that use blockchain are called **dApps** (Decentralised Applications). Looking around today, we’ll mostly find decentralized apps in fintech, but blockchain goes beyond decentralized finance. We have health platforms, music streaming/sharing platforms, e-commerce platforms, cybersecurity platforms, and IOTs moving towards decentralized applications (dApps) as cited above.

So, when would it make sense to consider using blockchain for our applications, rather than a standard database or record?

  

### Common Applications Of Blockchain

* * *

*   Managing And Securing Digital Relationships
    
    Anytime you want to keep a long-term, transparent record of assets (for example, to record property or apartment rights), blockchain could be the ideal solution. Ethereum ‘Smart contracts’, in particular, are great for facilitating digital relationships. With a smart contract, automated payments can be released when parties in a transaction agree that their conditions have been met.
    
*   Eliminating Middlemen/Gatekeepers
    
    For example, most providers currently have to interact with guests via a centralized aggregator platform, like Airbnb or Uber (that, in turn, takes a cut on each transaction). Blockchain could change all that.
    
    For example, TUI is so convinced of the power of blockchain that it is [pioneering ways to connect hoteliers and customers directly](https://www.forbes.com/sites/bernardmarr/2018/12/07/the-amazing-ways-tui-uses-blockchain-to-revolutionize-the-travel-industry/). That way, they can transact via blockchain in an easy, safe and consistent way, rather than via a central booking platform.
    
*   Record Secure Transactions Between Partners To Ensure Trust
    
    A traditional database may be good for recording simple transactions between two parties, but when things get more complicated, blockchain can help reduce bottlenecks and simplify relationships. What’s more, the added security of a decentralized system makes blockchain ideal for transactions in general.
    
    An example is the University Of Melbourne that [started storing its records in blockchain](https://about.unimelb.edu.au/newsroom/news/2017/october/university-of-melbourne-to-issue-recipient-owned-blockchain-records). The most promising use case for blockchain in higher education is to transform the “record-keeping” of degrees, certificates, and diplomas. This saves a lot of cost from dedicated servers for storage or records.
    
*   Keeping Records Of Past Actions For Applications Where Data Is In Constant Flux
    
    Blockchain is a better, safer way to record the activity and keep data fresh while maintaining a record of its history. The data can’t be corrupted by anyone or accidentally deleted, and you benefit from both a historical trail of data, plus an instantly up-to-date record. An example of a good use case is blockchain in e-commerce, both blockchain and e-commerce involve transactions.
    
    Blockchain makes these transactions safer and faster while e-commerce activities rely on them. Blockchain technology enables users to share and [securely store digital assets](https://cointelegraph.com/news/bringing-blockchain-technology-to-e-commerce-current-trends) both automatically and manually. This technology has the capacity to handle user activities such as payment processing, product searches, product purchases, and customer care. It also reduces the expenses spent on inventory management and payment processing.
    
*   Decentralisation Makes It Possible To Be Used Anywhere
    
    Unlike before where we have to restrict ourselves to a particular region due to various reasons like currency exchange policies, limitations of payment gateways makes access to financial resources of many countries not in your region or continent hard. With the rise and power of blockchain’s decentralization or peer-to-peer system, this becomes easier to work with other countries. For example, an e-commerce store in Europe can have consumers in Africa and not require a middleman to process their payment requests. Furthermore, these technologies are opening doors for online retailers to make use of the consumer markets in faraway countries with bitcoin, i.e. a cryptocurrency.
    
*   Blockhain Is Technology-Neutral
    
    Blockchain works with all and any technology stack being used by a developer. You don’t have to learn Node as a Python dev to use blockchain or learn Golang. This makes blockchain very easy to use. We can actually use it directly with our front-end apps in Vue/React with the blockchain acting as our sole database for simple uncomplicated tasks and use cases like uploading data or getting hashes for displaying records for our users, or building frontend games like casino games and betting games (in which a high amount of trust is needed). Also, with the power of web3, we can store data in the chain directly.
    

Now, we have seen quite a number of the advantages of using blockchain, but when should we not bother using a blockchain at all?