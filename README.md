## Fraudalyzer
[Live API Demo](https://fraudalyzer-frontend.vercel.app/) <br> <br>

![frd](https://github.com/user-attachments/assets/fd959267-a3b0-4d74-907c-e00d11c0b904)

Fraudalyzer is a backend API that can identify fraudulent bank account applications. The Federal Trade Commision estimates that bank account and credit line fraud can end up costing companies billions in monetary losses every year. Fraudalyzer could be the first step in identifying and mitigating these losses.

It was developed in a team of five as part of LPL's 2024 Hackerama. It's meant to highlight the potential use cases of artificial intelligence and machine learning in finance. 

There's an included link to a live demo above. You can use the live demo to test out different bank account application json requests, as well as prepopulate the json fields with pre-determined fraudulent and non-fraudulent data.

## Model
Our model was a Random Forest Classifier, trained and deployed on AWS SageMaker using a publicly available [dataset](https://www.kaggle.com/datasets/sgpjesus/bank-account-fraud-dataset-neurips-2022) of synthesized fraudulent and non-fraudulent bank-account application data. When tested against sample data, our model produced a prediction accuracy of 98%.

## Description
The application consists of a web server built using Express.js coupled with the aforementioned predictive model. The web server has an endpoint titled `/get-data/`. When `/get-data/` is called, the web server relays the sample data provided in the route's request body to the SageMaker model, and returns the model's inference. 

In the context of banking and finance, we envisioned this as a backend tool or middleware which would accept a request of bank account application data upon each attempted online application submission. An attempted submission would trigger an inference to be made on the data. This would provide banking companies with an entirely automated layer of fraud prediction to integrate with their existing security infrastructure.

The web server was hosted on an AWS EC2 instance running Ubuntu Server. Our training dataset was stored and retrieved from an S3 bucket, and our model was deployed on SageMaker. Both the S3 bucket and the SageMaker endpoint were closed off to the public in a private vpc network, while our EC2 instance provided the sole point of public access for making inferences.


**NOTE**: Many SageMaker models are proprietarily owned by Amazon and therefore cannot be saved anywhere outside of SageMaker or S3, including the model we used. When the hackathon ended, access to the hackathon-provided aws accounts was revoked. In an effort to produce a tangible application for any interested parties, we've retrained and redeployed the model at the live site mentioned at the top. The training code in python for the redeployed model can be found in the `training` folder of this repository. The redeployed model was once again a Random Forest Classifier, trained using python's SciKit-Learn library.

Thank you to everyone who contributed:\
[mattrmcg](https://github.com/mattrmcg)\
[chocobbx](https://github.com/chocobbx)\
[nilbuz](https://github.com/nilbuz)\
[thefinalcoder](https://github.com/thefinalcoder)





