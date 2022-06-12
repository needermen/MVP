export interface Payment {
  paymentId: string,
  amount: number,
  projectId: string,
  project?: string,
  gatewayId: string,
  gateway?: string,
  userIds: string[],
  created: string
}
