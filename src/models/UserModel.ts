import { observable } from "mobx";

interface Props {
    email: string;
}

class UserModel {
    public readonly email: string;

    constructor({ email }: Props) {
        this.email = email;
    }
}