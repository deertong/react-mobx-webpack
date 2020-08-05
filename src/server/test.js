import request from '../utils/request'

export async function getlist() {
    return request.get('/api/posts');
}