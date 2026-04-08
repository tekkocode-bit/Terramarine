// =========================
// CATÁLOGO REAL DE ACTIVIDADES - TERRAMARINE
// =========================

export const REAL_TOUR_GROUPS = [
  { key: "tours_colombia", id: "rtg_actividades_rd", title: "Actividades y parques temáticos", hidden: true },
  { key: "daypass_excursiones", id: "rtg_daypass_excursiones", title: "Daypass excursiones", hidden: true },
  { key: "daypass_resorts", id: "rtg_daypass_resorts", title: "Daypass resorts", hidden: true },
  { key: "parques_tematicos_rd", id: "rtg_parques_tematicos_rd", title: "Parques temáticos", hidden: true },
  { key: "actividades_rd", id: "rtg_actividades_rd_detalle", title: "Actividades", hidden: true },
];

export const REAL_TOUR_GROUP_ID_TO_KEY = Object.fromEntries(
  REAL_TOUR_GROUPS.map((g) => [g.id, g.key])
);

export function buildRealToursCatalog() {
  return [
    { key: "scape_park", id: "rt_scape_park", title: "Scape Park", groupKey: "parques_tematicos_rd", imageUrl: "", leadOnly: true },
    { key: "bavaro_adventure_park", id: "rt_bavaro_adventure_park", title: "Bávaro Adventure Park", groupKey: "parques_tematicos_rd", imageUrl: "", leadOnly: true },
    { key: "coco_bongo", id: "rt_coco_bongo", title: "Coco Bongo", groupKey: "actividades_rd", imageUrl: "", leadOnly: true },
    { key: "caribbean_lake_park", id: "rt_caribbean_lake_park", title: "Caribbean Lake Park", groupKey: "parques_tematicos_rd", imageUrl: "", leadOnly: true },
    { key: "domitai_park", id: "rt_domitai_park", title: "Domitai Park", groupKey: "parques_tematicos_rd", imageUrl: "", leadOnly: true },
    { key: "ocean_world", id: "rt_ocean_world", title: "Ocean World", groupKey: "parques_tematicos_rd", imageUrl: "", leadOnly: true },
    { key: "dinner_in_the_sky", id: "rt_dinner_in_the_sky", title: "Dinner in the Sky", groupKey: "actividades_rd", imageUrl: "", leadOnly: true },
    { key: "panaca", id: "rt_panaca", title: "Panaca", groupKey: "parques_tematicos_rd", imageUrl: "", leadOnly: true },
    { key: "hacienda_park", id: "rt_hacienda_park", title: "Hacienda Park", groupKey: "parques_tematicos_rd", imageUrl: "", leadOnly: true },
    { key: "boat_party", id: "rt_boat_party", title: "Boat Party", groupKey: "actividades_rd", imageUrl: "", leadOnly: true },
    { key: "whala_boca_chica_daypass", id: "rt_whala_boca_chica_daypass", title: "WHALA! Boca Chica Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "hodelpa_garden_suite_daypass", id: "rt_hodelpa_garden_suite_daypass", title: "Hodelpa Garden Suite Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "emotions_juan_dolio_daypass", id: "rt_emotions_juan_dolio_daypass", title: "Emotions Juan Dolio Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "coral_costa_caribe_daypass", id: "rt_coral_costa_caribe_daypass", title: "Coral Costa Caribe Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "dreams_dominicus_daypass", id: "rt_dreams_dominicus_daypass", title: "Dreams Dominicus Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "whala_bavaro_daypass", id: "rt_whala_bavaro_daypass", title: "WHALA! Bávaro Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "nickelodeon_daypass", id: "rt_nickelodeon_daypass", title: "Nickelodeon Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "royalton_splash_daypass", id: "rt_royalton_splash_daypass", title: "Royalton Splash Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "royalton_bavaro_daypass", id: "rt_royalton_bavaro_daypass", title: "Royalton Bávaro Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "royalton_chic_daypass", id: "rt_royalton_chic_daypass", title: "Royalton CHIC Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
    { key: "emotions_puerto_plata_daypass", id: "rt_emotions_puerto_plata_daypass", title: "Emotions Puerto Plata Daypass", groupKey: "daypass_resorts", imageUrl: "", leadOnly: true },
  ];
}

export const REAL_TOUR_TEXT_OVERRIDES = {
  scape_park: {
    priceText: "Tarifa sujeta a disponibilidad y cambio sin previo aviso.",
    durationText: "Actividad nacional de día completo o media jornada según modalidad.",
    dateText: "Disponible según calendario operativo y cupo.",
    includesText: "Terramarine gestiona la reserva de Scape Park y valida la modalidad disponible al momento de tu solicitud.",
    paymentText: "Este tipo de actividad puede requerir pago al 100% al momento de reservar.",
    noteText: "Ideal para solicitudes en Punta Cana / Cap Cana. Consulta horarios y traslados disponibles.",
  },
  bavaro_adventure_park: {
    priceText: "Tarifa sujeta a disponibilidad y temporada.",
    durationText: "Actividad nacional con varias experiencias combinables.",
    dateText: "Disponible según operación del parque.",
    includesText: "Terramarine cotiza la modalidad disponible en Bávaro Adventure Park según la experiencia que quieras reservar.",
    paymentText: "Puede requerir pago total al momento de emitir la reserva.",
  },
  coco_bongo: {
    priceText: "Tarifa sujeta a localidad, fecha y disponibilidad.",
    durationText: "Experiencia nocturna.",
    dateText: "Disponible según calendario de funciones.",
    includesText: "Cotización de entradas y coordinación según ciudad o destino disponible.",
    paymentText: "Usualmente requiere pago total al confirmar.",
  },
  caribbean_lake_park: {
    priceText: "Tarifa sujeta a disponibilidad.",
    durationText: "Actividad recreativa de día.",
    dateText: "Disponible según operación del parque.",
    includesText: "Coordinación de entradas y detalles operativos con el equipo de Terramarine.",
  },
  domitai_park: {
    priceText: "Tarifa sujeta a disponibilidad.",
    durationText: "Actividad recreativa nacional.",
    dateText: "Disponible según programación.",
    includesText: "Terramarine valida disponibilidad, modalidad y requisitos para la reserva.",
  },
  ocean_world: {
    priceText: "Tarifa sujeta a disponibilidad y modalidad seleccionada.",
    durationText: "Actividad nacional de día.",
    dateText: "Disponible según calendario operativo.",
    includesText: "Entradas y coordinación para Ocean World según la experiencia elegida.",
  },
  dinner_in_the_sky: {
    priceText: "Tarifa sujeta a fecha, turno y disponibilidad.",
    durationText: "Experiencia gastronómica.",
    dateText: "Disponible por turnos según agenda.",
    includesText: "Reserva y validación de cupos para Dinner in the Sky.",
    paymentText: "Normalmente requiere pago completo al reservar.",
  },
  panaca: {
    priceText: "Tarifa sujeta a disponibilidad.",
    durationText: "Actividad recreativa / parque temático.",
    dateText: "Disponible según calendario.",
    includesText: "Terramarine valida entradas y posibles servicios complementarios.",
  },
  hacienda_park: {
    priceText: "Tarifa sujeta a temporada.",
    durationText: "Actividad nacional.",
    dateText: "Disponible según programación.",
    includesText: "Coordinación de entradas y orientación del plan disponible.",
  },
  boat_party: {
    priceText: "Tarifa sujeta a fecha, destino y disponibilidad.",
    durationText: "Actividad marítima.",
    dateText: "Salidas según agenda.",
    includesText: "Boat party sujeto a cupos y condiciones del operador.",
    paymentText: "Puede requerir pago total al reservar.",
  },
  whala_boca_chica_daypass: {
    priceText: "Lun-Jue RD$3,800 · Vie-Dom/Feriados RD$4,000 · Niños RD$2,000.",
    durationText: "10:30 AM a 6:00 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Almuerzo buffet ilimitado, snack variado, open bar de bebidas nacionales y acceso a facilidades del hotel.",
    noteText: "No incluye toalla ni habitación.",
  },
  hodelpa_garden_suite_daypass: {
    priceText: "Lun-Jue RD$3,600 · Vie-Dom RD$4,300.",
    durationText: "10:00 AM a 5:00 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Almuerzo buffet ilimitado, snack variado, open bar de bebidas nacionales y acceso a facilidades.",
    noteText: "Dentro de Metro Country Club y no cuenta con playa. Early check-in con desayuno tipo buffet + RD$800.",
  },
  emotions_juan_dolio_daypass: {
    priceText: "Lun-Jue RD$4,000 · Vie-Dom RD$4,600.",
    durationText: "10:30 AM a 5:30 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Trago de bienvenida, almuerzo buffet ilimitado, snack variado, open bar y acceso a facilidades del hotel.",
    noteText: "No incluye toalla ni habitación. Descuentos adicionales sujetos a políticas del hotel.",
  },
  coral_costa_caribe_daypass: {
    priceText: "Lun-Jue RD$4,600 · Vie-Dom RD$5,000 · Feriados RD$5,300.",
    durationText: "10:30 AM a 5:30 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Almuerzo buffet ilimitado, snack variado, open bar y acceso a facilidades del hotel.",
    noteText: "No incluye toalla ni habitación. Algunas condiciones aplican para grupos.",
  },
  dreams_dominicus_daypass: {
    priceText: "Desde RD$6,000 adultos · RD$3,000 niños.",
    durationText: "10:00 AM a 5:00 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Almuerzo buffet, snack, open bar, uso de toallas y acceso a facilidades del resort.",
    noteText: "Resort premium en La Romana / Dominicus.",
  },
  whala_bavaro_daypass: {
    priceText: "Desde RD$5,300 adultos · RD$3,000 niños.",
    durationText: "10:30 AM a 6:00 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Almuerzo buffet, snack, open bar y acceso a facilidades del hotel.",
    noteText: "No incluye toalla ni habitación.",
  },
  nickelodeon_daypass: {
    priceText: "Desde RD$9,800 adultos · RD$5,000 niños.",
    durationText: "10:00 AM a 5:00 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Acceso exclusivo al parque acuático, alimentos y bebidas en Aqua Bite y acceso a la app de Karisma.",
    noteText: "No incluye toalla ni habitación.",
  },
  royalton_splash_daypass: {
    priceText: "Desde RD$9,800 adultos · RD$5,000 niños.",
    durationText: "10:00 AM a 5:00 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Almuerzo buffet, snack, open bar y acceso al parque acuático y piscina de olas.",
    noteText: "No incluye toalla ni habitación.",
  },
  royalton_bavaro_daypass: {
    priceText: "Desde RD$9,800 adultos · RD$5,000 niños.",
    durationText: "10:00 AM a 5:00 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Almuerzo buffet, snack, open bar y acceso a facilidades del hotel.",
    noteText: "Incluye acceso al río lento con bar adentro.",
  },
  royalton_chic_daypass: {
    priceText: "Desde RD$9,800 adultos · RD$5,000 niños.",
    durationText: "10:00 AM a 5:00 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Almuerzo buffet, snack, open bar y acceso a facilidades del hotel.",
    noteText: "Opción solo para adultos.",
  },
  emotions_puerto_plata_daypass: {
    priceText: "Lun-Jue RD$4,000 · Vie-Dom RD$4,600.",
    durationText: "10:30 AM a 5:30 PM.",
    dateText: "Disponible según cupo del hotel.",
    includesText: "Trago de bienvenida, almuerzo buffet, snack, open bar y acceso a facilidades del hotel.",
    noteText: "No incluye toalla ni habitación. Tarifa sujeta a disponibilidad y cambio sin previo aviso.",
  },
};
