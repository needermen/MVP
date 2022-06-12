import {Gateway, Payment, Project} from "../../../domain";

export const mockNewestPaymentDate = '2021-09-20';
export const baseMockGatewayId = 'i6ssp'
export const baseMockProjectId = 'bgYhx'

export const baseMockProjects: Project[] = [
  {
    projectId: baseMockProjectId,
    userIds: [
      "rahej"
    ],
    gatewayIds: [
      "gDJ2s"
    ],
    name: "Project 1"
  },
  {
    projectId: "ERdPQ",
    userIds: [
      "rahej"
    ],
    gatewayIds: [
      "WU50G"
    ],
    name: "Project 2"
  }
]

export const baseMockGateways: Gateway[] = [
  {
    gatewayId: baseMockGatewayId,
    userIds: [
      "rahej"
    ],
    name: "Gateway 1",
  },
  {
    gatewayId: "GzFF8",
    userIds: [
      "rahej"
    ],
    name: "Gateway 2",
  }
]

export const baseMockPayments: Payment[] = [
  {
    paymentId: "6149cf56b561e56a5358f033",
    amount: 388.02,
    projectId: baseMockProjectId,
    gatewayId: baseMockGatewayId,
    userIds: [
      "rahej"
    ],
    created: "2021-09-10"
  },
  {
    paymentId: "6149cf56b33efe4c5a481c51",
    amount: 3320.85,
    projectId: "ERdPQ",
    gatewayId: "i6ssp",
    userIds: [
      "rahej"
    ],
    created: "2021-09-18"
  },
  {
    paymentId: "6149cf564334774f024da96e",
    amount: 304.3,
    projectId: "bgYhx",
    gatewayId: "i6ssp",
    userIds: [
      "rahej"
    ],
    created: "2021-09-16"
  },
  {
    paymentId: "6149cf56d7ba96e40620e0cd",
    amount: 3347.65,
    projectId: "bgYhx",
    gatewayId: "GzFF8",
    userIds: [
      "rahej"
    ],
    created: "2021-09-12"
  },
  {
    paymentId: "6149cf567362fec31c1df651",
    amount: 212.06,
    projectId: "bgYhx",
    gatewayId: "i6ssp",
    userIds: [
      "rahej"
    ],
    created: "2021-09-09"
  },
  {
    paymentId: "6149cf56adf722884f0d339f",
    amount: 1990.45,
    projectId: "bgYhx",
    gatewayId: "i6ssp",
    userIds: [
      "rahej"
    ],
    created: "2021-09-20"
  },
  {
    paymentId: "6149cf561a05b601a6643502",
    amount: 746.33,
    projectId: "ERdPQ",
    gatewayId: "i6ssp",
    userIds: [
      "rahej"
    ],
    created: "2021-09-11"
  },
  {
    paymentId: "6149cf5670670ed1a606acaf",
    amount: 3184.76,
    projectId: "bgYhx",
    gatewayId: "i6ssp",
    userIds: [
      "rahej"
    ],
    created: "2021-09-03"
  },
  {
    paymentId: "6149cf56a1f7ed7bd7b23c95",
    amount: 234.62,
    projectId: "ERdPQ",
    gatewayId: "GzFF8",
    userIds: [
      "rahej"
    ],
    created: "2021-09-03"
  },
  {
    paymentId: "6149cf56e62b97e8fe193b01",
    amount: 2359.06,
    projectId: "ERdPQ",
    gatewayId: "i6ssp",
    userIds: [
      "rahej"
    ],
    created: "2021-09-09"
  }
]

export const mockProjectPaymentTotal = baseMockPayments.filter(p => p.projectId === baseMockProjectId)
  .reduce((partialSum, p) => partialSum + p.amount, 0);

export const mockGatewayPaymentTotal = baseMockPayments.filter(p => p.projectId === baseMockGatewayId)
  .reduce((partialSum, p) => partialSum + p.amount, 0);
