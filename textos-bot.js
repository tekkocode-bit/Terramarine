function normalizeSimpleText(t) {
  return String(t || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function quickHelpText() {
  return (
    `¡Hola! 😊\n` +
    `Puedo ayudarte con *Actividades y parques temáticos*, *Boletos aéreos*, *Hoteles nacionales e internacionales*, *Cruceros*, *Ferries del Caribe*, *Seguros de viaje*, *Traslados* y *Paquetes internacionales y promociones*.\n\n` +
    `También puedes escribirme *"Actividades y parques temáticos"* o *"Paquetes internacionales y promociones"* y te muestro las opciones disponibles.`
  );
}

export function categoriesEmojiText() {
  return (
    `🎢 *Actividades y parques temáticos*\n\n` +
    `Aquí tienes el listado completo de actividades disponibles.\n` +
    `Selecciona la opción que deseas ver y te mostraré su información antes de tomar tus datos.`
  );
}

export function mainMenuText({ businessName, serviceLines }) {
  const visibleLines = serviceLines.filter((s) => s.key !== "ubicacion_contacto");
  const listText = visibleLines.map((s) => `• ${s.title}`).join("\n");
  return (
    `👋 ¡Bienvenido a *${businessName}*! Soy tu asistente virtual de viajes.\n\n` +
    `Estoy aquí para ayudarte a cotizar, comparar opciones y dejar tu solicitud casi lista para reserva y pago.\n\n` +
    `Puedo ayudarte con:\n` +
    listText
  );
}

export const REAL_TOUR_GROUP_INTROS = {
  tours_colombia: "Estas son las actividades y parques disponibles con Terramarine.",
};
