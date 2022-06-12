export interface Payment {
  paymentId: string,
  amount: number,
  projectId: string,
  project: string,
  gatewayId: string,
  gateway: string,
  userIds: string[],
  created: string
}

export interface ReportItem {
  title: string;
  total: number;
  payments: Payment[];
}

export interface Reports {
  title: string;
  total: number;
  reports: ReportItem[];
  showGatewayColumn: boolean;
  showChart?: boolean;
  chartTitle?: string;
}

