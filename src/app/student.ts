export class Student {
    name: string | null;
    age?: number | null;
    email: string | null;
    phone?: number | null;
    address: string | null;
    constructor(name: string, age: number, email: string, phone: number, address: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}
