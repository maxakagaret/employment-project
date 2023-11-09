class Person {
    id: number;
    name: string;
    surname: string;
    age: number;
    experience: number;
    address: string;
    constructor(id:number=0, name:string='', surame:string='', age:number=0, experience:number=0, address:string='') {
        this.id = id;
        this.name = name;
        this.surname = surame;
        this.age = age;
        this.experience = experience;
        this.address = address;
    }
}
export default Person;