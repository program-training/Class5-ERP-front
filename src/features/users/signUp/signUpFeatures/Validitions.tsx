export const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
};
export interface SignUpInputs {
  firstName: string;
  lastName: string;
  Password: string;
  email: string;
  managerPassword: string;
}
