export type FlightStatus = 'On Time' | 'Boarding' | 'Delayed' | 'Cancelled';

export interface Flight {
  flight: string;
  airline: string;
  destination: string;
  terminal: number;
  gate: string;
  scheduled: string;
  status: FlightStatus;
}

export const departures: Flight[] = [
  { flight: 'AP 201', airline: 'Air Peace', destination: 'Lagos (LOS)', terminal: 1, gate: 'A04', scheduled: '06:15', status: 'On Time' },
  { flight: 'ET 911', airline: 'Ethiopian Airlines', destination: 'Addis Ababa (ADD)', terminal: 2, gate: 'B12', scheduled: '06:45', status: 'Boarding' },
  { flight: 'EK 784', airline: 'Emirates', destination: 'Dubai (DXB)', terminal: 3, gate: 'C08', scheduled: '07:00', status: 'On Time' },
  { flight: 'BA 076', airline: 'British Airways', destination: 'London (LHR)', terminal: 3, gate: 'C15', scheduled: '07:30', status: 'Delayed' },
  { flight: 'AP 305', airline: 'Air Peace', destination: 'Accra (ACC)', terminal: 1, gate: 'A09', scheduled: '08:00', status: 'On Time' },
  { flight: 'KQ 535', airline: 'Kenya Airways', destination: 'Nairobi (NBO)', terminal: 2, gate: 'B06', scheduled: '08:20', status: 'On Time' },
  { flight: 'MS 842', airline: 'EgyptAir', destination: 'Cairo (CAI)', terminal: 2, gate: 'B18', scheduled: '08:45', status: 'Boarding' },
  { flight: 'SA 063', airline: 'South African Airways', destination: 'Johannesburg (JNB)', terminal: 2, gate: 'B03', scheduled: '09:00', status: 'On Time' },
  { flight: 'TK 624', airline: 'Turkish Airlines', destination: 'Istanbul (IST)', terminal: 3, gate: 'C22', scheduled: '09:30', status: 'Cancelled' },
  { flight: 'AP 112', airline: 'Air Peace', destination: 'Port Harcourt (PHC)', terminal: 1, gate: 'A14', scheduled: '09:50', status: 'On Time' },
  { flight: 'AF 149', airline: 'Air France', destination: 'Paris (CDG)', terminal: 3, gate: 'C28', scheduled: '10:15', status: 'On Time' },
  { flight: 'RW 401', airline: 'RwandAir', destination: 'Kigali (KGL)', terminal: 2, gate: 'B10', scheduled: '10:40', status: 'Delayed' },
  { flight: 'AP 450', airline: 'Air Peace', destination: 'Douala (DLA)', terminal: 1, gate: 'A20', scheduled: '11:00', status: 'On Time' },
  { flight: 'DL 055', airline: 'Delta Air Lines', destination: 'New York (JFK)', terminal: 3, gate: 'C30', scheduled: '11:30', status: 'On Time' },
  { flight: 'W3 706', airline: 'Arik Air', destination: 'Enugu (ENU)', terminal: 1, gate: 'A02', scheduled: '12:00', status: 'Boarding' },
  { flight: 'ET 913', airline: 'Ethiopian Airlines', destination: 'Lomé (LFW)', terminal: 2, gate: 'B15', scheduled: '12:30', status: 'On Time' },
  { flight: 'QR 1408', airline: 'Qatar Airways', destination: 'Doha (DOH)', terminal: 3, gate: 'C05', scheduled: '13:00', status: 'On Time' },
  { flight: 'AP 520', airline: 'Air Peace', destination: 'Kano (KAN)', terminal: 1, gate: 'A11', scheduled: '13:25', status: 'Delayed' },
  { flight: 'LH 569', airline: 'Lufthansa', destination: 'Frankfurt (FRA)', terminal: 3, gate: 'C18', scheduled: '14:00', status: 'On Time' },
  { flight: 'KP 202', airline: 'ASKY Airlines', destination: 'Dakar (DSS)', terminal: 2, gate: 'B08', scheduled: '14:30', status: 'On Time' },
];

