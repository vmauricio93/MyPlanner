export interface Task {
    description: string;
    date?: Date;
    time?: Date;
    place?: string;
    tag?: string;
    done: boolean;    
}
