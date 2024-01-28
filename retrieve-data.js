import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime";
const { SageMakerRuntimeClient } = require("@aws-sdk/client-sagemaker-runtime");
const { InvokeEndpointCommand } = require("@aws-sdk/client-sagemaker-runtime");

const client = new SageMakerRuntimeClient(config);
const input = {
    EndpointName: "canvas-deployment-2",
    Body: "0,0.9,0.990414754481376,11,4,40,0.0146395901020007,-0.8977175449795732,AC,1853,6711.523026681492,4868.779488007386,4988.827960782141,0,19,CA,113,1,BC,0,1,-1,0,200.0,0,INTERNET,6.150317050830092,windows,0,1,0,0",
    ContentType: "test/csv",
    Accept: "",
    CustomeAttributes: "",
    TargetModel: "",
    TargetVarient: "",
    TargetContainerHostname: "",
    InferenceId: "",
    EnableExplanations: "",
    InferenceComponentName: "",

};