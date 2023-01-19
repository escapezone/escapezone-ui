import { observable } from 'mobx';

interface IUserStore {}

const userStore = observable<IUserStore>({});

export default userStore;
