import LoginForm from "@/components/auth/login/login-form";

export default function LoginPage() {
  // interface IAuth {
  //   authLogo: string;
  //   authName: string;
  // }
  // const authArrays: IAuth[] = [
  //   {
  //     authLogo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  //     authName: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  //   },
  // ];

  return (
    <section className="h-full w-full">
      <LoginForm />
    </section>
  );
}
