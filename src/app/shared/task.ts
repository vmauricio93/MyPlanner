export interface Task {
    id?: number;
    description: string;
    date?: Date;
    time?: Date;
    place?: string;
    tag?: string;
    done: boolean;    
}
