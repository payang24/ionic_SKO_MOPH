//กำหนด type ของข้อมูล
export interface IUser{
  id: number;
  username: string;
  name: string;
  email: string;
  group_id: number;
  group_name: string;
}

export interface IHttpResult {
  ok: boolean;
  rows?: any;
  groups?: any;
}
export interface IGroup{
  id:number;
  name:string;
}

Service.getService(req.hosPool)
    .then((rows) => {
