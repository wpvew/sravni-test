import axios from 'axios';
import { TPhotoList } from '../store/slice/photoListSlice';
import { TUserList } from '../store/slice/userListSlice';
import { TUserData } from '../store/slice/userSlice';

const URL = 'https://jsonplaceholder.typicode.com';

class ApiServer {
  static async getUserList(): Promise<{ data: TUserList }> {
    return await axios.get(`${URL}/users`);
  }

  static async getUser(userId: string): Promise<{ data: TUserData }> {
    return await axios.get(`${URL}/users/${userId}`);
  }

  static async getAlbumIdList(userId: string): Promise<Array<string>> {
    return axios.get(`${URL}/albums`, { params: { userId } }).then(({ data }: { data: Array<{ id: string }> }) => {
      return data.map(({ id }) => id);
    });
  }

  static async getPhotos(albumIdList: Array<string>): Promise<{ data: TPhotoList }> {
    return await axios.get(`${URL}/photos`, {
      params: {
        albumId: albumIdList,
      },
    });
  }
}

export default ApiServer;
