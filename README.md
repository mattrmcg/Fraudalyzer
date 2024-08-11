## Fraudalyzer
[Live API Demo](https://fraudalyzer-frontend.vercel.app/)
Fraudalyzer is a bank account fraud prediction application that was developed in a team of five as part of LPL's 2024 Hackerama. It's meant to highlight the potential use cases of artificial intelligence and machine learning in finance.

## Model
Our model was trained and deployed on AWS SageMaker, using a publicly available [dataset](https://www.kaggle.com/datasets/sgpjesus/bank-account-fraud-dataset-neurips-2022). When tested against sample data, our model produced a prediction accuracy of 98%.

## Description
The application consists of a web server built using Express.js, coupled with the aforementioned predictive model. The web server has an endpoint titled `/get-data/`, meant to send the sample data instance provided in the request body to the SageMaker model, and return the model's prediction. 

In the context of finance, we envisioned this as a backend tool or 
middleware which would accept a stream of bank account data to perform predictions on, adding a layer of automation to the process of fraud detection for large banks.

The web server was hosted on an AWS EC2 instance, and our training dataset was stored in an S3 bucket. 


**NOTE**: Please allow for any unique "design decisions" you may encounter in the source code :wink:. Training the model took about 4 hours, and the latter half of this project was built at 4am on minimal sleep. For example, you may notice the use of terminal commands to retrieve our prediction data. We encountered a number 
of problems attempting to get the SageMaker API to function properly, however we were able to get the AWS CLI to work. Since we didn't have much time left at this point, we decided to use node.js's `stdout` stream in conjunction with the AWS CLI to retrieve our data. 

Thank you to everyone who contributed:\
[mattrmcg](https://github.com/mattrmcg)\
[chocobbx](https://github.com/chocobbx)\
[nilbuz](https://github.com/nilbuz)\
[thefinalcoder](https://github.com/thefinalcoder)





