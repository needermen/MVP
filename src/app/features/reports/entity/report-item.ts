import {Payment} from "../../../domain";

export interface ReportItem {
  title: string;
  total: number;
  payments: Payment[];
}
