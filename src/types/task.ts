export interface Task {
    id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    finished: boolean;
}
