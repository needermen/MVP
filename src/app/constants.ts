import { Gateway, Project } from "./domain";
import { v4 as uuidv4 } from 'uuid';

export const users = [
  {
    userId: 'user_001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  }
];


export const projects: Project[] = [
  {
    projectId: "proj_002",
    userIds: ['user_001', '2'],
    name: 'Project Alpha',
    gatewayIds: ['gw_001', 'gw_002'],
    rule: 'Rule 1',
    structure: 'Structure 1',
    industry: 'Industry 1',
    website: 'https://project-alpha.example.com',
    description: 'Description for Project Alpha',
    image: 'https://example.com/images/project-alpha.png'
  },
  {
    projectId: "proj_003",
    userIds: ['user_001', '3'],
    name: 'Project Beta',
    gatewayIds: ['gw_003'],
    rule: 'Rule 2',
    structure: 'Structure 2',
    industry: 'Industry 2',
    website: 'https://project-beta.example.com',
    description: 'Description for Project Beta',
    image: 'https://example.com/images/project-beta.png'
  },
  {
    projectId: "proj_001",
    userIds: ['user_001', '3'],
    name: 'Project Gamma',
    gatewayIds: ['gw_001', 'gw_003'],
    rule: 'Rule 3',
    structure: 'Structure 3',
    industry: 'Industry 3',
    website: 'https://project-gamma.example.com',
    description: 'Description for Project Gamma',
    image: 'https://example.com/images/project-gamma.png'
  }
];

export const gateways: Gateway[] = [
  {
    gatewayId: "gw_001",
    userIds: ["user_001", "user_002"],
    name: "Stripe Payment Gateway",
    type: "payment",
    apiKey: "sk_live_123456789abcdef",
    secondaryApiKey: "sk_test_987654321fedcba",
    description: "Primary payment processing gateway for credit card transactions"
  },
  {
    gatewayId: "gw_002",
    userIds: ["user_001"],
    name: "Auth0 Authentication",
    type: "authentication",
    apiKey: "auth0_key_abcdef123456",
    description: "Main authentication service for user management"
  },
  {
    gatewayId: "gw_003",
    userIds: ["user_001", "user_004", "user_005"],
    name: "Twilio Messaging",
    type: "messaging",
    apiKey: "twilio_live_xyz789",
    secondaryApiKey: "twilio_test_789xyz",
    description: "SMS and voice communication gateway"
  },
  {
    gatewayId: "gw_004",
    userIds: ["user_001", "user_003"],
    name: "SendGrid Email",
    type: "messaging",
    apiKey: "sendgrid_key_456abc",
    description: "Email delivery and management service"
  },
  {
    gatewayId: "gw_005",
    userIds: ["user_001"],
    name: "PayPal Gateway",
    type: "payment",
    apiKey: "paypal_live_789xyz",
    secondaryApiKey: "paypal_test_xyz789",
    description: "Secondary payment gateway for PayPal transactions"
  }
];


interface Payment {
  paymentId: string;
  amount: number;
  projectId: string;
  project?: string;
  gatewayId: string;
  gateway?: string;
  userIds: string[];
  created: string;
}

export const payments: Payment[] = [
  {
    paymentId: "py_001",
    amount: 1250.00,
    projectId: "proj_001",
    project: "Website Redesign",
    gatewayId: "gw_001", // Stripe Payment Gateway
    gateway: "Stripe Payment Gateway",
    userIds: ["user_001"],
    created: "2024-02-15T08:30:00.000Z"
  },
  {
    paymentId: "py_002",
    amount: 3750.50,
    projectId: "proj_002",
    project: "Mobile App Development",
    gatewayId: "gw_005", // PayPal Gateway
    gateway: "PayPal Gateway",
    userIds: ["user_001"],
    created: "2024-02-16T10:15:00.000Z"
  },
  {
    paymentId: "py_003",
    amount: 950.75,
    projectId: "proj_001",
    project: "Website Redesign",
    gatewayId: "gw_001", // Stripe Payment Gateway
    gateway: "Stripe Payment Gateway",
    userIds: ["user_001"],
    created: "2024-02-17T14:20:00.000Z"
  },
  {
    paymentId: "py_004",
    amount: 2800.00,
    projectId: "proj_003",
    project: "SEO Optimization",
    gatewayId: "gw_005", // PayPal Gateway
    gateway: "PayPal Gateway",
    userIds: ["user_001"],
    created: "2024-02-18T09:45:00.000Z"
  },
  {
    paymentId: "py_005",
    amount: 1875.25,
    projectId: "proj_002",
    project: "Mobile App Development",
    gatewayId: "gw_001", // Stripe Payment Gateway
    gateway: "Stripe Payment Gateway",
    userIds: ["user_001"],
    created: "2024-02-19T11:30:00.000Z"
  },
  {
    paymentId: "py_006",
    amount: 4500.00,
    projectId: "proj_004",
    project: "Cloud Migration",
    gatewayId: "gw_001", // Stripe Payment Gateway
    gateway: "Stripe Payment Gateway",
    userIds: ["user_001"],
    created: "2024-02-20T16:10:00.000Z"
  },
  {
    paymentId: "py_007",
    amount: 3200.75,
    projectId: "proj_003",
    project: "SEO Optimization",
    gatewayId: "gw_005", // PayPal Gateway
    gateway: "PayPal Gateway",
    userIds: ["user_001"],
    created: "2024-02-21T13:25:00.000Z"
  },
  {
    paymentId: "py_008",
    amount: 1600.50,
    projectId: "proj_004",
    project: "Cloud Migration",
    gatewayId: "gw_001", // Stripe Payment Gateway
    gateway: "Stripe Payment Gateway",
    userIds: ["user_001"],
    created: "2024-02-22T15:40:00.000Z"
  }
];
