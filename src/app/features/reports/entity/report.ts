import {ReportItem} from "./report-item";

export interface Report {
  title: string;
  total: number;
  items: ReportItem[];
  showGatewayColumn: boolean;
  showHeadline?: boolean;
  showChart?: boolean;
  chartTitle?: string;
}

