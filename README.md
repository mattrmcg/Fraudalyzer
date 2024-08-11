## Fraudalyzer
[Live API Demo](https://fraudalyzer-frontend.vercel.app/) <br> <br>
Fraudalyzer is a backend API that can identify fraudulent bank account applications. The Federal Trade Commision estimates that bank account and credit line fraud can end up costing companies billions in monetary losses every year. Fraudalyzer could be the first step in identifying and mitigating these losses.

It was developed in a team of five as part of LPL's 2024 Hackerama. It's meant to highlight the potential use cases of artificial intelligence and machine learning in finance. 

There's an included link to a live demo above. You can use the live demo to test out different bank account application json requests, as well as prepopulate the json fields with pre-determined fraudulent and non-fraudulent data.

## Model
Our model was a Random Forest Classifier, trained and deployed on AWS SageMaker using a publicly available [dataset](https://www.kaggle.com/datasets/sgpjesus/bank-account-fraud-dataset-neurips-2022). When tested against sample data, our model produced a prediction accuracy of 98%.

## Description
The application consists of a web server built using Express.js coupled with the aforementioned predictive model. The web server has an endpoint titled `/get-data/`. When `/get-data/` is called, the web server relays the sample data provided in the route's request body to the SageMaker model, and returns the model's inference. 

In the context of banking and finance, we envisioned this as a backend tool or middleware which would accept a request of bank account application data upon each attempted online application submission. An attempted submission would trigger an inference to be made on the data. This would provide banking companies with an entirely automated layer of fraud prediction to integrate with their existing security infrastructure.

The web server was hosted on an AWS EC2 instance running Ubuntu Server. Our training dataset was stored and retrieved from an S3 bucket, and our model was deployed on SageMaker. Both the S3 bucket and the SageMaker endpoint were closed off to the public in a private vpc network, while our EC2 instance provided the sole point of public access for making inferences.


**NOTE**: Please allow for any unique "design decisions" you may encounter in the source code :wink:. Training the model took about 4 hours, and the latter half of this project was built at 4am on minimal sleep. For example, you may notice the use of terminal commands to retrieve our prediction data. We encountered a number 
of problems attempting to get the SageMaker API to function properly, however we were able to get the AWS CLI to work. Since we didn't have much time left at this point, we decided to use node.js's `stdout` stream in conjunction with the AWS CLI to retrieve our data. 

Thank you to everyone who contributed:\
[mattrmcg](https://github.com/mattrmcg)\
[chocobbx](https://github.com/chocobbx)\
[nilbuz](https://github.com/nilbuz)\
[thefinalcoder](https://github.com/thefinalcoder)





