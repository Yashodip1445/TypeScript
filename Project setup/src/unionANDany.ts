let id: number | string;

id = 101;       
id = "EMP101";   

type Status = "idle" | "loading" | "success" | "error";

let currentStatus: Status = "loading";

type User = {
  name: string;
};

type Admin = {
  name: string;
  permissions: string[];
};

let person: User | Admin;