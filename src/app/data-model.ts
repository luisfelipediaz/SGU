export class Task {
    id: string = null;
    name: string = null;
    description: string = null;
    priority: string = "M";
    delivery: number = (new Date()).getTime();
    optimistic: number = 0;
    probable: number = 0;
    pessimistic: number = 0;
}

export class Availability {
    id: string = null;
    date: string;
    time: string;
    recurrent: boolean;
}