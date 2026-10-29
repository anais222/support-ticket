import express from "express";

const app = express();
app.use(express.json());

type Status = "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";

type Ticket = {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: Date;
};

const tickets: Ticket[] = [];
let nextId = 1;

const statutsValides: Status[] = ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"];

// 1. Créer un ticket
app.post("/tickets", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "title et description obligatoires" });
  }
  const ticket: Ticket = {
    id: nextId++,
    title,
    description,
    status: "OPEN",
    createdAt: new Date(),
  };
  tickets.push(ticket);
  res.status(201).json(ticket);
});

// 2. Lister les tickets
app.get("/tickets", (req, res) => {
  res.json(tickets);
});

// 3. Récupérer un ticket par id
app.get("/tickets/:id", (req, res) => {
  const id = Number(req.params.id);
  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) return res.status(404).json({ error: "Ticket introuvable" });
  res.json(ticket);
});

// 4. Modifier le statut
app.patch("/tickets/:id/status", (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;
  if (!statutsValides.includes(status)) {
    return res.status(400).json({ error: "statut invalide" });
  }
  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) return res.status(404).json({ error: "Ticket introuvable" });
  ticket.status = status;
  res.json(ticket);
});

app.listen(3000, () => console.log("API sur http://localhost:3000"));