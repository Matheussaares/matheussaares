import { Profile } from "@/Components/Profile";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ whiteSpace: "nowrap" }}>
          Site criado para a disciplina Programação Front-End
        </h1>
      </header>

      <Profile />
    </main>
  );
}
