// =========================
// CATÁLOGO LEGACY DE EXPERIENCIAS - TERRAMARINE
// =========================

export const TOUR_CATEGORIES = [
  { key: "actividades_daypass", id: "cat_actividades_daypass", title: "Actividades y daypass" },
  { key: "escapadas_bloqueos", id: "cat_escapadas_bloqueos", title: "Escapadas y bloqueos" },
  { key: "experiencias_especiales", id: "cat_experiencias_especiales", title: "Experiencias especiales" },
];

export const CATEGORY_ID_TO_KEY = Object.fromEntries(TOUR_CATEGORIES.map((c) => [c.id, c.key]));

export function defaultTourCatalog() {
  return [
    {
      key: "scape_park_legacy",
      id: "tour_scape_park_legacy",
      title: "Scape Park",
      category: "actividades_daypass",
      origins: ["punta_cana"],
      description: "Experiencia recreativa y parque temático en Punta Cana, sujeta a disponibilidad y validación final.",
      durationMin: 480,
      durationLabel: "Media jornada o día completo",
      basePriceAdult: 0,
      basePriceChild: 0,
      capacity: 40,
      meetingPoint: "A coordinar según reserva",
      pickupOptions: "Hotel / punto de recogida sujeto al operador",
      paymentMethods: "Transferencia, efectivo o tarjeta",
      reservationPolicy: "Reserva sujeta a cupo y confirmación final.",
      paymentPolicy: "Puede requerir pago al 100% al reservar.",
      includes: ["Entrada según modalidad", "Asistencia de la agencia"],
      schedule: { mon: ["09:00"], tue: ["09:00"], wed: ["09:00"], thu: ["09:00"], fri: ["09:00"], sat: ["09:00"], sun: ["09:00"] },
    },
    {
      key: "hard_rock_punta_cana_legacy",
      id: "tour_hard_rock_punta_cana_legacy",
      title: "Hard Rock Punta Cana",
      category: "escapadas_bloqueos",
      origins: ["santo_domingo", "santiago", "punta_cana"],
      description: "Escapada hotelera / bloqueo promocional sujeto a fechas vigentes y disponibilidad.",
      durationMin: 2880,
      durationLabel: "2 noches",
      basePriceAdult: 68640,
      basePriceChild: 0,
      capacity: 40,
      meetingPoint: "A coordinar según reserva",
      pickupOptions: "No aplica / llegada por cuenta propia o con traslado cotizado",
      paymentMethods: "Transferencia, efectivo o tarjeta",
      reservationPolicy: "Sujeto a fecha, cupo y validación final.",
      paymentPolicy: "Puede requerir pago total al confirmar.",
      includes: ["Bloqueo hotelero", "Gestión y seguimiento de Terramarine"],
      schedule: { fri: ["09:00"], sat: ["09:00"] },
    },
  ];
}

const TOURS = defaultTourCatalog();
const TOUR_ID_TO_KEY = Object.fromEntries(TOURS.map((t) => [t.id, t.key]));
