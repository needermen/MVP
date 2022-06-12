export interface Project {
  projectId: string,
  userIds: string[],
  name: string
  gatewayIds: string[],
  rule?: string,
  structure?: string,
  industry?: string,
  website?: string,
  description?: string,
  image?: string,
}
