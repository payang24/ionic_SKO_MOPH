export interface IHttpResult {
  ok: boolean;
  msg?: any;
  rows?: any;
  fullname?: string;
  token?: string;
  error?: string;
}

export interface IService {
  hn?: string;
  vn?: string;
  clinic_name?: string;
  
  sex?: string;
  age?: number;
  hospcode?: string;
  ptname?: string;
  cid?: string;
  hosname?: string;
  weight?: string;
  height?: string;
  waist_cm?: string;
  sbp_1?: string;
  dbp_1?: string;
  bslevel?: string;
  date_serv?: string;


  birth?: string;
  instypename?: string;
  insid?: string;
  main?: string;
  sub?: string;
  house?: string;
  villagename?: string;
  tambonname?: string;
  ampurname?: string;
  changwatname?: string;
  telephone?: string;
  latitude?: string;
  longitude?: string;

}

