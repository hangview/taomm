import request from '../utils/request';

export async function query(params) {
  return request(`/nv/list/${params.page}`);
}
