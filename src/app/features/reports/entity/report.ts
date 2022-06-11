export interface Report {
  paymentId: string,
  amount: number,
  projectId: string,
  gatewayId: string,
  userIds: string[],
  created: string
}
