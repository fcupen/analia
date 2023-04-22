export interface HobbiesInterface {
  name: string;
  type: string;
}
export interface SportsInterface {
  name: string;
  type: string;
}
export interface UsuarioInterface<T, U> {
  name: string;
  age?: number;
  hobbies: Array<T | unknown>; // HobbiesInterface[]
}

export class PersonaClass<T, U> {
  name!: string;
  age?: number;
  hobbies!: Array<T>;
  numberOfDays(): number {
    return (this.age as number) * 365;
  }
}