export const arrivals: Flight[] = [
  { flight: 'AP 102', airline: 'Air Peace', destination: 'Lagos (LOS)', terminal: 1, gate: 'A01', scheduled: '05:30', status: 'On Time' },
  { flight: 'EK 783', airline: 'Emirates', destination: 'Dubai (DXB)', terminal: 3, gate: 'C03', scheduled: '05:55', status: 'On Time' },
  { flight: 'ET 910', airline: 'Ethiopian Airlines', destination: 'Addis Ababa (ADD)', terminal: 2, gate: 'B09', scheduled: '06:20', status: 'Boarding' },
  { flight: 'BA 075', airline: 'British Airways', destination: 'London (LHR)', terminal: 3, gate: 'C12', scheduled: '06:45', status: 'Delayed' },
  { flight: 'AP 302', airline: 'Air Peace', destination: 'Accra (ACC)', terminal: 1, gate: 'A07', scheduled: '07:10', status: 'On Time' },
  { flight: 'SA 062', airline: 'South African Airways', destination: 'Johannesburg (JNB)', terminal: 2, gate: 'B02', scheduled: '07:35', status: 'On Time' },
  { flight: 'KQ 534', airline: 'Kenya Airways', destination: 'Nairobi (NBO)', terminal: 2, gate: 'B14', scheduled: '08:00', status: 'Boarding' },
  { flight: 'MS 841', airline: 'EgyptAir', destination: 'Cairo (CAI)', terminal: 2, gate: 'B17', scheduled: '08:30', status: 'On Time' },
  { flight: 'TK 623', airline: 'Turkish Airlines', destination: 'Istanbul (IST)', terminal: 3, gate: 'C20', scheduled: '08:50', status: 'On Time' },
  { flight: 'AP 111', airline: 'Air Peace', destination: 'Port Harcourt (PHC)', terminal: 1, gate: 'A16', scheduled: '09:15', status: 'Cancelled' },
  { flight: 'AF 148', airline: 'Air France', destination: 'Paris (CDG)', terminal: 3, gate: 'C25', scheduled: '09:40', status: 'On Time' },
  { flight: 'DL 054', airline: 'Delta Air Lines', destination: 'New York (JFK)', terminal: 3, gate: 'C31', scheduled: '10:00', status: 'On Time' },
  { flight: 'RW 400', airline: 'RwandAir', destination: 'Kigali (KGL)', terminal: 2, gate: 'B11', scheduled: '10:30', status: 'Delayed' },
  { flight: 'AP 449', airline: 'Air Peace', destination: 'Douala (DLA)', terminal: 1, gate: 'A19', scheduled: '11:00', status: 'On Time' },
  { flight: 'W3 705', airline: 'Arik Air', destination: 'Enugu (ENU)', terminal: 1, gate: 'A05', scheduled: '11:30', status: 'On Time' },
  { flight: 'QR 1407', airline: 'Qatar Airways', destination: 'Doha (DOH)', terminal: 3, gate: 'C07', scheduled: '12:00', status: 'Boarding' },
  { flight: 'ET 912', airline: 'Ethiopian Airlines', destination: 'Lomé (LFW)', terminal: 2, gate: 'B16', scheduled: '12:30', status: 'On Time' },
  { flight: 'LH 568', airline: 'Lufthansa', destination: 'Frankfurt (FRA)', terminal: 3, gate: 'C19', scheduled: '13:00', status: 'Delayed' },
  { flight: 'AP 519', airline: 'Air Peace', destination: 'Kano (KAN)', terminal: 1, gate: 'A13', scheduled: '13:30', status: 'On Time' },
  { flight: 'KP 201', airline: 'ASKY Airlines', destination: 'Dakar (DSS)', terminal: 2, gate: 'B04', scheduled: '14:00', status: 'On Time' },
];
