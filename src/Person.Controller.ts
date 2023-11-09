import { reactive } from "vue"
import Person from "./Person.Model"
import { PERSONS } from "./mock-persons";

let PersonsMock = PERSONS;
export const persons = reactive({
    items: PERSONS,
    findId(id: number): boolean {
        return this.items.filter((obj) => {
            return obj.id === id;
        }).length > 0;
    },
    getNewId(personsArray: Person[]): number {
        let maxId = 0;
        personsArray.forEach(element => {
            if(element.id > maxId) {
                maxId = element.id
            }
        });
        return maxId+1;
    },
    getEmptyPerson(): Person {
        return new Person();
    },
    getPersonById(id: number): Person {
        return this.items.filter((obj) => {
            return obj.id === id;
        })[0];
    },
    addPerson(name: string, surname: string, age: number, experience: number, address: string): number {
        let newId = this.getNewId(this.items);
        this.items.push(new Person(
            newId, 
            name, 
            surname,
            age,
            experience,
            address
        ));
        return newId;
    },
    deletePerson(id: number) {
        this.items = this.items.filter((obj) => {
            return obj.id !== id;
        });
    },
    editPerson(id:number, name: string, surname: string, age: number, experience: number, address: string) {
        this.items.forEach((element,index) => {
            if(element.id === id) {
                this.items[index] = new Person(id,name,surname,age,experience,address);
                // element = new Person(id,name,surname,age,experience,address);
            }
        });
        console.log(this.items);
    }
});