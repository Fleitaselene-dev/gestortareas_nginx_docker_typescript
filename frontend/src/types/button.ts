
export type ButtonProps = {
  label: string;                 // Texto del botón
  onClick?: () => void;          // Función al hacer clic
  color?: string;                // Color de fondo (opcional)
  type?: "button" | "submit" | "reset"; // Tipo del botón (por defecto: "button")
};