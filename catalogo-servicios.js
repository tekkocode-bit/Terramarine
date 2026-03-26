// =========================
// CATÁLOGO DE SERVICIOS Y MENÚS - TERRAMARINE
// =========================

export const SERVICE_LINES = [
  { key: "tours_colombia", id: "svc_actividades_parques", title: "🎢 Actividades y parques temáticos" },
  { key: "boletos_aereos", id: "svc_boletos_aereos", title: "✈️ Boletos aéreos" },
  { key: "solo_hoteles", id: "svc_hoteles", title: "🏨 Hoteles nacionales e internacionales" },
  { key: "cruceros", id: "svc_cruceros", title: "🛳️ Cruceros" },
  { key: "ferries_caribe", id: "svc_ferries_caribe", title: "⛴️ Ferries del Caribe" },
  { key: "seguros_viaje", id: "svc_seguros_viaje", title: "🛡️ Seguros de viaje" },
  { key: "traslados", id: "svc_traslados", title: "🚖 Traslados" },
  { key: "paquetes_vacacionales", id: "svc_paquetes_internacionales", title: "🌍 Paquetes internacionales y promociones" },
  { key: "hablar_asesor", id: "svc_hablar_asesor", title: "👤 Hablar con un asesor" },
  { key: "ubicacion_contacto", id: "svc_ubicacion_contacto", title: "Ubicación y contacto" },
];

export const SERVICE_LINE_ID_TO_KEY = Object.fromEntries(SERVICE_LINES.map((s) => [s.id, s.key]));

export const TOUR_ORIGINS = [
  { key: "santo_domingo", id: "org_santo_domingo", title: "Santo Domingo" },
  { key: "santiago", id: "org_santiago", title: "Santiago" },
  { key: "punta_cana", id: "org_punta_cana", title: "Punta Cana" },
  { key: "otra_ciudad", id: "org_otra_ciudad", title: "Otra ciudad" },
];

export const TOUR_ORIGIN_ID_TO_KEY = Object.fromEntries(TOUR_ORIGINS.map((o) => [o.id, o.key]));

export const PACKAGE_DESTINATIONS = [
  {
    key: "destinos_sin_visa",
    id: "pkg_destinos_sin_visa",
    title: "Destinos sin visa",
    imageUrl: "",
    priceText: "Tarifa según destino, fecha y cantidad de pasajeros.",
    dateText: "Disponible todo el año según promoción y cupo.",
    includesText: "Cotización personalizada de paquetes internacionales para destinos que no requieren visa, con apoyo de Terramarine para validar hotel, vuelos, traslados y seguro.",
    noteText: "Indícanos el destino, la fecha y cuántas personas viajan para prepararte la mejor opción.",
  },
  {
    key: "destinos_con_visa",
    id: "pkg_destinos_con_visa",
    title: "Destinos con visa",
    imageUrl: "",
    priceText: "Tarifa según destino, fecha, documentación y disponibilidad.",
    dateText: "Disponible todo el año según promoción y cupo.",
    includesText: "Cotización personalizada de paquetes internacionales a destinos que requieren visa, ajustando vuelos, hotel y servicios complementarios según tu caso.",
    noteText: "La documentación y requisitos migratorios se validan al momento de la solicitud.",
  },
  {
    key: "hard_rock_punta_cana_mayo_2026",
    id: "pkg_hard_rock_punta_cana_mayo_2026",
    title: "Hard Rock Punta Cana | 1 al 3 de mayo 2026",
    imageUrl: "",
    priceText: "Desde RD$68,640 doble. Niños 2 a 12 años gratis según bloqueo indicado.",
    durationText: "Plan de 3 días / 2 noches.",
    dateText: "Check-in 1 de mayo de 2026 · Check-out 3 de mayo de 2026.",
    includesText: "Bloqueo hotelero en Bávaro - Punta Cana para escapada 2026. Tarifa sujeta a disponibilidad y cambio sin previo aviso.",
    noteText: "Fuente interna Terramarine 2026. Confirmación final con el equipo antes del pago.",
  },
  {
    key: "lopesan_costa_bavaro_abril_2026",
    id: "pkg_lopesan_costa_bavaro_abril_2026",
    title: "Lopesan Costa Bávaro | 24 al 26 de abril 2026",
    imageUrl: "",
    priceText: "Desde RD$46,020 doble.",
    durationText: "Plan de fin de semana.",
    dateText: "Check-in 24 de abril de 2026 · Check-out 26 de abril de 2026.",
    includesText: "Bloqueo hotelero en Bávaro - Punta Cana. Tarifas sujetas a disponibilidad y cambio sin previo aviso.",
    noteText: "Ideal para escapada corta. Validar habitaciones disponibles al momento de reservar.",
  },
  {
    key: "sunscape_dominicus_abril_2026",
    id: "pkg_sunscape_dominicus_abril_2026",
    title: "Sunscape Dominicus | 24 al 26 de abril 2026",
    imageUrl: "",
    priceText: "Desde RD$37,700 doble. Un niño 2 a 12 años gratis y segundo niño desde RD$9,425 según bloqueo.",
    durationText: "Plan de fin de semana.",
    dateText: "Check-in 24 de abril de 2026 · Check-out 26 de abril de 2026.",
    includesText: "Oferta para La Romana / Dominicus con cupo limitado.",
    noteText: "Tarifa interna de bloqueo 2026, sujeta a disponibilidad y reconfirmación.",
  },
  {
    key: "cofresi_palm_beach_abril_2026",
    id: "pkg_cofresi_palm_beach_abril_2026",
    title: "Cofresí Palm Beach | 10 al 12 de abril 2026",
    imageUrl: "",
    priceText: "Desde RD$34,320 doble. Niños desde RD$8,580.",
    durationText: "Plan de 4 días / 3 noches en algunos bloqueos especiales.",
    dateText: "Salida base publicada del 10 al 12 de abril de 2026.",
    includesText: "Opción en Puerto Plata con disponibilidad por bloqueo y condiciones especiales según fecha.",
    noteText: "También puede aparecer en otras fechas dentro del calendario interno 2026.",
  },
  {
    key: "lifestyle_tropical_abril_2026",
    id: "pkg_lifestyle_tropical_abril_2026",
    title: "Lifestyle Tropical | 10 al 12 de abril 2026",
    imageUrl: "",
    priceText: "Desde RD$34,320 doble. Niños desde RD$8,580.",
    durationText: "Plan de fin de semana.",
    dateText: "Check-in 10 de abril de 2026 · Check-out 12 de abril de 2026.",
    includesText: "Bloqueo hotelero en Puerto Plata.",
    noteText: "Según la hoja interna, es una opción solo para adultos en una de las salidas listadas.",
  },
  {
    key: "otro_destino",
    id: "pkg_otro_destino",
    title: "Otro destino / cotización personalizada",
    imageUrl: "",
    priceText: "Cotización según destino, fecha y cantidad de pasajeros.",
    dateText: "Disponible bajo solicitud.",
    includesText: "Terramarine puede preparar una propuesta personalizada para el destino que tengas en mente.",
    noteText: "Escríbenos el destino de interés y seguimos con la solicitud.",
  },
];

export const PACKAGE_DESTINATION_ID_TO_KEY = Object.fromEntries(PACKAGE_DESTINATIONS.map((p) => [p.id, p.key]));
