export const gender  = {
    male: 'male',
    female: 'female',
    other: 'other'
}

export type Cat = {
    name: string;
    age: number;
    gender: male | female | other;
}

export type male = "male"
export type female = "female"
export type other = "other"