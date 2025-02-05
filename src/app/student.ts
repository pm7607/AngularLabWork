export class Student {
    name: string ;
    age?: number ;
    email: string ;
    phone?: number ;
    address: string ;
    constructor(name: string, age: number, email: string, phone: number, address: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}
